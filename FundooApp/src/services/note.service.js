import Note from '../models/note.model';

// Create Funcion
export const createNote = async (body) => {
  try {
    const data = await Note.create(body)
    return data
  } catch (err) {
    throw new Error(err)
  }
}

// Read Funcion
export const getNoteId = async (id) => {
  const data = await Note.findById(id);
  return data;
};

// Read Funcion(all note)
export const getAllNote = async () => {
  const data = await Note.find();
  return data;
};

// Update Funcion
export const updateNote = async (id, body) => {
  const data = await Note.findByIdAndUpdate(
    {
      _id
    },
    body,
    {
      new: true
    }
  );
  return data;
};

// Delete Funcion
export const deleteNote = async (id) => {
  await Note.findByIdAndDelete(id);
  return '';
};

