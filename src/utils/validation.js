/**
 * Validates a password against modern security policies (NIST SP 800-63B / OWASP ASVS / BRD-AUTH-001).
 * 
 * Requirements:
 * - Minimum 8 characters
 * - At least one numeric digit (0-9)
 * - At least one special character ([!@#$%^&*(),.?":{}|<>])
 * - Non-empty
 *
 * @param {string} password - The password to validate.
 * @returns {string|null} - Returns an error message string if invalid, or null if valid.
 */
export function validatePasswordStrength(password) {
  if (!password || password.trim() === '') {
    return 'Password is required.';
  }
  if (password.length < 8) {
    return 'Password must be at least 8 characters long.';
  }
  if (!/[0-9]/.test(password)) {
    return 'Password must contain at least one number.';
  }
  if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
    return 'Password must contain at least one special character.';
  }
  return null;
}
