<div align="center">

# Rewrite Node SDK

[`rewritejs`](https://www.npmjs.com/package/rewritejs), the official Node.js/TypeScript SDK for the Rewrite API.

It wraps authentication, typed REST calls, and resource helpers on top of [`@rewritejs/rest`](https://www.npmjs.com/package/@rewritejs/rest) and [`@rewritejs/types`](https://www.npmjs.com/package/@rewritejs/types).

## Installation

Use your preferred package manager:

</div>

```bash
bun add rewritejs
# Or
npm install rewritejs
# Or
pnpm add rewritejs
# Or
yarn add rewritejs
```

## Quick Start

```ts
import { Rewrite } from 'rewritejs';

const rewrite = new Rewrite(process.env.REWRITE_API_KEY!);

const project = await rewrite.projects.get('123456789012345678');

console.log({ project });
```

## Create The Client

You can pass the API key directly or use the full options object.

```ts
import { Rewrite } from 'rewritejs';

const advanced = new Rewrite({
	secret: 'rw_live_xxx',
	rest: {
		timeout: 10_000,
		headers: {
			'x-trace-id': 'my-service',
		},
		retry: {
			max: 3,
			delay: (attempt) => attempt * 250,
		},
	},
});
```

### Projects

```ts
const project = await rewrite.projects.create({ name: 'AbacatePay Notifications' });

console.log({ project });
```

### Templates

```ts
const project = '123456789012345678';

const created = await rewrite.templates.create({
	project,
	name: 'welcome_sms',
	content: 'Hey {{name}}, welcome to {{company}}!',
	variables: [
		{ name: 'name', fallback: 'customer' },
		{ name: 'company', fallback: 'Rewrite' },
	],
});

const templates = await rewrite.templates.list(project, { limit: 20 });

console.log({ templates });
```

### Webhooks

```ts
import { WebhookEventType, WebhookStatus } from '@rewritejs/types';

const project = '123456789012345678';

const hook = await rewrite.webhooks.create({
	project,
	name: 'delivery-events',
	endpoint: 'https://example.com/rewrite/webhooks',
	events: [WebhookEventType.SMSDelivered, WebhookEventType.SMSFailed],
});

await rewrite.webhooks.update(hook.data.id, {
	project,
	status: WebhookStatus.Inactive,
});

const hooks = await rewrite.webhooks.list(project, { limit: 10 });

console.log({ hooks });
```

### API Keys

```ts
import { APIKeyScope } from '@rewritejs/types';

const project = '123456789012345678';

const key = await rewrite.apiKeys.create({
	project,
	name: 'backend-prod',
	scopes: [APIKeyScope.ReadProject, APIKeyScope.ReadTemplates],
});

console.log({ key });
```

## Error Handling

Requests run through `@rewritejs/rest`. HTTP failures can throw `HTTPError`.

```ts
import { HTTPError } from '@rewritejs/rest';

try {
	await rewrite.projects.get('invalid_id');
} catch (error) {
	if (error instanceof HTTPError) {
		console.error('HTTP Error:', error.status, error.method, error.url);
	}
}
```

---

Made with 🤍 by the Rewrite team. <br/>
SMS the way it should be.