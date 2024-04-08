var letter = []; //this is our stack
var word = "racecar"
var reword= "";

//put letter in to stack
for(var i = 0; i <word.length; i++){
    letter.push(word[i]);
}

//pop letter from stack
for (var i = 0; i < word.length; i++){
    reword += letter.pop();
}

if(reword==word){
    console.log(word +" is palindrome");
}
else {
    console.log(word +" is not palindrome");
}


/* ***************** using Function ****************** */

// Create a stack
var Stack = function() {
    this.count = 0;
    this.storage = {};

    // Add a value to the end of the stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    };

    // Remove and return the value at the end of the stack
    this.pop = function() {
        if (this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    };

    // Return the value at the end of the stack without removing it
    this.peek = function() {
        return this.storage[this.count - 1];
    };

    // Return the size of the stack
    this.size = function() {
        return this.count;
    };
};

// Usage
var myStack = new Stack();
myStack.push(1);
myStack.push(2);
console.log(myStack.peek()); // Output: 2
console.log(myStack.pop()); // Output: 2
console.log(myStack.peek()); // Output: 1
myStack.push("freeCodeCamp"); // Output
console.log(myStack.size()); // Output:
console.log(myStack.peek()); // Output: 2
console.log(myStack.pop()); // Output: 2
console.log(myStack.peek()); // Output: 1



