import { useState } from "react"



export default function About(props) {

  // const [mytext,setMytext] = useState(
  // {
  //     color:'black',
  //     backgroundColor:'white',
  //   })


  let mytext = {
    color : props.mode ==='dark' ? 'white' : '#042743',
    backgroundColor :  props.mode ==='dark' ? 'rgb(6 85 147)' : 'white',
    // border:'1px solid white'
  }
    
    // const [btntext,setbtntext] = useState('To Dark Mode')
    
  //   let changemode=() =>{
  //     if(mytext.color==='black'){
  //       setMytext({
  //         color : 'white',
  //         backgroundColor:'black',
  //         border:'2px solid white'
        
  //     })
  //     setbtntext('To Light Mode')
  //   }
    
  //   else{
  //     setMytext({
  //       color : 'black',
  //       backgroundColor:'white'
        
  //     })
  //     setbtntext('To Dark Mode')
      
      
  //   }
  // }

  return (
    <>
<div className='container my-5'style={{color : props.mode ==='dark' ? 'white' : '#042743'}}>
    <h1>About Us</h1>


 <div className="accordion" id="accordionPanelsStayOpenExample" >
  <div className="accordion-item" >
    <h2 className="accordion-header">
      <button className="accordion-button " type="button" data-bs-toggle="collapse" style={mytext} data-bs-target="#panelsStayOpen-collapseOne" aria-expanded="true" aria-controls="panelsStayOpen-collapseOne">
        <b>Analyze Your text</b>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseOne" className="accordion-collapse collapse show" style={mytext}>
      <div className="accordion-body" >
        TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count , character count 
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={mytext}data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="false" aria-controls="panelsStayOpen-collapseTwo">
        <b>Free to use</b>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse" style={mytext}>
      <div className="accordion-body">
        TextUtils is a free character count tool that provides instant character count & word count statistics for a given text. TextUtils reports the number of words and characters.Thua it is suitable for writing text with word / character limit .
      </div>
    </div>
  </div>


  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" style={mytext}data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="false" aria-controls="panelsStayOpen-collapseThree">
        <b>Browser Compatible</b>
      </button>
    </h2>
    <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse"style={mytext} >
      <div className="accordion-body">
        This word counter software works in any web browsers such as Chrome, firefox, Internet Explorer, Safari, Opera. It suits to count characters in facebook, blog, books,excel document, pdf document, essays, etc.
      </div>
    </div>
  </div>



 </div>
{/* 
 <div className="con  my-3">
 <button type="button" className="btn btn-success" onClick={changemode}>{btntext}</button>
 </div> */}

 </div>

    </>
  )
}
