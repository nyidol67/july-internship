import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import './search.css'
const locurl = 'http://localhost:8900/location'
const resurl ="http://localhost:8900/restaurant?city="
class Search extends Component {
    constructor(){
        super()
        this.state = {
            location:'',
            city:'',
            restaurants:''
        }
    }
    handleCity=(event)=>{
        this.setState({restaurants:''})
        this.setState({city:event.target.value})
        var cityid = parseInt(event.target.value)
        localStorage.setItem('citiId',event.target.value)
        console.log(`${resurl}${cityid}`)
        fetch(`${resurl}${cityid}`,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({restaurants:data})
        })

    }
    renderCity=(data)=>{
        if(data){
            return data.map((item)=>{
                return(
                    <option value={item.city}> 
                        {item.name}
                    </option>    
                )
            })
        }

    }
    renderRest= (data) =>{
        if(data){
            return data.map((item)=>{
                return(
                    <option>
                        {item.name}| {item.locality}
                    </option>
                )
            })
        }
    }    
    render(){
        return(
            <div className="ImageContainer">
            <div className="heading">
                Find the best restaurants, cafes, bars
            </div>  
            <div className ="LocationSelector">
                <select onChange={this.handleCity} className="LocationDropdown" >
                    {this.renderCity(this.state.location)}
                </select>
                <input list="restaurant" name="rests" id="rests" className="Locationdroplist"/>
                <datalist id="restaurant" >
                    {this.renderRest(this.state.restaurants)}
                </datalist>
            </div>
                <hr/>
            </div>
        )
    }
    
    componentDidMount(){
        fetch(locurl,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({location:data})
        })
    }
    
   
}
export default Search;