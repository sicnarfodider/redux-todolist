import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getSingle, deleteItem,  updateItem} from '../actions';

class ViewItem extends React.Component{

    componentDidMount(){
        this.props.getSingle(this.props.match.params.id);
    }

    deleteItem(){
        this.props.deleteItem(this.props.match.params.id).then(()=>{
            document.querySelector('.modal').style="display: block";
        });
    }
    updateItem(){
        this.props.updateItem(this.props.match.params.id).then(()=>this.props.getSingle(this.props.match.params.id))

    }
    render(){
        if(!this.props.single){
            return <h1>Loading...</h1>
        }
        const timeCreated =new Date(parseInt(this.props.single.created)).toTimeString();


        return(
            <div>
                <div className="row my-4 justify-content-end">
                    <Link className="btn btn-outline-primary" to="/">Back</Link>
                </div>
                <h1 className="text-center">{this.props.single.title}</h1>
                <h3>Details: {this.props.single.details}</h3>
                <h4>Time Created: {timeCreated}</h4>
                <h4>Time Completed: {this.props.time ? this.props.time : ""} </h4>
                <h4>Status: {this.props.single.complete ? "Complete" : "To Be Done"}</h4>
                <button onClick={this.deleteItem.bind(this)} className="float-right btn btn-outline-danger">DELETE TASK</button>
                <div className="form-group">
                    <label>Complete</label>
                    <input disabled aria-disabled={this.props.single.complete ? "true": "false"} onClick={this.updateItem.bind(this)}  type="checkbox"/>
                </div>
                <div className="modal" tabIndex="-1" role="dialog">
                     <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title">Status Message</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body text-center">
                            <p>{this.props.msg}</p>
                          </div>
                          <div className="modal-footer">
                            <Link to="/" className="btn btn-outline-success">Go Back To Your List</Link>
                          </div>
                        </div>
                      </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        single: state.todo.single,
        msg: state.todo.msg,
        time: state.todo.time
    }
}



export default connect (mapStateToProps, { getSingle, deleteItem, updateItem })(ViewItem)
