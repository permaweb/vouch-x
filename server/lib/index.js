import { sub, isBefore, parseISO } from 'date-fns'
//import isBefore from 'date-fns/isBefore'
import { of, fromPromise, Rejected, Resolved } from 'hyper-async'
import { dispatch } from '../lib/dispatch.js'
import { writeInteraction } from '../lib/write-interaction.js'
import { isVouched } from '../lib/is-vouched.js'
import { sendMessage } from './send-message.js'

export function vouch(startdate, address, username, value) {
  const sixMonthsAgo = sub(new Date(), { months: 6 })
  if (isBefore(parseISO(startdate), sixMonthsAgo)) {
    return of({ address, username, value })
      // Allow re-vouching, the main contract will now update the value
      //.chain(ctx => fromPromise(isVouched)(ctx)
      //  .chain(r => r.ok ? Rejected({ message: 'already vouched' }) : Resolved(ctx))
      //)
      .chain(fromPromise(dispatch))
      .chain(fromPromise(sendMessage))
      //.chain(fromPromise(writeInteraction))
      .toPromise()
  } else {
    return Promise.reject({ message: 'not qualified.' })
  }
}