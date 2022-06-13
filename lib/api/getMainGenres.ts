import axios from "axios";
import { config } from "./config";
import { mockMovieData, mockSeriesData } from "./mockMediaData";

const getMainGenres = (type: string, genre: string) => {
    const { requestUrl, dateRange, toShow } = config;
    if (process.env.NODE_ENV === "production") {
		console.log(`${requestUrl}?title_type=${type}&release_date=${dateRange}&genres=${genre}&count=${toShow}`)
        return new Promise((resolve, reject) => {
            axios
                .get(`${requestUrl}?title_type=${type}&release_date=${dateRange}&genres=${genre}&count=${toShow}`)
                .then(({ data }) => {
                    resolve(data.results);
                })
                .catch((e) => {
                    reject({ error: e });
                });
        });
    } else {
        return type === "tv_movie" ? mockMovieData.results : mockSeriesData.results;
    }
};

export { getMainGenres };
