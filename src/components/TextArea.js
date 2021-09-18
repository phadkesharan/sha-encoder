import React from 'react'

export default function TextArea() {
    return (
        <div>
            <div className="container mb-3 my-3">
                <div className="input-group input-group-lg ">
                    <span className="input-group-text" id="inputGroup-sizing-lg">Input</span>
                    <textarea rows="2" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                </div>
            </div>

            <div className="container mb-3 my-3">
                <div className="input-group input-group-lg">
                    <span className="input-group-text" id="inputGroup-sizing-lg">Output</span>
                    <textarea rows="2" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-lg" />
                </div>
            </div>

        </div>
    )
}
