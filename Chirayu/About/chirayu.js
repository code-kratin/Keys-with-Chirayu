function func(x) {
    x.classList.toggle("change");
}

// dark mode
// function func2() {
//     let y=document.body;
//     y.classList.toggle("mode");
// }

let section= document.getElementById("quote");
let content= document.querySelector("#author");
window.addEventListener("scroll",()=>{
    const sectionPos= section.getBoundingClientRect().bottom;
    const screenPos= window.innerHeight;
    if (sectionPos< screenPos){
        content.style.animationName="text";
        content.style.animationDuration="5s";
        content.style.animationDuration="5s";
        // console.log("hello");
    }
})



window.addEventListener("DOMContentLoaded", function () {
    // get the form elements defined in your form HTML above
  
    var form = document.getElementById("invite");
    // var button = document.getElementById("my-form-button");
    var status = document.getElementById("status");
  
    // Success and Error functions for after the form is submitted
  
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks!";
    }
  
    function error() {
      status.classList.add("error");
      status.innerHTML = "Oops! There was a problem.";
    }
  
    // handle the form submission event
  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  
  // helper function for sending an AJAX request
  
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  
