import { getPosts } from "./postsSlice";
import axios from "axios";

const URL_BASE = "http://localhost:3001"


export const getAllPosts = () => async (dispatch) =>{
    const allPosts = (await axios.get(`${URL_BASE}/publications`)).data
    console.log(allPosts, "KLÑDSKLFDGJDFDFKLJG2345")
    dispatch(getPosts(allPosts))

}