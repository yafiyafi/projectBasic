
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetAllSongsFromServer } from '../Redux/Song/SongThunk';


export const AllSongs = (props) => {

    const myDispatch = useDispatch();

    useEffect(async () => {
        try {
            let response = await GetAllSongsFromServer(myDispatch);
            console.log(response);
        } catch (error) {
            console.error(error.message);
        }
    }, []);

    //שליפת כל השירים מהסטור
    const AllSongsFromStore = useSelector((store) => {
        console.log("store", store);
        console.log(store.Songs.Songs);
        return store.Songs.Songs;
    });


    return <>
        <h1>All Songs</h1>

        <table style={{ marginLeft: "250px" }}>
            <tr class="w3-white">
                <th>SongId</th>
                <th>UserId</th>
                <th>StepInPlanId</th>
                <th>SongName</th>
                <th>SongFile</th>
                <th>SongChoosingReason</th>
                <th>SongComposer</th>
                <th>SongPrecessor</th>
                <th>SongStatus</th>
                <th>SongComment</th>
            </tr>
            {/* מיפוי על כל השירים מהסטור */}
            {
                AllSongsFromStore && AllSongsFromStore.map((item) => {
                if(item.stepInPlanId==props.location.props.id){
                    return <tr class="w3-hover-gray">
                        <td>{item.songId}</td>
                        <td>{item.userId}</td>
                        <td>{item.stepInPlanId}</td>
                        <td>{item.songName}</td>
                        <td>{item.songFile}</td>
                        <td>{item.songChoosingReason}</td>
                        <td>{item.songComposer}</td>
                        <td>{item.songPrecessor}</td>
                        <td>{item.songStatus}</td>
                        <td>{item.songComment}</td>
                    </tr>
                }
                })
            }
        </table>|
    </>
}