import React,{useState} from "react";
import "./App.css";
// import questions from "./questions";
// import Result from "./components/Result";
import QuestionBox from "./components/QuestionBox";

export const ToggleTheme=React.createContext()

function App() {


  const [state,setState]=useState(true)
  const handleToggle=()=>{
    setState(state=>!state)
  }
//   useEffect(() => {
//     reset();
// }, []);

  return (
    <ToggleTheme.Provider value={state}>
      <div className="h1">
      <h1>Kalvium</h1>
      </div>
      <div className="div">
      <button className="click" onClick={handleToggle}>Light</button>
      </div>
    <div>
      <QuestionBox/>
      {/* <button onClick={()=>reset()}></button> */}
    </div>
    </ToggleTheme.Provider>
  );
}

export default App;