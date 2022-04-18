import React, { useContext } from 'react'
import { MainContext } from '../Context/MainContextProvider'
import { Link } from 'react-router-dom'
import './MenuBar.css'

export default function MenuBar() {
    const { menuActive } = useContext(MainContext)
    return (
        <div className={`menu ${menuActive && 'active'}`}>
            <div className="group_Menu">
                <span className="title_Menu">Background</span>
                <div className="Menu_btn">
                    <Link to={'/backgroundcolor'} className='btn_Menu'>Background Color</Link>
                    <Link to={'/backgroundgradient'} className='btn_Menu'>Background Gradient</Link>
                </div>
            </div>
            <div className="group_Menu">
                <span className="title_Menu">Box</span>
                <div className="Menu_btn">
                    <Link to={'/border'} className='btn_Menu'>Border</Link>
                    <Link to={'/BorderRadius'} className='btn_Menu'>Border Radius</Link>
                    <Link to={'/box/boxshadow'} className='btn_Menu'>Box-Shadow</Link>
                </div>
            </div>
            <div className="group_Menu">
                <span className="title_Menu">Filter</span>
                <div className="Menu_btn">
                    <Link to={'/filter/blur'} className='btn_Menu'>Blur</Link>
                    <Link to={'/filter/sepia'} className='btn_Menu'>Sepia</Link>
                    <Link to={'/filter/brigness'} className='btn_Menu'>Brigness</Link>
                    <Link to={'/filter/contrast'} className='btn_Menu'>Contrast</Link>
                    <Link to={'/filter/grayscale'} className='btn_Menu'>Grayscale</Link>
                    <Link to={'/filter/heurotate'} className='btn_Menu'>Heu-Rotate</Link>
                    <Link to={'/filter/invert'} className='btn_Menu'>Invert</Link>
                    <Link to={'/filter/saturate'} className='btn_Menu'>Saturate</Link>
                    <Link to={'/filter/dropshadow'} className='btn_Menu'>Drop-Shadow</Link>
                </div>
            </div>
        </div>
    )
}
