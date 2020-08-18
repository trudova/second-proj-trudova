import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking,FaShuttleVan, FaBeer} from 'react-icons/fa'
import { icons } from 'react-icons/lib/cjs'
export default class Services extends Component {
    state={
        services:[
            {icon: <FaCocktail/>,
            title:'Free coctails',
            info:'In our hotel you will get two coctails just for free, margarita martiny or white russian'  },
            {icon: <FaHiking/>,
                title:'Hiking tour',
                info:'If you like adventures, this place definitely for you, our expirienced instruktors will make your vacation unbelievable'  },
                {icon: <FaShuttleVan/>,
                    title:'Pick up',
                    info:'we take care of our guests, we will meet you from the airport and take you back'  },
                    {icon: <FaBeer/>,
                    title:'Free beers' ,
                    info:'two free beers from our own brewery, always cold always fresh, always best' }
        ]
    }
    render() {
        return (
            <section className='services' >
                <Title title='services'/>
                <div className='services-center'>
                {this.state.services.map((item, index)=>{
                    return(
                        <article key={index} className='service'>
                            <span>{item.icon}</span>
                    <h6>{item.title}</h6>
                    <p>{item.info}</p>
                        </article>
                    )
                })}
                </div>
            </section>
        )
    }
}
//create a title component for the servises
//implement to the servises component
///implement servises to the home page
// set up the state for servieces 