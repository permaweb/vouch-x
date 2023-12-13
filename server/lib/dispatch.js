import Irys from '@irys/sdk'
import fs from 'fs'

const key = JSON.parse(fs.readFileSync(process.env.WALLET, 'utf-8'))

export async function dispatch({ address }) {
  const url = process.env.IRYS_NODE || 'https://node2.irys.xyz'
  const token = 'arweave'
  const irys = new Irys({ url, token, key })
  const receipt = await irys.upload('VOUCH', {
    tags: [
      { name: 'Content-Type', value: 'text/plain' },
      { name: 'App-Name', value: 'Vouch' },
      { name: 'Vouch-For', value: address },
      { name: 'App-Version', value: '0.1' },
      { name: 'Verification-Method', value: 'Twitter' }
    ]
  })
  return { address, transaction: receipt.id }
}