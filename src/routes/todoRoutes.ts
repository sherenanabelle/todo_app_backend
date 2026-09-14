import { Router } from 'express';
import { getTodos, getTodoById, createTodo, updateTodo, deleteTodo } from '../controllers/todoController';
import { validateTodo, validateUpdateTodo } from '../middlewares/validator';

const router = Router();

router.get('/', getTodos);
router.post('/', validateTodo, createTodo);
router.put('/:id', validateUpdateTodo, updateTodo);
router.delete('/:id', deleteTodo);
router.get('/:id', getTodoById);

export default router;