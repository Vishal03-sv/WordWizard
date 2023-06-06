import React, { useState } from 'react';

var TextForm = (props) => {
    const handelUpClick = () =>{
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted to upper case","success")
    }
    const handelLoClick = () =>{
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted to lower case","success")
    }
    const handelClsClick = () =>{
        let newText = ''
        setText(newText)
        props.showAlert("Successfully! Box is cleared","success")
    }
    const handelCopy = () =>{
        let Text = document.getElementById("myBox")
        Text.select()
        navigator.clipboard.writeText(Text.value)
        props.showAlert("Copied to clipboard","success")
    }
    const handelExtSpc = () =>{
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removed extra spaces","success")
    }

    const handelOnChange = (event) =>{
        setText(event.target.value)
    }
    

    const [text, setText] = useState('')

    return (
        <>
        <div className='container' style={{color : props.mode==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
            <textarea className="form-control" id='myBox' style={{backgroundColor : props.mode==='dark'?'grey':'white' ,color: props.mode==='dark'?'white':'#042743'}} onChange={handelOnChange} value={text} rows="8"></textarea>
            </div>
            <button onClick={handelUpClick} className='btn btn-primary mx-1'>Convert to Upper Case</button>
            <button onClick={handelLoClick} className='btn btn-primary mx-1'>Convert to Lower Case</button>
            <button onClick={handelClsClick} className='btn btn-primary mx-1'>Clear Text</button>
            <button onClick={handelCopy} className='btn btn-primary mx-1'>Copy Text</button>
            <button onClick={handelExtSpc} className='btn btn-primary mx-1'>Remove extra spaces</button>
        </div>
        <div className='container my-3' style={{color : props.mode==='dark'?'white':'042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} Words and {text.length} characters</p>
            <p>You can read the above text in {0.0008*text.split(" ").length} minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the text box above to preview it here"}</p>
        </div>
        </>);
}

export default TextForm;
