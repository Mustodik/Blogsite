import React from 'react'
import {Link, link} from "react-router-dom"
function withLayout(Component) {

function Layout() {

        return(
    <div className='layout'>
    <header className='appbar'>
    <span>Logo</span>
    <div>
    <nav>
        <span className='nav-link'><Link to="/">Home</Link></span>
        <span>About</span>
        <span>Blog</span>    
    </nav>
    </div>
    
    </header>
    <main className='main-component'>
    <Component/>
    </main>
    <footer>&copy; 2022 preMest</footer>
    
            
            </div>
        )

}


  return Layout
}

export default withLayout