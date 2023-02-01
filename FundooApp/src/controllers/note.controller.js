import HttpStatus from 'http-status-codes';
import * as NoteService from '../services/note.service';


// CREATE 
// function for registration
export const createNote = async (req, res, next) => {
    try {
      const data = await NoteService.createNote(req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data:data,
        message: 'note has been added'
      });
    } catch (error) {
      next(error);
    }
  };

  export const updateNote = async (req, res, next) => {
    try {
        const data = await NoteService.updateNote(req.params.id, req.body);
        res.status(HttpStatus.ACCEPTED).json({
            code: HttpStatus.ACCEPTED,
            data: data,
            message: 'Note updated successfully'
        });
    } catch (error) {
        next(error);
    }
};

  export const getAllNote = async (req, res, next) => {
    try {
      const data = await NoteService.getAllNote();
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'All notes fetched successfully'
      });
    } catch (error) {
      next(error);
    }
  };

  
  export const getNoteId = async (req, res, next) => {
    try {
      const data = await NoteService.getNoteId(req.params.id);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note from specific id fetched'
      });
    } catch (error) {
      next(error);
    }
  };

// delete a note
export const deleteNote = async (req, res, next) => {
  try {
    await NoteService.deleteNote(req.params.id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: [],
      message: 'Note deleted'
    });
  } catch (error) {
    next(error);
  }
};

