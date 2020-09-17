import { Question } from 'src/app/models/question.interface';
import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from '@ngrx/effects';
import * as appActions from './app.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { GameService } from '../game.service';

@Injectable()
export class AppEffects {
	constructor(private actions$: Actions,
		private gameService: GameService) { }

	@Effect()
	loadQuestions$ = this.actions$.pipe(
		ofType(appActions.AppActionsTypes.Load),
		mergeMap((action: appActions.Load) =>
			this.gameService.getQuestions()
				.pipe(
					map((response: Question[]) => (new appActions.LoadSuccess(response))),
					catchError(err => of(new appActions.LoadFail(err.error))))
		));
}
