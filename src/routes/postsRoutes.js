import express from "express";
import { listarPosts, postarNovoPost, enviarImagem } from "../controllers/postsController.js";
import { listarUsuarios } from "../controllers/usuariosController.js";
import multer from "multer";

// Trecho de código necessário para o multer no Windows
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function(req, file, cb) {
        cb(null, file.originalname);
    }
});

const upload = multer({dest: "./uploads",  storage});

export const routes = (app) => {
    // Informa à aplicação para converter as estruturas em JSON.
    app.use(express.json());

    // Rota para buscar todos os posts.
    app.get("/posts", listarPosts);

    // Rota para criar novo post
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), enviarImagem);

    // Exercício proposto pela Luri
    app.get("/usuarios", listarUsuarios);
}
