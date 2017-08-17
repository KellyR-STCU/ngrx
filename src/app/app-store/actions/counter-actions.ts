import { Action } from '@ngrx/store';
//create entity: import { Book } from './book-model';

export const INCREMENT:string = "INCREMENT";
export const INCREMENT_BY:string = "INCREMENT_BY";
export const EVENT_FROM_EFFECT:string = "EVENT_FROM_EFFECT";

export class Increment implements Action {
  readonly type = INCREMENT;

   constructor(public payload?: any) {}
}

export class IncrementBy implements Action {
    readonly type = INCREMENT_BY;

    constructor(public payload: number) {}
}

export class EventFromEffect implements Action {
  readonly type = EVENT_FROM_EFFECT;

     constructor(public payload?: any) {}
}

export type All
 = Increment
 | IncrementBy
 | EventFromEffect;