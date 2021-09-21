function validarCpf(cpf) {
  if (cpf.length !== 11) {
    return { valido: false, texto: "CPF deve ter 11 dígitos!" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarSenha(senha) {
  if (senha.length < 4 || senha.length > 72) {
    return { valido: false, texto: "Senha deve ter entre 4 a 72 dígitos!" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarNome(nome) {
  if (nome.length >= 25) {
    return { valido: false, texto: "Nome deve ter no máximo 25 letras!" };
  } else {
    return { valido: true, texto: "" };
  }
}

function validarCep(nome) {
  if (nome.length !== 8) {
    return { valido: false, texto: "CEP deve ter apenas 8 dígitos!" };
  } else {
    return { valido: true, texto: "" };
  }
}

export { validarCpf, validarSenha, validarNome, validarCep };
