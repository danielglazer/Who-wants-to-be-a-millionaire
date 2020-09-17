import { Question } from './question.interface';

export interface Response {
	response_code: number;
	results?: Question[];
}
