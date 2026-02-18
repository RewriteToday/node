import {
	type RESTGetProjectData,
	type RESTPatchUpdateProjectBody,
	type RESTPatchUpdateProjectData,
	type RESTPostCreateProjectBody,
	type RESTPostCreateProjectData,
	Routes,
} from '@rewritejs/types';
import { Base } from './base';

/**
 * Project resource operations.
 */
export class Projects extends Base {
	/**
	 * Creates a new project.
	 */
	public async create(options: RESTPostCreateProjectBody) {
		const data = await this.rest.post<RESTPostCreateProjectData>(
			Routes.projects.create(),
			options,
		);

		return data;
	}

	/**
	 * Updates a project by id.
	 */
	public async update(id: string, options: RESTPatchUpdateProjectBody) {
		const data = await this.rest.patch<RESTPatchUpdateProjectData>(
			Routes.projects.update(id),
			options,
		);

		return data;
	}

	/**
	 * Deletes a project by id.
	 */
	public async delete(id: string) {
		await this.rest.delete(Routes.projects.delete(id));
	}

	/**
	 * Fetches a project by id.
	 */
	public async get(id: string) {
		const data = await this.rest.get<RESTGetProjectData>(
			Routes.projects.get(id),
		);

		return data;
	}
}
