import { GameScore, AppState, UserData } from './app.state';
import { AppActions, AppActionsTypes } from './app.actions';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export const initialState: AppState = {
	leaderBoard: [],
	userData: null
};

export function appReducer(state: AppState = initialState, action: AppActions): AppState {
	switch (action.type) {

		case AppActionsTypes.SignUpSuccess: {
			const userData: UserData = {
				username: action.payload,
				questions: [],
				mistakes: 0,
				lifeBuoys: 3,
				currentScore: 0,
			};
			return {
				...state,
				userData: userData
			}
		}
		case AppActionsTypes.AnswerQuestion: {
			const userData = { ...state.userData };
			userData.questions =
				[...userData.questions, action.payload];

			if (action.payload.answerCorrectly)
				userData.currentScore += 10;
			if (action.payload.answerCorrectly === false)
				userData.mistakes++;
			if (action.payload.answerCorrectly === undefined)
				userData.lifeBuoys--;
			return {
				...state,
				userData: userData
			}
		}
		case AppActionsTypes.GameOver: {
			return {
				...state,
				userData: null,
				leaderBoard: [
					...state.leaderBoard,
					{
						username: action.payload.username,
						date: new Date(),
						totalScore: action.payload.currentScore
					}
				]
			}
		}
		default: {
			return state;
		}
	}
}

// const getUserFeatureState = createFeatureSelector<AppState>('leaderBoard');
export const selectUser = (state: AppState) => state;
// export const selectFeatureCount = createSelector(
//   selectUser,
//   (state: AppState) => state.userData
// );
// export const selectUser = createFeatureSelector<AppState, UserData>('userData');
// export const selectLeaderBoard = createFeatureSelector<AppState, UserData>('userData');

// export const selectUserMistakes = createSelector(
//   selectUser,
//   (state: UserData) => state.mistakes
// );
// export const selectUserLifeBuoys = createSelector(
//   selectUser,
//   (state: UserData) => state.lifeBuoys
// );
// export const selectUserCurrentScore = createSelector(
//   selectUser,
//   (state: UserData) => state.currentScore
// );
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
