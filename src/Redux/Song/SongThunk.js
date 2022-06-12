import axios from "axios"
import { LoadGetAllPlans } from "./SongActions"
import { LoadGetAllSongs } from "./SongActions"

export const defaultURL = `https://localhost:44324/api/Song`

export const GetAllSongsFromServer = async (dispatch) => {
    try {
        const AllSongs = await axios.get(`${defaultURL}/GetAllSongs`);
        await console.log(AllSongs.data)
        await dispatch(LoadGetAllSongs(AllSongs.data))
        return AllSongs.data;
    } catch (e) {
        console.log(e)
    }
}