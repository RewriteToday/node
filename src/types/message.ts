import type { RESTPostSendMessageBody } from '@rewritetoday/types';

// We need to use `type` instead of `interface` here because `RESTPostSendMessageBody` is a union-intersected type

/** Options to send when creating a new message. */
export type SendMessageOptions = RESTPostSendMessageBody & {
	/** Idempotency key to use in "Idempotency-Key" header. */
	idempotencyKey?: string;
};

export interface SendBatchMessageOptions {
	/** Idempotency key to use in "Idempotency-Key" header. */
	idempotencyKey?: string;
}
