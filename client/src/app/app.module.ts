import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { QuestionComponent } from './components/question/question.component';
import { AnswerComponent } from './components/question/answer/answer.component';
import { LeaderBoardComponent } from './components/leader-board/leader-board.component';
import { GameComponent } from './components/game/game.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		WelcomeComponent,
		QuestionComponent,
		AnswerComponent,
		LeaderBoardComponent,
		GameComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		MatToolbarModule,
		MatButtonModule,
    MatCardModule,
    MatInputModule,
		FormsModule,
		ReactiveFormsModule,
		StoreModule.forRoot({}, {}),
		EffectsModule.forRoot([])
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
