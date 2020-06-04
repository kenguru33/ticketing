import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from '@baticketing/common';

export class ExpirationCompletePublisher extends Publisher<
  ExpirationCompleteEvent
> {
  subject: Subjects.ExpirationComplete = Subjects.ExpirationComplete;
}
