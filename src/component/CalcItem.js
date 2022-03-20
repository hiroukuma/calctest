import React, {useState, forwardRef} from "react";
import {getNumber} from "../Util";
import "./CalcItem.css";

function CalcItem(props, ref) {
    const [value, setValue] = useState("");
    const [remain, setRemain] = useState("");

    const onChange = (e) => {
        setValue(e.target.value);
        props.callback(props.index, [getNumber(e.target.value), getNumber(remain)]);
    }    

    const onChangeRemain = (e) => {
        setRemain(e.target.value);
        props.callback(props.index, [getNumber(value), getNumber(e.target.value)]);
    } 
    
    if ( props.item.sign !== "/" ) {
        return (
            <div className="item-outer">
                <div className="item-inner" ref={ref}>
                    <div>
                        <div className="item-top item-font">{props.item.firstNumber}</div>
                    </div>
                    <div style={{display: "flex"}}>
                        <div className="item-sign item-font">{props.item.sign}</div>
                        <div className="item-right item-font">{props.item.secondNumber}</div>
                    </div>
                    <div>
                        <input className="item-font" type="number" value={value} onChange={onChange}/>
                    </div>            
                </div>
            </div>
        )
    } else {
        return (
            <div className="item-outer">
                <div className="item-inner" ref={ref}>
                    <div>
                        <div className="item-top item-font">{props.item.firstNumber} ÷ {props.item.secondNumber}</div>
                    </div>
                    <div>
                        <div>
                            <input className="item-font" type="number" value={value} onChange={onChange} placeholder="몫"/>
                        </div>
                        <div className="item-answer-bottom">
                            <input className="item-font" type="number" value={remain} onChange={onChangeRemain} placeholder="나머지"/>
                        </div>
                    </div>
                    <div>
                        
                    </div>            
                </div>
            </div>
        )
    }   

    //{item.firstNum}
            //{item.sign === 1 ? "X" : "*"}
            //{item.secondNum}=
            //<input type="number" value={value} onChange={onChange}/>
}

export default forwardRef(CalcItem);