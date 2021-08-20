// author: Sachin Rawat

// Targeting all Element
let billAmt = document.getElementById('bill-amt');
let customBtn = document.getElementById('custom');
let tipTag = document.getElementById('tipTag');
let five = document.getElementById('five');
let ten = document.getElementById('ten');
let fifteen = document.getElementById('fifteen')
let twentyFive = document.getElementById('twentyFive')
let fifty = document.getElementById('fifty');
let user = document.getElementById('user');
let error = document.getElementById('memError');
let showTip = document.getElementById('tipAmt');
let showAmt = document.getElementById('totalAmt');
let reset = document.getElementById('reset-button');
let tipPercent;

// Tip percentage selection
const setFive = () => {
    tipPercent = 5;
    tipTag.innerText = `Tip Percentage 5%`;
    tipTag.style.visibility = "visible";
    five.style.backgroundColor = "#9fe8df";
    five.style.color = "hsl(183, 100%, 15%)";
};

const setTen = () => {
    tipPercent = 10;
    tipTag.innerText = `Tip Percentage 10%`;
    tipTag.style.visibility = "visible";
    ten.style.backgroundColor = "#9fe8df";
    ten.style.color = "hsl(183, 100%, 15%)";
};

const setFifteen = () => {
    tipPercent = 15;
    tipTag.innerText = `Tip Percentage 15%`;
    tipTag.style.visibility = "visible";
    fifteen.style.backgroundColor = "#9fe8df";
    fifteen.style.color = "hsl(183, 100%, 15%)";
};

const setTwentyFive = () => {
    tipPercent = 25;
    tipTag.innerText = `Tip Percentage 25%`;
    tipTag.style.visibility = "visible";
    twentyFive.style.backgroundColor = "#9fe8df";
    twentyFive.style.color = "hsl(183, 100%, 15%)";
};

const setFifty = () => {
    tipPercent = 50;
    tipTag.innerText = `Tip Percentage 50%`;
    tipTag.style.visibility = "visible";
    fifty.style.backgroundColor = "#9fe8df";
    fifty.style.color = "hsl(183, 100%, 15%)";
};

// Custom Button clear and click functionality
customBtn.addEventListener("click", () => {
    customBtn.value = "";
    customBtn.style.backgroundColor = "#9fe8df";
    customBtn.style.color = "hsl(183, 100%, 15%)";
});

// Calculation on user number input
user.addEventListener("input",() => {
    let userVal = user.value;
    if(userVal == ""){
        userVal = 1;
        let tipAmt = (billAmt.value * tipPercent) / 100;
        console.log(tipAmt);
    }else if(userVal == 0){
       error.style.visibility = "visible";
    }else{
        userVal = user.value;
        let tipAmt = (billAmt.value * tipPercent) / 100;
        let perTip = tipAmt / userVal; 
        let perAmt = billAmt.value / userVal;
        let pertotal = perTip + perAmt;
        console.log(perTip);
        console.log(pertotal);
        showTip.innerText = `$${perTip}`;
        showAmt.innerText = `$${pertotal}`;
    }
});

// Reset Button Functionality
reset.addEventListener('click', () => {
    location.reload();
})