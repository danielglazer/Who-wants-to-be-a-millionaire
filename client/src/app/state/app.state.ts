import { Question } from './../models/question.interface';

export interface GameState {
	leaderBoard: GameScore[]
}

export interface GameScore {
	username: string,
	date?: Date,
	totalScore?: number,
	questions?: Question[] // need to include user answer if he answered
}
