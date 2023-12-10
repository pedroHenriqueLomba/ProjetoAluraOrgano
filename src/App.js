import { useState } from 'react';
import Banner from './components/Banner';
import FormArea from './components/FormArea';
import Team from './components/Team';
import Footer from './components/Footer';

function App() {
   const [employees, setEmployess] = useState([]);

   const employeeCreate = (employee) => {
      setEmployess([...employees, employee]);
   }

   const teams = [
      {
         key: "Programação",
         name: 'Programação',
         primaryColor: "#57C278",
         secondaryColor: "#D9F7E9"
      },
      {
         key: "Front-end",
         name: 'Front-end',
         primaryColor: "#82CFFA",
         secondaryColor: "#E8F8FF"
      },
      {
         key: "Data-science",
         name: 'Data-science',
         primaryColor: "#A6D157",
         secondaryColor: "#F0F8E2"
      },
      {
         key: "Devops",
         name: 'Devops',
         primaryColor: "#E06B69",
         secondaryColor: "#FDE7E8"
      },
      {
         key: "Ux e Design",
         name: 'Ux e Design',
         primaryColor: "#DB6EBF",
         secondaryColor: "#FAE9F5"
      },
      {
         key: "Mobile",
         name: 'Mobile',
         primaryColor: "#FFBA05",
         secondaryColor: "#FFF5D9"
      },
      {
         key: "Inovação e gestão",
         name: 'Inovação e gestão',
         primaryColor: "#FF8A29",
         secondaryColor: "#FFEEDF"
      },
   ];

   return (
      <div>
         <Banner />
         <FormArea whenIsSubmitted={employeeCreate} teams={teams} title="Preencha os dados para criar o card do colaborador" />
         {teams.map(
            team => <Team
               key={team.key}
               teamObject={team} 
               employees={employees.filter(employee => employee.time === team.name)}  
            ></Team>
         )}
         <Footer />
      </div>
   );
}

export default App;
