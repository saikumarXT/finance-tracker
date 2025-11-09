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
  const userId = req.userId;
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
  const  userId  = req.userId;
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
  const userId  = req.userId;
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
const userId = req.userId;
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
  const userId=req.userId;
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
  const userId=req.userId;
  try{
    const income=await incomeModel.find({userId})
      res.status(200).json({
        income,
      })
  }

  catch(err){
       console.log(err)
    res.status(400).json({
      message:err
    })
  }

});


userRouter.put("/income", auth, async (req, res) => {
  const userId = req.userId;
  const { updates } = req.body; // array of income documents with _id and fields

  console.log("✅ Reached PUT /income route");
  console.log("Body:", req.body);
  console.log("User ID:", req.userId);


  if (!Array.isArray(updates)) {
    return res.status(400).json({ message: "Invalid data format" });
  }

  try {
    const updatePromises = updates.map((item) =>
      // only update documents that belong to this user
      incomeModel.findOneAndUpdate(
        { _id: item._id, userId },
        {
          $set: {
            income: item.income,
            category: item.category,
            note: item.note,
          },
        },
        { new: true }
      )
    );

    const results = await Promise.all(updatePromises);

    res.status(200).json({
      message: "Income records updated successfully",
      results,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error", error: err });
  }
});



userRouter.delete("/income", auth,async(req, res) => {
const userId=req.userId;
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
