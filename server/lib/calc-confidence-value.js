const VERIFIED_WEIGHT = 1;

const CUTOFF_PARAMS = {
  'followers_count': 10,
  'tweet_count': 10,
  // 'listed_count': 0,
  // 'like_count': 100,
}

const POINTS_PARAMS = {
  'followers_count': {
    scale: 2.5,
    inflectionValue: 1000,
    eccentricity: 1,
  },
  'listed_count': {
    scale: 0.5,
    inflectionValue: 2,
    eccentricity: 1,
  },
  'tweet_count': {
    scale: 0.5,
    inflectionValue: 1000,
    eccentricity: 1,
  },
  'like_count': {
    scale: 0.5,
    inflectionValue: 100,
    eccentricity: 1,
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
    const { scale, offset, inflectionValue, eccentricity } = params;
    const metricValue = public_metrics[key] ?? 0;

    // Use log scaling for the metric value (and inflection value)
    const logValue = Math.log10(metricValue);
    const logInflectionValue = Math.log10(inflectionValue);

    // Logistic curve, e.g. https://www.wolframalpha.com/input?i=plot+y+%3D+2.5+%2F+%281+%2B+exp%28-1+*+%28log10%28x%29-log10%281000%29%29%29%29%2C+0+%3C+x+%3C+2000
    const points = scale / (1 + Math.exp(-eccentricity * (logValue - logInflectionValue)));
    confidenceValue += points;
  }

  return Math.round(confidenceValue * 100) / 100;
}
