import React from 'react'
import { Link } from 'react-router-dom'
const Header = () => {
    return (
        <section className='pt-5'>
            <h2> Router Task</h2>
            <div className="d-flex gap-4">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contant">Contant</Link>
                <Link to="/blog">Blog</Link>
            </div>
        </section>

    )
}

export default Header