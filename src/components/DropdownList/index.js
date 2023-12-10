import './DropdownList.css'

const DropdownList = (props) => {
    const modifiedLabel = props.label;
    const modifiedId = props.id;
    const modifiedName = props.name;
    const dropdownItens = props.items;
    const inputChanged = props.inputChanged;
    const inputValue = props.inputValue;

    const updateList = (event) => {
        inputChanged(event.target.value);
    }

    return (
        <div className='dropdown-list'>
            <label htmlFor={modifiedId}>{modifiedLabel}</label>
            <select value={inputValue} onChange={updateList} name={modifiedName} id={modifiedId}>
                <option value=""></option>
                {dropdownItens.map((item) => <option key={item.key} value={item.name}>{item.name}</option>)}
            </select>
        </div>
    )
}

export default DropdownList;