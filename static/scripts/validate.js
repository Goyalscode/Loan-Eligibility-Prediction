// Jaavscript file to validate the form data input by the user

function formValidate(){  // function that returns true if form data is valid, otherwise false 
    
    // getting the elements through their ids defined in the html file, or as form elements

    var gen_male = document.getElementById("gen_male");
    var gen_fem = document.getElementById("gen_fem");
    var mar_yes = document.getElementById("mar_yes");
    var mar_no = document.getElementById("mar_no");
    var dependents = document.forms["inpform"]["dependents"];
    var emp_yes = document.getElementById("emp_yes");
    var emp_no = document.getElementById("emp_no");
    var edu_yes = document.getElementById("edu_yes");
    var edu_no = document.getElementById("edu_no");
    var cred_yes = document.getElementById("cred_yes");
    var cred_no = document.getElementById("cred_no");
    var proparea = document.forms["inpform"]["proparea"];
    var appli = document.forms["inpform"]["appli"];
    var Coapp = document.forms["inpform"]["Coapp"];
    var LoanAmount = document.forms["inpform"]["LoanAmount"];
    var loanterm = document.forms["inpform"]["loanterm"];
    
    
    if(!(gen_male.checked) && !(gen_fem.checked))  // if neither male nor female is chosen, returns false
    {
        alert("Gender details must be filled");
        gen_male.autofocus;
        return false;
    }

    if(!(mar_yes.checked) && !(mar_no.checked))  // if neither yes nor no is chosen, returns false
    {
        alert("Marriage details must be filled");
        mar_yes.autofocus;
        return false;
    }
    
    if(dependents.value.length == 0)  // if nothing is filled, returns false
    {
        alert("Dependents details must be filled");
        dependents.autofocus;
        return false;
    }

    if(dependents.value < 0)  // checking for negative value
    {
        alert("Dependents cannot be less than 0");
        dependents.autofocus;
        return false;
    }

    if(!(emp_yes.checked) && !(emp_no.checked))  // checking if employment status is filled or not
    {
        alert("Employment details must be filled");
        emp_yes.autofocus;
        return false;
    }

    
    if(!(edu_yes.checked) && !(edu_no.checked))  // checking for education status filled or not
    {
        alert("Education details must be filled");
        edu_yes.autofocus;
        return false;
    }

    if(!(cred_yes.checked) && !(cred_no.checked))  // if credit status is not filled, returns false
    {
        alert("Credit History details must be filled");
        cred_yes.autofocus;
        return false;
    }

    if(proparea.value == "Select")  // checking for property area, filled or not
    {
        alert("Property area details must be filled");
        proparea.autofocus;
        return false;
    }

    var regtest = /[0-9]+/;   // defining a regular expression, for digits

    if(appli.value.length == 0)  // if applicant income field is empty, return false
    {
        alert("Applicant Monthly Income must be specified");
        appli.autofocus;
        return false;
    }
    if(!regtest.test(appli.value) || appli.value < 0)  // checking that only digits are filled, and must be non-negative
    {
        alert("Applicant Monthly Income must only contain numbers, cannot be less than 0");
        appli.autofocus;
        return false;
    }
    if(appli.value.includes("."))  // checking that no floating point values are filled 
    {
        alert("Applicant Monthly Income must be a rounded value");
        appli.autofocus;
        return false;
    }

    if(Coapp.value.length == 0)  // if Co-applicant income field is empty, return false
    {
        alert("Co-Applicants Monthly Income must be specified");
        Coapp.autofocus;
        return false;
    }
    if(!regtest.test(Coapp.value) || Coapp.value < 0)  // checking for negative values, and other than digits
    {
        alert("Co-Applicant Monthly Income must only contain numbers, cannot be less than 0");
        Coapp.autofocus;
        return false;
    }
    if(Coapp.value.includes("."))  // checking for decimal values
    {
        alert("Co-Applicant Monthly Income must be a rounded value");
        Coapp.autofocus;
        return false;
    }

    if(LoanAmount.value.length == 0)  // if Loan Amount field is empty, return false
    {
        alert("Loan Amount value must be filled");
        LoanAmount.autofocus;
        return false;
    }
    if(!regtest.test(LoanAmount.value) || LoanAmount.value < 0)  // checking for negative values, and other tahn digits
    {
        alert("Loan Amount must only contain numbers, cannot be less than 0");
        LoanAmount.autofocus;
        return false;
    }
    if(LoanAmount.value.includes("."))
    {
        alert("Loan Amount must be a rounded value");
        LoanAmount.autofocus;
        return false;
    }

    if(loanterm.value.length == 0)  // if loan term field is empty, return false
    {
        alert("Loan Term value must be filled");
        loanterm.autofocus;
        return false;
    }
    if(!regtest.test(loanterm.value) || loanterm.value < 0)  // loan term should be non-negative, must conatin only digits
    {
        alert("Loan Term must only contain numbers, cannot be less than 0");
        loanterm.autofocus;
        return false;
    }
    if(loanterm.value.includes("."))
    {
        alert("Loan Term must be a rounded value");
        loanterm.autofocus;
        return false;
    }
    if(loanterm.value>360)  // checking that loan term should not exceed 360 months
    {
        alert("Loan Term cannot be greater than 360 months");
        loanterm.autofocus;
        return false;
    }

    return true;
}