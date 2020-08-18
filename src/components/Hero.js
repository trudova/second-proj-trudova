import React from 'react'

export default function Hero({children, hero}) {
    return (
        <header className={hero}> {children} </header>
    )
}
Hero.defaultProps={
    hero: 'defaultHero'
};

//create a new component - its gonna be a backgraund for header 
//import background by default 