import { getMoviesFailure, getMoviesStart, getMoviesSuccess,deleteMovieStart,deleteMovieSuccess,deleteMovieFailure } from "./MovieActions";
import axios from "axios"

export const getMovies = async (dispatch) =>   {
    dispatch(getMoviesStart())
    try {
        const res = await axios.get("/movies", {
            headers: {
                token: 
                "Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDY4ZmFjNWY5NjlmYTMwMTQzNDI1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjU3MDkzMywiZXhwIjoxNjgzMDAyOTMzfQ.PBT_6yI1fIipK2y-iTGr73U_lM8zIqeirybP_Fls7g8"
            }
        })
        dispatch(getMoviesSuccess(res.data))
    }catch(err){
        dispatch(getMoviesFailure())
    }
}

//delete
export const deleteMovie = async (id,dispatch) =>   {
    dispatch(deleteMovieStart())
    try {
        await axios.delete("/movies/"+id, {
            headers: {
                token: 
                "Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDY4ZmFjNWY5NjlmYTMwMTQzNDI1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjU3MDkzMywiZXhwIjoxNjgzMDAyOTMzfQ.PBT_6yI1fIipK2y-iTGr73U_lM8zIqeirybP_Fls7g8"
            }
        })
        dispatch(deleteMovieSuccess(id))
    }catch(err){
        dispatch(deleteMovieFailure())
    }
}