import express from "express";

const posts = [
    {
        id: 0,
        descricao: "Uma foto teste",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 1,
        descricao: "Gato adorável fazendo pose",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 2,
        descricao: "Gatinho curioso explorando a caixa",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 3,
        descricao: "Paisagem com um gato preguiçoso",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 4,
        descricao: "Gato brincando com um novelo de lã",
        imagem: "https://placecats.com/millie/300/150"
    },
    {
        id: 5,
        descricao: "Gato ronronando no sol",
        imagem: "https://placecats.com/millie/300/150"
    }
];

const app = express();

function buscarPostPorId(id) {
    return posts.findIndex((post) => {
        return post.id == Number(id);
    });
}

// Informa à aplicação para converter as estruturas em JSON.
app.use(express.json());

app.listen(3000, () => {
    console.log("Servidor escutando");
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

app.get("/posts/:id", (req, res) => {
    const index = buscarPostPorId(req.params.id);
    res.status(200).json(posts[index]);
});
