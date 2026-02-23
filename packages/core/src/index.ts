/**
 * Minions Qa-suites SDK
 *
 * Test suite definitions, test cases, and assertions for validating clawspace toolboxes
 *
 * @module @minions-qa-suites/sdk
 */

export const VERSION = '0.1.0';

/**
 * Example: Create a client instance for Minions Qa-suites.
 * Replace this with your actual SDK entry point.
 */
export function createClient(options = {}) {
    return {
        version: VERSION,
        ...options,
    };
}

export * from './schemas/index.js';
