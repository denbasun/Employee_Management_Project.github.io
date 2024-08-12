import './search-panel.css'
import { Component } from 'react';

class SearchPanel extends Component{
    constructor(props){
        super(props)
        this.state = {
            term: ''
        }
    }

    onUpdateSearch = (e) =>{
        const term = e.target.value
        this.setState({term})
        this.props.onUpdateSearch(term)
    }

    render(){
        return(
            <input type='text'
                   className ='from-control search-input'
                   placeholder = 'Find eployee' 
                   onChange ={this.onUpdateSearch}
                   value={this.state.term}/> 
        )
    }
}

export default SearchPanel;