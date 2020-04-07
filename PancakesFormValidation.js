
function formValidation()
    {
        var rcat = document.form.rcat;
        var userID = document.form.userID;
        var password = document.form.password
        var fname = document.form.fname;
        var lname = document.form.lname;
        var address = document.form.address;
        var zip = document.form.zip;
        var gender = document.form.gender;
        var ethnicity = document.form.ethnicity;
        var DOB = document.form.DOB;
        var emcfname = document.form.emcfname;
        var emclname = document.form.emclname;
        var emcPhone = document.form.emcPhone;
        var waiver = document.form.waiver;
        var tshirt = document.form.tshirt;
        var email = document.form.email;
        var aboutme = document.form.aboutme;
        
        if(!catCheck(rcat))
        {
            return false;
        }
      
        if(!userIDcheck(userID))
        {
            userID.focus();
            return false;
        }

        if(!pwCheck(password))
        {
            password.focus();
            return false;
        }

        if(!nameCheck(fname))
        {
            fname.focus();
            return false;
        }

        if(!nameCheck(lname))
        {
            lname.focus();
            return false;
        }

        if(!addressCheck(address))
        {
            address.focus();
            return false;
        }

        if(!zipCheck(zip))
        {
            zip.focus();
            return false;
        }

        if(!genderCheck(gender))
        {
            return false;
        }
    
        if(!dobCheck(DOB))
        {
            return false;
        }

        if(!ethnicityCheck(ethnicity))
        {
            return false;
        }

        if(!nameCheck(emcfname))
        {
            emcfname.focus();
            return false;
        }

        if(!nameCheck(emclname))
        {
            emclname.focus();
            return false;
        }

        if(!phoneCheck(emcPhone))
        {
            emcPhone.focus();
            return false;
        }

        if(!waiverCheck(waiver))
        {
            waiver.focus();
            return false;
        }

        if(!tshirtCheck(tshirt))
        {
            tshirt.focus();
            return false;
        }

        if(!emailCheck(email))
        {
            email.focus();
            return false;
        }

        if(!aboutmeCheck(aboutme))
        {
            aboutme.focus();
            return false;
        }

    alert("Your registration has been submitted!");
    } 

function catCheck(inputField)
    {
        if(inputField.value == "SI" || inputField.value == "SR" || inputField.value == "OI" || inputField.value == "OR")
        {
            return true;
        }
        else
        {
            alert("Please select your race category");
            return false;
        }
    }

function userIDcheck(inputField)
    {
        var regExNum	= /^[0-9]+$/;
        if(inputField.value.match(regExNum))
        {
            if(inputField.value.length == 10)
            {
                return true;
            }
            else
            {
                alert("Your userID must be 10 characters long");
                return false;
            }
        }
        else
        {
            alert("Your UserID cannot be blank and may only contain numbers");
            return false;
        }
    }

function pwCheck(inputField)
    {
        var regExPW = /^\S*$/;
        if(inputField.value.match(regExPW))
        {
            if(inputField.value.length >=5 && inputField.value.length <=  21)
            {
                return true;
            }
            else
            {
                alert("Your password should be at least 6 and no more than 20 characters")
                return false;
            }
        }
        else
        {
            alert("Your password cannot contain any spaces");
            return false;
        }
    }

