class Usuario {
  constructor(nome, email, nascimento, pass, passConfirm, contrato, politica) {
    this.nome = nome;
    this.email = email;
    this.nascimento = nascimento;
    this.pass = pass;
    this.passConfirm = passConfirm;
    this.contrato = contrato;
    this.politica = politica;
  }

  validar() {
    nascimento = this.nascimento.split('-');
    const novaData = [nascimento[1], nascimento[2], nascimento[0]];
    this.nascimento = new Date(novaData.join('-'));
    const idade = Math.floor((Date.now() - this.nascimento) / 31556952000);

    // alert('Estamos validando!');
    if (!(this.pass === this.passConfirm)) alert('Senhas não conferem');
    if (idade < 18) alert('Fique mais velho primeiro!');
    if (!this.contrato) alert('Leia e concorde com o nosso contrato!');
    if (!this.politica) alert('Leia e concorde com nossas políticas de uso!');
    if (this.email == /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i)
      alert('Digite um email válido!');
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
  console.log(
    `${nome}\n${email}\n${nascimento}\n${pass}\n${passConfirm}\nContrato: ${contrato}\nPolíticas: ${politicas}`
  );

  const usuario = new Usuario(
    nome,
    email,
    nascimento,
    pass,
    passConfirm,
    contrato,
    politicas
  );
  usuario.validar();
};
