import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {updateItem} from '../actions';



class ListItem extends React.Component{
    render(){
        const stylesComplete={backgroundColor: "lightpink", color: "white"};
        const stylesIncomplete={backgroundColor: "lightblue",color: "white"};
        return(
            <li style={this.props.complete? stylesComplete : stylesIncomplete} className="list-group-item" ><Link to={`/item/${this.props._id}`}>{this.props.title}</Link>
                <div className="text-right"><span><strong>CURRENT STATUS : </strong>{this.props.complete ? "COMPLETED" : "NOT DONE"}</span></div>
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
