/*
    Ser autenticável significa ter a propriedade senha.
*/

export class SistemaAutenticacao {
    static login(autenticavel, senha) {
        if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
            return autenticavel.autenticar(senha);
        }
        return false;
    }

    static ehAutenticavel(autenticavel) {
        // verificando se a chave "autenticar" (referência ao método)
        // existe no objeto "autenticavel"
        return "autenticar" in autenticavel && 
            autenticavel.autenticar instanceof Function;
    }
}