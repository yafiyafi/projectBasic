import axios from "axios"
import { LoadGetAllPlans } from "./PlanActions"

export const defaultURL = `https://localhost:44324/api/Plan`

export const GetAllPlansFromServer = async (dispatch) => {
    try {
        const AllPlans = await axios.get(`${defaultURL}/GetAllPlans`);
        await console.log(AllPlans.data)
        await dispatch(LoadGetAllPlans(AllPlans.data))
        return AllPlans.data;
    } catch (e) {
        console.log(e)
    }
}