/**
 * @module @minions-qa-suites/sdk/schemas
 * Custom MinionType schemas for Minions Qa-suites.
 */

import type { MinionType } from 'minions-sdk';

export const testsuiteType: MinionType = {
  id: 'qa-suites-test-suite',
  name: 'Test suite',
  slug: 'test-suite',
  description: 'A suite of tests targeting a specific clawspace or toolbox.',
  icon: '🧪',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'clawspace', type: 'string', label: 'clawspace' },
    { name: 'toolboxId', type: 'string', label: 'toolboxId' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'testCaseIds', type: 'string', label: 'testCaseIds' },
    { name: 'schedule', type: 'select', label: 'schedule' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
    { name: 'lastRunAt', type: 'string', label: 'lastRunAt' },
    { name: 'createdAt', type: 'string', label: 'createdAt' },
  ],
};

export const testcaseType: MinionType = {
  id: 'qa-suites-test-case',
  name: 'Test case',
  slug: 'test-case',
  description: 'A single test with expected behavior and assertion rules.',
  icon: '✅',
  schema: [
    { name: 'suiteId', type: 'string', label: 'suiteId' },
    { name: 'name', type: 'string', label: 'name' },
    { name: 'category', type: 'select', label: 'category' },
    { name: 'description', type: 'string', label: 'description' },
    { name: 'command', type: 'string', label: 'command' },
    { name: 'expectedOutcome', type: 'string', label: 'expectedOutcome' },
    { name: 'assertions', type: 'string', label: 'assertions' },
    { name: 'timeout', type: 'number', label: 'timeout' },
    { name: 'severity', type: 'select', label: 'severity' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
  ],
};

export const assertionruleType: MinionType = {
  id: 'qa-suites-assertion-rule',
  name: 'Assertion rule',
  slug: 'assertion-rule',
  description: 'A reusable assertion that can be applied across test cases.',
  icon: '📏',
  schema: [
    { name: 'name', type: 'string', label: 'name' },
    { name: 'type', type: 'select', label: 'type' },
    { name: 'condition', type: 'string', label: 'condition' },
    { name: 'expectedValue', type: 'string', label: 'expectedValue' },
    { name: 'errorMessage', type: 'string', label: 'errorMessage' },
    { name: 'isActive', type: 'boolean', label: 'isActive' },
  ],
};

export const clawspacemanifestType: MinionType = {
  id: 'qa-suites-clawspace-manifest',
  name: 'Clawspace manifest',
  slug: 'clawspace-manifest',
  description: 'A registered clawspace with its toolboxes, expected structure, and health baseline.',
  icon: '📋',
  schema: [
    { name: 'clawspaceName', type: 'string', label: 'clawspaceName' },
    { name: 'clawspaceId', type: 'string', label: 'clawspaceId' },
    { name: 'toolboxNames', type: 'string', label: 'toolboxNames' },
    { name: 'expectedToolboxCount', type: 'number', label: 'expectedToolboxCount' },
    { name: 'expectedFilePatterns', type: 'string', label: 'expectedFilePatterns' },
    { name: 'healthBaseline', type: 'string', label: 'healthBaseline' },
    { name: 'lastValidatedAt', type: 'string', label: 'lastValidatedAt' },
  ],
};

export const customTypes: MinionType[] = [
  testsuiteType,
  testcaseType,
  assertionruleType,
  clawspacemanifestType,
];

