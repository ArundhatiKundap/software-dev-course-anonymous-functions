/*
===========================================
📝 To-Do List Filter with Anonymous Functions
===========================================

🎯 Objective:
Students will create and manipulate a simple array of to-do items using anonymous functions.

They will practice using:
- `filter()` to extract specific items
- `map()` to transform items
- `sort()` to organize items

This activity helps build a dynamic "To-Do List Filter" based on different criteria.
*/

// ============================================
// 🚀 Starting Point: To-Do List Array
// ============================================

const todos = [
    { task: "Wash the dishes", completed: false, priority: 3 },
    { task: "Write a blog post", completed: true, priority: 1 },
    { task: "Buy groceries", completed: false, priority: 2 },
    { task: "Study JavaScript", completed: true, priority: 1 },
    { task: "Walk the dog", completed: false, priority: 2 },
  ];
  
  // ============================================
  // 🔍 Tasks
  // ============================================

  /*
  🔹 Task 1: Filter Incomplete Tasks
  
  Step-by-Step:
  1. Use the `filter()` method on the todos array.
  2. Use an anonymous function as the callback.
  3. Return only the tasks that are not completed.
  */
function incompleteTasks() {
    const incompleteTodos = todos.filter(todo => !todo.completed);
    return incompleteTodos
}
 
  /*
  🔹 Task 2: Sort Tasks by Priority
  
  Step-by-Step:
  1. Use the `sort()` method on the todos array.
  2. Use an anonymous function as the comparison function.
  3. Sort tasks in ascending order of priority (1 = highest).
  */
function sortTask() {
    
    const sortedTask = [...todos].sort((a, b) => a.priority - b.priority);     // created copy of array and sort it ..not changed in original array   
    return sortedTask;
}
  
  /*
  🔹 Task 3: Mark All Tasks as Completed
  
  Step-by-Step:
  1. Use the `map()` method to return a new array.
  2. Use an anonymous function to modify each object.
  3. Change the `completed` property to `true` for every task.
  */
function completedTask() {

    const updatedTodos = todos.map(todo => ({             //{ ...todo, completed: true } makes a copy of each task and updates completed.
        ...todo,
        completed: true
    }));
    return updatedTodos;
}
  
  
  /*
  🔹 Task 4: Combine Filters
  
  Step-by-Step:
  1. First, filter the todos to get only incomplete tasks.
  2. Then, sort the filtered results by priority using `sort()`.
  3. Use method chaining to perform both steps together.
  */

function sortedIncomplete() {
    
    const sortedIncomplete = todos
        .filter(todo => !todo.completed)
        .sort((a, b) => a.priority - b.priority);
    return sortedIncomplete;
}
  
  // ============================================
  // 🧪 Console Test Your Work
  // ============================================
  
console.log("Incomplete Tasks:");

for (todo of incompleteTasks()) {
    console.log(`${todo.task}`);
}
console.log("Sorted by Priority:");

for (todo of sortTask()) {
    console.log(`${todo.task} | ${todo.priority}`);
}
console.log("All Tasks Completed:");

for (todo of completedTask()) {
    console.log(`${todo.task} | ${todo.completed}`);
}

console.log("Sorted Incomplete Tasks:");
for (todo of sortedIncomplete()) {
    console.log(`${todo.task} | ${todo.completed}`);
}
  