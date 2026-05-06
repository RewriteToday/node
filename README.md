<div align="center">

# Rewrite Node SDK

[`rewritetoday`](https://docs.rewritetoday.com/en/sdks/node), the official Node.js/TypeScript SDK for the Rewrite API.

It wraps authentication, typed REST calls, and resource helpers on top of [`@rewritetoday/rest`](https://www.npmjs.com/package/@rewritetoday/rest) and [`@rewritetoday/types`](https://www.npmjs.com/package/@rewritetoday/types).

<img src="https://cdn.rewritetoday.com/assets/banners/node-sdk.png" width="100%" alt="Rewrite Banner"/>

## Installation

Use your preferred package manager:

</div>

```bash
bun add rewritetoday
# Or
npm install rewritetoday
# Or
pnpm add rewritetoday
```

<div align="center">

## Setup

First, you need to create an API key in the [Rewrite Dashboard](https://dash.rewritetoday.com/api-keys) and use it in the constructor.

</div>

```ts
import { Rewrite } from 'rewritetoday';

const rewrite = new Rewrite(process.env.REWRITE_API_KEY);
```

<div align="center">

## Create the client

You can pass the API key directly or use the full options object.

</div>

```ts
import { Rewrite } from 'rewritetoday';

const rewrite = new Rewrite({
	secret: process.env.REWRITE_API_KEY,
	rest: {
		timeout: 10_000,
		headers: {
			'User-Agent': 'GetMonitor API (1.0.0)',
		},
	},
});
```

<div align="center">

## Send your first message

</div>

```ts
const { data, error } = await rewrite.messages.send({
	to: '+551234567890',
	content: 'Hey, Rewrite is here!',
});
```

<div align="center">

You can view in our [documentation](https://docs.rewritetoday.com/api-reference/messages/send-a-message) everything in you can use when sending a message.

## Error Handling

Requests run through `@rewritetoday/rest`. HTTP failures can throw `HTTPError`.

</div>

```ts
import { HTTPError } from '@rewritetoday/rest';

try {
	await rewrite.messages.get('invalid_id');
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
