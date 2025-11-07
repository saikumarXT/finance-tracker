import { Router } from "express";
import { expensesModel, incomeModel, userModel } from "../db.js";
import { JWT_SECRET_KEY } from "../config.js";
import jwt from "jsonwebtoken";
import { auth } from "../middleware.js";

const userRouter = Router();


userRouter.post("/signup", async (req, res) => {
  const {userName,password}=req.body;
  
  try {
    await userModel.create({
      userName,
      password,
    });
      res.status(200).json({
        message: "user id created successfully",
      });

  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
});


userRouter.post("/signin", async (req, res) => {
  const { userName, password } = req.body;
  try {                                                     
    const user = await userModel.findOne({
      userName,
      password,
    });
    if (user) {
      const token = jwt.sign({ Id: user._id }, JWT_SECRET_KEY);
      res.status(200).json({
        token: token,
      });
    }
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
});


userRouter.post("/expenses", auth, async (req, res) => {
  const userId = req.body.userId;
  const { amount, category, note } = req.body;
  
  try {
    const postExpense = await expensesModel.create({
      userId,
      category,
      amount,
      note,
    });
    if (postExpense){
      res.status(200).json({
        message: "expenses added ",
      }); 
    }
  } catch (err) {
    message: "error at expenses post ";
  }
});


userRouter.get("/expenses", auth, async (req, res) => {
  const { userId } = req.body;
  try {
    const expenses = await expensesModel.find({
      userId: userId,
    },{});
    if (expenses) {
      res.status(200).json({
        expenses: expenses,
      });
    }
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
});


userRouter.put("/expenses", auth , async (req, res) => {
  const { userId } = req.body;
  const { amount, category, note ,documentId } = req.body;
  try {
    const updateExpenses = await expensesModel.findByIdAndUpdate(documentId, {
      amount,
      category,
      note,
    });
    if (updateExpenses) {
      res.status(200).json({
        message: "data updated success-fully",
      });
    }
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
});


userRouter.delete("/expenses", auth ,async(req, res) => {
const userId = req.body.userId;
const { documentId }=req.body;
try{
const removeData=await expensesModel.findByIdAndDelete(documentId);
  if(removeData){
    res.status(200).json({
      message:"data removed "
    })
  }
}
catch(err){
  res.status(400).json({
    message:err
  })

 }
});


userRouter.post("/income",auth ,async(req, res) => {
  const userId=req.body.userId;
  const {income,category,note}=req.body;
  try{
    const postIncome=await incomeModel.create({
      income,
      category,
      note,
      userId
    })

    if(postIncome){
      res.status(200).json({
        message:'Income data saved successfully'
      })
    }
  }
  catch(error:any){
    res.status(400).json({
      message:error.message || error
    })
  }

});


userRouter.get("/income",auth ,async (req, res) => {
  const {userId}=req.body;
  try{
    const getIncome=await incomeModel.find({userId})
    if( getIncome ){
      res.status(200).json({
        getIncome
      })
    }
  }

  catch(err){
    res.status(400).json({
      message:err
    })
  }

});


userRouter.put("/income",auth ,async(req, res) => {
const {userId}=req.body;
const {category,income,note,documentId}=req.body;


try{
  const editIncome=await incomeModel.findByIdAndUpdate(documentId,{
  income,
  category,
  note,
})

if(editIncome){
    res.status(200).json({
      message:"income data updated successfully"
    })
  }
}
catch(err){
  res.status(400).json({
    message:err
  })
}

});


userRouter.delete("/income", auth,async(req, res) => {
const userId=req.body;
const { documentId }=req.body;
try{
const deleteIncome=await incomeModel.findByIdAndDelete(documentId);
if(deleteIncome){
    res.status(200).json({
      message:"income data deleted successfully"
    })
  }
}

catch(err){
  res.status(400).json({
    message:err
  })
}

});


export { userRouter };
