"""
Minions Qa-suites Python SDK

Test suite definitions, test cases, and assertions for validating clawspace toolboxes
"""

__version__ = "0.1.0"


def create_client(**kwargs):
    """Create a client for Minions Qa-suites.

    Args:
        **kwargs: Configuration options.

    Returns:
        dict: Client configuration.
    """
    return {
        "version": __version__,
        **kwargs,
    }

from .schemas import *
