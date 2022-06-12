import { GetServerSideProps } from "next";
import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import { IShowResponse } from "@/lib/api/interfaces/IShowResponse";
import { useRouter } from "next/router";

const Show: React.FC<{id:string,season:string}> = (props) => {
    const { id, season } = props;
	const router = useRouter();
    const [showState, setShowState] = useState<IShowResponse | null>();
    const showTitle = "text-8xl font-bold text-white";
    const actionButtons = "bg-white w-[250px] h-[40px] rounded-full mr-5";
    const episodeItem = "w-[400px] h-[200px] bg-gray-500 mr-4 !bg-cover !bg-center p-5 flex items-end justify-start text-white text-sm";
    const seasonItem = "w-[30px] h-[30px] text-gray-900 mr-2 rounded-md flex items-center justify-center";

    useEffect(() => {
        if (Object.keys(showState ?? {}).length === 0) {
            axios
                .get(`/api/show/${id}`)
                .then(({ data }) => {
                    setShowState({ ...showState, ...data });
					console.log(data)
                })
                .catch((e) => {
                    console.log("error");
                });
        }
    }, []);

    return (
        <>
            <Head>
                <title>{showState?.title}</title>
            </Head>
            <main className="h-full w-full">
                <div className="flex items-end justify-start w-full h-full w-full bg-cover bg-center" style={{ backgroundImage: `url(${showState?.image})` }}>
                    <div className="p-10 [background-image:linear-gradient(0deg,black_10%,transparent_90%)] w-full">
                        <h1 className={showTitle}>{showState?.title}</h1>
                        <ul className="mt-5 text-white">
                            <li>{showState?.year}</li>
                            <li>Plot: {showState?.plot}</li>
                            <li>Stars: {showState?.stars}</li>
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
								{showState?.tvSeriesInfo?.seasons.map((item,index)=>{
									return <li role={"button"} onClick={()=>{
										router.push(`/show/${id}/${item}`)
									}} className={`${seasonItem} ${parseInt(season) === index + 1 ? "bg-white":"bg-gray-500"}`}>{item}</li>
								})}
                            </ul>
                        </div>
                        <div>
                            <ul className="flex items-center justify-start">
                                {showState?.episodes.slice(0,3).map(({title,image}) => {
                                    return (
                                        <li className={episodeItem} style={{background:`url(${image})`}}>
                                            <p>{title}</p>
                                        </li>
                                    );
                                })}
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
            id: id ? id[0] : "",
            season: id ? id[1] ?? 1 : 1,
        },
    };
};

export default Show;
