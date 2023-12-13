import { sub, isBefore } from 'date-fns'
//import isBefore from 'date-fns/isBefore'
import { of, fromPromise } from 'hyper-async'
import { dispatch } from '../lib/dispatch.js'
import { writeInteraction } from '../lib/write-interaction.js'

// can check session, if valid, then validate a signed message
// and then vouch the user

export function vouch(req, res) {
  console.log(req.session.user)
  console.log(req.session.createdAt)
  // twitter account was created 6 months before today
  const sixMonthsAgo = sub(new Date(), { months: 6 })

  if (isBefore(req.session.createdAt, sixMonthsAgo)) {
    return res.send({ ok: true })
    // return of({ address: req.body.address })
    //   .chain(fromPromise(dispatch))
    //   .chain(fromPromise(writeInteraction))
    //   .map(_ => {
    //     // clear Session
    //     delete req.session.user
    //     delete req.session.createdAt
    //   })
    //   .fork(
    //     err => res.status(400).send({ error: err.message }),
    //     _ => res.send({ ok: true })
    //   )

  } else {
    res.status(400).send({ error: 'could not vouch, because twitter/x is not old enough' })
  }

}