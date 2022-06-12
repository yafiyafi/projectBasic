import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {GetAllStepInPlanFromServer } from '../Redux/StepInPlan/StepInPlanThunk'

export const AllStepInPlans = (props) => {
    const myDispatch = useDispatch();

    //בעת טעינת הקומפוננטה- שליפת כל השלבים
    useEffect(async () => {
        try {
            let response = await GetAllStepInPlanFromServer(myDispatch);
            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    }, []);

    //שליפת כל השלבים מהסטור
    const AllStepInPlansFromStore = useSelector((store) => {
        console.log("store", store);
        console.log(store.StepInPlans.StepInPlans);
        return store.StepInPlans.StepInPlans;
    });
    function funcAllSongs(id){
        props.history.push({ pathname: "/AllSongs", props: { id } })
    }
    return <>
        <h1>All StepInPlans</h1>

        <table style={{ marginLeft: "250px" }}>
            <tr class="w3-white">
                <th>stepInPlanId</th>
                <th>planId</th>
                <th>stepInPlanStartDate</th>
                <th>stepInPlanEndDateToUploadSong</th>
                <th>stepInPlanEndDateToJudg</th>
                <th>stepInPlanEndDateToRating</th>
                <th>AllSongs</th>
            </tr>
            {/* מיפוי על כל השלבים מהסטור */}
            {
                AllStepInPlansFromStore && AllStepInPlansFromStore.map((item) => {
                    if(item.planId==props.location.props.id){
                        return <tr class="w3-hover-gray">
                            <td>{item.stepInPlanId}</td>
                            <td>{item.planId}</td>
                            <td>{item.stepInPlanStartDate}</td>
                            <td>{item.stepInPlanEndDateToUploadSong}</td>
                            <td>{item.stepInPlanEndDateToJudg}</td>
                            <td>{item.stepInPlanEndDateToRating}</td>
                            <td><input type="button" onClick={()=>funcAllSongs(item.stepInPlanId)}/></td>
                        </tr>
                    }
                })
            }
        </table>
    </>

}