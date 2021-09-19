import React from 'react'
import { sha256 } from 'js-sha256';

export default function TextArea(props) {

    const onChange = (event) => {
        console.log(event.target.value);
        if(event.target.value === ''){
            props.setResult("Write something!!")
        }
        else{
            let encoded = sha256(event.target.value);
            props.setResult(encoded);
        }
        
    }

    const copyText = () =>{
        navigator.clipboard.writeText(props.result);
    }

    return (
        <div>
            <div className="container mb-3 my-3">
                <div className="input-group input-group-lg ">
                    <span className="input-group-text" id="inputGroup-sizing-lg">Input</span>
                    <textarea rows="1" id="inputText" type="text" onChange={onChange} className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                </div>
            </div>

            <ul class="list-group mb-4 my-4 -lg">
                <li class="list-group-item list-group-item-info">{props.result}</li>
            </ul>
            <button type="button" onClick={copyText} class="btn btn-warning">Copy to ClipBoard</button>

        </div>
    )
}
