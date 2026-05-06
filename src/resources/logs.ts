import {
	type RESTGetListLogsData,
	type RESTGetListLogsQueryParams,
	type RESTGetLogData,
	Routes,
	type Snowflake,
} from '@rewritetoday/types';
import { BaseManager } from './base';

/**
 * Request log resource operations.
 */
export class LogManager extends BaseManager {
	public async list(options?: RESTGetListLogsQueryParams) {
		return await this.rest.get<RESTGetListLogsData>(Routes.logs.list(options));
	}

	public async get(id: Snowflake) {
		return await this.rest.get<RESTGetLogData>(Routes.logs.get(id));
	}
}
