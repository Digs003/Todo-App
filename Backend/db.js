const mongoose=require("mongoose");
mongoose.connect("mongodb+srv://digantamindia:eTHE7NUtd4qheVAP@cluster0.wnszqsw.mongodb.net/Todo-App-DB")
const todoSchema=mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});

const todo=mongoose.model('todos',todoSchema);

module.exports={
    todo
}