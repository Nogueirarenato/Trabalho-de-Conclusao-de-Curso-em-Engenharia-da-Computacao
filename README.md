# Trabalho de Conclusao de Curso em Engenharia da Computacao

##  Universidade Virtual do Estado de São Paulo UNIVESP




------------


------------






## Título do Projeto
Aplicações do ESP32 e IOT para o Aprimoramento da Saúde e Bem-Estar de Idosos: Dispositivos Inteligentes de Monitoramento e Assistência


## Alunos:
Bruna Michele Correia Ribeiro
Cynthia Mayumi Watanabe Yamaoto
Danielle de Paula Oliveira
Edilson Gutierres Moraes
José Guilherme Paciléo Zanardo
Renato Nogueira da Silva

##  Orientadora
Tawana Garcia Nunez

## Descrição Geral do Projeto


O projeto consiste em um sistema utilizado por uma clínica para certificar que os pacientes estão tomando a medicação no horário correto.
O sistema possuí os seguintes módulos:
-FrontEnd;
-Backend;
-Banco de Dados;
-Dispositivo Físico; 

### FrontEnd

O frontend será desenvolvido com Javascript utilizando a biblioteca React. Será voltado para a clínica, onde o usuário deverá efetuar login para entrar no sistema, e lá poderá cadastrar pacientes e suas respectivas medicações e horários.
Cada paciente cadastrado terá seus medicamentos e horários cadastrados, bem como seus dados de contatos e o contato de mais dois responsáveis.

### Backend

O backend será uma API desenvolvida em Javascript com NodeJs e fará a interface entre o dispositivo físico e o banco de dados.

Banco de Dados

O banco de dados será desenvolvido em MySql utilizando ORM (Object-Relational Mapping), será implementado junto com o backend.

### Dispostivo

O dispositivo físico será composto por um microcontrolador ESP32, com Led’s, display, buzzer e um botão de reconhecimento.
A cada 60 segundos o dispositivo enviará uma requisição para a API para verificar se há alguma medicação cadastrada para aquele horário ou não.
Em caso negativo, uma nova requisição será feita em 60 segundos.
Caso haja alguma medicação para o horário, o dispositivo emitirá um sinal luminoso por 5 minutos, se não for conhecido (apertado o botão), soará o buzzer por 60 segundos, se não for reconhecido o dispositivo enviará uma requisição para a API e exibirá um alerta no frontend da clínica indicando qual foi o paciente que não tomou a medicação, o atendente da clínica deverá entrar em contato com o paciente, ou seus responsáveis, para lembrar do uso da medicação. Caso o botão de reconhecimento seja acionado durante os 6 minutos (sinal luminoso + buzzer) o dispositivo enviará uma requisição para a API indicando que a medicação foi utilizada corretamente.


Todos os códigos desenvolvidos estão no github
https://github.com/Nogueirarenato/Trabalho-de-Conclusao-de-Curso-em-Engenharia-da-Computacao



 