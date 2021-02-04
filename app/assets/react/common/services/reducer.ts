import { Action } from './actions';

type ReducerFunc = (state: State, action: Action) => State;

const debug = true;

export const initialState = {} as any;

export type State = typeof initialState;

export function reducer(state: State, action: Action): State {
	const { type, payload } = action;

	switch (type) {
		case 'some_action':
			return { ...state, payload };
		default:
			throw new Error(`Unhandled action type: ${type}`);
	}
}

export function logger(reducerFunc: ReducerFunc) {
	return (state: State, action: Action): State => {
		const nextState = reducerFunc(state, action);

		if (debug) {
			console.groupCollapsed('Action Type:', action.type);
			console.info(
				'%cPrevious State:',
				'color: #9E9E9E; font-weight: 700;',
				state
			);
			console.info('%cAction:', 'color: #00A7F7; font-weight: 700;', action);
			console.info(
				'%cNext State:',
				'color: #47B04B; font-weight: 700;',
				nextState
			);
			console.groupEnd();
		}

		return nextState;
	};
}