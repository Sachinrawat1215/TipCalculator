// author: Sachin Rawat

// Targeting all Element
let billAmt = document.getElementById('bill-amt');
let tipTag = document.getElementById('tipTag');
let showTip = document.getElementById('tipAmt');
let showAmt = document.getElementById('totalAmt');
let reset = document.getElementById('reset-button');
let tipPercent;

// Tip percentage selection
const setFive = () => setSelection(5, five);
const setTen = () => setSelection(10, ten);
const setFifteen = () => setSelection(15, fifteen);
const setTwentyFive = () => setSelection(25, twentyFive);
const setFifty = () => setSelection(50, fifty);

function setSelection(percent, element) {
    tipPercent = percent;
    tipTag.innerText = `Tip Percent ${percent}%`
    tipTag.style.visibility = "visible";
    showStyle(element);
};

function showStyle(element) {
    element.style.backgroundColor = "#9fe8df";
    element.style.color = "hsl(183, 100%, 15%)";
}

// Custom Button clear and click functionality
custom.onclick = (element) => {
    custom.value = "";
    showStyle(element);
};

// Calculation on user number input
user.addEventListener("input", () => {
    let userVal = user.value;
    if (userVal == "") {
        userVal = 1;
        let tipAmt = (billAmt.value * tipPercent) / 100;
        let perTip = tipAmt / userVal;
        let perAmt = billAmt.value / userVal;
        let pertotal = perTip + perAmt;

        // Fixed to only 2 digit only
        if (!Number.isInteger(perTip)) {
            perTip = perTip.toFixed(2);
        };

        if (!Number.isInteger(pertotal)) {
            pertotal = pertotal.toFixed(2);
        };
        showTip.innerText = `$${perTip}`;
        showAmt.innerText = `$${pertotal}`;
    } else if (userVal == 0) {
        error.style.visibility = "visible";
    } else {
        userVal = user.value;
        let tipAmt = (billAmt.value * tipPercent) / 100;
        let perTip = tipAmt / userVal;
        let perAmt = billAmt.value / userVal;
        let pertotal = perTip + perAmt;

        // Fixed to only 2 digit only
        if (!Number.isInteger(perTip)) {
            perTip = perTip.toFixed(2);
        };

        if (!Number.isInteger(pertotal)) {
            pertotal = pertotal.toFixed(2);
        };
        showTip.innerText = `$${perTip}`;
        showAmt.innerText = `$${pertotal}`;
    }
});

// Reset Button Functionality
reset.addEventListener('click', () => {
    location.reload();
})