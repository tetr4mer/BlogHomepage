import './App.css';
import {useState} from "react"; 
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"

//Importing Screens
import PostsBench from "./screens/PostsBench";
import PostScreen from "./screens/PostScreen";
import TechnicalNotesScreen from "./screens/TechnicalNotesScreen";


//Components
import Top from "./components/Top";
import Backdrop from './components/Backdrop';
import SideDrawer from './components/SideDrawer';


function App() {
  const [sideToggle, setSideToggle] = useState (false);

  return (
  
   <Router>
      <Top show = {sideToggle} click={() => setSideToggle(true)} />
      <Backdrop show={sideToggle} click={() => setSideToggle(false)} /> 
      <SideDrawer show={sideToggle} click={() => setSideToggle(false)}/>

    <main>
      <Routes>
          <Route path="/" element = { <PostsBench/> } />
          <Route path="post/:id" element = { <PostScreen/> } />
          <Route path="/technicalnotes" element = { <TechnicalNotesScreen/> } />
          <Route path="/generaltech" element = { <PostsBench/> } />
      </Routes>
    </main>
  
  {/*HomeScreen */}

  {/*Search Screen to view all Searches */}
  {/*Individual Search ID Screen to view individual Searches */}
  {/*CartScreen type where you can 1.) choose/gather relevant interesting searches/resources 2.) Option to download to your own bookmark folder */}
  
  </Router>
 
  );  
}

export default App;
