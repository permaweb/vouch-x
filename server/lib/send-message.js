import { createDataItemSigner, message, result } from '@permaweb/aoconnect'
import fs from 'fs'

const key = JSON.parse(fs.readFileSync(process.env.WALLET, 'utf-8'))


export async function sendMessage({ address, transaction, username, value }) {
  console.log('SEND TO AOS: ')
  const processId = process.env.VOUCH_DAO_PROCESS_ID || 'L1CWfW_LAWA7UY_zf9CFwbnt3wLuVMEueylFi_1YACo'
  const messageId = await message({
    process: processId,
    tags: [
      { name: 'Data-Protocol', value: 'Vouch' },
      { name: 'Vouch-For', value: address },
      { name: 'Method', value: 'X' },
      { name: 'Confidence-Value', value: String(value) + '-USD' },
      { name: 'Identifier', value: username }
    ],
    signer: createDataItemSigner(key)
  })
  const res = await result({
    process: processId,
    message: messageId
  })
  console.log('messageId', messageId)
  if (res.Error) {
    throw new Error(`Error with Vouch DAO: ${res.Error}`)
  }
  return { address, transaction, value }
}
