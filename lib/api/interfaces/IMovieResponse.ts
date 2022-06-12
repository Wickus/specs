import { IMedia } from "./IMedia";


export interface IMovieResponse extends IMedia {
	year:string;
	plot:string;
	stars:string[];
	genres:string[];
}