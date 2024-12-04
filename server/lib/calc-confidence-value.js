const VERIFIED_WEIGHT = 1;

const CUTOFF_PARAMS = {
  'followers_count': 100,
  'tweet_count': 10,
  // 'listed_count': 0,
  // 'like_count': 100,
}

const POINTS_PARAMS = {
  'followers_count': {
    scale: 2.5,
    offset: 100,
    targetValue: 10000,
  },
  'listed_count': {
    scale: 0.5,
    offset: 0,
    targetValue: 2,
  },
  'tweet_count': {
    scale: 0.5,
    offset: 0,
    targetValue: 1000,
  },
  'like_count': {
    scale: 0.5,
    offset: 0,
    targetValue: 100,
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
    confidenceValue += VERIFIED_WEIGHT;
  } else {
    // For unverified users:
    // If any of the cutoff params are below the threshold, return confidenceValue of zero
    for (const [key, cutoff] of Object.entries(CUTOFF_PARAMS)) {
      const metricValue = public_metrics[key] ?? 0;
      if (metricValue < cutoff) {
        return confidenceValue;
      }
    }
  }

  // Add points based on the user's public metrics
  for (const [key, params] of Object.entries(POINTS_PARAMS)) {
    const { scale, offset, targetValue } = params;
    const metricValue = public_metrics[key] ?? 0;

    // Skip if the metric is below the offset
    const aboveOffset = Math.max(0, metricValue - offset);
    if (aboveOffset === 0) continue;
    
    // Calculate points based on the scale
    const logAboveOffset = Math.log10(Math.min(aboveOffset, targetValue));
    const logTargetValue = Math.log10(targetValue);
    const points = scale * (logAboveOffset / logTargetValue);
    confidenceValue += points;
  }

  return Math.round(confidenceValue * 100) / 100;
}
