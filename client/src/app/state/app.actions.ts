import { Question } from 'src/app/models/question.interface';
import { Action } from '@ngrx/store';
import { UserData } from './app.state';

export enum AppActionsTypes {
	SignUp = '[User] SignUp',
	SignUpSuccess = '[User] SignUp Success',
	SignUpFail = '[User] SignUp Fail',
	AnswerQuestion = '[User] AnswerQuestion',
	Load = '[Question] Load',
	LoadSuccess = '[Question] Load Success',
	LoadFail = '[Question] Load Fail',
	GameOver = '[User] Game Over'
}

export class SignUp implements Action {
	readonly type = AppActionsTypes.SignUp;
	constructor(public payload: string) { }
}

export class SignUpSuccess implements Action {
	readonly type = AppActionsTypes.SignUpSuccess;
	constructor(public payload: string) { }
}

export class SignUpFail implements Action {
	readonly type = AppActionsTypes.SignUpFail;
	constructor(public payload: string) { }
}


export class AnswerQuestion implements Action {
	readonly type = AppActionsTypes.AnswerQuestion;
	constructor(public payload: Question) { }
}

export class GameOver implements Action {
	readonly type = AppActionsTypes.GameOver;
	constructor(public payload: UserData) { }
}
export class Load implements Action {
	readonly type = AppActionsTypes.Load;
}

export class LoadSuccess implements Action {
	readonly type = AppActionsTypes.LoadSuccess;
	constructor(public payload: Question[]) { }
}

export class LoadFail implements Action {
	readonly type = AppActionsTypes.LoadFail;
	constructor(public payload: string) { }
}

export type AppActions =
	SignUp | SignUpSuccess | SignUpFail | AnswerQuestion |
	Load | LoadFail | LoadSuccess | GameOver;

