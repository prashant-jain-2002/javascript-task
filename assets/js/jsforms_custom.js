var nameerror = document.getElementById("name-error");
var dateerror = document.getElementById("date-error");
var phoneerror = document.getElementById("phone-error");
var emailerror = document.getElementById("email-error");
var messageerror = document.getElementById("message-error");
var checboxerror = document.getElementById("checbox-error");
var submiterror = document.getElementById("submit-error");
var imagePreview = document.getElementById("imagePreview");
var mlt_check = document.getElementById("multiple-check-error");

// validate Name
function validateName() {
  var name = document.getElementById("contact-name").value;
  if (name.length == 0) {
    nameerror.innerHTML = "Name Required";
    return false;
  }
  if (!name.match(/[A-Za-z]*\s{1}[A-za-z]*$/)) {
    nameerror.innerHTML = "write full name";
    return false;
  }
  nameerror.innerHTML = "<pre>valid</pre>";
  return true;
}

//validate email
function validateemail() {
  var email = document.getElementById("contact-email").value;
  if (email.length == 0) {
    emailerror.innerHTML = "email Required";
    return false;
  }
  if (!email.match(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/)) {
    emailerror.innerHTML = "Invalid email";
    return false;
  }
  emailerror.innerHTML = "<pre>valid</pre>";
  return true;
}

// validate message
function validatemessage() {
  var message = document.getElementById("contact-message").value;
  var required = 30;
  var left = required - message.length;

  if (left >= 0) {
    messageerror.innerHTML = left + " " + "more caracter required";
    return false;
  }
  messageerror.innerHTML = "<pre>valid</pre>";
  return true;
}
// check box
function checkCheckBox() {
  var formcheck = document.getElementById('formcheck').value;
  console.log(formcheck.checked)
    if (formcheck == true) {
    return true;
  }
  checboxerror.innerHTML = "please check the terms and conditions.";
  return false;
}

// resume validation
function fileValidation() {
  var fileInput = document.getElementById("file");

  var filePath = fileInput.value;

  // Allowing file type
  var allowedExtensions = /(\.jpg|\.jpeg|\.png|\.gif)$/i;

  if (filePath == "") {
    imagePreview.innerHTML = "required";
    fileInput.value = "";
    return false;
  } else if (!allowedExtensions.exec(filePath)) {
    imagePreview.innerHTML = "Invalid file type";
    fileInput.value = "";
    return false;
  } else {
    // Image preview
    if (fileInput.files && fileInput.files[0]) {
      var reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("imagePreview").innerHTML =
          '<img src="' + e.target.result + '"/>';
      };

      reader.readAsDataURL(fileInput.files[0]);
    }
  }
}
//address

var placeSearch, autocomplete;
var componentForm = {
  street_number: "short_name",
  route: "long_name",
  locality: "long_name",
  administrative_area_level_1: "short_name",
  country: "long_name",
  postal_code: "short_name",
};

function initAutocomplete() {
  // Create the autocomplete object, restricting the search to geographical
  // location types.
  autocomplete = new google.maps.places.Autocomplete(
    /** @type {!HTMLInputElement} */ (document.getElementById("autocomplete")),
    { types: ["geocode"] }
  );

  // When the user selects an address from the dropdown, populate the address
  // fields in the form.
  autocomplete.addListener("place_changed", fillInAddress);
}

function fillInAddress() {
  // Get the place details from the autocomplete object.
  var place = autocomplete.getPlace();

  for (var component in componentForm) {
    document.getElementById(component).value = "";
    document.getElementById(component).disabled = false;
  }

  // Get each component of the address from the place details
  // and fill the corresponding field on the form.
  for (var i = 0; i < place.address_components.length; i++) {
    var addressType = place.address_components[i].types[0];
    if (componentForm[addressType]) {
      var val = place.address_components[i][componentForm[addressType]];
      document.getElementById(addressType).value = val;
    }
  }
}

// Bias the autocomplete object to the user's geographical location,
// as supplied by the browser's 'navigator.geolocation' object.
function geolocate() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var geolocation = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      var circle = new google.maps.Circle({
        center: geolocation,
        radius: position.coords.accuracy,
      });
      autocomplete.setBounds(circle.getBounds());
    });
  }
}

//phone validation

var input = document.querySelector("#phone");
var iti = window.intlTelInput(input, {
  utilsScript:
    "https://cdn.jsdelivr.net/npm/intl-tel-input@16.0.3/build/js/utils.js",
});

function validatephone() {
  var phone = document.getElementById("phone").value;
  var phone_placeholder = iti.telInput["placeholder"];
  var place_lth = phone_placeholder.replace(/[()\ \s-]+/g, "");

  if (phone == "") {
    phoneerror.innerHTML = "Required";
    return false;
  } else if (place_lth.length == phone.length) {
    phoneerror.innerHTML = "<pre>valid</pre>";
    return true;
  } else if (phone.match(/[A-Za-z]/)) {
    phoneerror.innerHTML = "contains Number";
    return false;
  }
  phoneerror.innerHTML = "invalid Number";
  return false;
}

function selects(){  
  var ele=document.getElementsByName('chk');  
  for(var i=0; i<ele.length; i++){  
      if(ele[i].type=='checkbox')  
          ele[i].checked=true;  
  }  
}  
function deSelect(){  
  var ele=document.getElementsByName('chk');  
  for(var i=0; i<ele.length; i++){  
      if(ele[i].type=='checkbox')  
          ele[i].checked=false;  
        
  }  
}  
// function checkvalidation() {
//   if (ele.checked=false;  ) {
//     mlt_check.innerHTML = "please select atleast one"
//     return false;
//   }
// }

function validateform(event) {
  event.preventDefault();
  if ((
    !validateName() &&
    !validateemail() &&
    !validatemessage() &&
    !fileValidation() &&
    !validatephone() &&
    checkCheckBox() 
  )) {
    submiterror.style.display = "block";
    submiterror.innerHTML = "please fix the error";
    setTimeout(function () {
      submiterror.style.display = "none";
    }, 3000);
    return false;
  }
  submiterror.style.display = "block";
    submiterror.innerHTML = "please fill the details correctoly.";
  return true;
}

