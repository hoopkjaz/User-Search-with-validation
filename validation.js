// Defining a function to display error message
function printError(elemId, hintMsg) {
    document.getElementById(elemId).innerHTML = hintMsg;
}

// Defining a function to validate form 
function validateForm() {
    // Retrieving the values of form elements 
    var fname = document.searchForm.fname.value;
    var lname = document.searchForm.lname.value; 
    var email = document.searchForm.email.value;       
    
	// Defining error variables with a default value
    var fnameErr = emailErr = lnameErr = true;
    
    if(fname == "" && lname == "" && email == "") {
        printError("nameErr", "Please enter names or email");
    } 
    if(fname != "" && lname == "") {
        printError("nameErr", "Please enter both names");
    } 
    if(fname == "" && lname != "") {
        printError("nameErr", "Please enter both names");
    } 

    if(fname != "" && lname != "") {
        fnameErr = false;
        lnameErr = false;
        if(email == "")
            emailErr = false;
    } 
    
    // Validate email address
    if (email != "") {
         // Regular expression for basic email validation
         var regex = /^\S+@\S+\.\S+$/;
         if (regex.test(email) === false) {
             printError("emailErr", "Please enter a valid email address");
         } else {
             printError("emailErr", "");
             emailErr = false;
         }

        if(fname == "" && lname == "") {
            fnameErr = false;
            lnameErr = false;
        } else if(fname != "" && lname == ""){
            fnameErr = true;
            lnameErr = true;
            printError("nameErr", "Please enter both names");
        } else if(fname == "" && lname != ""){
            fnameErr = true;
            lnameErr = true;
            printError("nameErr", "Please enter both names");
        } 
    }
    
    // Prevent the form from being submitted if there are any errors
    if((fnameErr || emailErr || lnameErr) == true) {
       return false;
    } else {
        // Creating a string from input data for preview
        var dataPreview = "You've entered the following details: \n" +
                          "first Name: " + fname + "\n" +
                          "last name: " + lname + "\n" +
                          "Email: " + email + "\n";
        
        // Display input data in a dialog box before submitting the form
        alert(dataPreview);
    }
};