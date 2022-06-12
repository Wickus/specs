import { GetServerSideProps } from "next";
import Head from "next/head";
import axios from "axios";
import { IMovieResponse } from "@/lib/api/interfaces/IMovieResponse";
import { useEffect, useState } from "react";

const Movie: React.FC<{id:string}> = (props) => {
    const { id } = props;
	const [movieState, setMovieState] = useState<IMovieResponse|null>();
    const movieTitle = "text-6xl font-bold text-white";
    const actionButtons = "bg-white w-[200px] h-[40px] rounded-full mr-5";

	useEffect(()=>{
		if(Object.keys(movieState ?? {}).length === 0) {
			axios.get(`/api/movie/${id}`).then(({data})=>{
				setMovieState(data)
			}).catch((e)=>{
				console.log("error")
			})
		}		
	},[])

    return (
        <>
            <Head>
                <title>{movieState?.title}</title>
            </Head>
            <main className="h-full w-full">
                <div className="flex items-end justify-start h-full w-full bg-cover bg-center" style={{backgroundImage:`url(${movieState?.image})`}}>
                    <div className="p-10 [background-image:linear-gradient(0deg,black_30%,transparent_70%)] w-full">
                        <h1 className={movieTitle}>{movieState?.title}</h1>
                        <ul className="mt-5 text-white">
                            <li>{movieState?.year}</li>
                            <li>Plot: {movieState?.plot}</li>
                            <li>Stars: {movieState?.stars}</li>
                        </ul>
                        <div className="mt-10">
                            <button type="button" className={actionButtons}>
                                Watch Now
                            </button>
                            <button type="button" className={actionButtons}>
                                Mark as Watched
                            </button>
                            <button type="button" className={actionButtons}>
                                Add to Watch list
                            </button>
                            <button type="button" className={actionButtons}>
                                Share
                            </button>
                        </div>
                        
                    </div>
                </div>
            </main>
        </>
    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const { query } = context;
    const { id } = query;

    return {
        props: {
            id: id,
        },
    };
};

export default Movie;
