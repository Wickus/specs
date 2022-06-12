import axios from "axios";
import { useEffect, useState } from "react";
import Category from "./category"

const Categories = () => {
	const [genres, setGenres] = useState<any[]>([]);

	useEffect(()=>{
		if(genres.length === 0){
			axios.get("/api/movies").then(({data})=>{
				setGenres(Object.keys(data).map((key)=>{
					return {title:key,data:data[key]}
				}));
			});
		}
	},[genres.length]);

	return <div>
		{genres.map((genre, index)=>{
			return <Category key={index} {...genre}/>
		})}
	</div>
}

export default Categories