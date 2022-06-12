import axios from "axios"
import { config } from "./config";
import { mockSearchData } from "./mockMediaData";

const search = (term:string) => {
	const {requestUrl} = config;
	return new Promise((resolve,reject)=>{
		if(process.env.NODE_ENV === "production"){
			axios.get(`${requestUrl}?title=${term}`).then(({data})=>{
				resolve(data)
			})
		}else{
			resolve(mockSearchData.results)
		}
	})
}

export default search