import { IShow } from "interfaces/show";
import { GetServerSideProps } from "next";
import Head from "next/head";

const Movie: React.FC<IShow> = (props) => {
    const { show } = props;
    const showTitle = "text-8xl font-bold text-white";
    const actionButtons = "bg-white w-[250px] h-[40px] rounded-full mr-5";
	const episode = "w-[400px] h-[200px] bg-gray-500";
	const season = "w-[30px] h-[30px] bg-white text-gray-900 mr-2 rounded-md flex items-center justify-center"
    return (
        <>
            <Head>
                <title>{show}</title>
            </Head>
            <main className="h-full w-full">
                <div className="flex items-end justify-start w-full h-full bg-gray-500 w-full">
                    <div className="p-10 [background-image:linear-gradient(0deg,black_10%,transparent_90%)] w-full">
                        <h1 className={showTitle}>Movie Title</h1>
                        <ul className="mt-5 text-white">
                            <li>2022</li>
                            <li>Description</li>
                            <li>Cast</li>
                        </ul>
                        <div className="mt-10">
                            <button type="button" className={actionButtons}>
                                Continue watching S2:E2
                            </button>
                            <button type="button" className={actionButtons}>
                                Add to Watch list
                            </button>
                            <button type="button" className={actionButtons}>
                                Share
                            </button>
                        </div>
						<div className="text-white mb-5 mt-5">
                            <p>Seasons:</p>
                            <ul className="flex items-center justify-start mt-2">
                                <li className={season}>1</li>
                                <li className={season}>2</li>
                            </ul>
                        </div>
                        <div>
                            <ul>
                                <li className={episode}>
									<div></div>
									<p></p>
								</li>
                            </ul>
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
            show: id,
        },
    };
};

export default Movie;
