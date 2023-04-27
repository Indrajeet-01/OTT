import { getMoviesFailure, getMoviesStart, getMoviesSuccess,deleteMovieStart,deleteMovieSuccess,deleteMovieFailure, createMovieStart, createMovieSuccess, createMovieFailure } from "./MovieActions";
import axios from "axios"

// get
export const getMovies = async (dispatch) =>   {
    dispatch(getMoviesStart())
    try {
        const res = await axios.get("/movies", {
            headers: {
                token: 
                "Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDY4ZmFjNWY5NjlmYTMwMTQzNDI1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjYxNjcyMSwiZXhwIjoxNjgzMDQ4NzIxfQ.A9k037eeh2C9DY8J2sYcJA7LJlgX79Naa33WwQI9zpM"
            }
        })
        dispatch(getMoviesSuccess(res.data))
    }catch(err){
        dispatch(getMoviesFailure())
    }
}

//create
export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart());
    try {
      const res = await axios.post("/movies", movie, {
        headers: {
            token: 
            "Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDY4ZmFjNWY5NjlmYTMwMTQzNDI1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjYxNjcyMSwiZXhwIjoxNjgzMDQ4NzIxfQ.A9k037eeh2C9DY8J2sYcJA7LJlgX79Naa33WwQI9zpM"
        },
      });
      dispatch(createMovieSuccess(res.data));
    } catch (err) {
      dispatch(createMovieFailure());
    }
  };

// delete
export const deleteMovie = async (id,dispatch) =>   {
    dispatch(deleteMovieStart())
    try {
        await axios.delete("/movies/"+id, {
            headers: {
                token: 
                "Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDY4ZmFjNWY5NjlmYTMwMTQzNDI1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjYxNjcyMSwiZXhwIjoxNjgzMDQ4NzIxfQ.A9k037eeh2C9DY8J2sYcJA7LJlgX79Naa33WwQI9zpM"
            }
        })
        dispatch(deleteMovieSuccess(id))
    }catch(err){
        dispatch(deleteMovieFailure())
    }
}