import { GameService } from './../../game.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-welcome',
	templateUrl: './welcome.component.html',
	styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent implements OnInit {
	signInForm: FormGroup;

	constructor(
		private fb: FormBuilder,
		private gameService: GameService
		) { }

	ngOnInit(): void {
		const alphaNumericExp = '^[a-zA-Z0-9]+$';
		this.signInForm = this.fb.group({
			username: new FormControl('', [Validators.required,
			Validators.maxLength(20),
			Validators.pattern(alphaNumericExp)]),
		});
	}
	startGame() {
		this.gameService.createNewUser(this.signInForm.get('username').value);
	}

}
