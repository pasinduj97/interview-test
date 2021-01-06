import React, {Fragment} from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';


export default class Login extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            fields: { Email :'',Password:''},
            errors: {},
        }
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  handleSubmit(event) {
      event.preventDefault();
    if(this.handleValidation()){
        const Email =this.state.fields.Email;
        const Password =  this.state.fields.Password;
        let url = 'http://localhost/Interviews/bizlogic/Index.php';
        fetch(url)
        .then(function(response) {
            return response.json();
        })
        .then(function(data) {
           
            //console.log(JSON.stringify(myJson));
            let email = data.find(x =>x.email === Email);
            
            let password = data.find(x => x.password === Password);
             if(email && password){
                if(email.email ===Email && password.password === Password){
                    localStorage.setItem("auth", Email);
                    let auth = localStorage.getItem("auth");
                    if(auth){
                    window.location.pathname='/users'
                    }
                }else{
                    alert('Somthing went wrong!')
                }
             }else{
                alert('Please enter valid details which are registered with us')
            }
        });
    } 
  }

  handleValidation(){
    let fields = this.state.fields;
    let errors = {};
    let formIsValid = true;
    if(!fields["Email"]){
        formIsValid = false;
        errors["Email"] = "Cannot be empty";
     }
     if(fields["Email"]){
        if(!fields["Email"].match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)){
           formIsValid = false;
           errors["Email"] = "Enter valid Email";
        }        
     }
     if(!fields["Password"]){
         formIsValid = false;
         errors["Password"] = "Password Cannot be Empty";
     }
     if(fields["Email"]){
     
    }
     this.setState({errors: errors});
     return formIsValid;
  }

  handleChange(field, e){  
    let fields = this.state.fields;
    fields[field] = e.target.value; 
    if(this.handleValidation(field, e)){
        this.setState({fields});
    }     
}
    render() {
         return(
            <Fragment>
            <Header/>
            <div className="container">
                <div className="card col-md-8 offset-md-2 my-5 shadow ">
                    <div className="card-body">
                        <form onSubmit= {this.handleSubmit.bind(this)}>
                            <div className="form-group">
                                <label>Email</label>
                                <input type="text" className="form-control" placeholder="Enter Email" name="Email"  onChange={this.handleChange.bind(this, "Email")}/>
                                <small className="text-danger form-text">{this.state.errors["Email"]}</small>
                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input type="password" className="form-control" placeholder="Password" name="Password"  onChange={this.handleChange.bind(this, "Password")}/>
                                <small className="text-danger form-text">{this.state.errors["Password"]}</small>
                            </div>
                            <button type="submit" className="btn btn-primary">SignIn</button>
                            
                        </form>
                    </div>
                </div>
            </div>
       </Fragment>
		);
    }
}




                           
