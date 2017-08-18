import * as counter from '../actions/counter-actions';

export interface State {
    value: number
};

const initialState: State = {
    value: 0
};

export function reducer(state = initialState, action: counter.Actions): State {
    console.log('Action came in!' + action.type);

    switch (action.type) {
        case counter.INCREMENT: {
            console.log('Increment action being handled');
            return {
                ...state,
                value: state.value + 1
            }
        }

        case counter.INCREMENT_BY: {
            console.log('Increment action being handled');
            return {
                ...state,
                value: state.value + action.payload
            }
        }

        case counter.DECREMENT: {
            console.log('Decrement action being handled');
            return {
                ...state,
                value: state.value - 1
            }
        }

        case counter.RESET: {
            console.log('Reset action being handled');
            return initialState;
        }

        case counter.EVENT_FROM_EFFECT: {
            console.log('In the reducer');
            return {
                ...state,
                value: 4
            }
        }

        default: {
            return state;
        }
    }
}

export const getValue = (state: State) => state.value;
