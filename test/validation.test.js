import test from 'node:test';
import assert from 'node:assert';
import { validatePasswordStrength } from '../src/utils/validation.js';

test('validatePasswordStrength - empty password', () => {
  assert.strictEqual(validatePasswordStrength(''), 'Password is required.');
  assert.strictEqual(validatePasswordStrength('   '), 'Password is required.');
});

test('validatePasswordStrength - length less than 8', () => {
  assert.strictEqual(validatePasswordStrength('Ab1!xyz'), 'Password must be at least 8 characters long.');
});

test('validatePasswordStrength - missing number', () => {
  assert.strictEqual(validatePasswordStrength('Abcdefg!'), 'Password must contain at least one number.');
});

test('validatePasswordStrength - missing special character', () => {
  assert.strictEqual(validatePasswordStrength('Abcdefg1'), 'Password must contain at least one special character.');
});

test('validatePasswordStrength - valid password', () => {
  assert.strictEqual(validatePasswordStrength('Abcdefg1!'), null);
});
