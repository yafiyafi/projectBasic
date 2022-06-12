import axios from "axios"
import {LoadGetAllTypePlan} from './TypePlanActions'

export const defaultURL = `https://localhost:44324/api/TypePlan`

export const GetAllTypePlanFromServer = async (dispatch) => {
    try {
        const AllTypePlan = await axios.get(`${defaultURL}/GetAllTypePlans`);
        await console.log(AllTypePlan.data)
        await dispatch(LoadGetAllTypePlan(AllTypePlan.data))
        return AllTypePlan.data;
    } catch (e) {
        console.log(e)
    }
}