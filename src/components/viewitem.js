import React from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { getSingle } from '../actions';

class ViewItem extends React.Component{

  componentDidMount(){
    this.props.getSingle(this.props.match.params.id);
  }

  render(){
    console.log("props",this.props);
    if(!this.props.single){
      return <h1>Loading...</h1>
    }
    return(
      <div>
        <div className="row my-4 justify-content-end">
          <Link className="btn btn-outline-primary" to="/">Back</Link>
        </div>
        <h1 className="text-center">{this.props.single.title}</h1>
      </div>
    )
  }
}

function mapStateToProps(state){
  return{
    single: state.todo.single
  }
}



export default connect (mapStateToProps, { getSingle })(ViewItem)
