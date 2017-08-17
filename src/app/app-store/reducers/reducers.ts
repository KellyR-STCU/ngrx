import * as fromCounter from '../reducers/counter-reducer';

export interface State { counter: fromCounter.State }
export const reducers = { counter: fromCounter.reducer }

//will need more for a more complex object
export function selectCounterValue(state: State): number {
    return state.counter.value;
}
