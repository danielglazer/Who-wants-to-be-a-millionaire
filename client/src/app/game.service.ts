import { AppState, GameScore, UserData } from './state/app.state';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { map } from 'rxjs/operators'
import { Question } from './models/question.interface';
import { Response } from './models/response.interface';
import { GameOver, SignUpFail, SignUpSuccess } from './state/app.actions';
import { User } from './models/user.interface';
import { selectUser } from './state/app.reducers';


@Injectable({
	providedIn: 'root'
})
export class GameService {
	private quetionsUrl = 'https://opentdb.com/api.php?amount=10&type=multiple';  // URL to web api

	constructor(private router: Router,
		private http: HttpClient,
		private store: Store<AppState>) { }

	createNewUser(username: string): boolean {
		if (!this.checkIfUsernameExists(username)) this.store.dispatch(new SignUpFail('username exists'));

		this.store.dispatch(new SignUpSuccess(username));
		this.router.navigateByUrl('game');
		return true;
	}

	checkIfUsernameExists(username: string): Observable<boolean> {
		// return this.store.select(appState => {
		// 	appState.leaderBoard.findIndex((gameScore) =>
		// 		gameScore.username === username) === 1
		// })
		return of(false);
		// return this.users.findIndex(user => user.username === username) !== -1;
	}

	finishGame(): void {
		// this.store.pipe(select(selectUser)).subscribe((user: UserData) => {
		// 	if(user.mistakes > 2 || user.questions.length === 10){
		// 		this.store.dispatch(new GameOver(user))
		// 		this.router.navigateByUrl('leader-board');
		// 	}
		// });
	}

	getUsersLeaderBoard(): Observable<GameScore[]> {
		return of([]);
		// todo: fix selector up
		// return this.store.select().sort((a: User, b: User) => { return a.score - b.score }).slice(0, 10);
	}

	getQuestions(): Observable<Question[]> {
		return this.http.get<Response>(this.quetionsUrl).pipe(map((response: Response) => response.results));
	}
}
