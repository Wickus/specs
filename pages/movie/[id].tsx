import { GetServerSideProps } from "next";
import { IMovie } from "interfaces/movie";
import Head from "next/head";

const Movie: React.FC<IMovie> = (props) => {
    const { movie } = props;
    const movieTitle = "text-8xl font-bold text-white";
    const actionButtons = "bg-white w-[200px] h-[40px] rounded-full mr-5";
    return (
        <>
            <Head>
                <title>{movie}</title>
            </Head>
            <main className="h-full w-full">
                <div className="flex items-end justify-start w-full h-full bg-gray-500 w-full">
                    <div className="p-10 [background-image:linear-gradient(0deg,black_10%,transparent_90%)] w-full">
                        <h1 className={movieTitle}>Movie Title</h1>
                        <ul className="mt-5 text-white">
                            <li>2022</li>
                            <li>Description</li>
                            <li>Cast</li>
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
            movie: id,
        },
    };
};

export default Movie;
