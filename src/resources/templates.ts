import {
	type RESTGetListTemplatesData,
	type RESTGetListTemplatesQueryParams,
	type RESTGetTemplateData,
	type RESTPostCreateTemplateBody,
	type RESTPostCreateTemplateData,
	Routes,
} from '@rewritejs/types';
import { Base } from './base';

export class Templates extends Base {
	public async create(
		options: RESTPostCreateTemplateBody & { project: string },
	) {
		const data = await this.rest.post<RESTPostCreateTemplateData>(
			Routes.templates.create(options.project),
			options,
		);

		return data;
	}

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

	public async delete(id: string, project: string) {
		await this.rest.delete(Routes.templates.delete(project, id));
	}

	public async list(project: string, query?: RESTGetListTemplatesQueryParams) {
		const data = await this.rest.get<RESTGetListTemplatesData>(
			Routes.templates.list(project, query),
		);

		return data;
	}

	public async get(id: string, project: string) {
		const data = await this.rest.get<RESTGetTemplateData>(
			Routes.templates.get(project, id),
		);

		return data;
	}
}
