import { conexao } from "./conexao.js";

async function carregarColecao() {
    const db = conexao.db('imersao-instabytes');
    return db.collection('posts');
}

export async function getPosts() {
    const colecao = await carregarColecao();
    return colecao.find().toArray();
}

export async function criarPost(dados) {
    const colecao = await carregarColecao();
    return colecao.insertOne(dados);
}
