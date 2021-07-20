let input = document.querySelector('.display > form > input');
let historyInput = document.querySelector('.history > p')
function start(e){

}
function action(num){
    if(!(input.value.includes('.'))){
        input.value = input.value + num;
    }
    else if(input.value.includes('.') && num !=='.') {
        input.value = input.value + num;
    }
    else {
        console.log(false)
    }
}
function addingOperator(operator){
    if (input.value === ''){
        return
    }
    if(operator === '+'){
        if (historyInput.innerText !== '0'){
            console.log(true)
            historyInput.value = historyInput.value + parseFloat(input.value)
            historyInput.innerText = historyInput.value + '+'
            input.value = ''
        }
        else {
            historyInput.value = input.value
            historyInput.innerText = historyInput.value + '+'
            historyInput.value = parseFloat(historyInput.value)
            input.value = ''
        }


    }
    else if(operator === '-'){
        if (historyInput.innerText !== '0'){
            historyInput.value = historyInput.value - parseFloat(input.value)
            historyInput.innerText = historyInput.value + '-'
            input.value = ''
        }
        else {
            historyInput.value = input.value
            historyInput.innerText = historyInput.value + '-'
            historyInput.value = parseFloat(historyInput.value)
            input.value = ''
        }
    }
    else if(operator === '/'){
        if (historyInput.innerText !== '0'){
            historyInput.value = historyInput.value / parseFloat(input.value)
            historyInput.innerText = historyInput.value + '/'
            input.value = ''
        }
        else {
            historyInput.value = input.value
            historyInput.innerText = historyInput.value + '/'
            historyInput.value = parseFloat(historyInput.value)
            input.value = ''
        }
    }
    else if(operator === '*'){
        if (historyInput.innerText !== '0'){
            historyInput.value = historyInput.value * parseFloat(input.value)
            historyInput.innerText = historyInput.value + 'x'
            input.value = ''
        }
        else {
            historyInput.value = input.value
            historyInput.innerText = historyInput.value + 'x'
            historyInput.value = parseFloat(historyInput.value)
            input.value = ''
        }
    }
}
function getResult(){
    if (historyInput.innerText.includes('+')){
        input.value = historyInput.value + parseInt(input.value)
        historyInput.innerText = '0'
    }
    else if(historyInput.innerText.includes('-')){
        input.value = historyInput.value - parseFloat(input.value)
        historyInput.innerText = '0'
    }
    else if(historyInput.innerText.includes('x')){
        input.value = historyInput.value * parseFloat(input.value)
        historyInput.innerText = '0'
    }
    else if(historyInput.innerText.includes('/')){
        input.value = historyInput.value / parseFloat(input.value)
        historyInput.innerText = '0'
    }
}
function clearAll(){
    historyInput.value = 0;
    input.value = '';
    historyInput.innerText = '0'
}


