// import './employees-add-form.css';
import './employees-add-form.scss';
import {Component} from 'react';
class EmployeesAddForm extends Component{
    constructor(props){
        super(props);
        this.state = {
            name: '',
            salary: '',
            error: ''
        }
    }
    
    onValueChange = (e) =>{
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit = (e) => {
        e.preventDefault();
        if(this.state.name.length >= 3 && this.state.salary.length >=1){
            this.props.onAdd(this.state.name, this.state.salary);
            this.setState({
                name: '',
                salary: '',
            })
        }else{
            this.setState({
                name: '',
                salary: '',
                error: true, 
            })
            setTimeout(() => {
                this.setState({
                    error: '' 
                    
                })
            }, 5000);
        }
    }

    render(){
        const {name, salary} = this.state

        return(
            <div className="app-add-form">
                <h3>Add new Employee</h3>
                <form onSubmit={this.onSubmit}
                    className="add-form d-flex">
                    <input type="text"
                        className="form-control new-post-label"
                        placeholder="Name?"
                        name="name"
                        value ={name}
                        onChange ={this.onValueChange}
                        />
                    <input type="number"
                        className="form-control new-post-label"
                        placeholder="Sallary in $?"
                        name="salary"
                        value ={salary}
                        onChange ={this.onValueChange}
                        />
    
                    <button type="submit" className="btn btn-outline-light">Add</button>
                </form>
                
                {this.state.error ? <div className="error">Name and Salary must have more than 3 char</div> : ''}
                
        </div>
        )
    }
}

export default EmployeesAddForm