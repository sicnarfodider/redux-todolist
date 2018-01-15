import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateItem} from '../actions';



class ListItem extends React.Component{




    render(){
        const complete = this.props.complete ? <div className="text-right"><span><strong>CURRENT STATUS</strong>Task has been Completed on {this.props.time}</span></div> :
        <div className="form-check has-success text-right">
            <label className="form-check-label">
            <input onClick={()=>{this.props.updateItem(this.props._id)}} type="checkbox" className="form-check-input" id="checkboxSuccess" value="option1"/>
                Complete Task
            </label>
        </div>
        return(
            <li className="list-group-item" ><Link to={`/item/${this.props._id}`}>{this.props.title}</Link>
                {complete}
            </li>
        )
    }
}

function mapStateToProps(state){
    return{
        time: state.todo.time
    }
}



export default connect(mapStateToProps,{updateItem})(ListItem);
