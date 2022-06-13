import { IMedia } from "./IMedia";

export interface IShowResponse extends IMedia {
	year:string;
	plot:string;
	stars:string[];
	genres:string[];
	episodes:any[];
	tvSeriesInfo:{
		seasons:string[];
	};
	watchList?:boolean;
	continueWatching:boolean
}