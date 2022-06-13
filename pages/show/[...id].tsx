import { GetServerSideProps } from "next";
import Head from "next/head";
import axios from "axios";
import { useEffect, useState } from "react";
import { IShowResponse } from "@/lib/api/interfaces/IShowResponse";
import { useRouter } from "next/router";

const Show: React.FC<{ id: string; season: string; uid: number }> = (props) => {
    const { id, season, uid } = props;
    const router = useRouter();
    const [showState, setShowState] = useState<IShowResponse | null>(null);
    const showTitle = "text-8xl font-bold text-white";
    const actionButtons = "bg-white w-[250px] h-[40px] rounded-full mr-5";
    const episodeItem = "relative w-[400px] h-[200px] bg-gray-500 mr-4 !bg-cover !bg-center p-5 flex items-end justify-start text-white text-sm";
    const seasonItem = "w-[30px] h-[30px] text-gray-900 mr-2 rounded-md flex items-center justify-center";

    useEffect(() => {
        if (Object.keys(showState ?? {}).length === 0) {
            axios
                .get(`/api/show/${id}?uid=${uid}`)
                .then(({ data }) => {
					let continueWatching = false;
					let showData = {...data};
					showData.episodes = showData.episodes.map((item:any)=>{
						const watched = showData.watchedEpisodes.filter(({episodeId}:any)=>{
							return episodeId === item.id
						})

						if(watched.length > 0){
							continueWatching = true
							return {...item, watched:true}
						}else{
							return item
						}
					})

                    setShowState({ ...showState, ...showData, continueWatching:continueWatching });
                })
                .catch((e) => {
                    console.log("error");
                });
        }
    }, [id, showState]);

    const addToWatchList = () => {
        const data = {
            userId: parseInt(uid.toString()),
            title: showState ? showState.title : "",
            mediaId: showState ? showState.id : "",
            image: showState ? showState.image : "",
        };

        axios.post("/api/watchlist", data).then((res) => {
            showState && setShowState({ ...showState, watchList: true });
        });
    };

    const removeToWatchList = (id: string) => {
        axios.delete(`/api/watchlist?id=${id}`).then((res) => {
            showState && setShowState({ ...showState, watchList: false });
        });
    };

    const markAsWatched = (id: string) => {
        const data = {
            userId: parseInt(uid.toString()),
            title: showState ? showState.title : "",
            mediaId: showState ? showState.id : "",
            image: showState ? showState.image : "",
            episodeId: id,
        };

        axios.post(`/api/watched`, data).then(() => {
            showState &&
                setShowState({
                    ...showState,
					continueWatching:true,
                    episodes: showState?.episodes?.map((item) => {
                        if (item.id === id) {
                            return { ...item, watched: true };
                        } else {
                            return item;
                        }
                    }),
                });
        });
    };
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
                                {showState && showState.continueWatching ? "Continue watching":"Watch Now"}
                            </button>
                            <button
                                type="button"
                                className={actionButtons}
                                onClick={() => {
                                    showState?.watchList ? removeToWatchList(showState.id) : addToWatchList();
                                }}
                            >
                                {showState?.watchList ? "Remove from Watch list" : "Add to Watch list"}
                            </button>
                        </div>
                        <div className="text-white mb-5 mt-5">
                            <p>Seasons:</p>
                            <ul className="flex items-center justify-start mt-2">
                                {showState?.tvSeriesInfo?.seasons.map((item, index) => {
                                    return (
                                        <li
                                            role={"button"}
                                            key={index}
                                            onClick={() => {
                                                router.push(`/show/${id}/${item}`);
                                            }}
                                            className={`${seasonItem} ${parseInt(season) === index + 1 ? "bg-white" : "bg-gray-500"}`}
                                        >
                                            {item}
                                        </li>
                                    );
                                })}
                            </ul>
                        </div>
                        <div>
                            <ul className="flex items-center justify-start">
                                {showState?.episodes?.slice(0, 3).map(({ title, image, id, watched }, index) => {
                                    return (
                                        <li className={episodeItem} key={index} style={{ background: `url(${image})` }}>
                                            <button
                                                className="bg-white text-black p-2 rounded-full absolute top-1 left-1"
                                                type="button"
                                                onClick={() => {
                                                    !watched && markAsWatched(id);
                                                }}
                                            >
                                                {watched ? "Watched" : "Mark as watched"}
                                            </button>
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
    const { query, req } = context;
    const { id } = query;
    const { cookies } = req;

    return {
        props: {
            id: id ? id[0] : "",
            season: id ? id[1] ?? 1 : 1,
            uid: cookies.id,
        },
    };
};

export default Show;
