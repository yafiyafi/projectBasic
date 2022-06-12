import './App.css';
import './bootstrap.css'
import { BrowserRouter, Redirect, Route, Link } from 'react-router-dom';
import { HomePage } from './Components/HomePage';
import { LoginForm } from './Components/LoginForm'
import { Trylogin } from './Components/Trylogin';
import { AllUsers } from './Components/AllUsers';
import { AllJudges } from './Components/AllJudges';
import { AllSingers } from './Components/AllSingers';
import { AllSongs } from './Components/AllSongs';
import { AllTypesPlan } from './Components/AllTypesPlan';
import { AllMessage } from './Components/AllMessage';
import {HomePageManager} from './Components/HomePageManager';
import {AllPlans} from './Components/AllPlans';
import { AllStepInPlans } from './Components/AllStepInPlans';
import GestMenue from './Components/GestMenue';
import ScrollableTabsButtonForce from './Components/Tabs';
import AlertPage from './Components/Alert';


function App() {
  return (

    // <div className="App">
    //   <header className="App-header">
<div >

        <BrowserRouter>
        {/* <AlertPage></AlertPage> */}
      <ScrollableTabsButtonForce></ScrollableTabsButtonForce>
      
        <Route path="/gest" component={GestMenue}  children={<HomePage/>,<Trylogin/>}> </Route>
          <Route path="/HomePage" component={HomePage}></Route>
 <Route path="/LoginForm" component={LoginForm}></Route>
          <Route path="/Trylogin" component={Trylogin} ></Route>
          <Route path="/AllJudges" component={AllJudges} ></Route>
          <Route path="/AllUsers" component={AllUsers} ></Route>
          <Route path="/AllMessage" component={AllMessage} ></Route>
          <Route path="/AllSingers" component={AllSingers} ></Route>
          <Route path="/AllTypesPlan" component={AllTypesPlan} ></Route>
          <Route path="/AllSongs" component={AllSongs} ></Route>
          <Route path="/HomePageManager" component={HomePageManager} ></Route>
          <Route path="/AllPlans" component={AllPlans} ></Route>
          <Route path="/AllStepInPlans" component={AllStepInPlans} ></Route>
          {/* <Route>{PageNotFound}</Route> */}
          {/* <Redirect from="/" to="/LoginForm" /> */}

          {/* <AllUsers></AllUsers> */}
          {/* <LoginForm></LoginForm> */}
          {/* <Trylogin></Trylogin> */}
          {/* <AllJudges></AllJudges> */}
          {/* <AllSingers></AllSingers> */}
          {/* <HomePage></HomePage> */}
          {/* <AllSongs></AllSongs> */}
          {/* <AllTypesPlan></AllTypesPlan> */}
          {/* <AllMessage></AllMessage> */}
        </BrowserRouter>
       </div>
    //   </header>

    // </div>

  );
}

// //ניווט ברירת מחדל לדף הבית
// function PageNotFound() {
//   return <div>
//     <h1>PageNotFound</h1>
//     <Link to='/HomePage' >
//       <button>HOME</button>
//     </Link>
//   </div>
// }

export default App;

