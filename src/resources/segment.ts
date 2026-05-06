import {
	type RESTDeleteDetachSegmentContactData,
	type RESTDeleteSegmentData,
	type RESTDeleteSegmentsData,
	type RESTGetListSegmentContactsData,
	type RESTGetListSegmentContactsQueryParams,
	type RESTGetListSegmentsData,
	type RESTGetListSegmentsQueryParams,
	type RESTGetSegmentData,
	type RESTPatchUpdateSegmentBody,
	type RESTPatchUpdateSegmentData,
	type RESTPostAttachSegmentContactBody,
	type RESTPostAttachSegmentContactData,
	type RESTPostAttachSegmentContactsBody,
	type RESTPostAttachSegmentContactsData,
	type RESTPostCreateSegmentBody,
	type RESTPostCreateSegmentData,
	type RESTPostDetachSegmentContactsBody,
	type RESTPostDetachSegmentContactsData,
	Routes,
	type Snowflake,
} from '@rewritetoday/types';
import { BaseManager } from './base';

/**
 * Segment resource operations.
 */
export class SegmentManager extends BaseManager {
	public async list(options?: RESTGetListSegmentsQueryParams) {
		return await this.rest.get<RESTGetListSegmentsData>(
			Routes.segments.list(options),
		);
	}

	public async create(options: RESTPostCreateSegmentBody) {
		return await this.rest.post<RESTPostCreateSegmentData>(
			Routes.segments.create(),
			options,
		);
	}

	public async sweep(options: { ids: Snowflake[] }) {
		return await this.deleteWithBody<RESTDeleteSegmentsData>(
			Routes.segments.sweep(),
			options,
		);
	}

	public async get(id: Snowflake) {
		return await this.rest.get<RESTGetSegmentData>(Routes.segments.get(id));
	}

	public async update(id: Snowflake, options: RESTPatchUpdateSegmentBody) {
		return await this.rest.patch<RESTPatchUpdateSegmentData>(
			Routes.segments.update(id),
			options,
		);
	}

	public async delete(id: Snowflake) {
		return await this.rest.delete<RESTDeleteSegmentData>(
			Routes.segments.delete(id),
		);
	}

	public async contacts(
		id: Snowflake,
		options?: RESTGetListSegmentContactsQueryParams,
	) {
		return await this.rest.get<RESTGetListSegmentContactsData>(
			Routes.segments.contacts.list(id, options),
		);
	}

	public async attachContact(
		id: Snowflake,
		options: RESTPostAttachSegmentContactBody,
	) {
		return await this.rest.post<RESTPostAttachSegmentContactData>(
			Routes.segments.attachContact(id),
			options,
		);
	}

	public async attachContacts(
		id: Snowflake,
		options: RESTPostAttachSegmentContactsBody,
	) {
		return await this.rest.post<RESTPostAttachSegmentContactsData>(
			Routes.segments.attachContacts(id),
			options,
		);
	}

	public async detachContacts(
		id: Snowflake,
		options: RESTPostDetachSegmentContactsBody,
	) {
		return await this.rest.post<RESTPostDetachSegmentContactsData>(
			Routes.segments.detachContacts(id),
			options,
		);
	}

	public async detachContact(id: Snowflake, contactId: Snowflake) {
		return await this.rest.delete<RESTDeleteDetachSegmentContactData>(
			Routes.segments.detachContact(id, contactId),
		);
	}

	/** Compatibility alias. */
	public async attach(
		id: Snowflake,
		options: RESTPostAttachSegmentContactBody,
	) {
		return await this.attachContact(id, options);
	}

	/** Compatibility alias. */
	public async detach(id: Snowflake, contactId: Snowflake) {
		return await this.detachContact(id, contactId);
	}
}
