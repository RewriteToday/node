import { type RESTDeleteAPIKeyData, Routes } from '@rewritetoday/types';
import { Base } from './base';

/**
 * API key resource operations.
 */
export class APIKeys extends Base {
	/**
	 * Deletes an API key by id.
	 */
	public async delete(id: string) {
		return await this.rest.delete<RESTDeleteAPIKeyData>(
			Routes.apiKeys.delete(id),
		);
	}
}
