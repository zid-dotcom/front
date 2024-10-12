const { stdin, stdout } = require('process')
const readline=require('readline')
const rl=readline.createInterface({
    input:stdin,
    output:stdout
})


rl.question('enter 2 numbers',function(num1){
    number1=parseInt(num1)

    rl.question('enter the second number ',function(num2){
        number2=parseInt(num2)


        const sum=number1+number2
        console.log(sum)
    })
})