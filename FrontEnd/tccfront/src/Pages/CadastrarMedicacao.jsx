import React, { useEffect, useState, Component } from "react";
import { BrowserRouter as Router, Routes, Route, useNavigate, Link } from 'react-router-dom';
import Logo from '../img/logoUnivesp.png';
import Logo2 from '../img/engenhariaComputacao.png';
import Url from '../Services/httpAPI'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Index.css';
import { Button } from "react-bootstrap";




const CadastrarMedicacao = () => {


    let dataAtual;
    let inicioTimeStamp;
    let fimTimeStamp;
    let intervaloStamp;
    let novaData;
    let vetor = []
    let indice = -1
    let vetorName = []
    let convertString = ""
    let dataInicialConvertida;
    let dataFinalConvertida;
    let user;
    let novaDataB

    let [resposta, setResposta] = useState([]);




    const navigate = useNavigate();

    let [medicamento, setMedicamento] = useState("");
    let [dose, setDose] = useState("");
    let [dataInicial, setDataInicial] = useState("");
    let [dataFinal, setDataFinal] = useState("");
    let [intervalo, setIntervalo] = useState("");
    let [paciente, setPaciente] = useState("");
    let [mensagemDeErro, setMensagemDeErro] = useState("");


    function formatTimestamp(timestamp) {
        const date = new Date(timestamp);

        const formattedDateTime = date.toLocaleString('pt-PT', {
            year: 'numeric',
            month: '2-digit',
            day: '2-digit',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            fractionalSecondDigits: 3



        }).replace(',', 'T').replace(' ', '')

        return formattedDateTime;
    };


    function AtualizaMedicamento(event) {
        event.preventDefault();
        setMedicamento(event.target.value)

    }

    function AtualizaDose(event) {
        event.preventDefault();
        setDose(event.target.value)

    }

    async function AtualizaDataInicial(event) {
        event.preventDefault();
        await setDataInicial(event.target.value)

    }

    function AtualizaDataFinal(event) {
        event.preventDefault();
        setDataFinal(event.target.value)

    }

    function AtualizaIntervalo(event) {
        event.preventDefault();
        setIntervalo(event.target.value)

    }

    function AtualizaPaciente(event) {
        event.preventDefault();
        setPaciente(event.target.value)

    }

    function BuscarPaciente() {
        useEffect(() => {
            // GET request using fetch inside useEffect React hook
            fetch(Url + "ListarPacientes")
                .then(response => response.json())
                .then(data => { setResposta(data) });

            // empty dependency array means this effect will only run once (like componentDidMount in classes)
        }, [])
    }

    BuscarPaciente();



    function enviaRequisicao(event) {
        event.preventDefault();




        dataAtual = Date.now()
        inicioTimeStamp = Date.parse(dataInicial)
        fimTimeStamp = Date.parse(dataFinal)
        intervaloStamp = intervalo * 3600 * 1000;
        dataInicialConvertida = dataInicial[0] + dataInicial[1] + dataInicial[2] + dataInicial[3] + "-" + dataInicial[5] + dataInicial[6] + "-" + dataInicial[8] + dataInicial[9] + " " + dataInicial[11] + dataInicial[12] + ":" + dataInicial[14] + dataInicial[15] + ":00"
        dataFinalConvertida = dataFinal[0] + dataFinal[1] + dataFinal[2] + dataFinal[3] + "-" + dataFinal[5] + dataFinal[6] + "-" + dataFinal[8] + dataFinal[9] + " " + dataFinal[11] + dataFinal[12] + ":" + dataFinal[14] + dataFinal[15] + ":00"

        user = {
            medicamento: medicamento,
            dose: dose,
            data_inicial: dataInicialConvertida,
            data_final: dataFinalConvertida,
            intervalo: intervalo,
            status: 0,
            pacienteId: paciente

        }


        if (fimTimeStamp < dataAtual) { setMensagemDeErro("A data final não pode ser menor do que a data atual") }
        else {
            if (fimTimeStamp < inicioTimeStamp) {
                setMensagemDeErro("A data final não pode ser menor que a data inicial")

            }

            else {
                if (inicioTimeStamp < dataAtual) { setMensagemDeErro("A data inicial não pode ser menor do que a data atual") }
                else {
                    if (medicamento == "" || dose == "" || dataInicial == "" || dataFinal == "" || paciente == "" || intervalo == "") { setMensagemDeErro("Todos os campos devem ser preenchidos!!") }
                    else {









                        console.log(`inicioTimeStamp: ${inicioTimeStamp}`)
                        console.log(`fimTimeStamp: ${fimTimeStamp}`)


                        console.log(`data inicial reformatada ${novaData}`)

                        LoopCadastrar()



                        function LoopCadastrar() {







                            fetch(Url + "CadastrarMedicacao", {
                                method: 'POST',
                                headers: {
                                    "Content-Type": "application/json",
                                },
                                body: JSON.stringify(user),
                            }).then(response => {

                                if (response.status == 200) { setMensagemDeErro(""); }


                            }).then(() => { inicioTimeStamp = inicioTimeStamp + intervaloStamp; })
                                .then(() => { novaData = formatTimestamp(inicioTimeStamp) }).then(() => { console.log(`NovaData ${novaData}`) })
                                .then(
                                    () => {
                                        dataInicialConvertida = novaData = novaData[6] + novaData[7] + novaData[8] + novaData[9] + '-' + novaData[3] + novaData[4] + '-' + novaData[0] + novaData[1] + 'T' + novaData[11] + novaData[12] + ':' + novaData[14] + novaData[15]+ ":00"
                                        dataFinalConvertida = dataFinal[0] + dataFinal[1] + dataFinal[2] + dataFinal[3] + "-" + dataFinal[5] + dataFinal[6] + "-" + dataFinal[8] + dataFinal[9] + " " + dataFinal[11] + dataFinal[12] + ":" + dataFinal[14] + dataFinal[15] + ":00"

                                        user = {
                                        medicamento: medicamento,
                                        dose: dose,
                                        data_inicial: dataInicialConvertida,
                                        data_final: dataFinalConvertida,
                                        intervalo: intervalo,
                                        status: 0,
                                        pacienteId: paciente

                                    }
                                    }
                                )
                                .then(() => {
                                        if (inicioTimeStamp < fimTimeStamp) { LoopCadastrar() }
                                        else { alert("Medicação cadastrada com sucesso"); navigate("/ConsoleLogado")} //
                                    })




                        }






                    }

                }
            }
        }


    }




return (
    <div>

        <div className="caixa">
            <h1 className="tituloLogado alinharConsoleLogado">Cadastrar Medicação</h1>
            <form onSubmit={enviaRequisicao.bind()}>
                <input type="text" onChange={AtualizaMedicamento.bind()} value={medicamento} className="input-text" placeholder="Digite o nome da medicação" required ></input>
                <input type="text" onChange={AtualizaDose.bind()} value={dose} className="input-text" placeholder="Digite a dose indicada" required ></input>
                <input type="datetime-local" onChange={AtualizaDataInicial.bind()} value={dataInicial} className="input-text" placeholder="Início do tratamento" required ></input>
                <input type="datetime-local" onChange={AtualizaDataFinal.bind()} value={dataFinal} className="input-text" placeholder="Fim do tratamento" required ></input>
                <input type="number" min="1" max="24" onChange={AtualizaIntervalo.bind()} value={intervalo} className="input-text" placeholder="Intervalo da medicação" required ></input>
                <label htmlFor="ListaDePaciente" className="alinharConsoleLogado2" style={{ marginBotton: 0, padding: 0, fontSize: '1.5em' }} >Escolha o Paciente</label>
                <div className="alinharConsoleLogado margin-botton" style={{ width: '100%' }}>

                    <select id="ListaDePacientes" name="cars" size="3" style={{ width: '50%' }} onChange={AtualizaPaciente.bind()}>


                        {
                            resposta.map(element => {
                                vetor.push(element.nome)
                                convertString = element.nome
                                convertString = convertString.toString()
                                vetorName.push(convertString)
                                indice++
                                return (

                                    <option value={element.id}>{element.nome}</option>

                                )
                            })
                        }
                    </select>
                </div>


                <h2 style={{ color: 'red', textAlign: 'center' }}>{mensagemDeErro}</h2>
                <div className="alinharConsoleLogado2 margin-botton"> <Button type='submit' value="Cadastrar"  >
                    Cadastrar
                </Button>
                </div>

                <div className="alinharConsoleLogado2 margin-botton">
                    <Button type='button' value="Entrar"  >
                        <Link to="/ConsoleLogado" className="divButton"> Voltar </Link>
                    </Button>
                </div>
            </form>
        </div>


    </div>
)


}

export default CadastrarMedicacao;