"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const todos = [{
        "id": "2023-07-29T06:03:06.713Z",
        "text": " Sample 1"
    },
    {
        "id": "2023-07-30T06:03:06.713Z",
        "text": " Sample 2"
    }];
const router = (0, express_1.Router)();
router.get('/', (req, res, next) => {
    res.status(200).json({ todos: todos });
});
router.post('/todo', (req, res, next) => {
    const newTodo = {
        id: new Date().toISOString(),
        text: req.body.text
    };
    todos.push(newTodo);
    res.status(200).json({ message: 'Todo created successfully', todo: newTodo });
});
router.put('/todo/update/:id', (req, res, next) => {
    const params = req.params;
    const id = params.id;
    const body = req.body;
    const updateText = body.text;
    const indexToUpdate = todos.findIndex((todo) => todo.id === id);
    if (indexToUpdate === -1) {
        return res.status(404).json({ message: "todo does not exist" });
    }
    if (!updateText) {
        return res.status(404).json({ message: "update body is empty" });
    }
    todos[indexToUpdate].text = updateText;
    res.status(200).json({ message: "Todo updated" });
});
router.delete('/todo/delete/:id', (req, res, next) => {
    const params = req.params;
    const id = params.id;
    const indexToDelete = todos.findIndex((todo) => todo.id === id);
    if (indexToDelete === -1) {
        return res.status(404).json({ message: "todo does not exist" });
    }
    todos.splice(indexToDelete, 1);
    res.status(200).json({ message: "Todo deleted" });
});
exports.default = router;
