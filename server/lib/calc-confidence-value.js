// constants
const TWEET_WEIGHT = 0.001
const FOLLOWER_WEIGHT = 0.01
const VERIFIED_WEIGHT = 8
const LISTED_WEIGHT = 0.05
const LIKE_WEIGHT = 0.01

export function calculate(user) {
  // calculateConfidenceValue.js
  const { followers_count, tweet_count, listed_count, like_count } = user.public_metrics;
  const verified = user.verified;

  const confidenceValue = Math.floor((tweet_count * TWEET_WEIGHT) +
    (like_count * LIKE_WEIGHT) +
    (listed_count * LISTED_WEIGHT) +
    (verified ? VERIFIED_WEIGHT : 0));

  return confidenceValue;
}
