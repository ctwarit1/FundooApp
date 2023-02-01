import express from 'express';
import * as noteController from '../controllers/note.controller';
import { newNoteValidator } from '../validators/note.validator';

import { userAuth } from '../middlewares/auth.middleware';

const router = express.Router();

// Create/register route for note
router.post('/note', newNoteValidator, userAuth, noteController.createNote);

// Read/get route for note
router.get('/:id', userAuth, noteController.getNoteId);

// Read/get route for all notes
router.get('/', userAuth, noteController.getAllNote);

// Update route for notes
router.put('/:id', userAuth, noteController.updateNote);

// Delete route for notes
router.delete('/:id', userAuth, noteController.deleteNote);

export default router;
