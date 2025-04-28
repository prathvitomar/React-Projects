// CALCULATE TOTAL SPENT ON CATEGORY :
let input = [
  { itemName: "Pizza", category: "Food", price: 10, timestamp: 12345 },
  { itemName: "Burger", category: "Food", price: 5, timestamp: 12346 },
  {
    itemName: "Shampoo",
    category: "Personal Care",
    price: 15,
    timestamp: 12347,
  },
  { itemName: "Book", category: "Education", price: 20, timestamp: 12348 },
  { itemName: "Pen", category: "Education", price: 5, timestamp: 12349 },
];

// Expected Output : 
// [
//   { "category": "Food", "totalSpent": 15 },
//   { "category": "Personal Care", "totalSpent": 15 },
//   { "category": "Education", "totalSpent": 25 }
// ]

function calculateTotalSpentByCategory(transactions) {
    let result = {}, ans = [];
    for(let val of transactions){
        const {category, price} = val;
        if(result[category]){
            result[category] +=price;
        }
        else{
            result[category] = price;
        }
    }

    Object.keys(result).map((category)=>(
        ans.push({
            category : category,
            totalSpent : result[category]
        })
    ))
    return ans;

}
// console.log(calculateTotalSpentByCategory(input));




// CALCULATE TIME OF A FUNCTION :
function calculateTime(n) {
    let time = Date.now();
    for(let  i =0; i < n; i++){}
    console.log((Date.now() - time)/1000 + " seconds");
}
// calculateTime(1000000000)




//  CALCULATOR :
/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs
*/

class Calculator {
    constructor(){
        this.count = 0;
    }

    add(num) {
        this.count += num
    }

    sub(num){
        this.count -= num;
    }

    mul(num) {
        this.count *= num
    }

    div(num){
        if(this.count === 0) return;
        this.count /= num;
    }

    getResult(){
        return this.count;
    }

    clear(){
        this.count = 0;
    }

    calculate(expression) {
        try {
          const cleanedExpression = expression.replace(/\s+/g, "");
    
          if (!/^[0-9+\-*/().]+$/.test(cleanedExpression)) {
            throw new Error("Invalid characters in expression");
          }
    
          const evaluatedResult = new Function(`return (${cleanedExpression})`)();
          
          this.result = evaluatedResult;
        } catch (error) {
          throw new Error("Invalid expression");
        }
      }
}

const cal = new Calculator();
cal.add(5);
cal.add(10);
cal.add(23);
cal.sub(8);
console.log(cal.getResult())
cal.mul(3);
console.log(cal.getResult())






/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos
*/

class Todo {
    constructor(){
        this.todos = [];
    }

    add(todo){
        let newTodo = {
            id : Date.now(),
            content : todo
        }
        this.todos.push(newTodo)
    }

    remove(todoId){        
        this.todos = this.todos.splice(todoId, 1);
    }

    update(id, updatedTodo){
        if(this.todos[id].content){
            this.todos[id].content = updatedTodo;
        }
    }

    getAll(){
        return this.todos;
    }

    getByIndex(id){
        return this.todos[id];
    }

    clear(){
        this.todos = [];
    }

}

const t = new Todo();
t.add("This is first Todo");
t.add("This is Second Todo");
t.add("This is Third Todo");
console.log(t.getAll());
t.remove(31);
console.log(t.getAll());
console.log(t.update(1745821150781, "Updated third Todo"));
console.log(t.getAll());
// console.log(t.getByIndex(12));
// t.clear()
// console.log(t.getAll());