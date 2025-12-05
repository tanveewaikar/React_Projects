import React from 'react'
import { useState } from 'react'


export default function TextForm(props) {
    // To convert text in upperCase
    const upperCaseText = ()=>{
        // console.log("handle up clicked" +text);
        let newText = text.toUpperCase ();
        setText(newText)
    }

    // To convert text in lowerCase
    const lowerCaseText = () =>{
      let newText = text.toLowerCase()
      setText(newText)
    }
    const previewText = () => {
      setPreview(text);   // take current text and save it in preview state
   };
  

    const handleOnChange = (event)=>{
    //   console.log("on chnage ")
      setText(event.target.value)
    }
    const[text, setText] = useState("")
    const [preview, setPreview] = useState("");
    
    
  return (
    <>
      <div className='container'>
        <h1>{props.heading}</h1>
        <div className ="mb-3">
         <textarea className ='form-control' value = {text} onChange={handleOnChange} id='myBox'rows='8'/>
        </div>
         <button type="button" className="btn btn-primary mx-1" onClick={upperCaseText}>Convert to uppercase</button>
         <button type="button" className="btn btn-primary mx-1" onClick={lowerCaseText}>Convert to lowercase</button>
      </div>
      <div className='container my-4'>
        <h2>Your Text summary</h2>
        <p>{text.split(" ").length} Words {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minitues to read </p>
        <button type="button" className="btn btn-primary mx-1" onClick={previewText}>Preview</button>
        {preview.length > 0 && (
         <>
          <p>{preview}</p>
         </>
        )}
      </div>
    </>
  )
}
