import bcrypt from 'bcrypt';

// Constants
const SALT_ROUNDS = 10;

/**
 * Hashes a password using bcrypt
 * @param password Plain text password to hash
 * @returns Promise resolving to hashed password
 */
export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, SALT_ROUNDS);
}

/**
 * Verifies a password against a hash
 * @param password Plain text password to verify
 * @param hash Stored hash to compare against
 * @returns Promise resolving to boolean indicating if password matches
 */
export async function verifyPassword(password: string, hash: string): Promise<boolean> {
  return await bcrypt.compare(password, hash);
}