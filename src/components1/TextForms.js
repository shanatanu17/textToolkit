import { setSelectionRange } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react"


export default function TextForms(props) {

    const handleUpcase=  () =>{
        // console.log("Uppercase clicked");
        let newtext = text.toUpperCase();
        setText(newtext);
        props.displayalert("Text has been converted to UpperCase","success");
    }

    const handleLocase=  () =>{
        // console.log("Lowercase clicked");
        let newtext = text.toLowerCase();
        setText(newtext);
        props.displayalert("Text has been converted to LowerCase","success");
    }

    const handleOnChange=  (event) =>{
        // console.log("on changed");
        setText(event.target.value)
    }

    const handlecopy=()=>{
        var text = document.getElementById("mytext")
        text.select();
        navigator.clipboard.writeText(text.value);

    }

    const handleExtraspaces =()=>{
        let newtext1= text.split(/[ ]+/)
        setText(newtext1.join(" "))
    }
  
    const[text,setText ]= useState('');
    return (

        <>

    <div className="container" >
          
        <h1>{props.heading}</h1>
         <div className = "mb-3">
        
        <textarea   value={text} onChange={handleOnChange} className ="form-control" rows="8" id="mytext"style={{backgroundColor : props.mode==='dark'? '#9696a7' :'white' }}> </textarea>
         </div>

         <button disabled={text.length===0} className="btn btn-success mx-1 my-1"  onClick={handleUpcase}> Covert to UpperCase</button>

           
         <button   disabled={text.length===0}className="btn btn-success mx-1 my-1"  onClick={handleLocase}> Covert to LowerCase</button>

         <button   disabled={text.length===0}className="btn btn-success mx-1 my-1"  onClick={handlecopy}> Copy Text</button>

         <button   disabled={text.length===0}className="btn btn-success mx-1 my-1"  onClick={handleExtraspaces}> Remove Extra Spaces</button>

         

         

    </div>

    <div className="Container my-3 mx-3"   >

        <h2>Your text summary</h2>
        <p>  {text.split(/\s+/).filter((element)=>{return element.length!==0;}).length} words and {text.length} characters</p>

        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0;}).length} Time to read text</p>
        <h2>Preview</h2>
        <p>{text.length>0 ? text : 'Nothing to preview'}</p>

    </div>

</>
    
  )
}
