import { useDispatch, useSelector } from 'react-redux';
import { GetCurrentUserByNameAndPassFromServer } from "../Redux/User/UserThunk";

export const Trylogin = ({history}) => {
    

    const dispatch = useDispatch();

    const funcCheckCurrentUser = async (e) => {
        debugger
        e.preventDefault()
        let FirstName=e.target["Fname"].value
        let LastName=e.target["Lname"].value
        let Password=e.target["Pass"].value
        let currentUser = await GetCurrentUserByNameAndPassFromServer(dispatch, "",LastName, FirstName, Password);
        debugger
        await console.log('current', currentUser);
        if (currentUser !== '' ) {//אם לקוח=לקוח קיים
            if (currentUser.typeOfUser == 4)
            {
                alert(`hello ${currentUser.userFirstName} מנהלת!!`);
                history.push({ pathname: "/HomePageManager" });

                // funcToHistory()
                // console.log(history);

                //ניתוב לדף הבית של המנהל
                // history.push({ pathname: "/AllUsers" });
            }

        }
        else {//לקוח חדש
            alert('Invalid Details!!, register!');
            //תצוגת טופס הרשמה
            //לא עשינו טופס הרשמה
        }
    }

    // const funcToHistory=()=>{
    //     history.push({ pathname: "/HomePageManager" });

    // }

    // funcCheckCurrentUser אין צורך בפונקצייה זאת- שולחות ישר לפונקצייה

    //שומרת באובייקט את הלקוח
    // const OkForm = event => {
    //     event.preventDefault();

    //     //myUser שמירת קלט המשתמש באובייקט 
    //     const myUser = {
    //         LName: event.target["Lname"].value,
           
    //         FName: event.target["Fname"].value,
    //         Pass: event.target["defaultFormPasswordEx"].value
    //     }
    //     console.log(typeof(LName));
    //     console.log("ppp", myUser);
    //     console.log(myUser.FName);
    //     debugger
    //     funcCheckCurrentUser(event.target["Lname"].value, event.target["Fname"].value, event.target["defaultFormPasswordEx"].value);
    // }


    return <>

        <form onSubmit={(e) => { funcCheckCurrentUser(e) }}>

            <label>
                Enter Your Lname
            </label>
            <input
                type="text"
                // id="defaultFormEmailEx"
                id="Lname"

            />
            <label
            >
                Enter Your Fname
            </label>
            <input
                type="text"
                // id="defaultFormEmailEx"
                id="Fname"
            />

            <label

            >
                Enter Your password
            </label>
            <input
                type="password"
                id="Pass"
                // onChange={(e) => isIsraeliIdValid(e)}
            />
            <button type='submit'>Login</button>

        </form>
    </>
}