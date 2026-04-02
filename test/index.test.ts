import { describe, expect, test } from 'bun:test';
import { createHmac } from 'node:crypto';
import { Rewrite } from '../src/client';
import { WebhookManager } from '../src/resources/webhook';

const webhooks = new WebhookManager({} as never);

describe('Rewrite', () => {
	test('exposes contacts and segments managers', () => {
		const rewrite = new Rewrite('rw_test');

		expect(rewrite.contacts).toBeDefined();
		expect(rewrite.segments).toBeDefined();
	});
});

describe('WebhookManager.verify', () => {
	test('returns true for valid svix headers', () => {
		const payload = JSON.stringify({ type: 'message.sent' });

		expect(
			webhooks.verify({
				payload,
				secret: 'whsec_c2VjcmV0',
				headers: {
					'svix-id': 'msg_test',
					'svix-timestamp': '1710000000',
					'svix-signature': `v1,${createHmac(
						'sha256',
						Buffer.from('c2VjcmV0', 'base64'),
					)
						.update(`msg_test.1710000000.${payload}`)
						.digest('base64')}`,
				},
			}),
		).toBe(true);
	});

	test('returns false for invalid svix headers', () => {
		expect(
			webhooks.verify({
				payload: '{"type":"message.sent"}',
				secret: 'whsec_c2VjcmV0',
				headers: {
					'svix-id': 'msg_test',
					'svix-timestamp': '1710000000',
					'svix-signature': 'v1,invalid',
				},
			}),
		).toBe(false);
	});
});
