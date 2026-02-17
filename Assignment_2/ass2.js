console.log("==================================================");
console.log("Q1");
console.log("Even Numbers from 1 to 100 :");
for(let i = 1; i <=100 ;i++)
{
    if(i%2==0)
    {
        console.log(i);
    }
}

console.log("==================================================");
console.log("Q2");
function calculate(num1,num2,operation)
{
    switch(operation)
    {
        case "add":
            return num1 + num2;
        case "subtract":
            return num1 - num2;
        case "multiply":
            return num1 * num2;
        case "divide":
            if(num2 !== 0)
            {
                return num1 / num2;
            }
            else
            {
                console.log("Error: Division by zero is not allowed.");
                return null;
            }
        default:
            console.log("Error: Invalid operation.");
            return null;
    }
}   

console.log("Addition of 5 and 5 : " + calculate(5, 5, "add"));
console.log("Subtraction of 20 and 4 : " + calculate(20, 4, "subtract"));
console.log("Multiplication of 11 and 12 : " + calculate(11, 12, "multiply"));
console.log("Division of 7 and 2 : " + calculate(7, 2, "divide"));

console.log("==================================================");
console.log("Q3");

function findTax(salary) {
    let tax;

    switch (true) {
        case salary > 0 && salary <= 500000:
            tax = 0;
            break;

        case salary > 500000 && salary <= 1000000:
            tax = salary * 0.10;
            break;

        case salary > 1000000 && salary <= 1500000:
            tax = salary * 0.20;
            break;

        case salary > 1500000:
            tax = salary * 0.30;
            break;

        default:
            return "Invalid Salary";
    }

    return tax;   
}

console.log("Tax for Salary 400000 : " + findTax(400000));
console.log("Tax for Salary 750000 : " + findTax(750000));
console.log("Tax for Salary 1250000 : " + findTax(1250000));
console.log("Tax for Salary 2000000 : " + findTax(2000000));

console.log("==================================================");
console.log("Q4");

function sumOfDigitProducts(n1, n2) {
    let s1 = n1.toString().split("").reverse();
    let s2 = n2.toString().split("").reverse();

    let maxLength = Math.max(s1.length, s2.length);
    let sum = 0;

    for (let i = 0; i < maxLength; i++) {
        let d1 = parseInt(s1[i] || 0);
        let d2 = parseInt(s2[i] || 0);
        sum += d1 * d2;
    }

    return sum;
}

console.log(sumOfDigitProducts(6, 34)); 
