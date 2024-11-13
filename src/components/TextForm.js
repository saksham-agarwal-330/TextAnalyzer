import React,{useState} from 'react'

export default function TextForm(props) {
    const[Text,setText]=useState('');
    const [isSpeaking, setIsSpeaking] = useState(false);

    const ClearText=()=>{
        let newText='';
        setText(newText)
      props.showAlert("Text Cleared!","success");
    }
    const UppercaseText=()=>{
        let newText=Text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase!","success");
    }
    const LowercaseText=()=>{
        let newText=Text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase!","success");
    }
    const CopyText=()=>{
        navigator.clipboard.writeText(Text);
        props.showAlert("Text Copied!","success");
    }
    const RemoveExtraSpaces=()=>{
        let newText=Text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces Removed!","success");
    }
    const TextToSpeak = () => {
        if (isSpeaking) {
          // Stop speaking
          window.speechSynthesis.cancel();
          setIsSpeaking(false);
          props.showAlert('Speech stopped!', 'warning');
        } else {
          // Start speaking
          let speakText = new SpeechSynthesisUtterance(Text);
          speakText.onend = () => {
            setIsSpeaking(false); // Reset button when speech ends
          };
          window.speechSynthesis.speak(speakText);
          setIsSpeaking(true);
          props.showAlert('Speaking!', 'success');
        }
      };
    const handleonChange=(event)=>{
        setText(event.target.value);
    }
  return (
    <>
    <div className="container" style={{color:props.mode==='dark'?'white':'black'}}>
        <h1>{props.heading}</h1>
        <div className="mb-3">
            <textarea className="form-control" onChange={handleonChange} value={Text} style={{backgroundColor:props.mode==='dark'?'#1b1b26':'white',color:props.mode==='dark'?'white':'black'}} id="textbox" rows="8"></textarea>
        </div>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={UppercaseText}>Uppercase</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={LowercaseText}>Lowercase</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={CopyText}>Copy Text</button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={RemoveExtraSpaces}>Remove Extra Spaces</button>
        <button disabled={Text.length === 0 && !isSpeaking} className={`btn mx-1 my-1 ${isSpeaking ? 'btn-danger' : 'btn-primary'}`} onClick={TextToSpeak} >
        {isSpeaking ? 'Stop' : 'Speak'} </button>
        <button disabled={Text.length===0} className="btn btn-primary mx-1 my-1" onClick={ClearText}>Clear</button>
    
    </div>
    <div className="container my-3" style={{color:props.mode==='dark'?'white':'black'}}>
        <h2>Your Text Summary</h2>
        <p>{Text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {Text.length} characters</p>
        <p>{0.008 *Text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
        <h2>Preview</h2>
        <p>{Text.length>0?Text:"Nothing to preview!"}</p>
    </div>
    </>
  )
}