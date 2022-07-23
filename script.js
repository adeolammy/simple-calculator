
function func(e) {
    calculatorForm.screen.value += e.value
}

function cleared() {
    calculatorForm.screen.value = '';
}

function answer() {
    calculatorForm.screen.value = eval(calculatorForm.screen.value )
   
   
}