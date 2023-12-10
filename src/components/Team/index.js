import CardEmployee from '../CardEmployee';
import './Team.css';

const Team = (props) => {
    const teamName = props.teamObject.name;
    const primaryColor = props.teamObject.primaryColor;
    const secondaryColor = props.teamObject.secondaryColor;
    const employees = props.employees;

    return (
        employees.length > 0 ? <section className='team-section' style={{ backgroundColor: secondaryColor }}>
            <h3 style={{ borderColor: primaryColor }}>{teamName}</h3>
            <div className='team-cards-area'>
                {employees.map(employee => <CardEmployee teamPrimaryColor={primaryColor} employee={employee} key={employee.nome} />)}
            </div>
        </section> : ''
    )
}

export default Team;