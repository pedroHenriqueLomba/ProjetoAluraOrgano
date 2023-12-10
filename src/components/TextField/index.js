import './TextField.css'

const TextField = (props) => {
    const modifiedLabel = props.label
    const modifiedId = props.id
    const modifiedName = props.name
    const modifiedPlaceholder = props.placeholder
    const isRequired = props.required ?? false;
    const inputValue = props.inputValue;
    const inputChanged = props.inputChanged;

    const updateValue = (event) => {
        inputChanged(event.target.value);
    }

    return (
        <div className='text-field'>
            <label htmlFor={modifiedId}>{modifiedLabel}</label>
            <input value={inputValue} onChange={updateValue} required={isRequired} type="text" name={modifiedName} id={modifiedId} placeholder={modifiedPlaceholder} />
        </div>
    );
}

export default TextField