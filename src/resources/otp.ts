import {
	type RESTPostSendOTPMessageData,
	type RESTPostVerifyOTPCodeData,
	Routes,
} from '@rewritetoday/types';
import type { SendOTPMessageOptions, VerifyOTPOptions } from '../types/otp';
import { BaseManager } from './base';

export class OTPManager extends BaseManager {
	public async send({ idempotencyKey, ...body }: SendOTPMessageOptions) {
		const headers = {} as Record<string, string>;

		if (idempotencyKey) headers['Idempotency-Key'] = idempotencyKey;

		return await this.rest.post<RESTPostSendOTPMessageData>(
			Routes.otp.send(),
			body,
			{ headers },
		);
	}

	public async verify({ id, ...body }: VerifyOTPOptions) {
		return await this.rest.post<RESTPostVerifyOTPCodeData>(
			Routes.otp.verify(id),
			body,
		);
	}
}
