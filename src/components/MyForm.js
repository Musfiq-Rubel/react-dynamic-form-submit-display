import React, { Component } from 'react';
import './form.css'
class MyForm extends Component {
    constructor(props) {
        super(props);

       this.attributes = [
            {name:'name' , type:'text' , placeholder:'name', value:null},
            {name:'email' , type:'email' , placeholder:'email', value:null},
            {name:'password' , type:'password' , placeholder:'password', value:null},
            {name:'destination' , type:'text' , placeholder:'Destination', value:null},
            {name:'ticket' , type:'number' , placeholder:'How many Ticket Do you need', value:null},
            {name:'date' , type:'date' , placeholder:'Date Of Travel', value:null},
           
            {name:'btn' , type:'submit' ,  value:'submit', id:'btnSubmit'}
            
        ]

        this.initialState ={
            name:'',
            email:'',
            password : '',
            destination:'',
            ticket:'',
            date:''
        }
        
        this.initialState = this.state;
    }

    onChange = (event)=>{
        this.setState({
            [event.target.name] :event.target.value 
        });
        console.log(event.target.value);
        
    }

    submitForm = (event) => {
        event.preventDefault();
        
        this.props.submitHandler(this.state);
        //this.setState(this.initialState);
       
        console.log(this.state);
       document.getElementById('myForm').reset();
        
    }

    renderForm = () => {
        let attr = this.attributes;
       
            
            let formUI = attr.map((att) => {
                let name= att.name;
                let type = att.type || "text";
                let placeholder = att.placeholder;
                let value = att.value;
                let id = att.id;
                
                
                    
               

                    
             
                    let input =  <input 
                    className="form-control"
                    id={id}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={this.onChange}
                />
               return input;
                    if(type==="button"){
                        value=att.value;
                    }
               
                    })
                
                
            
            return formUI;
        }

       
            

     render() { 
        return ( 
            <form id="myForm" onSubmit={this.submitForm} className="form-group my-5 mx-5" >
                {this.renderForm()}
            </form>
         );
    }
}
 
export default MyForm;