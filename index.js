// Create a CustomerOrder class with properties: orderId (string), items (array of objects with name, quantity, price),
// and status (string). Add a method calculateTotal() that returns the total order amount. Write an async method processPayment() 
// that simulates payment with a Promise that resolves after 2 seconds. After calling the method, change the status to "paid" and print a success message.

//Create a customer order class with pro[erties of order id, items(array of objects with name, quantity, price) and status
//Set the status to pending
//create a method calculateTotal
//initiate sum = 0
//Loop through the array of items and multiply the array wuantity to price, then add it to sum
//return sum
//create async method processPayment
//it awaits and is resolved in 2 seconds
//chage the status to paid
//print out a success method
class CustomerOrder{
    constructor(orderId, items, status){
        this.orderId = orderId;
        this.items=items;
        this.status="Pending";
    }
    calculateTotal(){
        let sum=0;
        for(let item of this.items){
        sum += item.quantity * item.price
        }
        return sum   
    }
    async processPayment() {
            await new Promise((resolve) => setTimeout(resolve, 2000));
            this.status = "Paid";
            console.log("your order has been successful.");
        
}}

let order1 = new CustomerOrder("Or10023", [{name: "Bananas", quantity:5, price: 300}, {name: "Apples", quantity: 10, price: 50}])
let total = order1.calculateTotal()
console.log(`Your total price is ${total}$.`);
order1.processPayment()





// Create a TeamMember class that takes name, role, and an array of tasks 
// (each task is an object with title and completed boolean). Write a prototype method completeTask(taskTitle) 
// that marks a task as completed. Write another method checkProgress() that returns a Promise resolving to "All tasks completed!" 
// or rejecting with "Pending tasks remaining" based on the state of the tasks array.

// Create a TeamMember class that takes name, role, and an array of tasks where object had title and boolean 
//Create prototype method task type, that takes in a task title
//loop through the array of tasks, see if the taskTitle is found in the array of objects as the title
//then mark it as done
// Create a prototype checkProgress nd return new promise, 
//Create a variable and filter the tasks that are not completed
//for resolve: if the length o the variable is zero then log all are completed
//for reject: else log there is peding task


class TeamMember{
    constructor(name, role, tasks){
        this.name =name;
        this.role =role;
        this.tasks = tasks;

    }
    
}
TeamMember.prototype.completeTask = function (taskTitle){
for(let i=0; i<this.tasks.length; i++){
    if(this.tasks[i].title == taskTitle && this.tasks[i].completed == false){
        this.tasks[i].completed = true;
        console.log(`Task ${taskTitle} has been completed.`);
    }  
}

 
}

TeamMember.prototype.checkProgress = function (){ 
        return new Promise((resolve, reject) => {
            let notCompleted = this.tasks.filter(task => !task.completed);
            if (notCompleted.length === 0) {
                resolve("All tasks completed!");
            } else {
                reject("Pending tasks remaining");
            }
        }).then(complete => console.log(complete))
        .catch(notomplete => console.log(notomplete));
    }   
let teamMember1 = new TeamMember("Arsema", "UX designer", [{title: "Design home page", completed: false}, {title: "Do the wireframes", completed: false}])
teamMember1.completeTask("Design home page")
teamMember1.checkProgress()


// Build a Candidate class with properties: name, position, and interviews 
// (array of objects with date, status). Add a method scheduleInterview(date) that pushes a new interview with status "pending". 
// Then write an async function sendConfirmation() that returns a Promise that resolves after 
// 1 second with a message "Interview confirmed with [name]", and log the message.

// Create a class candidatewith properties: name, position, and interviews 
// Initlise empty array of interviews
// Create a method scheduleInterview that takes in date
// Push interview object to interview list with status and date
// Then resolve Confirmation after 1 second "Interview confirmed with [name]", and log the message.

class Candidate {
    constructor(name, position, interviews = []) {
        this.name = name;
        this.position = position;
        this.interviews = interviews;
    }

    scheduleInterview(date) {
        this.interviews.push({date, status: "pending"});
    }

    async sendConfirmation() {
        return new Promise((resolve) => {
            setTimeout(() => {
                const interviewMessage = `Interview confirmed with ${this.name}.`;
                resolve(interviewMessage);
            }, 1000);
        }).then(interviewMessage => console.log(interviewMessage));
    }
}

let candidate1 = new Candidate("Arsema Aregawi", "Frontend developer");
candidate1.scheduleInterview("2025-10-20");
candidate1.sendConfirmation();


// Design a Course class with properties: title, instructor, and students (array of student objects with name and progress). 
// Add a method updateProgress(studentName, value) 
// that modifies the student’s progress. Create an async method generateCertificate(studentName) that returns a Promise resolving only if the progress is 100, 
// otherwise reject with "Incomplete progress"


//Create class course with properties: name, position, and interviews (array of objects with date, status)
//create a method updateProgress(studentName, value) 
//loop through the students 
//if studentName equals one of the students we find looping
//set the progress to the new value
//return the student name and value
//else return student not found

//create async function async generateCertificate() that takes in studentName
//intiate a variable student name
//loop through the students and look for the name
//assign the student variable to the student found
// If the progress is 100, resolve the Promise with a certificate message.
// If not reject with "Incomplete progress"


class Course {
    constructor(title, instructor, students) {
        this.title = title;
        this.instructor = instructor;
        this.students = students;
    }
    updateProgress(studentName, value){
        for(let student of this.students){
            if(studentName === student.name){
                student.progress = value;
                return `Progress for ${studentName} updated to ${value}.`;
            }
        }
        return `Student ${studentName} not found.`;
    }
    async generateCertificate(studentName) {
        let student;
        for(let stu of this.students){
            if(stu.name === studentName){
                student = stu;
            }
        }
        return new Promise((resolve, reject) => {
            if (student && student.progress === 100) {
                resolve(`Certificate ready for ${studentName}.`);
            } else {
                reject("Incomplete progress");
            }
        }).then(complete => console.log(complete))
        .catch(notcomplete => console.log(notcomplete));
    }
}

const course = new Course("DAS", "Ms. Arsema", [
    { name: "Semhal", progress: 90 },
    { name: "Pheobe", progress: 100 }
]);

console.log(course.updateProgress("Semhal", 100)); 
course.generateCertificate("Pheobe");


// Create a StockTracker class with a property watchlist (array of objects with symbol, threshold, currentPrice). 
// Add a method updatePrice(symbol, newPrice) that updates the stock’s current price. Write an async method checkAlerts() 
// that loops through the watchlist and returns a Promise resolving with a list of stocks where currentPrice >= threshold, 
// or rejecting with "No alerts triggered".



