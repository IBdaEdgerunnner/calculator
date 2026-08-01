const display = document.querySelector('input');
const buttons = document.querySelectorAll('button');

buttons.forEach(button =>{
    button.addEventListener('click', (event) => {
        const buttonText = event.target.innerText;

        if (buttonText === "C"){
            display.value = "0";
        }else if (buttonText === "X"){
            if (display.value.length === 1){
                display.value = "0";
            }else{
                display.value = display.value.slice(0, -1);
            }
        }else if (buttonText === "="){
            try{
                let formattedExpression = display.value.replaceAll('x', '*');
                display.value = eval(formattedExpression);
            }catch(error){
                display.value = "Error";
            }
        }else{
            if (display.value === "0") {
                display.value = buttonText;
            }else{
                display.value += buttonText;
            }
        }
    });
});