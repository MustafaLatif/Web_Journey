const express=require('express');
const router=express.Router();
const expense= require("../models/expense");

//Get/api/expenses?tripId=.. -- get all expense for trip
router.get("/",async(req,res)=>{
    const{tripId}= req.query;
    if(!tripId){
        return res.status(400).json({error:"tripId query parameter required"})
    }
    try{
        const expenses=await expense.find({trip:tripId}).sort({date: -1});
        res.json({expenses});
    }
    catch(err){
        res.status(500).json({error:err.message});
    }
});
//POST/ api/expenses -create a expense
router.post("/",async (req,res)=>{
    const {trip, amount, category, description="",date }=req.body;
    if(!trip||!amount||!category||!date){
        return res.status(400).json({error:"All fields are required"})
    }
    const validCategories=["travel","food","accomodation","fun","other"];
    if(!validCategories.includes(category.toLowerCase())){
        return res.status(400).json({error:"Invalid category"})
    }
    try{
        const expenses= new expense({
            trip,
            amount:Number(amount),
            category:category.toLowerCase(),
            description:description.trim(),
            date:new Date(date),
        });
        const savedExpense=await expenses.save();
        res.status(201).json(savedExpense);
    }
    catch(err){
        res.status(400).json({error: err.message});
    };
});
// GET /api/expenses/:id - get a single expense
router.get("/:id", async (req, res) => {
  try {
    const expense = await Expense.findById(req.params.id).populate("trip");
    if (!expense) {
      return res.status(404).json({ error: "Expense not found" });
    }
    res.json(expense);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// PUT /api/expenses/:id - update an expense

 router.put("/:id", async (req, res) => {
  const { amount, category, description, date } = req.body;

  const updateData = {};
  if (amount !== undefined) updateData.amount = Number(amount);
  if (category) {
    const validCategories = ["travel", "food", "accommodation", "fun", "other"];
    if (!validCategories.includes(category.toLowerCase())) {
      return res.status(400).json({ error: "Invalid category" });
    }
    updateData.category = category.toLowerCase();
  }
  if (description !== undefined) updateData.description = description.trim();
  if (date) updateData.date = new Date(date);

  try {
    const expense = await Expense.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );
    if (!expense) {
      return res.status(404).json({ error: "Expense not found" });
    }
    res.json(expense);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// DELETE /api/expenses/:id - delete an expense
router.delete("/:id", async (req, res) => {
  try {
    const expense = await Expense.findByIdAndDelete(req.params.id);
    if (!expense) {
      return res.status(404).json({ error: "Expense not found" });
    }
    res.json({ message: "Expense deleted" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
