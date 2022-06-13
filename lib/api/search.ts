import axios from "axios"
import { config } from "./config";
import { mockSearchData } from "./mockMediaData";

const search = (term:string, type:string) => {
	const {requestUrl} = config;
	return new Promise((resolve,reject)=>{
		if(process.env.NODE_ENV === "production"){
			axios.get(`${requestUrl}?title_type=${type}&title=${term}`).then(({data})=>{
				resolve(data.results)
			})
		}else{
			resolve(mockSearchData.results)
		}
	})
}

export default search