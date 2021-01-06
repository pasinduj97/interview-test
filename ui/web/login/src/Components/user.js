import React, {Fragment} from 'react';
import Header from './Header';


export default class User extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			data: []
		}
  this.allUser = this.allUser.bind(this);
		
	}
	componentWillMount() {
		this.allUser()
	}

allUser(){
	fetch('http://localhost/Interviews/bizlogic/Index.php')
		  .then(response => response.json())
		  .then(data =>{ 
			this.setState({ data:data })
		});
}




	render() {
		const user =  this.state.data.map(item => {
			return(
				<tr key={item.id}>
					<td>{item.id}</td>
					<td>{item.name}</td>
					<td>{item.username}</td>
					<td>{item.email}</td>
				
				</tr>
			)
			// 
		})
		return (
			<Fragment> 
				
				<Header/>
			<div className="container">
			  <div className="col my-5 shadow">
			  	<table className="table"> 
					  <thead>
						<tr>
							<th>ID</th>
							<th>NAME</th>
							<th>USERNAME</th>
							<th>EMAIL</th>
							
						</tr>
					  </thead>
					  <tbody>
						  {user}
					  </tbody>
				  </table>
			  </div>
			</div>
			</Fragment>
		);
	}
}

