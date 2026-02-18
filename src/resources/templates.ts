import {
	type RESTGetListTemplatesData,
	type RESTGetListTemplatesQueryParams,
	type RESTGetTemplateData,
	type RESTPostCreateTemplateBody,
	type RESTPostCreateTemplateData,
	Routes,
} from '@rewritejs/types';
import { Base } from './base';

/**
 * Template resource operations.
 */
export class Templates extends Base {
	/**
	 * Creates a template for a project.
	 */
	public async create(
		options: RESTPostCreateTemplateBody & { project: string },
	) {
		const data = await this.rest.post<RESTPostCreateTemplateData>(
			Routes.templates.create(options.project),
			options,
		);

		return data;
	}

	/**
	 * Updates a template by id.
	 */
	public async update(
		id: string,
		options: RESTPostCreateTemplateBody & { project: string },
	) {
		const data = await this.rest.patch<RESTPostCreateTemplateData>(
			Routes.templates.update(options.project, id),
			options,
		);

		return data;
	}

	/**
	 * Deletes a template by id.
	 */
	public async delete(id: string, project: string) {
		await this.rest.delete(Routes.templates.delete(project, id));
	}

	/**
	 * Lists templates for a project.
	 */
	public async list(project: string, query?: RESTGetListTemplatesQueryParams) {
		const data = await this.rest.get<RESTGetListTemplatesData>(
			Routes.templates.list(project, query),
		);

		return data;
	}

	/**
	 * Fetches a template by id.
	 */
	public async get(id: string, project: string) {
		const data = await this.rest.get<RESTGetTemplateData>(
			Routes.templates.get(project, id),
		);

		return data;
	}
}
