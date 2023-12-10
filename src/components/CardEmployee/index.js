import './CardEmployee.css'

const CardEmployee = (props) => {
    const teamPrimaryColor = props.teamPrimaryColor;
    const employee = props.employee;

    return (
        <div className='card-employee'>
            <div className='card-employee-header' style={{backgroundColor: teamPrimaryColor}}>
                <img className='card-employee-img' src={employee.imagem} alt={`Foto do ${employee.nome}`} />
            </div>
            <div className='card-employee-footer'>
                <h4>{employee.nome}</h4>
                <h5>{employee.cargo}</h5>
            </div>
        </div>
    )
}

export default CardEmployee