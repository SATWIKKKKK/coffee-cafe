const express = require("express");
const mongoose = require("mongoose");

const app = express();

//middleware operation

app.use(express.json());
app.use(express.urlencoded({extended : false}));

//Schema
const coffeeSchema = new mongoose.Schema({
    name : String,
    price : Number,
    description : String,
    category : String
})

//Schema->Model
const coffeeModel = mongoose.model('Coffee', coffeeSchema);

//MongoDB connection
mongoose
.connect("mongodb+srv://satwikchandra65_db_user:u4X3nu8LCZOZcPhU@cluster0.166fgkg.mongodb.net/coffee-cafe?retryWrites=true&w=majority&appName=Cluster0")
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log("Not Connected to MongoDB", err));

//Routes
app.get("/api/coffee", async(req, res) => {
    try{
   const users = await coffeeModel.find();
   return res.status(200).json(users);
    }
    catch(err){
        return res.status(500).json({msg : "Server Error"});
    }
});

app.post("/api/coffee", async (req,res) => {
    const body = req.body;
    if(
        !body.name ||
        !body.price ||
        !body.description ||
        !body.category 
    ){
        return res.status(400).json({msg : "All fields are required"});
    }
    await coffeeModel.create({
        name : body.name,
        price : body.price,
        description : body.description,
        category : body.category
   }); 
    return res.status(201).json({msg : "Coffee created successfully"});
});

app.get("/api/coffee/:id", async(req, res) => {
    try{
   const coffee = await coffeeModel.findById(req.params.id);
   return res.status(200).json(coffee);
    }
    catch(err){
        return res.status(404).json({msg : "Coffee not found"});
    }
});

app.patch("/api/coffee/:id", async(req, res) => {
   try{
    await coffeeModel.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).json({msg : "Coffee updated successfully"});
   }
   catch(err){
       return res.status(500).json({msg : "Server Error"});
   }
});


app.delete("/api/coffee/:id", async(req, res) => {
    try{
   await coffeeModel.findByIdAndDelete(req.params.id);
    return res.status(200).json({msg : "Coffee deleted successfully"});
    }
    catch(err){
        return res.status(500).json({msg : "Server Error"});
    }
});


//Listening to the Port
app.listen(8008, () => {
    console.log(`Server is running on port 8008`);
});
