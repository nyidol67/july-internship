import React,{Component} from 'react';
import axios from 'axios';
const resdetails = "http://localhost:8900/restaurantlist";


class CostFilter extends Component{
    
    costFilter=(event)=>{
        
        const mealid = parseInt(this.props.mealIdNumber);
        const citiid = parseInt(this.props.citiIdNumber)
        let cost = (event.target.value).split(",");
        let lcost = Number(cost[0]);
        let hcost = Number(cost[1]);
        let url;
        if(event.target.value == ""){
            url=`${resdetails}/${citiid}/${mealid}`
        }
        else{
            url=`${resdetails}/${citiid}/${mealid}?hcost=${lcost}&lcost=${hcost}`
        }
        axios.get(url)
        .then((response)=>{this.props.restpercost(response.data)})

    }
    render(){
        return(
            <React.Fragment>
            <center>Cost to Filter</center>
            <hr/>
            <div onChange={this.costFilter}>
                            <label className="radio">
                                <input type="radio" value="" name="range"/>All
                            </label>
                            <label className="radio">
                                <input type="radio" value="0,500" name="range"/>0-500
                            </label>
                            <label className="radio">
                                <input type="radio" value="501,1000" name="range"/>500-1000
                            </label>
            </div>
            </React.Fragment>
        )
    }
}
export default CostFilter