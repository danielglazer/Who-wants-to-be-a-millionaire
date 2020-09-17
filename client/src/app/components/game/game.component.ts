import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GameService } from './../../game.service';
import { Question } from 'src/app/models/question.interface';


interface UserState {
	lifeBuoys: number;
	mistakes: number;
	currentScore: number;
}

@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
	// response: Observable<Response>;
	questions: Observable<Question[]>;
	selectedAnswer: string;
	questionAnswered: boolean;
	// answers: Observable<string[]>;
	state: UserState;

	constructor(private gameService: GameService) {
		this.newQuestionReset();
		this.state = { lifeBuoys: 3, mistakes: 0, currentScore: 0 };
	}

	ngOnInit() {
		this.questions = this.gameService.getQuestions();
	}

	answerSelected(answer: string) {
		this.selectedAnswer = answer;
	}

	answerQuestion(correct_answer: string) {
		this.questionAnswered = true;
		const isCorrectAnswer = this.selectedAnswer
			&& this.selectedAnswer === correct_answer;

		if (!isCorrectAnswer) this.state.mistakes++;
		else this.state.currentScore += 10;

		if (this.state.mistakes > 2) this.gameOver();
		console.log(isCorrectAnswer);
	}

	newQuestionReset() {
		this.selectedAnswer = null;
		this.questionAnswered = false;
	}

	nextQuestion() {
		this.newQuestionReset();
		// todo: add timer to question submition
	}

	skipClicked() {
		this.state.lifeBuoys--;
		this.nextQuestion();
	}
	gameOver() {
		this.gameService.finishGame();
	}
}

