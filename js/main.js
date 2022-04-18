const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

var val = "";

optionsList.forEach((o) => {
  o.addEventListener("click", () => {
    selected.innerHTML =
      o.querySelector("label").innerHTML +
      '<span> <i class = "fa-solid fa-angle-down"></i></span >';
    val = o.querySelector("label").innerHTML.toString();
    console.log(val);
    optionsContainer.classList.remove("active");
  });
});

var rad = document.myform.radio;
var prev = null;
var output = "";
for (var i = 0; i < rad.length; i++) {
  rad[i].addEventListener("change", function () {
    prev ? console.log(prev.value) : null;
    if (this !== prev) {
      prev = this;
    }
    output = this.value;
    console.log(output);
  });
}

function validation() {
  let form = document.getElementById("form");
  let email = document.getElementById("email").value;
  let text = document.getElementById("text");
  let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  if (email.match(pattern)) {
    form.classList.add("valid");
    form.classList.remove("invalid");
    text.innerHTML = "";
    text.style.color = "#00873F";
    return true;
  } else {
    form.classList.remove("valid");
    form.classList.add("invalid");
    text.innerHTML = "Please Enter Valid Email Address";
    text.style.color = "#C41337";
    return false;
  }

  if (email == "") {
    form.classList.remove("valid");
    form.classList.remove("invalid");
    text.innerHTML = "Email Field should not be empty";
    text.style.color = "#C41337";
    return false;
  }
  return false;
}
function errorprint(ele) {
  ele.innerHTML = "! Please fill out all 3 Details";
  ele.style.color = "#C41337";
  ele.style.fontFamily = "Lato";
  ele.style.fontWeight = "400";
  ele.style.fontSize = "12px";
  ele.style.fontStyle = "normal";
  ele.style.lineHeight = "16px";
  console.log("Value is empty");
}

function check() {
  document
    .querySelector("#mysubmit")
    .addEventListener("click", function (event) {
      event.preventDefault();
    });

  let error_text = document.getElementById("error-text");
  let select_text = document.getElementById("select-text");
  if (validation() == true && val != "" && output != "") {
    if (
      val == "1-10" ||
      output == "Document storage" ||
      output == "Full Text Search" ||
      output == "price"
    ) {
      window.open("./html/unqualified.html");
    } else if (val == "" && output != "") {
      errorprint(error_text);
    } else if (val != "" && output != "") {
      window.open("./html/qualified.html");
    }
  }
  if (email == "" || val == "" || output == "") {
    errorprint(error_text);
  }
  if (validation() == true && (email == "" || val == "" || output == "")) {
    errorprint(error_text);
  }
}
