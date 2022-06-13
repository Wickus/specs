import axios from "axios";
import {mockMovieItemData, mockSeriesItemData} from "@/lib/api/mockMediaData"

const getMediaById = (id:string, genre:string) => {
	return new Promise((resolve,reject)=>{
		if(process.env.NODE_ENV === "production"){
			axios.get(`https://imdb-api.com/en/API/Title/${process.env.IMDB_KEY}/${id}`).then(({data})=>{
				resolve(data)
			}).catch(()=>{
				resolve({})
			})
		}else{
			resolve(genre === "movie" ? mockMovieItemData : mockSeriesItemData)
		}
	})
	
	
}

export default getMediaById;