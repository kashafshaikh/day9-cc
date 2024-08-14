
// Day 9: Task
// Question 17: Implement a Stack using TypeScript

// Problem Statement: Implement a stack using TypeScript. The stack should have the following methods:

// push(item: T): void - Adds an item to the top of the stack.
// pop(): T | undefined - Removes and returns the item from the top of the stack. If the stack is empty, it should return undefined.
// peek(): T | undefined - Returns the item at the top of the stack without removing it. If the stack is empty, it should return undefined.
// isEmpty(): boolean - Returns true if the stack is empty, otherwise false.
// Constraints:

// Use generics to make the stack implementation type-safe.
// The stack should handle various data types (number, string, etc.).
// Example Usage: typescript const stack = new Stack(); stack.push(1); stack.push(2); console.log(stack.peek()); // Output: 2
//console.log(stack.pop()); // Output: 2 console.log(stack.pop()); // Output: 1 console.log(stack.isEmpty()); // Output: true


class Stack <T>{
    private items: T[]= []
    
    push(item : T): void{
       this.items.push(item)
    }
    pop():T | undefined{
        return this.items.pop()
    }
   peek():T|undefined{
    return this.items.length > 0 ? this.items[this.items.length-1] : undefined
   } 
   isEmpty():boolean{
    return this.items.length === 0 
   }
}
   const stack  = new Stack <number>(); 
   stack.push(1);
   stack.push(2);  
   console.log(stack.peek());  //output : 2
   console.log(stack.pop());   //output : 2
   console.log(stack.pop());   //output : 1
   console.log(stack.isEmpty());  //output : true

//    Question 18: Implement a Queue using TypeScript

// Problem Statement: Implement a queue using TypeScript. The queue should have the following methods:

// enqueue(item: T): void - Adds an item to the end of the queue.
// dequeue(): T | undefined - Removes and returns the item from the front of the queue. If the queue is empty, it should return undefined.
// peek(): T | undefined - Returns the item at the front of the queue without removing it. If the queue is empty, it should return undefined.
// isEmpty(): boolean - Returns true if the queue is empty, otherwise false.
// Constraints:

// Use generics to make the queue implementation type-safe.
// The queue should handle various data types (number, string, etc.).
// Example Usage: typescript const queue = new Queue(); queue.enqueue("a"); queue.enqueue("b"); console.log(queue.peek()); // Output: "a" console.log(queue.dequeue()); // Output: "a" console.log(queue.dequeue()); // Output: "b" console.log(queue.isEmpty()); // Output: true


class Queue <T>{
    private items: T[]= []
    
    enqueue(item : T): void{
       this.items.push(item)
    }
    dequeue():T | undefined{
        return this.items.shift()
    }
   peek():T|undefined{
    return this.items[0]
   } 
   isEmpty():boolean{
    return this.items.length === 0 
   }
}
   const queue  = new Queue <string>(); 
   queue.enqueue("a");
   queue.enqueue("b");  
   console.log(queue.peek());   //a
   console.log(queue.dequeue());  //a
   console.log(queue.dequeue());   //b
   console.log(queue.isEmpty());    //true







