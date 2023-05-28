function setNumber(num){
    var myinp = document.getElementById("number")
    // input.value = input.value + num
    myinp.value += num   
}
function ans(){
    var inputValue= getElementById("number")
    var output = eval(inputValue.value)
    inputValue.value = output
}
function clear_inp() {
    var inputValue= getElementById("number")
    inputValue.value = "";
}
