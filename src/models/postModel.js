import { conexao } from "./conexao.js";

export async function getPosts() {
    const db = conexao.db('imersao-instabytes');
    const colecao = db.collection('posts');
    return colecao.find().toArray();
}
