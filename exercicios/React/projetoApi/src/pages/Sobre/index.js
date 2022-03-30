import React from 'react';
import { Container, ContentL, ContentR, Main } from './styled';

export default function Sobre() {
  return (
    <Main>
      <Container className="white">
        <ContentL>
          <img src="/img/sobreLivros.svg" alt="" />
          <p>
            Bem vindo a MySchool, MySchool foi criada com o intuito de ajudar
            professores a gerenciar melhores os seus alunos, sendo possível
            cadastrar novos alunos, excluir ou editar conforme a sua
            necessidade.
          </p>
        </ContentL>
      </Container>

      <Container className="red">
        <ContentR>
          <p>
            Já no perfil de aluno, temos algumas opções para ficar mais facil a
            identificação do aluno, sendo nome, sobrenome e até foto se
            necessário, em caso de lista mais extensa, o sistema de busca vai
            ser o seu alido.
          </p>
          <img src="/img/sobreAlunos.svg" alt="" />
        </ContentR>
      </Container>

      <Container className="white">
        <ContentL>
          <img src="/img/sobreSeguranca.svg" alt="" />
          <p>
            Sobre o acesso a sua conta e dados do alunos, fique tranquilo, sua
            conta está segura aqui no MySchool. Com criptografia de senhas,
            apenas você terá acesso a sua conta.
          </p>
        </ContentL>
      </Container>
      <p className="go">
        <a href="/register">Começar agora!</a>
      </p>
    </Main>
  );
}
