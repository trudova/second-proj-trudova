import React, { Component } from 'react';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';


export default class Navbar extends Component {
    state={ //for smoll screen 
        isOpen:false
    }
    handleToggle=()=>{
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    render() {
        return (
            <nav className='navbar'>
                <div className='nav-center'>
                    <div className='nav-header'>
                        <Link to='/' className='logo'><span className='proj'>My</span> sweet <span className='proj'>project</span> Hotel</Link>
                    <button type='button' className='nav-btn' onClick={this.handleToggle}>
                        <FaAlignRight className='nav-icon'/>
                    </button>
                    </div>
                    <ul className={this.state.isOpen?'nav-links show-nav':'nav-links'} >
                    <li>
                        <Link to='/'>Home</Link>
                    </li>
                    <li>
                        <Link to='/rooms'>Rooms</Link>
                    </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
//import icon 
// set up the button for icon
// set up ul = actual nav
// setting up condition for small and big nav
//add the links to the pages
//adding css seting up the links logics