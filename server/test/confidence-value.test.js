import { test } from 'node:test'
import * as assert from 'assert'
import { calculate } from '../lib/calc-confidence-value.js'

test('calculate the correct confidence value for a verified user', () => {
  const userMetrics = {
    public_metrics: {
      followers_count: 1045,
      tweet_count: 4534,
      listed_count: 23,
    },
    verified: true
  };
  const expectedValue = 4.14;
  const confidenceValue = calculate(userMetrics);
  assert.strictEqual(confidenceValue, expectedValue);
});

test('calculate the correct confidence value for a non-verified user', () => {
  const userMetrics = {
    public_metrics: {
      followers_count: 1045,
      tweet_count: 4534,
      listed_count: 23
    },
    verified: false
  };
  const expectedValue = 3.14;
  const confidenceValue = calculate(userMetrics);
  assert.strictEqual(confidenceValue, expectedValue);
});

test('calculate the correct confidence value when verified property is missing', () => {
  const userMetrics = {
    public_metrics: {
      followers_count: 1045,
      tweet_count: 4534,
      listed_count: 23
    }
  };
  const expectedValue = 3.14;
  const confidenceValue = calculate(userMetrics);
  assert.strictEqual(confidenceValue, expectedValue);
});

test('calculate the correct confidence value when all metrics are zero, but verified', () => {
  const userMetrics = {
    public_metrics: {
      followers_count: 0,
      tweet_count: 0,
      listed_count: 0
    },
    verified: true
  };
  const expectedValue = 1;
  const confidenceValue = calculate(userMetrics);
  assert.strictEqual(confidenceValue, expectedValue);
});

test('calculate the correct confidence value when all metrics are zero and user is not verified', () => {
  const userMetrics = {
    public_metrics: {
      followers_count: 0,
      tweet_count: 0,
      listed_count: 0
    },
    verified: false
  };
  const expectedValue = 0;
  const confidenceValue = calculate(userMetrics);
  assert.strictEqual(confidenceValue, expectedValue);
});
