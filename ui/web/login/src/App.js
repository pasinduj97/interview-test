import React, {Fragment} from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Login from './Components/Login';
import User from './Components/user';

export default class App extends React.Component {

	render() {
    
		return (
			<Router>
 <Fragment>
<Switch>
      <Route path="/" exact component={Login}/>
      <Route path="/login" exact component={Login} />
      <Route  path="/users" exact component={User}/>
      
     
      </Switch>
    </Fragment>
</Router>
		);
	}
}



