import React, { Component } from 'react'
import Title from './Title'
import {FaCocktail, FaHiking,FaShuttleVan, FaBeer} from 'react-icons/fa'
import { icons } from 'react-icons/lib/cjs'
export default class Services extends Component {
    state={
        services:[
            {icon: <FaCocktail/>,
            title:'free coctails',
            info:'In our hotel you will get two coctails just for free, margarita martiny or white russian'  },
            {icon: <FaHiking/>,
                title:'free hiking tour',
                info:'If you like adventures, this place definitely for you, our expirienced instruktors will make your vacation unbelievable'  },
                {icon: <FaShuttleVan/>,
                    title:'free coctails',
                    info:'we take care of our guests, we will meet you from the airport and take you back'  },
                    {icon: <FaBeer/>,
                    title:'free beers' ,
                    info:'two free beers from our own brewery, always cold always fresh, always best' }
        ]
    }
    render() {
        return (
            <div>
                <Title title='services'/>
            </div>
        )
    }
}
//create a title component for the servises
//implement to the servises component
///implement servises to the home page
// set up the state for servieces 