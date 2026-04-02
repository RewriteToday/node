import {
	type RESTDeleteContactData,
	type RESTGetContactData,
	type RESTGetListContactsData,
	type RESTGetListContactsQueryParams,
	type RESTPatchUpdateContactBody,
	type RESTPatchUpdateContactData,
	type RESTPostCreateContactBody,
	type RESTPostCreateContactData,
	Routes,
	type Snowflake,
} from '@rewritetoday/types';
import { BaseManager } from './base';

/**
 * Contact resource operations.
 */
export class ContactManager extends BaseManager {
	/**
	 * Lists contacts for a project.
	 */
	public async list(options?: RESTGetListContactsQueryParams) {
		return await this.rest.get<RESTGetListContactsData>(
			Routes.contacts.list(options),
		);
	}

	/**
	 * Creates a contact for a project.
	 */
	public async create(options: RESTPostCreateContactBody) {
		return await this.rest.post<RESTPostCreateContactData>(
			Routes.contacts.create(),
			options,
		);
	}

	/**
	 * Fetches a contact by id or phone number.
	 */
	public async get(identifier: string) {
		return await this.rest.get<RESTGetContactData>(
			Routes.contacts.get(identifier),
		);
	}

	/**
	 * Updates a contact by id.
	 */
	public async update(id: Snowflake, options: RESTPatchUpdateContactBody) {
		return await this.rest.patch<RESTPatchUpdateContactData>(
			Routes.contacts.update(id),
			options,
		);
	}

	/**
	 * Deletes a contact by id.
	 */
	public async delete(id: Snowflake) {
		return await this.rest.delete<RESTDeleteContactData>(
			Routes.contacts.delete(id),
		);
	}
}
