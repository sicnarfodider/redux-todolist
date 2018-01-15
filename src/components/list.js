import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {getItem} from '../actions';
import ListItem from './list-item';


class List extends React.Component{

  componentDidMount(){
    this.props.getItem();
  }


  render(){
    const list= this.props.list.map((list,i)=>{
      return <ListItem  {...list}  key={i} />
    })
    return(
      <div>
          <div className="row my-4 justify-content-end">
            <div className="col-2">
              <Link to="/additem"  className="nav-link btn btn-outline-info" >Add Item</Link>
            </div>
          </div>
          <h2 className="text-center">To Do List </h2>
          <ul className="list-group">
            {list}
          </ul>
      </div>
    );
  }
}


function mapStateToProps(state){
  return{
    list: state.todo.list,
    time: state.todo.time
  }
}

export default connect(mapStateToProps,{getItem})(List);
