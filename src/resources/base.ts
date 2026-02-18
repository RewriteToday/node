import type { REST } from '@rewritejs/rest';

export abstract class Base {
	public constructor(public readonly rest: REST) {}
}
