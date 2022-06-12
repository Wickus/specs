import axios from "axios";
import {mockMovieItemData, mockSeriesItemData, mockSeriesSeasonData} from "@/lib/api/mockMediaData"

const getMediaById = (id:string, genre:string, episode?:string) => {
	return new Promise((resolve,reject)=>{
		if(process.env.NODE_ENV === "production"){
			axios.get(`/api/${genre}/${id}${episode ? `/${episode}` : ""}`).then(({data})=>{
				resolve(data)
			}).catch(()=>{
	
			})
		}else{
			resolve(genre === "movie" ? mockMovieItemData : episode ? {...mockSeriesSeasonData, ...mockSeriesItemData} : mockSeriesItemData)
		}
	})
	
	
}

export default getMediaById;