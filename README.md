<div align="center">

# Rewrite Node SDK

[`@rewritetoday/sdk`](https://www.npmjs.com/package/@rewritetoday/sdk), the official Node.js/TypeScript SDK for the Rewrite API.

It wraps authentication, typed REST calls, and resource helpers on top of [`@rewritetoday/rest`](https://www.npmjs.com/package/@rewritetoday/rest) and [`@rewritetoday/types`](https://www.npmjs.com/package/@rewritetoday/types).

<img src="https://cdn.rewritetoday.com/assets/banners/node-sdk.png" width="100%" alt="Rewrite Banner"/>

## Installation

Use your preferred package manager:

</div>

```bash
bun add @rewritetoday/sdk
# Or
npm install @rewritetoday/sdk
# Or
pnpm add @rewritetoday/sdk
# Or
yarn add @rewritetoday/sdk
```

<div align="center">

## Quick Start

</div>

```ts
import { Rewrite } from '@rewritetoday/sdk';

const rewrite = new Rewrite(process.env.REWRITE_API_KEY!);

const { data } = await rewrite.webhooks.get('123456789012345678');

console.log({ data });
```

<div align="center">

## Create The Client

You can pass the API key directly or use the full options object.

</div>

```ts
import { Rewrite } from '@rewritetoday/sdk';

const advanced = new Rewrite({
	secret: 'rw_xxx',
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

<div align="center">

## Error Handling

Requests run through `@rewritetoday/rest`. HTTP failures can throw `HTTPError`.

</div>

```ts
import { HTTPError } from '@rewritetoday/rest';

try {
	await rewrite.projects.get('invalid_id');
} catch (error) {
	if (error instanceof HTTPError) {
		console.error('HTTP Error:', error.status, error.method, error.url);
	}
}
```

<div align="center">

Made with 🤍 by the Rewrite team. <br/>
SMS the way it should be.

</div>
