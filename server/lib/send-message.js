import { createDataItemSigner, message, result } from '@permaweb/aoconnect'
import fs from 'fs'

const key = JSON.parse(fs.readFileSync(process.env.WALLET, 'utf-8'))


export async function sendMessage({ address, transaction }) {
  const processId = process.env.VOUCH_DAO_PROCESS_ID || '8qh1lX8dL-PjHZilwCy4kgwR7644IC6Z_gPfia-ij4E'
  const messageId = await message({
    process: processId,
    tags: [
      { name: 'Action', value: 'Vouch' },
      { name: 'Wallet', value: address }
    ],
    signer: createDataItemSigner(key)
  })
  const res = await result({
    process: processId,
    message: messageId
  })
  if (res.Error) {
    throw new Error(`Error with Vouch DAO: ${res.Error}`)
  }
  return { address, transaction }
}
