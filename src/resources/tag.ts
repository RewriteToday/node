import {
	type RESTDeleteTagData,
	type RESTGetListTagsData,
	type RESTGetTagData,
	type RESTPatchUpdateTagBody,
	type RESTPatchUpdateTagData,
	type RESTPostCreateTagBody,
	type RESTPostCreateTagData,
	Routes,
	type Snowflake,
} from '@rewritetoday/types';
import { BaseManager } from './base';

/**
 * Tag resource operations.
 */
export class TagManager extends BaseManager {
	public async list() {
		return await this.rest.get<RESTGetListTagsData>(Routes.tags.list());
	}

	public async create(options: RESTPostCreateTagBody) {
		return await this.rest.post<RESTPostCreateTagData>(
			Routes.tags.create(),
			options,
		);
	}

	public async get(id: Snowflake) {
		return await this.rest.get<RESTGetTagData>(Routes.tags.get(id));
	}

	public async update(id: Snowflake, options: RESTPatchUpdateTagBody) {
		return await this.rest.patch<RESTPatchUpdateTagData>(
			Routes.tags.update(id),
			options,
		);
	}

	public async delete(id: Snowflake) {
		return await this.rest.delete<RESTDeleteTagData>(Routes.tags.delete(id));
	}
}
