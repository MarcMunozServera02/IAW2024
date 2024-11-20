import {useState} from "react";
import {evaluate} from "mathjs";
import "./App.css";
import Alert from "./components/Alert.jsx";
import Button from "./components/Button.jsx";
import Input from "./components/Input.jsx";

export default function App(){
  const [text, setText] = useState("");
  const [result, setResult] = useState("0");  
  const [alert, setAlert] = useState({ show: false});

  function addActionKey(val){
    const actionKeys = ["+","-","/","*","."];
    const lastChar = text.charAt(text.length-1);

    if(!actionKeys.includes(lastChar)) setText(text => text + val);
    else handleAlert({ type:"danger", text:"Can't add 2 action keys"})
  }

  function addToText(val){
    setText(text => text + val);
  }
  
  function handleAlert({type, text}){
    setAlert({show: true, type, text});
    setTimeout(()=> {
      setAlert({show:false});
    }, 3000);
  }
  
  function resetInput(){
    setText("");
    setResult("0");
  }

  function calculateResult() {
    try {
      let tempText = text.toString().replace(" ", "");
      let rawResult = evaluate(tempText);
  
      // Format the result to avoid trailing zeros
      let formattedResult = Number.isInteger(rawResult)?
        rawResult:parseFloat(rawResult.toFixed(4));
  
      setResult(formattedResult);
    } catch (error) {
      handleAlert({ type: "danger", text: "Invalid input" });
      setText("");
    }
  }

  return (
    <div className="App">
      <div className="calc-wrapper">
        {alert.show && <Alert type={alert.type} text={alert.text}/>}
        <Input text={text} result={result}/>
        <div className="row">     
        <Button symbol="7" handleClick={addToText}/>
        <Button symbol="8" handleClick={addToText}/>
        <Button symbol="9" handleClick={addToText}/>
        <Button symbol="/" color="orange" handleClick={addActionKey}/>
        </div>       
        <div className="row">     
        <Button symbol="4" handleClick={addToText}/>
        <Button symbol="5" handleClick={addToText}/>
        <Button symbol="6" handleClick={addToText}/>
        <Button symbol="*" color="orange" handleClick={addActionKey}/>
        </div>       
        <div className="row">     
        <Button symbol="1" handleClick={addToText}/>
        <Button symbol="2" handleClick={addToText}/>
        <Button symbol="3" handleClick={addToText}/>
        <Button symbol="+" color="orange" handleClick={addActionKey}/>
        </div>       
        <div className="row">     
        <Button symbol="0" handleClick={addToText}/>
        <Button symbol="." handleClick={addActionKey}/>
        <Button symbol="=" handleClick={calculateResult}/>
        <Button symbol="-" color="orange" handleClick={addActionKey}/>
        </div>
        <Button symbol="Clear" color="red" handleClick={resetInput}/>
      </div>
    </div>
  )




}