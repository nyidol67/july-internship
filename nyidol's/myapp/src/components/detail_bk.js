import React,{Component} from 'react';
import axios from 'axios';
import DetailDisplay from '../mealtypeRest/DetailsDisplay'

const resdetails = "http://localhost:8900/restaurantlist";
class Details extends Component{
    constructor(props){
        super(props)
        this.state={
            citiId: parseInt(localStorage.getItem('citiId'))?parseInt(localStorage.getItem('citiId')):1,
            restlist:[],
            
        }

    }
    cuisineFilter = (event) => {
        const mealid = parseInt(this.props.match.params.id)
        let cuisine=parseInt(this.state.cuisine)
        let url;
        if(cuisine == ""){
            url=`${resdetails}/${this.state.citiId}/${mealid}`
        }
        else{
            url=`${resdetails}/${this.state.citiId}/${mealid}?cuisine=${cuisine}`
        }
        axios.get(url)
        .then((response)=>{
            this.setState({restlist:response.data})
        })
    }
    costFilter=(event)=>{
        const mealid = parseInt(this.props.match.params.id);
        let cost=(event.target.value).split(",")
        let lcost = Number(cost[0]);
        let hcost = Number(cost[1]);
        let url;
        if(event.target.value == ""){
            url=`${resdetails}/${this.state.citiId}/${mealid}`
        }
        else{
            url=`${resdetails}/${this.state.citiId}/${mealid}?hcost=${hcost}&lcost=${lcost}`
        }
        axios.get(url)
        .then((response)=>{
            this.setState({restlist:response.data})
        })

    }
    render(){
        console.log("render")
        return(
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <div onChange={this.cuisineFilter}>
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
                        <hr/>
                        <div onChange={this.costFilter}>
                            <label className="radio">
                                <input type="radio" value="" name="range"/>All
                            </label>
                            <label className="radio">
                                <input type="radio" value="0,500" name="range"/>0-500
                            </label>
                            <label className="radio">
                                <input type="radio" value="500" name="range"/>500 above
                            </label>
                        </div>
                    </div>
                    <div className="col-md-10">
                        <DetailDisplay restdata = {this.state.restlist}/>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        const mealid = parseInt(this.props.match.params.id);
        sessionStorage.setItem('mealId',this.props.match.params.id);
        let cuisine=parseInt(this.state.cuisine)
        axios.get(`${resdetails}/${this.state.citiId}/${mealid}`)
        .then((response)=>{
            this.setState({restlist:response.data})
        })
    }
    componentDidUpdate(){
        console.log("in componnt did update")
        
    }
}
export default Details;