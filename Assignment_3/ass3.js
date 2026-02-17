console.log("==================================================");
console.log("Q1");
const states = ["Maharashtra","Bihar","Gujurat","Odisha","Assam","Kerala","Tamil Nadu","Rajasthan","Punjab","Haryana"];
const filtered = states.filter(
    s => !["a","e","i","o","u"].includes(s[0].toLowerCase())
);
console.log(filtered);


console.log("==================================================");
console.log("Q2");
let str = 'I love my India';
let reversed = str.split(" ").reverse().join(" ");
console.log("Reverse String : ", reversed);


console.log("==================================================");
console.log("Q3");
let arr = "INDIA".split("");
arr.splice(3, 0, "O","N","E","S");
console.log("Output :", arr.join(""));


console.log("==================================================");
console.log("Q4");
let longString = "This is a very long string used to count vowels and consonants";
let vowels = 0, consonants = 0;

for (let ch of longString.toLowerCase()) {
    if (/[aeiou]/.test(ch)) vowels++;
    else if (/[a-z]/.test(ch)) consonants++;
}
console.log("Count : ", { vowels, consonants });


console.log("==================================================");
console.log("Q5");
function correctfn(string, wrong, correct) {
    return string.replace(wrong, correct);
}
console.log("Correct String : ", correctfn("I love Javasript", "Javasript", "JavaScript"));


console.log("==================================================");
console.log("Q6");
let inputArr = [1,2,3,9,10,7,5,4,3];
let answer = inputArr.filter(n => n > 5);
console.log("Numbers greater than 5 :", answer);

console.log("==================================================");
console.log("Q7");
const students = [
    { name: "Ram", scores: [80, 70, 60] },
    { name: "Mohan", scores: [80, 70, 90] },
    { name: "Sai", scores: [60, 70, 80] },
    { name: "Hemang", scores: [90, 90, 80, 80] },
];

const averages = students.map(stu => {
    let total = stu.scores.reduce((a,b) => a+b, 0);
    return { name: stu.name, average: total / stu.scores.length };
});
console.log("Average Score :", averages);


console.log("==================================================");
console.log("Q8");
function singleDigitSum(num) {
    while (num >= 10) {
        num = num.toString().split("").reduce((a,b)=>a+Number(b),0);
    }
    return num;
}
console.log("Single Digit Sum of 456:", singleDigitSum(456));

console.log("==================================================");
console.log("Q9");
function countWords(paragraph) {
    return paragraph.trim().split(/\s+/).length;
}
console.log("Word Count :", countWords("India is a diverse and beautiful country."));


console.log("==================================================");
console.log("Q10");
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reverse String :", reverseString("Hello"));

console.log("==================================================");
console.log("Q11");
const marksData = {
    student1: {subject1:44,subject2:56,subject3:87,subject4:97,subject5:37},
    student2: {subject1:44,subject2:56,subject3:87,subject4:97,subject5:37},
    student3: {subject1:44,subject2:56,subject3:87,subject4:97,subject5:37}
};

const result = Object.entries(marksData).map(([name, subjects]) => {
    let scores = Object.values(subjects);
    let avg = scores.reduce((a,b)=>a+b,0)/scores.length;
    return { [name]: { average: avg }};
});

console.log("Result :", result);