import { createDataItemSigner, message, result } from '@permaweb/aoconnect'

export async function sendMessage({ address }) {
  const processId = process.env.VOUCH_DAO_PROCESS_ID || 'Aqc4_a5ZKAWLWQHlNoYB54DCaFIOHl9S-pI3HgdOLAs'
  const messageId = await message({
    process: processId,
    tags: [
      { name: 'Action', value: 'Vouch' },
      { name: 'Wallet', value: address }
    ],
    signer: createDataItemSigner(key)
  })
  await result({
    process: processId,
    message: messageId
  })
  return { address }
}
