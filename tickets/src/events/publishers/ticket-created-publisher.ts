import { Publisher, Subjects, TicketCreatedEvent } from '@baticketing/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  subject: Subjects.TicketCreated = Subjects.TicketCreated;
}
