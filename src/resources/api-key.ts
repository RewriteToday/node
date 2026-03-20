import { type RESTDeleteAPIKeyData, Routes } from '@rewritetoday/types';
import { BaseManager } from './base';

/**
 * API key resource operations.
 */
export class APIKeyManager extends BaseManager {
	/**
	 * Deletes an API key by id.
	 */
	public async delete(id: string) {
		return await this.rest.delete<RESTDeleteAPIKeyData>(
			Routes.apiKeys.delete(id),
		);
	}
}
