function print_output() {
    var output_element = document.querySelector("#output");
    var fname_element = document.querySelector("#fname");
    var lname_element = document.querySelector("#lname");
    output_element.innerText =
      "firstname: " +
      fname_element.value +
      " ,lastname: " +
      lname_element.value;
  }