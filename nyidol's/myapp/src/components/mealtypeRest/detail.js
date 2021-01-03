import React,{Component} from 'react';
import axios from 'axios';
import DetailDisplay from '../mealtypeRest/DetailsDisplay'
import CostFilter from '../Filter/costFilter'
import CuisineFilter from '../Filter/cuisineFilter'

const resdetails = "http://localhost:8900/restaurantlist";
class Details extends Component{
    constructor(props){
        super(props)
        this.state={
            citiId: parseInt(localStorage.getItem('citiId'))?parseInt(localStorage.getItem('citiId')):1,
            restlist:[],
            
        }

    }
    setDataPerCuisine(data){
        this.setState({restlist:data})
    }
    setDataPerCost(data){
        this.setState({restlist:data})
    }
    render(){
        console.log("render")
        return(
            <div>
                <div className="row">
                    <div className="col-md-2">
                    <CuisineFilter restpercuisine={(data)=>this.setDataPerCuisine(data)} mealIdNumber={this.props.match.params.id} citiIdNumber={this.state.citiId}/>
                    <CostFilter restpercost={(data)=>this.setDataPerCost(data)} mealIdNumber={this.props.match.params.id} citiIdNumber={this.state.citiId}/>
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

}
export default Details;