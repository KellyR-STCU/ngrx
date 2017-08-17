import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../reducers/reducers';
import * as CounterActions from '../actions/counter-actions';
import * as fromRoot from '../reducers/reducers';

@Injectable()
export class MainService {

  constructor(private store:Store<fromRoot.State>) { }

  public GetCounterValue(): Store<number>{
    return this.store.select(fromRoot.selectCounterValue)
  }

  public Increment(): void {
    this.store.dispatch(new CounterActions.Increment());
  }

  public IncrementBy(value: number): void {
    this.store.dispatch(new CounterActions.IncrementBy(value));
  }

  //event thing
}
