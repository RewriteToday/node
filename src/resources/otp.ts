import {
	type RESTPostSendOTPMessageData,
	type RESTPostVerifyOTPCodeData,
	Routes,
} from '@rewritetoday/types';
import type { SendOTPMessageOptions, VerifyOTPOptions } from '../types/otp';
import { BaseManager } from './base';

export class OTPManager extends BaseManager {
	public async send({ idempotencyKey, ...body }: SendOTPMessageOptions) {
		return await this.rest.post<RESTPostSendOTPMessageData>(
			Routes.otp.send(),
			body,
			{
				headers: {
					'Idempotency-Key': idempotencyKey ?? '',
				},
			},
		);
	}

	public async verify({ id, ...body }: VerifyOTPOptions) {
		return await this.rest.post<RESTPostVerifyOTPCodeData>(
			Routes.otp.verify(id),
			body,
		);
	}
}
