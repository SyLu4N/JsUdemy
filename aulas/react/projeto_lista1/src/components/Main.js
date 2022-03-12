import React, { Component } from 'react';
import './Main.css';
import Form from './Form';
import Tarefas from './Tarefas';

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      novaTarefa: '',
      tarefas: [],
      index: -1,
    };
  }

  format = (e) => {
    this.input = document.querySelector('.input');
    const { novaTarefa } = this.state;

    if(novaTarefa === 'Valor inválido!') {
      this.setState({novaTarefa: '' });
      this.input.classList.remove('error');
      return;
    }
  }

  handleChange = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if(novaTarefa === ''){
      this.setState({
        novaTarefa: 'Valor inválido!',
      });

      this.input.classList.add('error');
      return;
    }

    this.button = document.querySelector('.button');
    const novasTarefas = [...tarefas];

    if(index === -1){
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
      this.button.classList.add('rodar');
    }else{
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
        novaTarefa: '',
      });
    }
  };

  handleEdit = (e, index) => {
    const { tarefas } = this.state;
    this.setState({
      index,
      novaTarefa: tarefas[index],
    });
  };

  handleDelete = (e, index) => {
    const { tarefas } = this.state;

    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas],
    });
  };

  componentDidMount() {
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({
      tarefas
    });
  }

  componentDidUpdate(prevProps, prevState){
    const { tarefas } = this.state
    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas));
  }

  render() {
    const { novaTarefa, tarefas } = this.state;


    return (
      <div className="main" onClick={this.format}>
        <h1 className='title'>MyList</h1>

        <Form
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
        novaTarefa={novaTarefa}
        />

        <Tarefas
        tarefas={tarefas}
        handleEdit={this.handleEdit}
        handleDelete={this.handleDelete}
        />

      </div>
    );
  }
}
