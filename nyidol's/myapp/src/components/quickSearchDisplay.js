import React from 'react'
import {Link} from 'react-router-dom'
import './quickSearchDisplay.css'

const DisplaySearch =(props)=>{

    const listMeal = ({mealData}) => {
        if(mealData){
            return mealData.map((item)=>{
                return(
                    <div>
                        <Link to ={`/details/${item.mealtype}`}>
                            <div className='tileContainer'>
                                <div className='tileComponent1'>
                                    <img src ={`/images/${item.name}.jpg`}/>
                                </div>
                                <div className='tileComponent2'>
                                    <div className="componentHeading">
                                        {item.name}
                                    </div>
                                    <div className="componentSubHeading">
                                        Start your day with exclusive {item.name} option
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )
            })
        }
    }
    return(
        <div>
            <div className='quickSearchContainer'>
                <p className='quickSearchHeading'>
                    Quick Search
                </p>
                <p className='quickSearchSubHeading'>
                    Discover Restaurant by the type of mealtype.
                </p>
                {listMeal(props)}
            </div>
        </div>
    )
}
export default DisplaySearch