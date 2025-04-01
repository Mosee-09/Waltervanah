

const output = document.querySelector('.output p');
const buttons = document.querySelectorAll('.cont'); 
let currentInput = '0';
let prevAnswer = null;

// Add event listener to each button
buttons.forEach(button => {
    button.addEventListener('click', () => { 
        const buttonText = button.textContent;

        if (buttonText === 'ans') {
            
            if (prevAnswer !== null) {
                currentInput = prevAnswer.toString();
            }
        } else if (buttonText === '+' || buttonText === '-' || buttonText === '*' || buttonText === '/') {
            // Handle operators (make sure the input is not just an operator alone)
            if (currentInput === '0' || currentInput === '') {
                currentInput = ''; 
            }
            currentInput += buttonText;
        } else if (buttonText === 'C') {
            // Clear the input
            currentInput = '0';
        } else {
           
            if (currentInput === '0') {
                currentInput = buttonText;
            } else {
                currentInput += buttonText;  
            }
        }

        output.textContent = currentInput; 
    });
});

// Function to handle calculation
function calculate() {
    try {
        prevAnswer = eval(currentInput);  
        currentInput = prevAnswer.toString();  
        output.textContent = currentInput;  
    } catch (error) {
        output.textContent = 'Error';  // Handle invalid input
        currentInput = '0';  // Reset the input
    }
}


