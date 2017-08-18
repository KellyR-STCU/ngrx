import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers/reducers';
import * as CounterActions from '../actions/counter-actions';
import * as fromRoot from '../reducers/reducers';

@Injectable()
export class MainService {

    constructor(private store: Store<fromRoot.State>) { }

    public getCounterValue(): Store<number> {
        return this.store.select(fromRoot.selectCounterValue)
    }

    public increment(): void {
        this.store.dispatch(new CounterActions.Increment());
    }

    public incrementBy(value: number): void {
        this.store.dispatch(new CounterActions.IncrementBy(value));
    }

    public decrement(): void {
        this.store.dispatch(new CounterActions.Decrement());
    }

    public reset(): void {
        this.store.dispatch(new CounterActions.Reset());
    }

    //event thing
}
