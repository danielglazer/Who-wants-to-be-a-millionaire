import { Question } from 'src/app/models/question.interface';
import { Action } from '@ngrx/store';

export enum AppActionsTypes {
	SignUp = '[User] SignUp',
	SignUpSuccess = '[User] SignUp Success',
	SignUpFail = '[User] SignUp Fail',
	AnswerQuestion = '[Movies] Select',
	Load = '[Movies] Load',
	LoadSuccess = '[Movies] Load Success',
	LoadFail = '[Movies] Load Fail',
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


export class SelectMovie implements Action {
	readonly type = AppActionsTypes.AnswerQuestion;
	constructor(public payload: string) { }
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
	SignUp | SignUpSuccess | SignUpFail | SelectMovie |
	Load | LoadFail | LoadSuccess;

