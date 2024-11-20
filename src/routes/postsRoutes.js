import express from 'express';
import { listarPosts } from '../controllers/postsController.js';
import { listarUsuarios } from '../controllers/usuariosController.js';

export const routes = (app) => {
    // Informa à aplicação para converter as estruturas em JSON.
    app.use(express.json());

    app.get("/posts", listarPosts);

    // Exercício proposto pela Luri
    app.get("/usuarios", listarUsuarios);
}
