function caesarEncrypt()
{
    //Variable for encrypted string
    var encrypted = '';
    var str = document.getElementById("message").value;
    var shiftString = document.getElementById("shift").value;
    var shift = parseInt(shiftString);

    //Loop through string checking each character
    for(var i = 0; i<str.length; i++)
    {
        var character = str[i];
        var indexCode = str[i].charCodeAt();
        //Validate upper case to lower case
        if(((indexCode >= 65) && (indexCode <= 90)) || ((indexCode >= 97) && (indexCode <= 122)))
        {
            if((indexCode >= 65) && (indexCode <= 90))
            {
                character = String.fromCharCode(((indexCode - 65 + shift) % 26) + 65);

            }
            if((indexCode >= 97) && (indexCode <= 122))
            {
                character = String.fromCharCode(((indexCode - 97 + shift) % 26) + 97);
            }
        }
        //Add character to output string
        encrypted += character;
    }
    document.getElementById("output").innerHTML = encrypted;
}

function caesarDecrypt()
{
    //Variable for encrypted string
    var encrypted = '';
    var str = document.getElementById("message").value;
    var shiftString = document.getElementById("shift").value;
    var shift = parseInt(shiftString);

    //Loop through string checking each character
    for(var i = 0; i<str.length; i++)
    {
        var character = str[i];
        var indexCode = str[i].charCodeAt();
        //Validate upper case to lower case
        if(((indexCode >= 65) && (indexCode <= 90)) || ((indexCode >= 97) && (indexCode <= 122)))
        {
            if((indexCode >= 65) && (indexCode <= 90))
            {
                character = String.fromCharCode(((indexCode - 65 + (26- shift)) % 26) + 65);

            }
            if((indexCode >= 97) && (indexCode <= 122))
            {
                character = String.fromCharCode(((indexCode - 97 +(26- shift)) % 26) + 97);
            }
        }
                //Add character to output string
        encrypted += character;
    }
    document.getElementById("output").innerHTML = encrypted;
}