function nameCheck(inputField)
    {
        var regExName = /^[a-zA-Z-']+$/;
        if(inputField.value.match(regExName))
        {
            if(inputField.value.length >= 2 && inputField.value.length <= 20 )
            {
                return true;
            }
            else
            {
                alert("Please enter a valid name. Your name should be between 2 and 20 characters long");
                return false;
            }
        }
        else
        {
            alert("Please enter a valid name. Your name should only contain letters, dashes, and apostrophes");
            return false;
        }

    }

function addressCheck(inputField) 
    {
        var regExAddress    = /^[a-zA-Z0-9 #.]+$/;
        if(inputField.value.match(regExAddress))
        {
            if(inputField.value.length >= 5 && inputField.value.length <= 75)
            {
                return true;
            }
            else
            {
                alert("Address length must be between 5 and 75 characters");
                return false;
            }

        }
        else
        {
            alert("Address should contain only letters, numbers, periods, and number signs");
            return false;
        }
    }

function zipCheck(inputField)
{
    var regExNum	= /^[0-9]+$/;
    if(inputField.value.match(regExNum))
    {
        if(inputField.value.length == 5)
        {
            return true;
        }
        else
        {
            alert("Your zip code can only be 5 characters");
            return false;
        }
    }
    else
    {
        alert("Your zip code may only contain numbers");
        return false;
    }
}

function genderCheck(inputField)
{
    if(inputField.value == "female" || inputField.value == "male" || inputField.value == "other")
    {
        return true;
    }
    else
    {
        alert("Please select a your preferred gender");
        return false;
    }
}

//function copied from https://www.sitepoint.com/community/t/validating-checkbox-fields/8847/5 and modified to reflect current syntax
function ethnicityCheck(inputField)
{
    var ethnicities = document.getElementsByName("ethnicity");
    if(ethnicities[0].checked==false && ethnicities[1].checked==false && ethnicities[2].checked==false && ethnicities[3].checked==false && ethnicities[4].checked==false 
        && ethnicities[5].checked==false) 
    {
        alert('Please select at least one applicable ethnicity.');
        return false;
    }
    else
    {
        return true;
    }
}
    //couldn't get these functions to work. copied and adjusted from https://www.the-art-of-web.com/javascript/validate/
/*         function checkarray(form, arrayName)
{
    alert("Checking array");
    var retval = new Array();
    for(var i=0; i < form.elements.length; i++) 
    {
        var el = form.elements[i];
        if(el.type == "checkbox" && el.name == arrayName && el.checked)
        {
            retval.push(el.value);
        }
    }
    return retval;
} */
/*         function ethnicityCheck(form)
{
    alert(form);
    alert("Checking ethnicity selection(s)");
    var itemsChecked = checkArray(form, "ethnicity[]");
    alert("You selected " + itemsChecked.length + " items");
    if(itemsChecked.length > 0) 
    {
        alert("The items selected were:\n\t" + itemsChecked);
        return true;
    }
    alert("Please select your ethnicity(s).");
    return false;
} */


function dobCheck(inputField)
{
    var regExDOB    = /^([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/;
    var unreasonableage = new Date(2007, 04, 01);
    if(inputField.value.match(regExDOB))
    {
        //this doesn't work but I've tried to figure out how to make it work for a while and I can't. Leaving it for a sense of what I'd like to do
        if(inputField.value > unreasonableage)
        {
            alert("You are not old enough to register for this activity");
            return false;
        }
        else
        {
            return true;
        }
    }
    else
    {
        alert("Please select a valid birth date.");
        return false;
    }
}

function phoneCheck(inputField)
{
    var regExNum	= /^[0-9]+$/;
        if(inputField.value.match(regExNum))
        {
            if(inputField.value.length == 10)
            {
                return true;
            }
            else
            {
                alert("Your EMC phone number must be 10 characters long");
                return false;
            }
        }
        else
        {
            alert("Your EMC phone number may only contain numbers");
            return false;
        } 
}

function waiverCheck(inputField)
{
    if(inputField.value == "")
    {
        alert("Please state whether you have submitted a waiver")
        return false;
    }
    else if(inputField.value == "no")
    {
        alert("Please submit a waiver before continuing.");
        return false;
    }
    else if(inputField.value == "yes")
    {
        return true;
    }
    else
    {
        alert("Please select a valid waiver choice")
        return false;
    }
}

function tshirtCheck(inputField)
{
    if(inputField.value == "")
    {
        alert("Please select a t-shirt size")
        return false;
    }
    else if(inputField.value == "Extra Small" || inputField.value == "Small" || inputField.value == "Medium" || inputField.value == "Large" ||
            inputField.value == "Extra Large" || inputField.value == "XX Large")
    {
        alert("Your chosen t-shirt size is: " + inputField.value);
        return true;
    }
    else
    {
        alert("Please select a t-shirt size choice")
        return false;
    }
}

function emailCheck(inputField)
{
    // regex for email address validation found from https://www.w3resource.com/javascript/form/email-validation.php
    var regExEmailAddress    = (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if(inputField.value.match(regExEmailAddress))
    {
        if(inputField.value.length >= 3 && inputField.value.length <= 50)
        {
            return true;
        }
        else
        {
            alert("Email length must be between 3 and 50 characters");
                return false;
        }
    }
    else
    {
        alert("Please enter a valid email format");
                return false;
    }
}

function aboutmeCheck(inputField)
{
    var regExAddress    = /^[a-zA-Z0-9 .,']+$/;
    if(inputField.value == "")
    {
        alert("Please fill in the about me section.");
        return false;
    }
    else
    {
        if(inputField.value.match(regExAddress))
        {
            if(inputField.value.length <= 250 )
            {
                return true;
            }
            else
            {
                alert("About me may only be up to 250 characters");
                return false;
            }

        }
        else
        {
            alert("About me should only contain letters, numbers, periods, and commas.");
            return false;
        }
    }
}