import { add } from './math.js';
document.getElementById("add").addEventListener("click", () => {
    const num1 = document.getElementById("num1").value;
    const num2 = document.getElementById("num2").value;
    const result = add(num1, num2);
    console.log(result);
    alert(result);
})