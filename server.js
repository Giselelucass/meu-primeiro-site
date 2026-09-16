const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

app.post("/login", (req, res) => {
    const usuario = req.body.usuario;
    const senha = req.body.senha;

    console.log("Tentativa de login recebida.");
    console.log("Usuário:", usuario);

    // Dados fictícios para teste
    if (usuario === "teste" && senha === "123456") {
        res.send(`
            <h1>Login realizado!</h1>
            <p>Bem-vindo, ${usuario}.</p>
        `);
    } else {
        res.status(401).send(`
            <h1>Login não realizado</h1>
            <p>Usuário ou senha inválidos.</p>
            <a href="/">Tentar novamente</a>
        `);
    }
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, "0.0.0.0", () => {
    console.log(Servidor rodando na porta ${PORT});
});