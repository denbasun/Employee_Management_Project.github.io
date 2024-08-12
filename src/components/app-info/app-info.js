import './app-info.css'

const AppInfo = (props) =>{
    const {employees, increased} = props
    return (
        <div className="app-info">
            <h1>Employee accounting at BestPlace</h1>
            <h2>Total number of employees: {employees}</h2>
            <h2>The bonus will be received by: {increased}</h2>
        </div>
    )
}

export default AppInfo;