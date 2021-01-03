import React,{Component} from 'react'
import axios from 'axios';
const resdetails = "http://localhost:8900/restaurantlist";

class CuisineFilter extends Component{

    cuisineFilter = (event) => {
        let cuisine=parseInt(event.target.value)
        let citiId=parseInt(this.props.citiIdNumber)
        let mealId=parseInt(this.props.mealIdNumber)
        let url;
        if(event.target.value == ""){
            url=`${resdetails}/${citiId}/${mealId}`
        }
        else{
            url=`${resdetails}/${citiId}/${mealId}?cuisine=${cuisine}`
        }
        axios.get(url)
        .then((response)=>{this.props.restpercuisine(response.data)})
    }
    render(){
        return(
            
            <div onChange={this.cuisineFilter}>
                <center><h5>Cuisine Filter</h5></center>
                <hr/>
                <label className="radio">
                    <input type="radio" value="" name="cuisine"/>All
                </label>
                <label className="radio">
                    <input type="radio" value="1" name="cuisine"/>NorthIndian
                </label>
                <label className="radio">
                    <input type="radio" value="2" name="cuisine"/>SouthIndian
                </label>
                <label className="radio">
                    <input type="radio" value="3" name="cuisine"/>Chinese
                </label>
                <label className="radio">
                    <input type="radio" value="4" name="cuisine"/>Fast Food
                </label>
                <label className="radio">
                    <input type="radio" value="5" name="cuisine"/>Street Food
                </label>
            </div>
        )
    }
}
export default CuisineFilter