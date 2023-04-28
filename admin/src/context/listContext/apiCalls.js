import axios from "axios";
import {
  createListFailure,
  createListStart,
  createListSuccess,
  deleteListFailure,
  deleteListStart,
  deleteListSuccess,
  getListsFailure,
  getListsStart,
  getListsSuccess,
} from "./ListActions"; 

export const getLists = async (dispatch) => {
  dispatch(getListsStart());
  try {
    const res = await axios.get("/lists", {
      headers: {
       token: 
                "Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDY4ZmFjNWY5NjlmYTMwMTQzNDI1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjYxNjcyMSwiZXhwIjoxNjgzMDQ4NzIxfQ.A9k037eeh2C9DY8J2sYcJA7LJlgX79Naa33WwQI9zpM"
      },
    });
    dispatch(getListsSuccess(res.data));
  } catch (err) {
    dispatch(getListsFailure());
  }
};

//create
export const createList = async (list, dispatch) => {
  dispatch(createListStart());
  try {
    const res = await axios.post("/lists", list, {
      headers: {
       token: 
                "Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDY4ZmFjNWY5NjlmYTMwMTQzNDI1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjYxNjcyMSwiZXhwIjoxNjgzMDQ4NzIxfQ.A9k037eeh2C9DY8J2sYcJA7LJlgX79Naa33WwQI9zpM"
      },
    });
    dispatch(createListSuccess(res.data));
  } catch (err) {
    dispatch(createListFailure());
  }
};

//delete
export const deleteList = async (id, dispatch) => {
  dispatch(deleteListStart());
  try {
    await axios.delete("/lists/" + id, {
      headers: {
       token: 
                "Barer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0NDY4ZmFjNWY5NjlmYTMwMTQzNDI1ZSIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY4MjYxNjcyMSwiZXhwIjoxNjgzMDQ4NzIxfQ.A9k037eeh2C9DY8J2sYcJA7LJlgX79Naa33WwQI9zpM"
      },
    });
    dispatch(deleteListSuccess(id));
  } catch (err) {
    dispatch(deleteListFailure());
  }
};