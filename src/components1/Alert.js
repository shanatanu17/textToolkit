import React from 'react'

export default function Alert(props) {

  const capatalize=(str)=>{
    let newword = str.toLowerCase();
    return newword.charAt(0).toUpperCase() + newword.slice(1);
  }
  return (


    
         <div style={{height: '50px'}}>
      {props.alert &&  <div className="alert alert-success alert-dismissible fade show"  role="alert">
               {/* <strong>{props.alert.type} : {props.alert.mesg}</strong> */}
               <strong>{capatalize(props.alert.type)}</strong> : {props.alert.message} 
                
          </div>}
      </div>
            
  )
}
