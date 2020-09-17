import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { User } from './models/user.interface';


@Injectable({
	providedIn: 'root'
})
export class GameService {
	private users: User[];
	private leaderBoardUsers: User[];

	constructor(private router: Router) {
		// todo: consider using map / store here instead of array
		this.users = [];
		this.leaderBoardUsers = [];
	}

	createNewUser(username: string): boolean {
		if (this.checkIfUsernameExists(username)) return false;
		this.users.push({ username: username });
		console.log(username);
		this.router.navigateByUrl('game');
		return true;
	}

	checkIfUsernameExists(username: string): boolean {
		return this.users.findIndex(user => user.username === username) === -1;
	}

	finishGame(): void {

	}

	getUsersLeaderBoard(): User[] {
		return this.users.sort((a: User, b: User) => { return a.score - b.score }).slice(0, 10);
	}
}
