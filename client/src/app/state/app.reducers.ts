import { GameState } from './app.state';
import { AppActions, AppActionsTypes } from './app.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const initialState: GameState = {
	leaderBoard: []
};

export function reducer(state: GameState = initialState, action: AppActions): GameState {
	switch (action.type) {

		case AppActionsTypes.SignUpSuccess: {
			const newarr = [...state.leaderBoard, { username: action.payload }]
			return {
				...state,
				leaderBoard: newarr
			}
		}


		// case AppActionsTypes.SignUpFail:
		// case AppActionsTypes.LogInFail: {
		// 	return {
		// 		...state,
		// 		error: action.payload
		// 	}
		// }

		// case AppActionsTypes.LogOut: {
		// 	return {
		// 		...state,
		// 		isLoggedIn: false,
		// 		userData: null,
		// 	}
		// }

		default: {
			return state;
		}
	}
}

const getUserFeatureState = createFeatureSelector<GameState>('leaderBoard');

// export const getIsUserLoggedIn = createSelector(
// 	getUserFeatureState,
// 	state => state.isLoggedIn
// )

// export const getUserData = createSelector(
// 	getUserFeatureState,
// 	state => state.userData
// )

// export const getUserError = createSelector(
// 	getUserFeatureState,
// 	state => state.error
// )
