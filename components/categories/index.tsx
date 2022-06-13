import axios from "axios";
import { useEffect, useState } from "react";
import Category from "./category"

const Categories:React.FC<{uid:string}> = ({uid}) => {
	const [genres, setGenres] = useState<any[]>([]);

	useEffect(()=>{
		if(genres.length === 0){
			axios.get(`/api/shows?id=${uid}`).then(({data})=>{
				setGenres(Object.keys(data).map((key)=>{
					return {title:key,data:data[key]}
				}));
			});
		}
	},[genres.length]);

	return <div>
		{genres.length === 0 ? <p className="mt-56 ml-20 text-white text-3xl font bold">Loading shows ...</p> : genres.map((genre, index)=>{
			return genre.data.length > 0 && <Category key={index} {...genre}/>
		})}
	</div>
}

export default Categories