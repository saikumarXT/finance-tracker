import mongoose, { mongo } from "mongoose";
const Schema=mongoose.Schema;
const ObjectId=mongoose.Types.ObjectId;

const user=new Schema({

})

const income= new Schema({

})

const expenses=new Schema({

})

const userModel=mongoose.model('users',user);
const incomeModel=mongoose.model('income',income);
const expensesModel=mongoose.model('expenses',expenses);

export { userModel,expensesModel,incomeModel }
