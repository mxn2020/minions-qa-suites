# minions-qa-suites

**Test suite definitions, test cases, and assertions for validating clawspace toolboxes**

Built on the [Minions SDK](https://github.com/mxn2020/minions).

---

## Quick Start

```bash
# TypeScript / Node.js
npm install @minions-qa-suites/sdk minions-sdk

# Python
pip install minions-qa-suites

# CLI (global)
npm install -g @minions-qa-suites/cli
```

---

## CLI

```bash
# Show help
qa-suites --help
```

---

## Python SDK

```python
from minions_qa_suites import create_client

client = create_client()
```

---

## Project Structure

```
minions-qa-suites/
  packages/
    core/           # TypeScript core library (@minions-qa-suites/sdk on npm)
    python/         # Python SDK (minions-qa-suites on PyPI)
    cli/            # CLI tool (@minions-qa-suites/cli on npm)
  apps/
    web/            # Playground web app
    docs/           # Astro Starlight documentation site
    blog/           # Blog
  examples/
    typescript/     # TypeScript usage examples
    python/         # Python usage examples
```

---

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm run build

# Run tests
pnpm run test

# Type check
pnpm run lint
```

---

## Documentation

- Docs: [qa-suites.minions.help](https://qa-suites.minions.help)
- Blog: [qa-suites.minions.blog](https://qa-suites.minions.blog)
- App: [qa-suites.minions.wtf](https://qa-suites.minions.wtf)

---

## License

[MIT](LICENSE)
