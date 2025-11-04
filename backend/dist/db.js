import mongoose from "mongoose";
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;
const user = new Schema({
    userName: { type: String, unique: true },
    password: String
});
const incomeTypes = ['salary', 'rental', 'stockMarket', 'fd'];
const income = new Schema({
    userId: { type: ObjectId },
    income: { type: Number },
    category: { type: String, enum: incomeTypes },
    note: { type: String }
});
const expensesTypes = ['groceries', 'travel', 'food', 'entertainment'];
const expenses = new Schema({
    userId: { type: ObjectId },
    income: { type: String },
    category: { type: String, enum: expensesTypes },
    note: { type: String }
});
const userModel = mongoose.model('users', user);
const incomeModel = mongoose.model('income', income);
const expensesModel = mongoose.model('expenses', expenses);
export { userModel, expensesModel, incomeModel };
//# sourceMappingURL=db.js.map