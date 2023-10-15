import React from 'react'
import "./index.scss"
import { AiFillHome } from "react-icons/ai";

const Header = () => {
    return (
        <div className='header-container'>
            <h1>Azərbaycanın Elmi Diasporu</h1>

            <div className='header-parent'>
                <div className='header-bottom'>
                    <AiFillHome style={{ fontSize: '20px' }} />

                    <p>Diaspor Üzvləri</p>
                    <p>Universitet Reytinqləri</p>
                    <p>Beynəlxalq tərəfdaşlar</p>
                </div>

                <div className='header-search'>
                    <input type="text" placeholder='search...' />
                </div>
            </div>
        </div>
    )
}

export default Header
