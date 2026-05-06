import {
	type RESTDeleteTemplateData,
	type RESTDeleteTemplatesData,
	type RESTGetListTemplatesData,
	type RESTGetListTemplatesQueryParams,
	type RESTGetTemplateData,
	type RESTGetTemplateQueryParams,
	type RESTPatchUpdateTemplateBody,
	type RESTPatchUpdateTemplateData,
	type RESTPostCreateTemplateBody,
	type RESTPostCreateTemplateData,
	type RESTPostDuplicateTemplateBody,
	type RESTPostDuplicateTemplateData,
	Routes,
	type Snowflake,
} from '@rewritetoday/types';
import { BaseManager } from './base';

/**
 * Template resource operations.
 */
export class TemplateManager extends BaseManager {
	public async create(options: RESTPostCreateTemplateBody) {
		return await this.rest.post<RESTPostCreateTemplateData>(
			Routes.templates.create(),
			options,
		);
	}

	public async update(id: Snowflake, options: RESTPatchUpdateTemplateBody) {
		return await this.rest.patch<RESTPatchUpdateTemplateData>(
			Routes.templates.update(id),
			options,
		);
	}

	public async delete(id: Snowflake) {
		return await this.rest.delete<RESTDeleteTemplateData>(
			Routes.templates.delete(id),
		);
	}

	public async sweep(options: { ids: Snowflake[] }) {
		return await this.deleteWithBody<RESTDeleteTemplatesData>(
			Routes.templates.sweep(),
			options,
		);
	}

	public async list(options?: RESTGetListTemplatesQueryParams) {
		return await this.rest.get<RESTGetListTemplatesData>(
			Routes.templates.list(options),
		);
	}

	public async get(identifier: string, options?: RESTGetTemplateQueryParams) {
		return await this.rest.get<RESTGetTemplateData>(
			Routes.templates.get(identifier, options),
		);
	}

	public async duplicate(
		id: Snowflake,
		options?: RESTPostDuplicateTemplateBody,
	) {
		return await this.rest.post<RESTPostDuplicateTemplateData>(
			Routes.templates.duplicate(id),
			options,
		);
	}
}
