import {Component} from 'react';
import AppFilter from '../app-filter/app-filter';
import AppInfo from '../app-info/app-info';
import EmployeesList from '../employees-list/employees-list';
import SearchPanel from '../search-panel/search-panel';
import EmployeesAddForm from '../employees-add-form/employees-add-form';
import './app.css';

//Property drill starts from this component
class App extends Component{
    // Our user data that goes into the other components
    constructor (props){
        super(props)
        this.state = {
            data: [
                {name: 'John C.', salary: 800 , increase: false, promotion:true, id: 1},
                {name: 'Max C.', salary: 3000, increase: true, promotion:false, id: 2},
                {name: 'Carl W.', salary: 5000, increase:false, promotion:false, id: 3}
            ],
            term: '',
            filter: 'all' 
        }
        this.maxId = this.state.data.length+1;
    }
    
    addItem = (name, salary) => {
        const newItem = {
            name, 
            salary,
            increase: false,
            promotion:false,
            id: this.maxId++
        }
        this.setState(({data}) => {
            const newArr = [...data, newItem];
            console.log(newArr);
            return {
                data: newArr
            }
        });
    }

    deleteItem = (id) => {
        this.setState(({data}) => {
            this.maxId = this.state.data.length;
            return {
                data: data.filter(item => item.id !== id)
            }

        })
    }
    //total number of employees and who will get bonus
    onToggleProp = (id, prop) =>{
        this.setState(({data}) => ({
            data: data.map(item => {
                if(item.id === id){
                    return {...item, [prop]: !item[prop]}
                }
                return item;
            })
        }))

    }
    //Search
    searchEmp = (items, term) =>{
        if(term.length === 0){
            return items;
        }
        return items.filter(item =>{
            return item.name.indexOf(term) > -1
        })
    }
    onUpdateSearch = (term) =>{
        this.setState({
            term: term,
            btn: ''
        });
    }
    //Filter
    filterPost = (items, filter) =>{
            switch (filter){
                case 'rise': 
                    return items.filter(item => item.promotion);  
                case 'moreThen1000':
                    return items.filter(item => item.salary > 1000);
                default:
                    return items
            }
    }

    onFilterSelect = (filter) => {
    this.setState({
        filter: filter
        });
    }
    
    render(){
        const {data, term, filter} = this.state
        const employees = this.state.data.length;
        const increased = this.state.data.filter(item => item.increase).length
        const visibleData = this.filterPost(this.searchEmp(data,term), filter)
        return (
            <div className = "app">
                <AppInfo employees = {employees} increased = {increased}> </AppInfo>
                <div className="search-panel">
                        <SearchPanel onUpdateSearch = {this.onUpdateSearch}></SearchPanel>
                        <AppFilter filter = {filter} onFilterSelect = {this.onFilterSelect}/>                          
                </div>
                <EmployeesList 
                    data = {visibleData}
                    onDelete = {this.deleteItem}
                    onToggleProp = {this.onToggleProp}
                />
                <EmployeesAddForm onAdd={this.addItem}/>
            </div>
        )
    }
}
export default App;


