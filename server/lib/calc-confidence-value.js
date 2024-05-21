// constants
const TWEET_WEIGHT = 0.001
const FOLLOWER_WEIGHT = 0.02
const VERIFIED_WEIGHT = 8
const LISTED_WEIGHT = 0.05

export function calculate(user) {
  // calculateConfidenceValue.js
  const { followers_count, tweet_count, listed_count } = user.public_metrics;
  const verified = user.verified;

  const confidenceValue = Math.floor((tweet_count * TWEET_WEIGHT) +
    (followers_count * FOLLOWER_WEIGHT) +
    (listed_count * LISTED_WEIGHT) +
    (verified ? VERIFIED_WEIGHT : 0));

  return confidenceValue;
}
