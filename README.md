# Prompt Sync Calculator
## From youtube [Kenapa Error?](https://www.youtube.com/@kenapaerror)

# What is `prompt-sync`?

`prompt-sync` is a Node.js module that allows developers to synchronously prompt the user for input via the command line interface (CLI) or terminal. It is an easy-to-use and lightweight library that can be installed and used within your Node.js project. The library provides a `prompt` function that will display a message to the user and wait for their input before returning the entered value.

# How to use `prompt-sync`?

To use `prompt-sync`, you must first install the module using a package manager like `npm`. You can install it by running the following command in your terminal:

    npm install prompt-sync 

Once you have installed the `prompt-sync` module, you can use it in your code by importing it and creating an instance of the `prompt` function. You can then use the `prompt` function to display a message to the user and wait for their input.

Here's an example of how to use `prompt-sync`:

    const prompt = require('prompt-sync')();
    
    const name = prompt('What is your name? ');
    
    console.log(`Hello, ${name}!`);

In the example above, we import the `prompt-sync` module and create an instance of the `prompt` function. We then use the `prompt` function to ask the user for their name and store the entered value in a variable. Finally, we log a message that includes the user's name to the console.

# Advantages of `prompt-sync`

One of the main advantages of `prompt-sync` is that it is a simple and lightweight library that is easy to use. It allows developers to easily prompt the user for input via the command line interface, which can be useful for a variety of applications.

Another advantage of `prompt-sync` is that it is synchronous, which means that it will wait for the user to enter their input before continuing with the rest of the code. This can be useful for situations where you need to ensure that the user has entered a value before continuing.

# Limitations of `prompt-sync`

One of the limitations of `prompt-sync` is that it is synchronous, which can make it slower than other methods of getting user input. If your application requires a lot of user input or needs to be very responsive, `prompt-sync` may not be the best choice.

Another limitation of `prompt-sync` is that it is designed for use in the command line interface or terminal, so it may not be suitable for applications that require a graphical user interface (GUI). If you need to prompt the user for input in a GUI application, you may need to use a different library or method.
