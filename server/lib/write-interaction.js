import { WarpFactory } from 'warp-contracts'
import fs from 'fs'

const warp = WarpFactory.forMainnet()
const key = JSON.parse(fs.readFileSync(process.env.WALLET, 'utf-8'))

export async function writeInteraction({ address, transaction }) {
  const contract = warp.contract(process.env.VOUCH_CONTRACT)
  return await contract
    .connect(key)
    .setEvaluationOptions({
      remoteStateSyncEnabled: true,
      remoteStateSyncSource: 'https://dre-u.warp.cc/contract'
    })
    .writeInteraction({
      function: 'addVouchedUser',
      address,
      transaction

    })
    .then(() => contract.readState())
    .then(({ cachedValue }) => cachedValue.state.vouched[address] ? true : false)

}