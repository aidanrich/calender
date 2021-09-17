console.log("hello")

// user sees landing page with date and time
    // local storage populates input fields
    // use moment to get date and time
        // manipulate the dom to update elements
// user can add events or tasks to boxes and save them
    // use input fields to accept user data
    // save button will save to local storage
        // add event listener to launch function
        // save items to local storage
// user can see what time has passed and where they are
    // change css depending on time *
        // use moment with if stament to make css decision
        
var toDo = document.querySelector(".writing")

var saveEl = document.querySelector(".saveBtn")

// moment stuff
var headerDate = moment();
$("#currentDay").text(headerDate.format("MMM Do, YYYY"));

// save argument?
function saverTester(key, value) {
    if (value == "") {
        alert("fill out the form you imbecile")
    } else localStorage.setItem(key, value)
}

// save buttons
var saveButton1 = document.querySelector("#am9")
var saveButton2 = document.querySelector("#am10")
var saveButton3 = document.querySelector("#am11")
var saveButton4 = document.querySelector("#pm12")
var saveButton5 = document.querySelector("#pm1")
var saveButton6 = document.querySelector("#pm2")
var saveButton7 = document.querySelector("#pm3")
var saveButton8 = document.querySelector("#pm4")
var saveButton9 = document.querySelector("#pm5")
// inputs
var typeArea1 = document.querySelector("#area9")
var typeArea2 = document.querySelector("#area10")
var typeArea3 = document.querySelector("#area11")
var typeArea4 = document.querySelector("#area12")
var typeArea5 = document.querySelector("#area1")
var typeArea6 = document.querySelector("#area2")
var typeArea7 = document.querySelector("#area3")
var typeArea8 = document.querySelector("#area4")
var typeArea9 = document.querySelector("#area5")

// code curtesy of classmate Chase M
var format = "H" //quick format

var currentTime = moment().format(format); //gets current time in string

var getCurrentTimeint = parseInt(currentTime);

console.log(typeArea2.dataset.time);

if(typeArea1.dataset.time < getCurrentTimeint) {
    typeArea1.setAttribute("class", "past")
} else if(typeArea1.dataset.time === getCurrentTimeint) {
    typeArea1.setAttribute("class", "present")
} else typeArea1.setAttribute("class", "future")

if(typeArea2.dataset.time < getCurrentTimeint) {
    typeArea2.setAttribute("class", "past")
} else if(typeArea2.dataset.time === getCurrentTimeint) {
    typeArea2.setAttribute("class", "present")
} else typeArea2.setAttribute("class", "future")

if(typeArea3.dataset.time < getCurrentTimeint) {
    typeArea3.setAttribute("class", "past")
} else if(typeArea3.dataset.time === getCurrentTimeint) {
    typeArea3.setAttribute("class", "present")
} else typeArea3.setAttribute("class", "future")

if(typeArea4.dataset.time < getCurrentTimeint) {
    typeArea4.setAttribute("class", "past")
} else if(typeArea4.dataset.time === getCurrentTimeint) {
    typeArea4.setAttribute("class", "present")
} else typeArea4.setAttribute("class", "future")

if(typeArea5.dataset.time < getCurrentTimeint) {
    typeArea5.setAttribute("class", "past")
} else if(typeArea5.dataset.time === getCurrentTimeint) {
    typeArea5.setAttribute("class", "present")
} else typeArea5.setAttribute("class", "future")

if(typeArea6.dataset.time < getCurrentTimeint) {
    typeArea6.setAttribute("class", "past")
} else if(typeArea6.dataset.time === getCurrentTimeint) {
    typeArea6.setAttribute("class", "present")
} else typeArea6.setAttribute("class", "future")

if(typeArea7.dataset.time < getCurrentTimeint) {
    typeArea7.setAttribute("class", "past")
} else if(typeArea7.dataset.time === getCurrentTimeint) {
    typeArea7.setAttribute("class", "present")
} else typeArea7.setAttribute("class", "future")

if(typeArea8.dataset.time < getCurrentTimeint) {
    typeArea8.setAttribute("class", "past")
} else if(typeArea8.dataset.time === getCurrentTimeint) {
    typeArea8.setAttribute("class", "present")
} else typeArea8.setAttribute("class", "future")

if(typeArea9.dataset.time < getCurrentTimeint) {
    typeArea9.setAttribute("class", "past")
} else if(typeArea9.dataset.time === getCurrentTimeint) {
    typeArea9.setAttribute("class", "present")
} else typeArea9.setAttribute("class", "future")





saveButton1.addEventListener("click", () => {

    console.log(typeArea1.value)
    saverTester("9am", typeArea1.value)
})

typeArea1.value = localStorage.getItem("9am")

saveButton2.addEventListener("click", () => {

    console.log(typeArea2.value)
    saverTester("10am", typeArea2.value)
})

typeArea2.value = localStorage.getItem("10am")

saveButton3.addEventListener("click", () => {

    console.log(typeArea3.value)
    saverTester("11am", typeArea3.value)
})

typeArea3.value = localStorage.getItem("11am")

saveButton4.addEventListener("click", () => {

    console.log(typeArea4.value)
    saverTester("12pm", typeArea4.value)
})

typeArea4.value = localStorage.getItem("12pm")

saveButton5.addEventListener("click", () => {

    console.log(typeArea5.value)
    saverTester("1pm", typeArea5.value)
})

typeArea5.value = localStorage.getItem("1pm")

saveButton6.addEventListener("click", () => {

    console.log(typeArea6.value)
    saverTester("2pm", typeArea6.value)
})

typeArea6.value = localStorage.getItem("2pm")

saveButton7.addEventListener("click", () => {

    console.log(typeArea7.value)
    saverTester("3pm", typeArea7.value)
})

typeArea7.value = localStorage.getItem("3pm")

saveButton8.addEventListener("click", () => {

    console.log(typeArea8.value)
    saverTester("4pm", typeArea8.value)
})

typeArea8.value = localStorage.getItem("4pm")

saveButton9.addEventListener("click", () => {

    console.log(typeArea9.value)
    saverTester("5pm", typeArea9.value)
})

typeArea9.value = localStorage.getItem("5pm")



// I'm not sure how to use this
// function allStorage() {

//     var values = [],
//         keys = Object.keys(localStorage),
//         i = keys.length;

//     while (i--) {
//         values.push(localStorage.getItem(keys[i]));
//     }

//     return values;
// }




