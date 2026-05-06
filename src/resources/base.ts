import type { REST } from '@rewritetoday/rest';

/**
 * Shared base resource with access to the REST client.
 */
export abstract class BaseManager {
	/** REST client used by resource operations. */
	public readonly rest: REST;

	/**
	 * Creates a base resource wrapper.
	 */
	public constructor(rest: REST) {
		this.rest = rest;
	}

	/**
	 * Uses the underlying REST client request path to support DELETE endpoints with JSON bodies.
	 */
	protected async deleteWithBody<R>(route: string, data?: unknown) {
		return await (
			this.rest as unknown as {
				request<T>(
					targetRoute: string,
					options: { data?: unknown; method: 'DELETE' },
				): Promise<T>;
			}
		).request<R>(route, {
			method: 'DELETE',
			data,
		});
	}
}
