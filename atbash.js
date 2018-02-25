function atbashEncrypt()
{
    //Variable for encrypted string
    var encrypted = '';
    var str = document.getElementById("message").value;

    //Loop through string checking each character
    for(var i = 0; i<str.length; i++)
    {
        var character = str[i];
        var indexCode = str[i].charCodeAt();
        //Validate upper case to lower case
        if(((indexCode <= 65) && (indexCode >= 90)) || ((indexCode >= 97) && (indexCode <= 122)))
        {
            if((indexCode >= 65) && (indexCode <= 90))
            {
                character = String.fromCharCode(indexCode + (90 - indexCode -(indexCode -65)));
            }
            if((indexCode >= 97) && (indexCode <= 122))
            {
                character = String.fromCharCode(indexCode + (122 - indexCode - (indexCode - 97)));
            }
        }
        //Add character to output string
        encrypted += character;
    }
    document.getElementById("output").innerHTML = encrypted;
}
