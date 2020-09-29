import { Question } from './../models/question.interface';

export interface AppState {
		leaderBoard: GameScore[],
		userData: UserData

}

export interface UserData {
	username: string,
	questions: Question[], // need to include user answer if he answered
	mistakes: number,
	lifeBuoys: number,
	currentScore: number,
}

export interface GameScore {
	username: string,
	date?: Date,
	totalScore?: number,
}
