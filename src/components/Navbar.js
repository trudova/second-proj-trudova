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
                    <button type='button' className='nav-btn' onClick={this.handleToggle}>
                        <FaAlignRight className='nav-icon'/>
                    </button>
                    </div>
                    <ul className={this.state.isOpen?'nav-links show-nav':'nav-links'} >

                    </ul>
                </div>
            </nav>
        )
    }
}
//import icon 
// set up the button for icon
// set up ul = actual nav