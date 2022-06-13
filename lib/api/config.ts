export const config = {
	requestUrl:`https://imdb-api.com/API/AdvancedSearch/${process.env.IMDB_KEY}`,
	mainGenres:["comedy","action","drama"],
	dateRange:"2021-01-01,2022-06-13",
	toShow:5,
}