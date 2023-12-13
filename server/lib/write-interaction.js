import { WarpFactory } from 'warp-contracts'

const warp = WarpFactory.forMainnet()

export async function writeInteraction({ address, transaction }) {
  const contract = warp.contract(process.env.VOUCH_CONTRACT)
  return await contract
    .setEvaluationOptions({

    })
    .writeInteraction({
      function: 'addVouchedUser',
      address,
      transaction

    })
    .then(() => contract.readState())
    .then(({ cachedValue }) => cachedValue.state.vouched[address] ? true : false)

}