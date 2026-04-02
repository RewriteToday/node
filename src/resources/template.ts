import {
	type RESTDeleteTemplateData,
	type RESTGetListTemplatesData,
	type RESTGetListTemplatesQueryParams,
	type RESTGetTemplateData,
	type RESTGetTemplateQueryParams,
	type RESTPatchUpdateTemplateBody,
	type RESTPatchUpdateTemplateData,
	type RESTPostCreateTemplateBody,
	type RESTPostCreateTemplateData,
	Routes,
	type Snowflake,
} from '@rewritetoday/types';
import { BaseManager } from './base';

/**
 * Template resource operations.
 */
export class TemplateManager extends BaseManager {
	/**
	 * Creates a template for a project.
	 */
	public async create(options: RESTPostCreateTemplateBody) {
		return await this.rest.post<RESTPostCreateTemplateData>(
			Routes.templates.create(),
			options,
		);
	}

	/**
	 * Updates a template by id.
	 */
	public async update(id: Snowflake, options: RESTPatchUpdateTemplateBody) {
		return await this.rest.patch<RESTPatchUpdateTemplateData>(
			Routes.templates.update(id),
			options,
		);
	}

	/**
	 * Deletes a template by id.
	 */
	public async delete(id: Snowflake) {
		return await this.rest.delete<RESTDeleteTemplateData>(
			Routes.templates.delete(id),
		);
	}

	/**
	 * Lists templates for a project.
	 */
	public async list(options?: RESTGetListTemplatesQueryParams) {
		return await this.rest.get<RESTGetListTemplatesData>(
			Routes.templates.list(options),
		);
	}

	/**
	 * Fetches a template by id or name.
	 */
	public async get(identifier: string, options?: RESTGetTemplateQueryParams) {
		return await this.rest.get<RESTGetTemplateData>(
			Routes.templates.get(identifier, options),
		);
	}
}
