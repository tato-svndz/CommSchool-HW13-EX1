let result = 0;
let num = prompt('Please Enter A Number');
for (let i = 0; i < num.length; i++) {
    result += Number(num[i]);
}
alert('The Sum of The Digits of Your Number is: ' + result);