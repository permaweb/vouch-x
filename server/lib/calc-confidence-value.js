const VERIFIED_WEIGHT = 1;

const CUTOFF_PARAMS = {
  'followers_count': 50,
  'tweet_count': 20,
  // 'listed_count': 0,
  // 'like_count': 100,
}

const POINTS_PARAMS = {
  'followers_count': {
    scale: 2.5,
    offset: 100,
    doublingValue: 10000,
  },
  'listed_count': {
    scale: 0.5,
    offset: 1,
    doublingValue: 10,
  },
  'tweet_count': {
    scale: 0.5,
    offset: 100,
    doublingValue: 1000,
  },
  'like_count': {
    scale: 0.5,
    offset: 100,
    doublingValue: 1000,
  },
}

export function calculate(user) {
  const public_metrics = user.public_metrics;
  // const { followers_count, tweet_count, listed_count, like_count } = user.public_metrics;

  let confidenceValue = 0;

  const verified = user.verified;
  if (verified) {
    // For verified users:
    // Add points
    console.log('verified user', verified);
    confidenceValue += VERIFIED_WEIGHT;
  } else {
    // For unverified users:
    // If any of the cutoff params are below the threshold, return confidenceValue of zero
    console.log('unverified user', verified);
    for (const [key, cutoff] of Object.entries(CUTOFF_PARAMS)) {
      const metricValue = public_metrics[key] ?? 0;
      if (metricValue < cutoff) {
        return confidenceValue;
      }
    }
  }

  // Add points based on the user's public metrics
  for (const [key, params] of Object.entries(POINTS_PARAMS)) {
    const { scale, offset, doublingValue } = params;
    const metricValue = public_metrics[key] ?? 0;

    // Skip if the metric is 
    const aboveOffset = Math.max(0, metricValue - offset);
    if (aboveOffset === 0) continue;
    
    // Points based on logarithmic scale
    const points = scale * Math.log2(aboveOffset) / Math.log2(doublingValue);
    confidenceValue += points;
  }

  return Math.round(confidenceValue * 100) / 100;
}
