import React, { Component } from 'react';
import './form.css'
class MyForm extends Component {
    constructor(props) {
        super(props);

       this.attributes = [
            {name:'user' ,  type:'text' , placeholder:'User Name', value:undefined},
            {name:'email' , type:'email' , placeholder:'email', value:undefined},
            {name:'password' , type:'password' , placeholder:'password', value:undefined},
            {name:'fullName' , type:'text' , placeholder:'Full Name', value:undefined},
            {name:'age' , type:'number' , placeholder:'Age', value:undefined},
            {name:'dob' , type:'date' , placeholder:'Date Of Birth', value:undefined},
            
            { name:'division' , type:"select", options: [
                {label:"Select Your Division",value:"Select Your Division"},
                {label:"Dhaka", name:"Dhaka" ,value:"Dhaka"},
                {label:"Chittagong",value:"Chittagong"},
                {label:"Khulna",value:"Khulna"},
                {label:"Rajshahi",value:"Rajshahi"},
                {label:"Barishal",value:"Barishal"},
                {label:"Sylhet",value:"Sylhet"},
                {label:"Rangpur",value:"Rangpur"},
            ]},
            
            {label: "Gender", type:"radio",options:[
                { label:"Male",name:"gender",value:"male"},
                {label:"Female",name: "gender",value:"female"},
                {label:"others",name: "gender",value:"others"}
              ]},

              {label:"Skills",  type:"checkbox", options: [
                {label:"NodeJs", name:"skills",value:"nodejs"},
                {label:"ReactJS",name:"skills",value:"reactjs"},
                {label:"Angular",name:"skills",value:"angular"},
                {label:"VueJS",name:"skills",value:"vuejs"},
            ]},

            {name:'btn' , type:'submit' ,  value:'submit', id:'btnSubmit'}
            
        ]

        this.initialState ={
            user:'',
            email:'',
            password : '',
            fullName:'',
            age:'',
            dob:'',
            division:'',
            gender:'',
            skills:[]

        }
        
        this.state = this.initialState;
    }

    onChange = (event)=>{
        if(event.target.type==='checkbox'){
            let skills = [];
            if(event.target.checked){
               skills = [...this.state.skills] ;
               skills.push(event.target.value);
               //event.target.checked = 'false';
            }else{
                skills = this.state.skills.filter(skill=> skill !== event.target.value);
            }
            this.setState({
                skills
            });
         }else{
             this.setState({
                 [event.target.name] :event.target.value 
             });
             console.log(event.target.value);
             
         }
        
    }

    submitForm = (event) => {
        event.preventDefault();
        
        this.props.submitHandler(this.state);
        
       
        console.log(this.state);
       document.getElementById('myForm').reset();
        
    }

    renderForm = () => {
        let attr = this.attributes;
       
            
            let formUI = attr.map((att ,i) => {
                let name= att.name;
                let type = att.type || "text";
                let placeholder = att.placeholder;
                let value = att.value;
                let id = att.id;
                let label =att.label;
                
                let input =  <input 
                    className="form-control"
                    id={id}
                    key={i}
                    type={type}
                    placeholder={placeholder}
                    name={name}
                    value={value}
                    onChange={this.onChange}
                />;

                if (type === "select") {
                    input = att.options.map((o,i) => {

                         return (
                                <option
                                className="form-control"
                                key={i}
                                //value={o.value}
                                >{o.value}</option>
                         );
                    });
    
                    input = <select key={i} name={name}  className=" form-control"  onChange={this.onChange}>{input}</select>;
                 }

                if (type === "radio") {
                    input = att.options.map((o ,i) => {
                        
                         return (
                             <React.Fragment key={i}>
                            
                                 <input 
                                        type={type}
                
                                         name={o.name}
                                         value={o.value}
                                         onChange={this.onChange}
                                 />
                                 <label key={i}>{o.label}</label>
                             </React.Fragment>
                         );
                    });
                    
                 }

                 // checbox ...

                 if (type === "checkbox") {
                    input = att.options.map((o,i) => {
                        
                         return (
                            <React.Fragment key={i}>
                                <input 
                                    type={type}
                                    key={i}
                                    name={o.name}
                                    value={o.value}
                                    onChange={this.onChange}
                                />
                                <label>{o.label}</label>
                            </React.Fragment>
                         );
                    });
    
                
    
                 }

                 return (
                    <div key={i} >
                        <label
                            key={i+11}
                            htmlFor={label}>
                            {att.label}
                        </label>
                        {input}
                    </div>
                );

                
               
               //return input;
                    
               
               
                    })
                
                
            
            return formUI;
        }

       
            

     render() { 
        return ( 
            <form id="myForm" onSubmit={this.submitForm} className="form-group  mx-5" >
                {this.renderForm()}
            </form>
         );
    }
}
 
export default MyForm;