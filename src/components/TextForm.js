import React, {useState} from 'react'

export default function TextForm(props){
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClear = ()=>{
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    };


    const [text, setText] = useState('');
    return (
        <>
            <div className='container'>
                <div className="mb-3">
                    <h1>{props.heading}</h1>
                    <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                </div>
                <button type="submit" className="btn btn-primary" onClick={handleUpClick} >Convert to Uppercase</button>
                <button type="submit" className="btn btn-primary mx-3" onClick={handleLowClick} >Convert to Lowercase</button>
                <button type="submit" className="btn btn-primary mx-3" onClick={handleClear} >Clear</button>
            </div>
            <div className='containner my-3'>
                <h1>Your Summery</h1>
                <p>{text.split(" ").length} words and {text.length} characters</p>
                <p>{0.08 * text.split(" ").length} munites to read your text</p>
                <h2>Preview</h2>
                <p>{text}</p>

            </div>
        </>
  )
}


