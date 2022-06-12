import axios from "axios"
import { useDispatch } from "react-redux"
import {LoadGetAllStepInPlans} from './StepInPlanActions'

export const defaultURL = `https://localhost:44324/api/StepInPlan`

export const GetAllStepInPlanFromServer = async (dispatch) => {
    try {
        const AllStepInPlans = await axios.get(`${defaultURL}/GetAllStepInPlans`);
        await console.log(AllStepInPlans.data)
        await dispatch(LoadGetAllStepInPlans(AllStepInPlans.data))
        return AllStepInPlans.data;
    } catch (e) {
        console.log(e)
    }
}