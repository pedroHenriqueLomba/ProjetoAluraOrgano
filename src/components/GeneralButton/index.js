import './GeneralButton.css';

const GeneralButton = (props) => {
    const buttonText = props.text;

    return (
        <div className='general-button'>
            <button>{buttonText}</button>
        </div>
    )
}

export default GeneralButton;