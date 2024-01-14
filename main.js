function task1() {
    let count = parseInt(prompt("Enter the number of times to output the character #:"));

    if (!isNaN(count) && count > 0) {
        let i = 0;
        while (i < count) {
            console.log("#");
            i++;
        }
    } else {
        alert("Please enter a valid number greater than 0.");
    }


}
function task2() {
    let numb = parseInt(prompt("Write number"))
    if (numb <= 0) {
        console.log("Wrong number")
    }
    else {
        while (numb >= 0) {
            console.log(numb)
            numb--
        }
    }

}
function task3() {
    let base = parseFloat(prompt("Write number:"));
    let degree = parseInt(prompt("Enter degree (integer):"));

    if (!isNaN(base) && !isNaN(degree)) {
        let result = 1;

        while (degree > 0) {
            result *= base;
            degree--;
        }

        console.log(`Result:${result}`);
    } else {
        alert("Please enter the correct numbers.");
    }
}
function task4() {
    let number1 = parseInt(prompt("Write first number:"));
    let number2 = parseInt(prompt("Write second number:"));

    if (!isNaN(number1) && !isNaN(number2) && number1 != 0 && number2 !== 0) {
        let minNumber = Math.min(number1, number2);

        let commonDivisors = [];

        let divisor = 1;
        while (divisor <= minNumber) {
            if (number1 % divisor == 0 && number2 % divisor == 0) {
                commonDivisors.push(divisor);
            }
            divisor++;
        }

        console.log(`Common divisors for ${number1} і ${number2}: ${commonDivisors.join(', ')}`);
    } else {
        alert("Please enter the correct numbers that are not equal 0.");
    }

}
function task5() {
    let number = parseInt(prompt("Enter a number to calculate the factorial:"));

    if (!isNaN(number) && number >= 0) {
        let factorial = 1;

        while (number > 0) {
            factorial *= number;
            number--;
        }

        console.log(`Factorial of the entered number: ${factorial}`);
    } else {
        alert("Please enter a valid non-negative number.");
    }

}
function task6() {

    let answer
    do {
        answer = parseInt(prompt("Give answer to 2+2*2=?"))
    }
    while (answer != 6)
    {
        alert("correct")
    }
}
function task7() {
    let number = 1000;
    let divisionsCount = 0;

    do {
        number /= 2;
        divisionsCount++;
    } while (number >= 50);

    alert(`Received number: ${number}\nNumber of divisions: ${divisionsCount}`)

}
function task8() {
    let userNumber = parseInt(prompt("write multiples of a number"))
    if (!isNaN(userNumber) && userNumber != 0) {
        for (let i = 1; i <= 100; i++) {
            if (i % userNumber == 0) {
                console.log(i);
            }
        }
    } else {
        alert("Please enter a valid number (non-zero).");
    }

}
function task9() {
    let minRange = parseInt(prompt("Write min range:"));
    let maxRange = parseInt(prompt("Write max range:"));

    if (!isNaN(minRange) && !isNaN(maxRange) && minRange <= maxRange) {
        for (let i = minRange; i <= maxRange; i++) {
            if ((i - minRange + 1) % 4 == 0) {
                console.log(i);
            }
        }
    } else {
        alert("Please enter valid range values.");
    }

}
function task10() {
    let userNumber = parseInt(prompt("Write number:"));

    if (!isNaN(userNumber) && userNumber > 1) {
        let isPrime = true;

        for (let i = 2; i <= Math.sqrt(userNumber); i++) {
            if (userNumber % i === 0) {
                isPrime = false;
                break;
            }
        }

        if (isPrime) {
            console.log(`${userNumber} is simple number.`);
        } else {
            console.log(`${userNumber} not simple number.`);
        }
    } else {
        alert("Please enter a valid number (non-zero).");
    }

}