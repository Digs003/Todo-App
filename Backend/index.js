const express=require("express");
const {todo}=require("./db");
const {createTodo,updateTodo}=require("./types");
const cors=require("cors");
const app=express();

app.use(express.json());
app.use(cors());

app.post("/todo",async(req,res)=>{
    const createPayLoad=req.body;
    const parsedpayLoad=createTodo.safeParse(createPayLoad);
    if(!parsedpayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
        return;
    }

    await todo.create({
        title:createPayLoad.title,
        description: createPayLoad.description,
        completed: false
    });

    res.json({
        msg:"Todo created"
    });
});

app.get("/todos",async(req,res)=>{
    const todos=await todo.find({});

    res.json({
        todos
    });
});

app.put("/completed",async(req,res)=>{
    const updatePayLoad=req.body;
    const parsedpayLoad=updateTodo.safeParse(updatePayLoad);
    if(!parsedpayLoad.success){
        res.status(411).json({
            msg: "You sent the wrong inputs"
        });
        return;
    }
    await todo.updateOne({_id:req.body.id},{completed:true});
    //await todo.save();

    res.json({
        msg: "Todo marked as completed"
    })
});

app.listen(3000,(req,res)=>{
    console.log("Server on in port 3000");
});