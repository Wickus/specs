import axios from "axios";
import {mockSeriesSeasonData} from "@/lib/api/mockMediaData"

const getSeasonEpisodes = (id:string, season?:string) => {
	return new Promise((resolve,reject)=>{
		console.log(`https://imdb-api.com/en/API/SeasonEpisodes/${process.env.IMDB_KEY}/${id}/${season}`)
		if(process.env.NODE_ENV === "production"){
			axios.get(`https://imdb-api.com/en/API/SeasonEpisodes/${process.env.IMDB_KEY}/${id}/${season}`).then(({data})=>{
				resolve(data)
			}).catch(()=>{
				resolve({})
			})
		}else{
			resolve(mockSeriesSeasonData)
		}
	})
	
	
}

export default getSeasonEpisodes;