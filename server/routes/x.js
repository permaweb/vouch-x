import LoginWithX from 'login-with-twitter'
import Twitter from 'twitter-v2'
import { vouch } from '../lib/index.js'

const tw = new LoginWithX({
  consumerKey: process.env.CONSUMER_KEY,
  consumerSecret: process.env.CONSUMER_SECRET,
  callbackUrl: process.env.CALLBACK_URL
})

export function login(req, res) {
  if (req.query.callback) {
    req.session.callback = req.query.callback
  }
  if (req.query.address) {
    req.session.address = req.query.address
  }
  tw.login((err, tokenSecret, url) => {
    if (err) {
      console.error(err)
      res.status(400).send({ error: err.message })
      return
    }
    req.session.tokenSecret = tokenSecret

    res.redirect(url)
  })
}

export function callback(req, res) {
  tw.callback({
    oauth_token: req.query.oauth_token,
    oauth_verifier: req.query.oauth_verifier
  }, req.session.tokenSecret, async (err, user) => {
    if (err) {
      console.error(err)
      res.status(403).send({ error: err.message })
      return
    }

    delete req.session.tokenSecret

    const client = new Twitter({
      consumer_key: process.env.CONSUMER_KEY,
      consumer_secret: process.env.CONSUMER_SECRET,
      access_token_key: user.userToken,
      access_token_secret: user.userTokenSecret
    })
    // get created at and return to client
    // 
    const params = { 'user.fields': 'created_at' }
    client.get('users/me', params).then(async ({ data }) => {
      await vouch(data.created_at, req.session.address)
      res.redirect(req.session.callback + '/#/success')
    }).catch(err => {
      console.error(err)
      res.redirect(req.session.callback + '/#/error?msg=' + err.message)
    })
  })
}
