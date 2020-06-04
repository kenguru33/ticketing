import { Subjects, Publisher, PaymentCreatedEvent } from '@baticketing/common';

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  subject: Subjects.PaymentCreated = Subjects.PaymentCreated;
}
