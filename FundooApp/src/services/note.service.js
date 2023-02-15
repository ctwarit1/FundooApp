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
    try {
      const data = await Note.findById(id);
      return data;
  } catch (err) {
    throw new Error(err)
  }
};

// Read Funcion(all note)
export const getAllNote = async () => {
  try {
    const data = await Note.find();
    return data;
} catch (err) {
  throw new Error(err)
}
}

// Update Funcion
export const updateNote = async (id, body) => {
  try{
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
}catch(err){
  throw new Error(err)
}
};

// Delete Funcion
export const deleteNote = async (id) => {
  try {
    await Note.findByIdAndDelete(id);
    return '';
} catch (err) {
    throw new Error(err)
}
};


// Send note to trash
export const sendTrash = async (_id, userId) => {
  try {
      const data = await Note.findByIdAndUpdate({ _id, userId: userId }, { trash: true}, { new: true });
      return data;
  } catch (err) {
      throw new Error(err)
  }
};

// Recover from trash
export const recoverTrash = async (_id, userId) => {
  try {
      const data = await Note.findByIdAndUpdate({ _id, userId: userId }, { trash: false }, { new: true });
      return data;
  } catch (err) {
      throw new Error(err)
  }
};


// Send note to Archive
export const sendArchive = async (_id, userId) => {
  try {
      const data = await Note.findByIdAndUpdate({ _id, userId: userId }, { archive: true }, { new: true });
      return data;
  } catch (err) {
      throw new Error(err)
  }
};

// Recover from Archive
export const recoverArchive = async (_id, userId) => {
  try {
      const data = await Note.findByIdAndUpdate({_id, userId: userId }, { archive: false }, { new: true });
      return data;
  } catch (err) {
      throw new Error(err)
  }
};