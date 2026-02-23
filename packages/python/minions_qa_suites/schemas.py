"""
Minions Qa-suites SDK — Type Schemas
Custom MinionType schemas for Minions Qa-suites.
"""

from minions.types import FieldDefinition, FieldValidation, MinionType

test_suite_type = MinionType(
    id="qa-suites-test-suite",
    name="Test suite",
    slug="test-suite",
    description="A suite of tests targeting a specific clawspace or toolbox.",
    icon="🧪",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="clawspace", type="string", label="clawspace"),
        FieldDefinition(name="toolboxId", type="string", label="toolboxId"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="testCaseIds", type="string", label="testCaseIds"),
        FieldDefinition(name="schedule", type="select", label="schedule"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
        FieldDefinition(name="lastRunAt", type="string", label="lastRunAt"),
        FieldDefinition(name="createdAt", type="string", label="createdAt"),
    ],
)

test_case_type = MinionType(
    id="qa-suites-test-case",
    name="Test case",
    slug="test-case",
    description="A single test with expected behavior and assertion rules.",
    icon="✅",
    schema=[
        FieldDefinition(name="suiteId", type="string", label="suiteId"),
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="category", type="select", label="category"),
        FieldDefinition(name="description", type="string", label="description"),
        FieldDefinition(name="command", type="string", label="command"),
        FieldDefinition(name="expectedOutcome", type="string", label="expectedOutcome"),
        FieldDefinition(name="assertions", type="string", label="assertions"),
        FieldDefinition(name="timeout", type="number", label="timeout"),
        FieldDefinition(name="severity", type="select", label="severity"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
    ],
)

assertion_rule_type = MinionType(
    id="qa-suites-assertion-rule",
    name="Assertion rule",
    slug="assertion-rule",
    description="A reusable assertion that can be applied across test cases.",
    icon="📏",
    schema=[
        FieldDefinition(name="name", type="string", label="name"),
        FieldDefinition(name="type", type="select", label="type"),
        FieldDefinition(name="condition", type="string", label="condition"),
        FieldDefinition(name="expectedValue", type="string", label="expectedValue"),
        FieldDefinition(name="errorMessage", type="string", label="errorMessage"),
        FieldDefinition(name="isActive", type="boolean", label="isActive"),
    ],
)

clawspace_manifest_type = MinionType(
    id="qa-suites-clawspace-manifest",
    name="Clawspace manifest",
    slug="clawspace-manifest",
    description="A registered clawspace with its toolboxes, expected structure, and health baseline.",
    icon="📋",
    schema=[
        FieldDefinition(name="clawspaceName", type="string", label="clawspaceName"),
        FieldDefinition(name="clawspaceId", type="string", label="clawspaceId"),
        FieldDefinition(name="toolboxNames", type="string", label="toolboxNames"),
        FieldDefinition(name="expectedToolboxCount", type="number", label="expectedToolboxCount"),
        FieldDefinition(name="expectedFilePatterns", type="string", label="expectedFilePatterns"),
        FieldDefinition(name="healthBaseline", type="string", label="healthBaseline"),
        FieldDefinition(name="lastValidatedAt", type="string", label="lastValidatedAt"),
    ],
)

custom_types: list[MinionType] = [
    test_suite_type,
    test_case_type,
    assertion_rule_type,
    clawspace_manifest_type,
]

