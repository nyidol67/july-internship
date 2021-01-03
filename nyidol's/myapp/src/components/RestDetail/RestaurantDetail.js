import React,{Component}from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const resturl="http://localhost:8900/restaurantdetails"
class RestaurantDetail extends Component{
    constructor(props){
        super(props)
        this.state={
            rest:''
        }
    }

    backbutton = (event) => {
        let mealid = parseInt(sessionStorage.getItem('mealId'))
        this.props.history.push(`/details/${mealid}`)
    }
    
    render(){
        console.log(">>>>",this.state.rest)
        var {rest} = this.state
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h2>{rest.name}</h2>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-6">
                                <img className="img-responsive" src={rest.thumb}/>
                            </div>
                            <div className="col-md-6">
                                <h3>{rest.name}</h3>
                                <h4>{rest.locality}</h4>
                                <h4>{rest.address}</h4>
                                <h4>Rs.{rest.cost} Per Two</h4>
                            </div>
                        </div> 
                        <br/>
                        <div className="row">
                            <button class="btn btn-danger btn-lg"
                            onClick={this.backbutton}>Back</button>
                            &nbsp;
                            <Link to={`/order/${this.props.match.params.id}`} class="btn btn-success btn-lg">Place Order</Link>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
    componentDidMount(){
        axios.get(`${resturl}/${this.props.match.params.id}`)
        .then((response)=>{
            this.setState({rest:response.data[0]})
        })
    }
}
export default RestaurantDetail;