import { ChangeEvent } from 'react';

export const getInputValue = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): string =>
  event.target.value;

export const setPayload = <Payload = unknown>(
    state: unknown,
    payload: Payload
): Payload => payload;
