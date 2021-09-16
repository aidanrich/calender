console.log("hello")

var toDo = document.querySelector(".writing")

var saveEl = document.querySelector(".saveBtn")

// moment stuff
var headerDate = moment();
$("#currentDay").text(headerDate.format("MMM Do, YYYY"));

// save
function saverTester(key, value) {
    if (value == "") {
        alert("fill out the form you imbecile")
    } else localStorage.setItem(key, value)

}

var saveButton1 = document.querySelector(".saveBtn")
var typeArea = document.querySelector(".writing")

saveButton1.addEventListener("click", () => {

    console.log(typeArea.value)
    saverTester("9am", typeArea.value)
    

})


typeArea.value = localStorage.getItem("9am")


function allStorage() {

    var values = [],
        keys = Object.keys(localStorage),
        i = keys.length;

    while (i--) {
        values.push(localStorage.getItem(keys[i]));
    }

    return values;
}


// user sees landing page with date and time
    // local storage poipulates input fields
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