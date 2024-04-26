import React,{ useState } from "react";

function Toggl() {
  const [click,setClick] =useState("OFF")
  function HandleClick(){
    if(click === "OFF"){
      setClick("ON")
      console.log(click)
      return(click)
    } else{
    setClick("OFF")
    console.log(click)
    return(click)
  }    
  }
  return <button onClick={HandleClick}>{click}</button>;
}
function Toggle() {
  const [isOn, setIsOn] = useState(false);
  let click ="OFF"
  function HandleClick(){
    setIsOn((isOn)=>!isOn)
    return(isOn)
  }
  return (
  <button onClick={HandleClick}>{ isOn ? "ON":"OFF"}</button>);
}
export default Toggle;
