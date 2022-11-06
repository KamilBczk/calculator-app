const buttons = document.querySelectorAll(".btn-calc");

let finalResult = "";
let currentNumber = "";
let lastNumber = "";
let operator = "";
let operators = ["+", "-", "x", "/"];
let actions = ["DEL", "RESET", "="];

const actionsHandler = (button) => {
	if (!(operators.includes(button.textContent)) && !(actions.includes(button.textContent))) {
		if (currentNumber.length != 19)
			if (currentNumber[0] == "0")
				currentNumber = button.textContent;
			else
				currentNumber += button.textContent;
	}

	if (actions.includes(button.textContent))
	{
		switch (button.textContent) {
			case actions[0]:
				currentNumber = currentNumber.replace(/\d$/, '');
				if (currentNumber.length == 0) 
					currentNumber = "0";
				break;
			case actions[1]:
				currentNumber = "0";
				break;
			case actions[2]:
				switch (operator) {
					case "+":
						currentNumber = parseInt(currentNumber) + parseInt(lastNumber);
						finalResult += currentNumber;
						break;
					case "-":
						currentNumber = parseInt(currentNumber) - parseInt(lastNumber);
						finalResult += currentNumber;
						break;
					case "x":
						currentNumber = parseInt(currentNumber) * parseInt(lastNumber);
						finalResult += currentNumber;
						break;
					case "/":
						currentNumber = parseInt(currentNumber) / parseInt(lastNumber);
						finalResult += currentNumber;
						break;
					default:
						break;
				}
				break;
			default:
				break;
		}
	}

	if (operators.includes(button.textContent)) {
		switch (button.textContent) {
			case operators[0]:
				lastNumber = currentNumber;
				currentNumber = "0";
				operator = "+";
				break;
			case operators[1]:
				lastNumber = currentNumber;
				currentNumber = "0";
				operator = "-";
				break;
			case operators[2]:
				lastNumber = currentNumber;
				currentNumber = "0";
				operator = "x";
				break;
			case operators[3]:
				lastNumber = currentNumber;
				currentNumber = "0";
				operator = "/";
				break;
			default:
				break;
		}
	}

	document.querySelector(".display").textContent = currentNumber;
};

for (let i = 0; i < buttons.length; i++) {
	buttons[i].addEventListener("click", () => {
		actionsHandler(buttons[i]);
	});
}