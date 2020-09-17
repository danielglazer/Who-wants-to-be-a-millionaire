import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';

import { GameScore, GameState } from './state/app.state';
import { map } from 'rxjs/operators'
import { Question } from './models/question.interface';
import { Response } from './models/response.interface';
import { SignUpFail, SignUpSuccess } from './state/app.actions';
import { User } from './models/user.interface';


@Injectable({
	providedIn: 'root'
})
export class GameService {
	private quetionsUrl = 'https://opentdb.com/api.php?amount=10&type=multiple';  // URL to web api

	constructor(private router: Router,
		private http: HttpClient,
		private store: Store<GameState>) { }

	createNewUser(username: string): boolean {
		if (this.checkIfUsernameExists(username)) this.store.dispatch(new SignUpFail('username exists'));

		this.store.dispatch(new SignUpSuccess(username));
		console.log(username);
		this.router.navigateByUrl('game');
		return true;
	}

	checkIfUsernameExists(username: string): boolean {
		return false;
		// return this.store.select(gameState => { gameState.leaderBoard.findIndex((gameScore: GameScore) => gameScore.username) })
		// return this.users.findIndex(user => user.username === username) !== -1;
	}

	finishGame(): void {
		this.router.navigateByUrl('leader-board');
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
