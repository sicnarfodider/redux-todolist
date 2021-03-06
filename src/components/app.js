import 'bootstrap/dist/css/bootstrap.min.css';
import List from './list';
import React from 'react';
import {Route} from 'react-router-dom';
import AddForm from './addform';
import ViewItem from './viewitem';


const App = () => (
    <div className="container">
        <Route path="/" exact component={List} />
        <Route path="/additem" component={AddForm}/>
        <Route path="/item/:id" component={ViewItem}/>
    </div>
);

export default App;
