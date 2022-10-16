const details = document.getElementById('details')
const thanksCard = document.getElementById('thank')

// Input boxes
const nameInput = document.getElementById("card-name-input");
const numInput = document.getElementById("card-num-input");
const monthInput = document.getElementById("month-input");
const yearInput = document.getElementById("year-input");
const cvcInput = document.getElementById("cvc-input");

// Place where the input value has to be stored
const frontCardNum = document.querySelector('.middle')
const frontCardName = document.querySelector('.bottom span')
const frontCardDate = document.querySelector('.bottom span:last-child')
const backCardCvc = document.querySelector('#card-back .cvc')

const submit = () => {
    if (nameInput.value.length !== 0 && numInput.value.length !== 0 && cvcInput.value.length !== 0 && monthInput.value.length !== 0 && yearInput.value.length !== 0) {
        if (numInput.style.outline === '1px red solid') {
            numInput.style.outline = '1px solid var(--light-grayish-violet)'
        }
        document.querySelector('#name-number #card-num span.wrong-num2').style.display = 'none'
        document.querySelector('#name-number #card-num span.wrong-num1').style.display = 'none'

        if (nameInput.style.outline = '1px red solid') {
            nameInput.style.outline = '1px solid var(--light-grayish-violet)'
        }
        if (document.querySelector('#name-number #card-name span').style.display = 'block') {
            document.querySelector('#name-number #card-name span').style.display = 'none'
        }


        if (cvcInput.style.outline = '1px red solid') {

            cvcInput.style.outline = '1px solid var(--light-grayish-violet)'
        }
        if (document.querySelector('#date-cvc .wrong-date-cvc span.empty-cvc').style.display = 'block') {
            document.querySelector('#date-cvc .wrong-date-cvc span.empty-cvc').style.display = 'none'
        }


        if (monthInput.style.outline === '1px red solid' || monthInput.style.outline === 'red solid 1px') {
            monthInput.style.outline = '1px solid var(--light-grayish-violet)'
        }
        if (yearInput.style.outline === '1px red solid' || yearInput.style.outline === 'red solid 1px') {
            yearInput.style.outline = '1px solid var(--light-grayish-violet)'
        }

        if (document.querySelector('#date-cvc .wrong-date-cvc span.empty-date').style.display = 'block') {
            document.querySelector('#date-cvc .wrong-date-cvc span.empty-date').style.display = 'none'
        }

        if (isNaN(numInput.value.replace(/ /g, ''))) {
            document.querySelector('#name-number #card-num span.wrong-num1').style.display = 'block'
        }
        else {
            document.querySelector('#name-number #card-num span.wrong-num1').style.display = 'none'
        }
        if (numInput.value.length < 16 && numInput.value.length > 0) {
            document.querySelector('#name-number #card-num span.wrong-num3').style.display = 'block'
        }
        else {
            document.querySelector('#name-number #card-num span.wrong-num3').style.display = 'none'
        }
        if (document.querySelector('#name-number #card-num span.wrong-num2').style.display === 'none' && document.querySelector('#name-number #card-name span').style.display === 'none' && document.querySelector('#name-number #card-num span.wrong-num1').style.display === 'none' && document.querySelector('#name-number #card-num span.wrong-num3').style.display === 'none' && document.querySelector('#date-cvc .wrong-date-cvc span.empty-cvc').style.display === 'none' && document.querySelector('#date-cvc .wrong-date-cvc span.empty-date').style.display === 'none') {
            frontCardName.innerHTML = nameInput.value;
            frontCardNum.innerHTML = numInput.value;
            backCardCvc.innerHTML = cvcInput.value;
            frontCardDate.innerHTML = `${monthInput.value}/${yearInput.value}`

        }
    }
    else {
        if (numInput.value.length === 0) {
            document.querySelector('#name-number #card-num span.wrong-num2').style.display = 'block'
            numInput.style.outline = '1px red solid'
        }
        else {
            document.querySelector('#name-number #card-num span.wrong-num2').style.display = 'none'
            numInput.style.outline = '1px solid var(--light-grayish-violet)'
        }

        if (nameInput.value.length === 0) {
            document.querySelector('#name-number #card-name span').style.display = 'block'
            nameInput.style.outline = '1px red solid'
        }
        else {
            document.querySelector('#name-number #card-name span').style.display = 'none'
            nameInput.style.outline = '1px solid var(--light-grayish-violet)'
        }
        if (cvcInput.value.length === 0) {
            document.querySelector('#date-cvc .wrong-date-cvc span.empty-cvc').style.display = 'block'
            if (monthInput.value.length !== 0 && yearInput.value.length !== 0) {
                document.querySelector('#date-cvc .wrong-date-cvc span.empty-cvc').style.marginLeft = '145px'
            }
            else {
                document.querySelector('#date-cvc .wrong-date-cvc span.empty-cvc').style.marginLeft = '0'
            }
            cvcInput.style.outline = '1px red solid'
        }
        else {
            document.querySelector('#date-cvc .wrong-date-cvc span.empty-cvc').style.display = 'none'
            cvcInput.style.outline = '1px solid var(--light-grayish-violet)'
        }
        if (monthInput.value.length === 0 || yearInput.value.length === 0) {
            document.querySelector('#date-cvc .wrong-date-cvc span.empty-date').style.display = 'block'
            if (monthInput.value.length === 0) {
                monthInput.style.outline = '1px red solid'
            }
            if (yearInput.value.length === 0) {
                yearInput.style.outline = '1px red solid'
            }
        }
        else {
            document.querySelector('#date-cvc .wrong-date-cvc span.empty-date').style.display = 'none'
            monthInput.style.outline = '1px solid var(--light-grayish-violet)'
            yearInput.style.outline = '1px solid var(--light-grayish-violet)'
        }

        if (isNaN(numInput.value.replace(/ /g, ''))) {
            document.querySelector('#name-number #card-num span.wrong-num1').style.display = 'block'
        }
        else {
            document.querySelector('#name-number #card-num span.wrong-num1').style.display = 'none'
        }
        if (numInput.value.length < 16 && numInput.value.length > 0) {
            document.querySelector('#name-number #card-num span.wrong-num3').style.display = 'block'
        }
        else {
            document.querySelector('#name-number #card-num span.wrong-num3').style.display = 'none'
        }
    }
    if (frontCardNum.innerHTML !== '0000 0000 0000 0000') {
        details.style.display = 'none'
        thanksCard.style.display = 'flex'
    }
}

