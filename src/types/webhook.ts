/** Options used the verify if a webhook came from Rewrite or not. */
export interface VerifyWebhookOptions {
	/** Signing secret of the webhook. @default process.env.REWRITE_WEBHOOK_SECRET */
	secret?: string;
	
	/** Raw payload in string of the request. */
	payload: string;
	
	/** Headers of the request. */
	headers: Record<string, string>;
}
