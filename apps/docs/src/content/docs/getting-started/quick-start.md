---
title: Quick Start
description: Get up and running with Minions Qa-suites in minutes
---

## TypeScript

```typescript
import { createClient } from '@minions-qa-suites/sdk';

const client = createClient();
console.log('Version:', client.version);
```

## Python

```python
from minions_qa_suites import create_client

client = create_client()
print(f"Version: {client['version']}")
```

## CLI

```bash
qa-suites info
```
