import type { RESTOptions } from '@rewritejs/rest';

/**
 * Options used to initialize the Rewrite client.
 */
export interface RewriteOptions {
	/** API secret used for authentication. */
	secret: string;

	/** Extra REST client options, excluding auth. */
	rest?: Omit<RESTOptions, 'auth'>;
}
