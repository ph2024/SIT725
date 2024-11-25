var express = require("express")
var app = express()
app.use(express.static(__dirname+'/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
var port = process.env.port || 3000;
const addTwoNumber = (n1,n2) => {
    return n1+n2;
}

const numbers = [];

app.get("/addTwoNumber", (req,res)=>{
console.log("The application will add 2 numbers that you supply.");
console.log("Enter first number:");


process.stdin.on("data", data => {
  numbers.push(data*1);

  if (numbers.length < 2) {
    console.log("Enter second number:");
  } else {
    console.log("Now return to browser to see results.");
    process.exit();
  }
});

process.on("exit", () => {
    const [n1, n2] = numbers;


const result = addTwoNumber(n1,n2);
    res.json({statuscode:200, data: result }); 
});
});


app.listen(port,()=>{
    console.log("Point or refresh browser to http://localhost:3000/addTwoNumber, then return to console to enter numbers.")
    console.log("App listening to: "+port)
})