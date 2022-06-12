
import { useSelector } from 'react-redux';
import { useState } from 'react';

export const HomePageManager = ({ history }) => {

    //טעינת הלקוח הנוכחי מהסטור
    const myCurrentUser = useSelector((store) => {
        debugger;
        console.log("myCurrentUser", store.Users.CurrentUser);
        return store.Users.CurrentUser;
    })

    const routeToSingers = () => {
        history.push({ pathname: "/AllSingers" })
    }
    const routeToAllMessage = (id) => {
        console.log("id",id);
        history.push({ pathname: "/AllMessage", props: { id } })
    }
    const routeToAllTypesPlan = () => {
        history.push({ pathname: "/AllTypesPlan" })
    }
    const routeToAllJudges = () => {
        history.push({ pathname: "/AllJudges" })
    }
    // const routeToAllSongs = () => {
    //     history.push({ pathname: "/AllSongs" })
    // }
    return <>
        <h1>HomePage Manager</h1>
        <input value="Judges" type="button" onClick={() => routeToAllJudges()}></input>
        <input value="Singers" type="button" onClick={() => routeToSingers()}></input>
        <input value="Message" type="button" onClick={() => routeToAllMessage(myCurrentUser.userId)}></input>
        <input value="TypesPlans" type="button" onClick={() => routeToAllTypesPlan()}></input>
        {/* <input value="Songs" type="button" onClick={()=>routeToAllSongs() }></input> */}
    </>

}