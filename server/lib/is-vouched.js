import Query from '@irys/query'

export async function isVouched({ address }) {
  const query = new Query()
  const results = await query
    .search("arweave:transactions")
    .from([address])
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