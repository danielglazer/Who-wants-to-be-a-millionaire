import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { GameService } from './../../game.service';
import { Question } from 'src/app/models/question.interface';
import { AppState, UserData } from 'src/app/state/app.state';
import { select, Store } from '@ngrx/store';
import { AnswerQuestion } from 'src/app/state/app.actions';




@Component({
	selector: 'app-game',
	templateUrl: './game.component.html',
	styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {
	questions: Observable<Question[]>;
	selectedAnswer: string;
	questionAnswered: boolean;
	state: Observable<any>;
	mistakes: Observable<number>;


	constructor(private gameService: GameService,
		private store: Store<UserData>) { }

	ngOnInit() {
		this.state = this.store.pipe(
			// select(selectLeaderBoard));
			select((appState: any) => appState.userData));
		// todo: fix the selector so it won't return undefined
		this.state.subscribe(user => {
			console.log(user);
			debugger;
		});
		this.questions = this.gameService.getQuestions();
		this.newQuestionReset();
		// this.mistakes = this.store.pipe(select(selectUserMistakes));
		// this.mistakes.subscribe(user => console.log(user));
	}
	answerSelected(answer: string) {
		this.selectedAnswer = answer;
	}

	answerQuestion(question: Question, correct_answer: string) {
		this.questionAnswered = true;
		const isCorrectAnswer = this.selectedAnswer
			&& this.selectedAnswer === correct_answer;
		question.answerCorrectly = isCorrectAnswer;
		this.store.dispatch(new AnswerQuestion(question));

		// if (this.state.mistakes > 2) this.gameOver();
	}

	newQuestionReset() {
		this.selectedAnswer = null;
		this.questionAnswered = false;
	}

	nextQuestion() {
		this.newQuestionReset();
		// todo: add timer to question submition
	}

	skipClicked(question: Question) {
		this.store.dispatch(new AnswerQuestion(question));
		this.nextQuestion();
	}
	gameOver() {
		this.gameService.finishGame();
	}
}

