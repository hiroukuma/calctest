import React, {useState, useRef} from "react";
import CalcItem from "./component/CalcItem";
import {rand} from "./Util.js";
import Select from 'react-select';
import Button from "./component/Button";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [level, setLevel] = useState("");
  const [items, setItems] = useState([]);
  const [point, setPoint] = useState(0);
  const [answerCnt, setAnswerCnt] = useState(0);
  const [correct, setCorrect] = useState([]);
  const [disable, setDisable] = useState(false);

  const itemRef = useRef([]);

  const levels= [
    { value: "", label: "추가할 문제를 선택하세요." },
    { value: "lv11", label: "2자리수 더하기 1자리수" },
    { value: "lv13", label: "2자리수 더하기 2자리수" },
    { value: "lv12", label: "2자리수 빼기 1자리수" },
    { value: "lv14", label: "2자리수 빼기 2자리수" },
    { value: "lv21", label: "3자리수 더하기 3자리수" },
    { value: "lv22", label: "3자리수 더하기 2자리수" },
    { value: "lv31", label: "3자리수 빼기 3자리수" },
    { value: "lv32", label: "3자리수 빼기 2자리수" },
    { value: "lv50", label: "구구단" },
    { value: "lv51", label: "2자리수 곱하기 1자리수" },
    { value: "lv52", label: "2자리수 곱하기 2자리수" },
    { value: "lv61", label: "2자리수 나누기 1자리수 (나머지 X)" },
    { value: "lv62", label: "2자리수 나누기 1자리수 (나머지 O)" },
    { value: "lv65", label: "3자리수 나누기 1자리수 (나머지 X)" },
    { value: "lv66", label: "3자리수 나누기 1자리수 (나머지 O)" },
    { value: "lv67", label: "3자리수 나누기 2자리수 (나머지 X)" },
    { value: "lv68", label: "3자리수 나누기 2자리수 (나머지 O)" }
  ];

  const onChange = (e) => {
    setLevel(e);
  }

  function parentCallback(index, answer) {
    const updateCorrect = [...correct];
    
    if(items[index].answer[0] === answer[0] &&
       items[index].answer[1] === answer[1] ) {
      updateCorrect[index] = "O";
    }
    else {
      updateCorrect[index] = "X";
    }

    setCorrect(updateCorrect);
    setAnswerCnt(correct.length);
  }

  const addItem = () => {
    let firstNumber = 0;
    let secondNumber = 0;
    let sign = "";
    let answer = 0;

    switch(level.value) {
        case "lv11" :
            firstNumber = rand(11, 99);
            secondNumber = rand(3, 9);
            sign = "+";
            answer = [firstNumber + secondNumber, 0];
            break;
        case "lv12" :
            firstNumber = rand(11, 99);
            secondNumber = rand(3, 9);
            sign = "-";
            answer = [firstNumber - secondNumber, 0];
            break;
        case "lv13" :
          firstNumber = rand(11, 99);
          secondNumber = rand(11, 99);
          sign = "+";
          answer = [firstNumber + secondNumber, 0];
          break;
        case "lv14" :
          while((firstNumber = rand(11, 99)) < (secondNumber = rand(11, 99))) {}
          sign = "-";
          answer = [firstNumber - secondNumber, 0];
          break;
        case "lv21" :
            firstNumber = rand(111, 999);
            secondNumber = rand(111, 999);
            sign = "+";
            answer = [firstNumber + secondNumber, 0];
            break;
        case "lv22" :
            firstNumber = rand(111, 999);
            secondNumber = rand(11, 99);
            sign = "+";
            answer = [firstNumber + secondNumber, 0];
            break;
        case "lv31" :
            while((firstNumber = rand(111, 999)) < (secondNumber = rand(111, 999))) {}
            sign = "-";
            answer = [firstNumber - secondNumber, 0];
            break;
        case "lv32" :
            firstNumber = rand(111, 999);
            secondNumber = rand(11, 99);
            sign = "-";
            answer = [firstNumber - secondNumber, 0];
            break;
        case "lv50" :
            firstNumber = rand(2, 9);
            secondNumber = rand(3, 9);
            sign = "X";
            answer = [firstNumber * secondNumber, 0];
            break;
        case "lv51" :
            firstNumber = rand(11, 99);
            secondNumber = rand(3, 9);
            sign = "X";
            answer = [firstNumber * secondNumber, 0];
            break;
        case "lv52" :
            firstNumber = rand(11, 99);
            secondNumber = rand(11, 99);
            sign = "X";
            answer = [firstNumber * secondNumber, 0];
            break;
        case "lv61" :
          firstNumber = rand(13, 99);
          secondNumber = rand(3, 9);

          while(0 < (firstNumber % secondNumber)) {
            firstNumber = rand(13, 99);
            secondNumber = rand(3, 9);
          }

          sign = "/";
          answer = [parseInt(firstNumber / secondNumber), 0];
          break;
        case "lv62" :
          firstNumber = rand(13, 99);
          secondNumber = rand(3, 9);
          
          while(0 === (firstNumber % secondNumber)) {
            firstNumber = rand(13, 99);
            secondNumber = rand(3, 9);
          }
          
          sign = "/";
          answer = [parseInt(firstNumber / secondNumber), firstNumber % secondNumber];
          break;
        case "lv65" :
          firstNumber = rand(101, 999);
          secondNumber = rand(3, 9);
          
          while(0 < (firstNumber % secondNumber)) {
            firstNumber = rand(101, 999);
            secondNumber = rand(3, 9);
          }

          sign = "/";
          answer = [parseInt(firstNumber / secondNumber), 0];
          break;
        case "lv66" :
          firstNumber = rand(101, 999);
          secondNumber = rand(3, 9);
          
          while(0 === (firstNumber % secondNumber)) {
            firstNumber = rand(101, 999);
            secondNumber = rand(3, 9);
          }

          sign = "/";
          answer = [parseInt(firstNumber / secondNumber), firstNumber % secondNumber];
          break;
        case "lv67" :
          firstNumber = rand(101, 999);
          secondNumber = rand(11, 99);
          
          while(0 < (firstNumber % secondNumber)) {
            firstNumber = rand(101, 999);
            secondNumber = rand(11, 99);
          }

          sign = "/";
          answer = [parseInt(firstNumber / secondNumber), 0];
          break;
        case "lv68" :
          firstNumber = rand(101, 999);
          secondNumber = rand(11, 99);
          
          while(0 === (firstNumber % secondNumber)) {
            firstNumber = rand(101, 999);
            secondNumber = rand(11, 99);
          }

          sign = "/";
          answer = [parseInt(firstNumber / secondNumber), firstNumber % secondNumber];
          break;
        default :
            break;
    }

    setItems((currentArray) => [{sign, firstNumber, secondNumber, answer}, ...currentArray]);    
  }

  const doTest = () => {
    setDisable(true);
  }

  const doGrading = () => {
    let nCorrect = 0;

    console.log( itemRef.length );

    for(let i =0; i < correct.length; i++) {
      if ( correct[i] === "O" ) {
        ++nCorrect;       
        itemRef.current[i].style = "background-color:#fff";
      } else {
        itemRef.current[i].style = "background-color:red";
      }
    }

    setPoint(() => 100 / items.length * nCorrect );    
  }
  
  return (
    <div className="screen_body">
      <div className="header_outer">
        <div className="header">
            <div className="left" disabled={disable}>
                <Select value={level} options={levels} onChange={onChange} id="items"/>
            </div>
            <div className="right">
              <Button text={"문제추가"} onClick={addItem} disable={disable}/>
              <Button text={"START!"} onClick={doTest} disable={disable}/>
              <Button text={"채점하기"} onClick={doGrading} />
            </div>
        </div>
        <hr />
      </div>
      <div className="item_container_outer">
        <div className="item_container_scroll">
          <div className="item_container">
          {
            items.map((item, index) => (
              <CalcItem ref={el => (itemRef.current[index] = el)} key={index} index={index} item={item} callback={parentCallback} />
            ))
          } 
          </div>
        </div>
      </div>
      <div className="footer">
        <div className="item_info">문제 : {answerCnt} / {items.length}</div>
        <div className="point_info">점수 : {point}</div>
      </div>
    </div>    
  );
}

export default App;
