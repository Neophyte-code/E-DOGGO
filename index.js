let numArr = [1, 2, 3, 4, 5];

const firstBtn = document.getElementById("first-btn");
const secBtn = document.getElementById("sec-btn");
const thirdBtn = document.getElementById("third-btn");
const fourthBtn = document.getElementById("fourth-btn");
const fifthBtn = document.getElementById("fifth-btn");
const thankEl = document.getElementById("thank-el");


firstBtn.addEventListener("click", function(){
    thankEl.textContent = `You selected ${numArr[0]} out of ${numArr[4]}`;
    document.getElementById("first-btn").style.backgroundColor = "hsl(216, 12%, 54%)";
})

secBtn.addEventListener("click", function(){
    thankEl.textContent = `You selected ${numArr[1]} out of ${numArr[4]}`;
    document.getElementById("sec-btn").style.backgroundColor = "hsl(216, 12%, 54%)";
})

thirdBtn.addEventListener("click", function(){
    thankEl.textContent = `You selected ${numArr[2]} out of ${numArr[4]}`;
    document.getElementById("third-btn").style.backgroundColor = "hsl(216, 12%, 54%)";
})

fourthBtn.addEventListener("click", function(){
    thankEl.textContent = `You selected ${numArr[3]} out of ${numArr[4]}`;
    document.getElementById("fourth-btn").style.backgroundColor = "hsl(216, 12%, 54%)";
})

fifthBtn.addEventListener("click", function(){
    thankEl.textContent = `You selected ${numArr[4]} out of ${numArr[4]}`;
    document.getElementById("fifth-btn").style.backgroundColor = "hsl(216, 12%, 54%)";
});

let submitBtn = document.getElementById("submit-btn");
submitBtn.addEventListener("click", function(){
    document.getElementById("rating-container").style.display = "none";
    document.getElementById("abt-appreciate").style.display = "block";
});