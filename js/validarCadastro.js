class Usuario {
  constructor(nome, email, nascimento, pass, passConfirm, contrato, politica) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.pass = pass;
    this.passConfirm = passConfirm;
    this.contrato = contrato;
    this.politica = politica;
    this.idade;
    this.verificado = false;
  }

  calcIdade() {
    nascimento = this.nascimento.split('-');
    const novaData = [nascimento[1], nascimento[2], nascimento[0]];
    this.nascimento = new Date(novaData.join('-'));
    const idade = Math.floor((Date.now() - this.nascimento) / 31556952000);
    return (this.idade = idade);
  }

  validar() {
    this.calcIdade();
    // console.log(this.pass);
    if (!this.pass || !this.passConfirm || !(this.pass === this.passConfirm)) {
      alert('Senhas não conferem');
      return false;
    }
    if (this.idade < 18) {
      alert('Fique mais velho primeiro!');
      return false;
    }
    if (!this.contrato) {
      alert('Leia e concorde com o nosso contrato!');
      return false;
    }
    if (!this.politica) {
      alert('Leia e concorde com nossas políticas de uso!');
      return false;
    }
    if (this.email == /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i) {
      alert('Digite um email válido!');
      return false;
    }
    return true;
  }
}

const registrar = () => {
  const nome = document.querySelector('#nome').value;
  const email = document.querySelector('#email').value;
  const nascimento = document.querySelector('#nascimento').value;
  const pass = document.querySelector('#pass').value;
  const passConfirm = document.querySelector('#passConfirm').value;
  const contrato = document.querySelector('#contrato').checked;
  const politicas = document.querySelector('#politicas').checked;
  // console.log(
  //   `${nome}\n${email}\n${nascimento}\n${pass}\n${passConfirm}\nContrato: ${contrato}\nPolíticas: ${politicas}`
  // );

  const usuario = new Usuario(
    nome,
    email,
    nascimento,
    pass,
    passConfirm,
    contrato,
    politicas
  );
  if (usuario.validar()) bemVindo(usuario);
};

const bemVindo = (user) => {
  console.log(document.querySelector('#cadastro'));
  const welcomido = `
  <div class='header'>
    <header>
      <h2>Seja bem-vindo!</h2>
    </header>
  </div>
  <div class='row'>
    <div class='column center'>
      <h2>Perfil</h2>
    </div>
  </div>
  <div class='row center'>
    <div class='foto'></div>
  </div>
  <div class='row'>
    <div class='column'>
      <h3>Nome:${user.nome}</h3> 
    </div>
  </div>
  <div class='row'>
    <div class='column'>
      <h3>Idade:${user.idade}</h3> 
    </div>
  </div>
  <div class='row'>
    <div class='column'>
      <h3>E-mail:${user.email}</h3> 
    </div>
  </div>
  <div class='row'>
    <div class='column'>
      <h3>E-mail verificado:${user.verificado ? 'Sim ✅' : 'Não ❌'}</h3> 
    </div>
  </div>
  <div class='row form-group center'>
    <button>Voltar</button>
  </div>
  `;
  document.querySelector('#cadastro').innerHTML = welcomido;
};
