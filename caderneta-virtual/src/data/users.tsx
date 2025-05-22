// src/data/usuarios.ts
export const users = [
    {
        id: "1",
        nome: "Joana Silva",
        email: "joana@example.com",
        telefone: "(84)90022-9922",
        senha: "123456",
        endereco: {
            uf: "RS",
            cep: "99999-999",
            rua: "Rua das Flores",
            numero: "123",
            bairro: "Vila Nova"
        }
    },
    {
        id: "2",
        nome: "Emanuel Costa",
        email: "emanuel@example.com",
        telefone: "(84)90022-9923",
        senha: "abcdef",
        endereco: {
            uf: "SP",
            cep: "88888-888",
            rua: "Av. Brasil",
            numero: "456",
            bairro: "Centro"
        }
    }
];

export default users;
