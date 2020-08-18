import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
function Error() {
    return (
       <Hero>
           <Banner title='404' subtitle='page doesn exist'>
               <Link to='/' className='btn-primary'>return Home</Link>
           </Banner>
       </Hero>
    )
}
// same background for error page
export default Error
// set up the banner for error page