import User from '../models/user.model';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

//get all users
export const getAllUsers = async () => {
  const data = await User.find();
  return data;
};


export const userRegister = async (body) => {
  const userexist = await User.findOne({ email: body.email });
  
  // checking if the email is already there or not
if (!userexist) {
  const salt = await bcrypt.genSalt(10);
  body.password =await bcrypt.hash(body.password, salt);

  const data = await User.create(body);
    return data;
  }
  else {
    throw new Error("Please try again with different email id!")
  }
};

export const login = async (body) => {
  try {
    const userdata = await User.findOne({ email: body.email });
    if (!userdata) {
      throw new Error("Invalid Email ID entered")
    }
    
    const validPassword = await bcrypt.compare(body.password,userdata.password);
    if(!validPassword){
      throw new Error("Invalid Password")
    }
    else{
      let token = jwt.sign({ email: userdata.email }, process.env.SECRET_KEY);
      return token;
      // return userdata;
    }
    return userdata;
  }
  catch (error) {
    throw new Error(`${error}`)
  }

};

//update single user
export const updateUser = async (_id, body) => {
  const data = await User.findByIdAndUpdate(
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

//delete single user
export const deleteUser = async (id) => {
  await User.findByIdAndDelete(id);
  return '';
};

//get single user
export const getUser = async (id) => {
  const data = await User.findById(id);
  return data;
};
