const BASE_URL = "http://10.0.2.2:5203/api/Account"; // 10.0.2.2 para Emulador Android

export const loginUsuario = async (emailOuTelefone, senha) => {
    try {
        // Montamos o objeto seguindo o seu 'LoginRequestModel'
        const corpoRequisicao = {
            passwordHash: senha, // Sua API espera a senha aqui
            email: emailOuTelefone.includes('@') ? emailOuTelefone : null,
            telefone: !emailOuTelefone.includes('@') ? emailOuTelefone : null
        };

        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(corpoRequisicao),
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Erro na requisição de login:", error);
        return { erro: true, message: "Não foi possível conectar ao servidor." };
    }
};

export const registrarUsuario = async (nome, email, telefone, senha) => {
    try {
        const response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                nomeCompleto: nome,
                email: email,
                telefone: telefone,
                passwordHash: senha // O controller C# fará o BCrypt
            }),
        });

        return await response.json();
    } catch (error) {
        return { erro: true, message: "Erro ao cadastrar." };
    }
};


export const cadastrarUsuario = async (dados) => {
    try {
        const response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            // Enviamos exatamente os nomes das propriedades que estão no C#
            body: JSON.stringify({
                nomeCompleto: dados.nome,
                email: dados.email,
                telefone: dados.telefone,
                passwordHash: dados.senha // O C# vai transformar isso no BCrypt final
            }),
        });

        const json = await response.json();
        return json;
    } catch (error) {
        console.error("Erro ao cadastrar:", error);
        return { erro: true, message: "Erro de conexão com o servidor." };
    }
};