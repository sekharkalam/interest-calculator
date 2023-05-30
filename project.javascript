let inputValue1 = document.getElementById("inputValue1")
let inputValue2 = document.getElementById("inputValue2")
let inputValue3 = document.getElementById("inputValue3")
let IntersertAmount = document.getElementById("IntersertAmountperm")
let IntersertAmountpery = document.getElementById("IntersertAmountpery")
let errormessage1 = document.getElementById("errormessage")

function sumbitOf() {
    let firstvalue = inputValue1.value
    let secondvalue = inputValue2.value
    if (firstvalue === "") {
        errormessage1.textContent = "Enter Amount Input Value"
    }
    if (secondvalue === "") {
        errormessage1.textContent = "Enter Interest Input Value"
    } else {
        let addition = ((firstvalue) / 100) * (secondvalue)
        IntersertAmount.value = addition
        let interestperyear = ((firstvalue) / 100) * (secondvalue) * 12
        IntersertAmountpery.value = interestperyear
        let totaladdition = parseInt(firstvalue) + addition
        inputValue3.value = parseInt(firstvalue) + interestperyear

    }
}