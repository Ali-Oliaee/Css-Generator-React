import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'

export default function Home() {
    return (
        <div className='home_Container'>
            <div className="group_container">
                <span className="title_group">Background</span>
                <div className="group_btn">
                    <Link to={'/backgroundcolor'} className='btn_link'>Background Color</Link>
                    <Link to={'/backgroundgradient'} className='btn_link'>Background Gradient</Link>
                </div>
            </div>
            <div className="group_container">
                <span className="title_group">Box</span>
                <div className="group_btn">
                    <Link to={'/border'} className='btn_link'>Border</Link>
                    <Link to={'/BorderRadius'} className='btn_link'>Border Radius</Link>
                    <Link to={'/box/boxshadow'} className='btn_link'>Box-Shadow</Link>
                </div>
            </div>
            <div className="group_container">
                <span className="title_group">Filter</span>
                <div className="group_btn">
                    <Link to={'/filter/blur'} className='btn_link'>Blur</Link>
                    <Link to={'/filter/sepia'} className='btn_link'>Sepia</Link>
                    <Link to={'/filter/brigness'} className='btn_link'>Brigness</Link>
                    <Link to={'/filter/contrast'} className='btn_link'>Contrast</Link>
                    <Link to={'/filter/grayscale'} className='btn_link'>Grayscale</Link>
                    <Link to={'/filter/heurotate'} className='btn_link'>Heu-Rotate</Link>
                    <Link to={'/filter/invert'} className='btn_link'>Invert</Link>
                    <Link to={'/filter/saturate'} className='btn_link'>Saturate</Link>
                    <Link to={'/filter/dropshadow'} className='btn_link'>Drop-Shadow</Link>
                </div>
            </div>
        </div>
    )
}
