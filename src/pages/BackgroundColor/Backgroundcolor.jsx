import React, { useContext, useState } from 'react'
import './Backgroundcolor.css'
import './../generalStyle.css'
import copyed from '../../func'
import { MainContext } from '../../components/Context/MainContextProvider'

export default function Backgroundcolor() {
    const [bgColor, setBgColor] = useState('#000')
    const { copyClickText, btnCopyTextChange } = useContext(MainContext)

    const handleChange = (e) => {
        setBgColor(e.target.value)
    }

    const bgColorCopyHandler = async () => {
        let text = `background-color: ${bgColor}`
        await copyed(text)
        btnCopyTextChange()
    }

    return (
        <div className='style_Container'>
            <span className='titr'>Background-color</span>
            <div className="top_box">
                <div className="preview_wraper">
                    <span>Preview</span>
                    <div style={{ backgroundColor: bgColor }} className='preview_box'></div>
                </div>
                <div className="copy_code_wraper">
                    <span>Code</span>
                    <div className="code_box">
                        <pre>
                            <span className='code_one'>background-color</span>
                            {': '}
                            <span className='code_three'>{bgColor}</span>
                            ;
                        </pre>
                    </div>
                    <button onClick={bgColorCopyHandler} className='copyBtn'>
                        {copyClickText ? 'Copied!' : 'Copy'}
                    </button>
                </div>
            </div>
            <div className="option_wraper">
                <span>Option</span>
                <div className="options">
                    <div className="input_box">
                        <label>color</label>
                        <input onChange={(e) => handleChange(e)} type="color" />
                    </div>
                </div>
            </div>
        </div>
    )
}