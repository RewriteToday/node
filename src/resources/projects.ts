import {
	type RESTGetProjectData,
	type RESTPatchUpdateProjectBody,
	type RESTPatchUpdateProjectData,
	type RESTPostCreateProjectBody,
	type RESTPostCreateProjectData,
	Routes,
} from '@rewritejs/types';
import { Base } from './base';

export class Projects extends Base {
	public async create(options: RESTPostCreateProjectBody) {
		const data = await this.rest.post<RESTPostCreateProjectData>(
			Routes.projects.create(),
			options,
		);

		return data;
	}

	public async update(id: string, options: RESTPatchUpdateProjectBody) {
		const data = await this.rest.patch<RESTPatchUpdateProjectData>(
			Routes.projects.update(id),
			options,
		);

		return data;
	}

	public async delete(id: string) {
		await this.rest.delete(Routes.projects.delete(id));
	}

	public async get(id: string) {
		const data = await this.rest.get<RESTGetProjectData>(
			Routes.projects.get(id),
		);

		return data;
	}
}
