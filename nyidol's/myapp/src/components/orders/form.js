import React,{Component} from 'react'
class OrderForms extends Component{
    constructor(props){
        super(props)
        this.state={
        order_id:Math.floor(Math.random()*10000),
        name:"",
        phone:"",
        email:"",
        address:"",
        rest_id: this.props.match.params.id,
        quantity:0
        }
    }

    render(){
        return(
            <div className="container">
                <div className="panel panel-success">
                    <div className="panel-heading">
                        <h3>Place Order</h3>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <div>
                                <label className="control-label">order_id:</label>
                                <input type="text" name="order_id" value={this.state.order_id} readOnly className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <div>
                                <label className="control-label">rest_id:</label>
                                <input type="text" name="rest_id" value={this.state.rest_id} readOnly className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <div>
                                <label className="control-label">name:</label>
                                <input type="text" name="name" value={this.state.name} className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <div>
                                <label className="control-label">phone:</label>
                                <input type="text" name="phone" value={this.state.phone} className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <div>
                                <label className="control-label">email:</label>
                                <input type="text" name="email" value={this.state.email} className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <div>
                                <label className="control-label">address:</label>
                                <input type="text" name="address" value={this.state.adress} className="form-control"/>
                            </div>
                        </div>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <div>
                                <label className="control-label">person:</label>
                                <select name="quantity" value={this.state.quantity} className="form-control">
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default OrderForms