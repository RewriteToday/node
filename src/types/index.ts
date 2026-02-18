import type { RESTOptions } from '@rewritejs/rest';

export interface RewriteOptions {
	secret: string;
	rest?: Omit<RESTOptions, 'auth'>;
}
