import React from 'react';
import { Field, reduxForm } from 'redux-form';
import  {Link } from 'react-router-dom';
import { addItem } from '../actions';
import { connect } from 'react-redux';


class AddForm extends React.Component{

  renderInput({label, input, meta: {touched, error}}){

    return (
      <div className="col-6 form-group">
        <label>{label}</label>
        <input {...input}  className="form-control"/>
        <p className="text-danger">{touched && error}</p>
      </div>
    )
  }

  handleAddItem(values){
    this.props.addItem(values).then(()=>{
        this.props.history.push('/');
    });


  }

  render(){
    return(
      <div>
        <div className="row my-4 justify-content-end">
          <Link className="btn btn-outline-primary" to="/">Back</Link>
        </div>
        <h1>Add Todo Item </h1>
        <form onSubmit={this.props.handleSubmit(this.handleAddItem.bind(this))} >
            <Field name="title" label="Title"  component={this.renderInput} />
            <Field name="details" label="Task Details"   component={this.renderInput}  />
            <button className="btn btn-lg btn-outline-success">Add Item</button>
            <button type="button" onClick={this.props.reset} className="btn btn-lg mx-3 btn-outline-danger">Reset Form</button>
        </form>
      </div>
    )
  }
}

function validate(values){
  const errors = {};
  if(!values.title){
    errors.title = 'please enter a title';
  }
  if(!values.details){
    errors.details = 'please enter details'
  }
  return errors
}

AddForm = reduxForm({
  form: 'addItem',
  validate: validate
})(AddForm)

export default connect(null, {addItem})(AddForm);
