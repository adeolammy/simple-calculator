
// let calculatorForm = document.getElementsByClassName('calculatorForm')
// let screen1 = document.getElementsByClassName('screen')
// let screen = document.querySelector('.screen')
// let calculatorForm = document.querySelector('.calculatorForm')

function func(e) {
    calculatorForm.screen.value += e.value
}

function cleared() {
    calculatorForm.screen.value = '';
}

function answer() {
    calculatorForm.screen.value = eval(calculatorForm.screen.value )
}