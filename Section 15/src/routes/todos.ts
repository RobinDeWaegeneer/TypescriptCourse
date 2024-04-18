import { Router} from 'express';

import { createToDo, getTodos, updateToDo, deleteTodo } from '../controllers/todos';

const router = Router();

router.post('/', createToDo);

router.get('/', getTodos);

router.patch('/:id', updateToDo);

router.delete('/:id', deleteTodo);

export default router;