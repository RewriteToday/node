import type {
	RESTPostSendOTPMessageBody,
	RESTPostVerifyOTPCodeBody,
	Snowflake,
} from '@rewritetoday/types';

/** Options to send when creating a new OTP message. */
export interface SendOTPMessageOptions extends RESTPostSendOTPMessageBody {
	/** Idempotency key to use in "Idempotency-Key" header. */
	idempotencyKey?: string;
}

/** Options to send when verifing an OTP message. */
export interface VerifyOTPOptions extends RESTPostVerifyOTPCodeBody {
	/** ID of the message. See {@link Snowflake}. */
	id: Snowflake;
}
