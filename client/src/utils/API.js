import axios from "axios";

export default {
	//Get all movies
	getMovies: function() {
		return axios.get("/api/movies");
	},
	//Get movies with a specific id
	getMovie: function(id) {
		return axios.get("/api/movies/" + id);
	},
	//Delete movie
	deleteMovie: function(id) {
		return axios.delete("/api/movies/" + id);
	},
	//Saves new movie
	saveMovie: function(movieData) {
		return axios.post("/api/movies/", movieData);
	}
};