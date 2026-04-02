import {
	type RESTDeleteDetachSegmentContactData,
	type RESTDeleteSegmentData,
	type RESTGetListSegmentContactsData,
	type RESTGetListSegmentContactsQueryParams,
	type RESTGetListSegmentsData,
	type RESTGetListSegmentsQueryParams,
	type RESTGetSegmentData,
	type RESTPatchUpdateSegmentBody,
	type RESTPatchUpdateSegmentData,
	type RESTPostAttachSegmentContactBody,
	type RESTPostAttachSegmentContactData,
	type RESTPostCreateSegmentBody,
	type RESTPostCreateSegmentData,
	Routes,
	type Snowflake,
} from '@rewritetoday/types';
import { BaseManager } from './base';

/**
 * Segment resource operations.
 */
export class SegmentManager extends BaseManager {
	/**
	 * Lists segments for a project.
	 */
	public async list(options?: RESTGetListSegmentsQueryParams) {
		return await this.rest.get<RESTGetListSegmentsData>(
			Routes.segments.list(options),
		);
	}

	/**
	 * Creates a segment for a project.
	 */
	public async create(options: RESTPostCreateSegmentBody) {
		return await this.rest.post<RESTPostCreateSegmentData>(
			Routes.segments.create(),
			options,
		);
	}

	/**
	 * Fetches a segment by id.
	 */
	public async get(id: Snowflake) {
		return await this.rest.get<RESTGetSegmentData>(Routes.segments.get(id));
	}

	/**
	 * Updates a segment by id.
	 */
	public async update(id: Snowflake, options: RESTPatchUpdateSegmentBody) {
		return await this.rest.patch<RESTPatchUpdateSegmentData>(
			Routes.segments.update(id),
			options,
		);
	}

	/**
	 * Deletes a segment by id.
	 */
	public async delete(id: Snowflake) {
		return await this.rest.delete<RESTDeleteSegmentData>(
			Routes.segments.delete(id),
		);
	}

	/**
	 * Lists contacts attached to a segment.
	 */
	public async contacts(
		id: Snowflake,
		options?: RESTGetListSegmentContactsQueryParams,
	) {
		return await this.rest.get<RESTGetListSegmentContactsData>(
			Routes.segments.contacts.list(id, options),
		);
	}

	/**
	 * Attaches a contact to a segment.
	 */
	public async attach(
		id: Snowflake,
		options: RESTPostAttachSegmentContactBody,
	) {
		return await this.rest.post<RESTPostAttachSegmentContactData>(
			Routes.segments.contacts.attach(id),
			options,
		);
	}

	/**
	 * Detaches a contact from a segment.
	 */
	public async detach(id: Snowflake, contactId: Snowflake) {
		return await this.rest.delete<RESTDeleteDetachSegmentContactData>(
			Routes.segments.contacts.detach(id, contactId),
		);
	}
}
