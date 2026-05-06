import {
	type RESTDeleteContactData,
	type RESTDeleteContactsData,
	type RESTDeleteDetachContactTagsBody,
	type RESTDeleteDetachContactTagsData,
	type RESTGetContactData,
	type RESTGetListContactsData,
	type RESTGetListContactsQueryParams,
	type RESTPatchUpdateContactBody,
	type RESTPatchUpdateContactData,
	type RESTPostAttachContactTagsBody,
	type RESTPostAttachContactTagsData,
	type RESTPostBatchContactsBody,
	type RESTPostBatchContactsData,
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
	public async list(options?: RESTGetListContactsQueryParams) {
		return await this.rest.get<RESTGetListContactsData>(
			Routes.contacts.list(options),
		);
	}

	public async create(options: RESTPostCreateContactBody) {
		return await this.rest.post<RESTPostCreateContactData>(
			Routes.contacts.create(),
			options,
		);
	}

	public async sweep(options: { ids: Snowflake[] }) {
		return await this.deleteWithBody<RESTDeleteContactsData>(
			Routes.contacts.sweep(),
			options,
		);
	}

	public async batch(options: RESTPostBatchContactsBody) {
		return await this.rest.post<RESTPostBatchContactsData>(
			Routes.contacts.batch(),
			options,
		);
	}

	public async get(identifier: string) {
		return await this.rest.get<RESTGetContactData>(
			Routes.contacts.get(identifier),
		);
	}

	public async update(id: Snowflake, options: RESTPatchUpdateContactBody) {
		return await this.rest.patch<RESTPatchUpdateContactData>(
			Routes.contacts.update(id),
			options,
		);
	}

	public async delete(id: Snowflake) {
		return await this.rest.delete<RESTDeleteContactData>(
			Routes.contacts.delete(id),
		);
	}

	public async addTags(id: Snowflake, options: RESTPostAttachContactTagsBody) {
		return await this.rest.post<RESTPostAttachContactTagsData>(
			Routes.contacts.addTags(id),
			options,
		);
	}

	public async removeTags(
		id: Snowflake,
		options: RESTDeleteDetachContactTagsBody,
	) {
		return await this.deleteWithBody<RESTDeleteDetachContactTagsData>(
			Routes.contacts.removeTags(id),
			options,
		);
	}
}
