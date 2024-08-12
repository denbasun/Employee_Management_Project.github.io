import './app-filter.css'
//buttons filtering
const AppFilter  = (props) =>{
    const buttonsData = [
        {name: 'all', label: 'All employees'},
        {name: 'rise', label: 'For promotion'},
        {name: 'moreThen1000', label: 'Selery more than 1000$'}
    ];
    
    const buttons = buttonsData.map(({name, label}) =>{
        const active = props.filter === name  
        const clazz = active ? "btn-light" : 'btn-outline-light';
        return (
            <button type="button" onClick={() => props.onFilterSelect(name)} className={`btn ${clazz}`} key = {name}>{label}</button> 
        )
    })

    return (
        <div className="btn-group">
            {buttons}
        </div>
    )
}

export default AppFilter;