import './employees-list-item.css';
const EmployeesListItem = (props) => {
    const {name, salary, onDelete, onToggleProp, increase, promotion} = props
    let classNames = "list-group-item d-flex justify-content-between "
    if(increase){
        classNames = classNames+' increase'
    }
    if(promotion){
        classNames = classNames+' like'
    }
    return (
        <li className= {classNames}> 
            <span className="list-group-item-label" onClick = {onToggleProp} data-toggle ='promotion' >{name} </span>
            <input type="text" className="list-group-item-input" defaultValue={salary + '$'}/>
            <div className='d-flex justify-content-center align-items-center'>
                <button type="button"
                    className="btn-award btn-sm "
                    onClick = {onToggleProp} data-toggle ='increase'>
                    <i className="fas fa-award"></i>
                </button>
                <button type="button"
                        className="btn-trash btn-sm ">
                    <i className="fas fa-trash" onClick ={onDelete}></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
        </li>
    )
        
}

export default EmployeesListItem;