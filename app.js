const ps = require("prompt-sync");
const prompt = ps();

class Calculator {
    display() {
        console.info("\nPlease Choose: ");
        console.info("1. Increase");
        console.info("2. Substract");
        console.info("3. Divide");
        console.info("4. Multiply");
        console.info("5. Exit");

        const userInput = this.handleInput("Input your choice: ");
        switch (parseInt(userInput)) {
            case 1:
                console.info("\nYou choose Increase");
                this.handleAddition();
                break;

            case 2:
                console.info("\nYou choose Substract");
                this.handleSubtraction();
                break;

            case 3:
                console.info("\nYou choose Divide");
                this.handleDivision();
                break;

            case 4:
                console.info("\nYou choose Multiply");
                this.handleMultiplication();
                break;

            case 5:
                this.handleExit();
                break;

            default:
                console.info("\nOptions Not Available");
                break;
        }
    }

    handleInput(message) {
        const userInput = prompt(message);

        return userInput;
    }

    handleData(message, type, option, text) {
        const len = this.handleInput(message);

        let arr = [];
        for (let i = 1; i <= len; i++) {
            let userInput = this.handleInput(`Enter data to ${i}: `);
            arr.push(parseInt(userInput));
        }

        let total = type == 0 ? 0 : arr[0];
        let i = type == 0 ? 0 : 1;
        for (i; i < arr.length; i++) {
            switch (option) {
                case 1:
                    total += arr[i];
                    break;

                case 2:
                    total -= arr[i];
                    break;

                case 3:
                    total /= arr[i];
                    break;

                case 4:
                    total *= arr[i];
                    break;

                default:
                    break;
            }
        }

        console.info(`Results ${text} is = ${total}`);
        this.handleExit();
    }

    handleAddition() {
        this.handleData("Enter the amount of data: ", 0, 1, "Addition");
    }

    handleSubtraction() {
        this.handleData("Enter the amount of data: ", 1, 2, "Subtraction");
    }

    handleDivision() {
        this.handleData("Enter the amount of data: ", 1, 3, "Division");
    }

    handleMultiplication() {
        this.handleData("Enter the amount of data: ", 1, 4, "Multiplication");
    }

    handleExit() {
        const userInput = this.handleInput("Leave? 1. No, 2. Yes: ")

        switch (parseInt(userInput)) {
            case 1:
                this.display()
                break;
            case 2:
                console.info("See you next time")
                break;
            default:
                console.info("\n=====================\n=====================\nOptions Not Available");
                this.display()
                break;
        }
    }
}

const data = new Calculator();
data.display();
