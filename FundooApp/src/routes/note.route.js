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
router.delete('/:_id', userAuth, noteController.deleteNote);

// send note to trash by id
router.put('/:_id/trash', userAuth, noteController.trash);

// recover from trash put
router.put('/:_id/trash/recover', userAuth, noteController.recTrash);

// Send to archive by id
router.put('/:_id/archive', userAuth, noteController.archive);

// recover from trash put
router.put('/:_id/archive/recover', userAuth, noteController.recArchive);
export default router;


