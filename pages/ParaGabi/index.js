import { useState } from "react";

export function ParaGabi() {
    return (
    <div style={{width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 10, flexDirection: 'column'}}>
           <Header />
           <Form />
    </div>
    )
}

function Header() {
    return (
        <div style={{width: 500}}>
            <h1 style={{textAlign: 'center'}}>Gabriele, vamos casar em breve?</h1>
        </div>
    )
}

function Form() {
    const windowHeight =  1000;
    const [selectedOption, setSelectedOption] = useState(false);
    const [forms, setForms] = useState({louca: false, clean: false, internship: false, love: false, happy: false});


    function handleClick() {
        setSelectedOption(true);
    }

    function handleSend() {
        const message = 'Oi amor, vamos casar simmmmm! \n\n E eu aceito tudinho!';

        window.location = `https://api.whatsapp.com/send?phone=+5511982384130&text=${message}`;
    }


    return (
    <div style={{width: '100%', justifyContent: 'center', alignItems: 'center', height: windowHeight * 0.8, backgroundColor: 'orange'}}>
        {selectedOption ? <SecoundStep handleSend={handleSend} forms={forms} setForms={setForms} /> : <FirstStep handleClick={handleClick} /> }
    </div>
    )
}

function FirstStep(props) {

    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <button onClick={() => props.handleClick()}> SIM </button>
            <button onClick={() => props.handleClick()}> CLARO </button>
        </div>
    )
}

function SecoundStep(props) {

    function handleCheck(key) {
        const form = { ... props.forms};
        form[key] = !form[key];
        props.setForms(form);
    }


    return (
        <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h2>Confirme todos os pontos que você concorda</h2>
            <Checkbox chave={'louca'} handleCheck={handleCheck} >Vou lavar toda a louça</Checkbox>
            <Checkbox chave={'clean'} handleCheck={handleCheck} >Vou limpar toda a casa</Checkbox>
            <Checkbox chave={'internship'} handleCheck={handleCheck}>Vou pro intecâmbio com você</Checkbox>
            <Checkbox chave={'love'} handleCheck={handleCheck}>Vou dar e receber muito amor</Checkbox>
            <Checkbox chave={'happy'} handleCheck={handleCheck}>Vou ser muito feliz</Checkbox>
            <button onClick={() => props.handleSend()}>Enviar resposta</button>
        </div>
    )
}

function Checkbox(props) {
    return (
        <div style={{marginTop: 5, marginBottom: 5}}>
            <input type='checkbox' onClick={() => props.handleCheck(props.chave)} />
            <text>{props.children}</text>
        </div>
    )
}