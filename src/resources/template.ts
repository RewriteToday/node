import {
	type RESTDeleteTemplateData,
	type RESTGetListTemplatesData,
	type RESTGetListTemplatesQueryParams,
	type RESTGetTemplateData,
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
	public async update(id: Snowflake, options: RESTPostCreateTemplateBody) {
		return await this.rest.patch<RESTPostCreateTemplateData>(
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
	 * Fetches a template by id.
	 */
	public async get(id: Snowflake) {
		return await this.rest.get<RESTGetTemplateData>(Routes.templates.get(id));
	}
}
