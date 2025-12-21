import React, { useState } from "react";

export default function AboutUs() {
    const [myStyle,setMyStyle] = useState({
        color :"black",
        backgroundColor : "white"
    })
    const [btnText, setBtnText]= useState("Enable Dark Mode")

    const styleChange = ()=>{
        if(myStyle.color==="black"){
        setMyStyle({
            color :"white",
            backgroundColor:"black"
        });
        setBtnText("Enable Light Mode")
        }
        else{
            setMyStyle({
            color :"black",
            backgroundColor : "white"
            })
        setBtnText("Enable Dark Mode")
        }
    }
  return (
    <>
      <div className="container" style={myStyle}>
        <div>
          <h1 className="mt-2">About TextUtils</h1>
          <p>
            <strong>TextUtils</strong> is a simple and efficient text utility web
            application designed to help users analyze and transform text
            easily.
          </p>
        </div>
        <div className="mt-2">
          <h1>Features</h1>
          <ul>
            <li>Convert text to Uppercase and Lowercase</li>
            <li>Word, character, sentence, and paragraph count</li>
            <li>Estimated reading time calculation</li>
            <li>Text preview before final use</li>
            <li>Clean and user-friendly interface</li>
          </ul>
        </div>
        <div className="mt-2">
          <p>
            TextUtils is useful for students, writers, and developers who work
            with text regularly and want quick insights without using multiple
            tools.
          </p>
        </div>
        <div className="mt-2">
          <h4>Technology Used</h4>
          <ul>
            <li>React.js</li>
            <li>JavaScript (ES6)</li>
            <li>HTML5</li>
            <li>CSS / Bootstrap</li>
          </ul>
        </div>
        <div className="mt-2">
          <h4>Developer</h4>
          <p>
            This project is developed by <strong>Tanvee Mohan Waikar</strong> as
            part of learning React.js and frontend development.
          </p>
        </div>
      </div>
      <button type="button" className="btn btn-primary ms-3 " onClick={styleChange}>{btnText}</button>
    </>
  );
}
