import './FormArea.css'
import TextField from '../TextField'
import DropDownList from '../DropdownList';
import GeneralButton from '../GeneralButton';
import { useState } from 'react';

const FormArea = (props) => {
    const formTitle = props.title;
    const teams = props.teams;

    const sendForm = (event) => {
        event.preventDefault();
        props.whenIsSubmitted({
            nome: nomeValue,
            cargo: cargoValue,
            imagem: imagemValue,
            time: timeValue
        });
        setName('');
        setCargo('');
        setImagem('');
        setTime('');
    }

    const [nomeValue, setName] = useState('')
    const [cargoValue, setCargo] = useState('')
    const [imagemValue, setImagem] = useState('')
    const [timeValue, setTime] = useState('');

    return (
        <section className='form-area'>
            <form onSubmit={sendForm}>
                <h2>{formTitle}</h2>
                <TextField
                    inputValue={nomeValue}
                    inputChanged={value => setName(value)}
                    required={true}
                    label="Nome"
                    name="nome"
                    placeholder="Digite seu nome"
                    id="form-employee-nome"
                />
                <TextField
                    inputValue={cargoValue}
                    inputChanged={value => setCargo(value)}
                    required={true}
                    label="Cargo"
                    name="cargo"
                    placeholder="Digite seu cargo"
                    id="form-employee-cargo"
                />
                <TextField
                    inputValue={imagemValue}
                    inputChanged={value => setImagem(value)}
                    required={true}
                    label="Imagem"
                    name="imagem"
                    placeholder="Digite o endereço da imagem"
                    id="form-employee-imagem"
                />
                <DropDownList
                    inputValue={timeValue}
                    inputChanged={value => setTime(value)}
                    items={teams}
                    label="Time"
                />
                <GeneralButton text="Criar card" />
            </form>
        </section>
    )
}

export default FormArea;