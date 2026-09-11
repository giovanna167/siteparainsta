const formCadastro = document.getElementById("formCadastro");

const nascimento = document.getElementById("nascimento");
const areaResponsavel = document.getElementById("areaResponsavel");

const responsavelNome = document.getElementById("responsavelNome");
const responsavelCpf = document.getElementById("responsavelCpf");
const parentesco = document.getElementById("parentesco");
const responsavelTelefone = document.getElementById("responsavelTelefone");

const googleLogin = document.getElementById("googleLogin");
const appleLogin = document.getElementById("appleLogin");


// ==========================================
// VERIFICAR IDADE
// ==========================================

nascimento.addEventListener("change", function () {

    const dataNascimento = new Date(this.value);

    if (isNaN(dataNascimento.getTime())) {
        areaResponsavel.style.display = "none";
        return;
    }

    const hoje = new Date();

    let idade =
        hoje.getFullYear() -
        dataNascimento.getFullYear();

    const mes =
        hoje.getMonth() -
        dataNascimento.getMonth();

    if (
        mes < 0 ||
        (mes === 0 &&
            hoje.getDate() < dataNascimento.getDate())
    ) {
        idade--;
    }

    if (idade < 18) {

        areaResponsavel.style.display = "block";

        responsavelNome.required = true;
        responsavelCpf.required = true;
        parentesco.required = true;
        responsavelTelefone.required = true;

    } else {

        areaResponsavel.style.display = "none";

        responsavelNome.required = false;
        responsavelCpf.required = false;
        parentesco.required = false;
        responsavelTelefone.required = false;

        responsavelNome.value = "";
        responsavelCpf.value = "";
        parentesco.value = "";
        responsavelTelefone.value = "";
    }
});


// ==========================================
// MÁSCARA CPF
// ==========================================

responsavelCpf.addEventListener("input", function () {

    let valor = this.value.replace(/\D/g, "");

    valor = valor.substring(0, 11);

    valor = valor.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );

    valor = valor.replace(
        /(\d{3})(\d)/,
        "$1.$2"
    );

    valor = valor.replace(
        /(\d{3})(\d{1,2})$/,
        "$1-$2"
    );

    this.value = valor;
});


// ==========================================
// MÁSCARA TELEFONE
// ==========================================

responsavelTelefone.addEventListener("input", function () {

    let valor = this.value.replace(/\D/g, "");

    valor = valor.substring(0, 11);

    if (valor.length <= 10) {

        valor = valor.replace(
            /(\d{2})(\d)/,
            "($1) $2"
        );

        valor = valor.replace(
            /(\d{4})(\d)/,
            "$1-$2"
        );

    } else {

        valor = valor.replace(
            /(\d{2})(\d)/,
            "($1) $2"
        );

        valor = valor.replace(
            /(\d{5})(\d)/,
            "$1-$2"
        );
    }

    this.value = valor;
});


// ==========================================
// CRIAR CONTA
// ==========================================

formCadastro.addEventListener("submit", function (event) {

    event.preventDefault();

    const nome =
        document.getElementById("nome").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const dataNascimento =
        document.getElementById("nascimento").value;

    const ciptea =
        document.getElementById("ciptea").value.trim();

    const senha =
        document.getElementById("senha").value;

    const confirmarSenha =
        document.getElementById("confirmarSenha").value;


    // Verificar senhas

    if (senha !== confirmarSenha) {

        alert("As senhas não são iguais.");

        return;
    }


    // Verificar tamanho da senha

    if (senha.length < 6) {

        alert("A senha precisa ter pelo menos 6 caracteres.");

        return;
    }


    // Verificar se já existe conta

    const contaExistente =
        JSON.parse(localStorage.getItem("penguinismoConta"));


    if (
        contaExistente &&
        contaExistente.email.toLowerCase() ===
        email.toLowerCase()
    ) {

        alert("Esse e-mail já possui uma conta.");

        return;
    }


    // Dados da conta

    const conta = {

        nome: nome,

        email: email,

        dataNascimento: dataNascimento,

        ciptea: ciptea,

        senha: senha,

        responsavel: {

            nome: responsavelNome.value.trim(),

            cpf: responsavelCpf.value.trim(),

            parentesco: parentesco.value,

            telefone: responsavelTelefone.value.trim()
        }
    };


    // Salvar conta

    localStorage.setItem(
        "penguinismoConta",
        JSON.stringify(conta)
    );


    // Salvar sessão

    localStorage.setItem(
        "penguinismoLogado",
        "true"
    );


    alert(
        "Conta criada com sucesso! Bem-vindo(a) ao Penguinismo."
    );


    // Ir para a página principal

    window.location.href = "index.html";
});


// ==========================================
// GOOGLE
// ==========================================

googleLogin.addEventListener("click", function () {

    const contaGoogle = {

        nome: "Usuário Google",

        email: "google@penguinismo.local",

        tipo: "google"
    };


    localStorage.setItem(
        "penguinismoConta",
        JSON.stringify(contaGoogle)
    );


    localStorage.setItem(
        "penguinismoLogado",
        "true"
    );


    alert("Login com Google realizado com sucesso!");

    window.location.href = "index.html";
});


// ==========================================
// APPLE
// ==========================================

appleLogin.addEventListener("click", function () {

    const contaApple = {

        nome: "Usuário Apple",

        email: "apple@penguinismo.local",

        tipo: "apple"
    };


    localStorage.setItem(
        "penguinismoConta",
        JSON.stringify(contaApple)
    );


    localStorage.setItem(
        "penguinismoLogado",
        "true"
    );


    alert("Login com Apple realizado com sucesso!");

    window.location.href = "index.html";
});