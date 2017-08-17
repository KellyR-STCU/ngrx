//import { ActionReducer, Action } from '@ngrx/store';
//import { State, initialState } from '../main-state';
import * as CounterActions from '../actions/counter-actions';

export interface State { value: number };
const initialState: State = { value: 0 };

export function reducer(state = initialState, action: CounterActions.All) : State {
        console.log('Action came in!' + action.type);

        switch(action.type) {
            case CounterActions.INCREMENT: {
                console.log('Increment action being handled');
                return {
                    ...state, value: state.value + 1
                }
            }

            case CounterActions.INCREMENT_BY: {
                console.log('Increment action being handled');
                return {
                    ...state, value: state.value + action.payload
                }
            }

            case CounterActions.EVENT_FROM_EFFECT: {
                console.log('In the reducer');
                return {
                    ...state, value: 4
                }
            }

            default: {
                return state;
            }
        }
    }