import { Action } from '@ngrx/store';
//create entity: import { Book } from './book-model';

export const INCREMENT = 'INCREMENT';
export const INCREMENT_BY = 'INCREMENT_BY';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';
export const EVENT_FROM_EFFECT = 'EVENT_FROM_EFFECT';

export class Increment implements Action {
    readonly type = INCREMENT;
}

export class IncrementBy implements Action {
    readonly type = INCREMENT_BY;

    constructor(public payload: number) { }
}

export class Decrement implements Action {
    readonly type = DECREMENT;
}

export class Reset implements Action {
    readonly type = RESET;
}

export class EventFromEffect implements Action {
    readonly type = EVENT_FROM_EFFECT;

    constructor(public payload: any) { }
}

export type Actions =
    | Increment
    | IncrementBy
    | Decrement
    | Reset
    | EventFromEffect;
