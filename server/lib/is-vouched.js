import Query from '@irys/query'

export async function isVouched({ address }) {
  const query = new Query()
  const results = await query
    .search("arweave:transactions")
    .from(["Ax_uXyLQBPZSQ15movzv9-O1mDo30khslqN64qD27Z8"])
    .tags([
      { name: 'Vouch-For', values: [address] },
      { name: 'Verification-Method', values: ["Twitter"] }
    ])
  if (results.length > 0) {
    return { ok: true }
  } else {
    return { ok: false }
  }

}