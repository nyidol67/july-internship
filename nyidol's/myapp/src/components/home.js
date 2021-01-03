import React from 'react';
import Search from './search';
import Footer from './footer';
import QuickSearch from './quickSearch';


const Home = () => {
    return(
        <div>
            <Search/>
            <QuickSearch/>
            <Footer year='2020'/>
        </div>
    )
}
export default Home;