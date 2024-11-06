import { test } from 'node:test'
import * as assert from 'assert'
import { calculate } from '../lib/calc-confidence-value.js'

test('calculate the correct confidence value for a verified user', () => {
  const userMetrics = {
    public_metrics: {
      followers_count: 1045,
      tweet_count: 4534,
      listed_count: 23
    },
    verified: true
  };
  //const expectedValue = Math.floor((4534 * 0.001) + (1045 * 0.02) + (23 * 0.05) + 8.00);
  const expectedValue = 12.533999999999999
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
  //const expectedValue = Math.floor((4534 * 0.001) + (1045 * 0.02) + (23 * 0.05));
  const expectedValue = 4.534;
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
  //const expectedValue = Math.floor((4534 * 0.001) + (1045 * 0.02) + (23 * 0.05));
  const expectedValue = 4.534;
  const confidenceValue = calculate(userMetrics);
  assert.strictEqual(confidenceValue, expectedValue);
});

test('calculate the correct confidence value when some metrics are zero', () => {
  const userMetrics = {
    public_metrics: {
      followers_count: 0,
      tweet_count: 0,
      listed_count: 0
    },
    verified: true
  };
  const expectedValue = 8.00;
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
