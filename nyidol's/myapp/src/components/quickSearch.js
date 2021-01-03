import React, {Component} from 'react'
import DisplaySearch from './quickSearchDisplay'

const quickurl= 'http://localhost:8900/mealtype'
class QuickSearch extends Component{
    constructor(){
        super()

        this.state={
            mealType:''
        }
    }
    render(){
        return(
            <div>
                <DisplaySearch mealData={this.state.mealType}/>
            </div>
        )
    }
    componentDidMount(){
        fetch(quickurl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({mealType:data})
        })
    }
}
export default QuickSearch;