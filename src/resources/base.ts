import type { REST } from '@rewritejs/rest';

/**
 * Shared base resource with access to the REST client.
 */
export abstract class Base {
	/** REST client used by resource operations. */
	public readonly rest: REST;

	/**
	 * Creates a base resource wrapper.
	 */
	public constructor(rest: REST) {
		this.rest = rest;
	}
}
