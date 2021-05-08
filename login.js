
let username=document.getElementById("username");
let pwd=document.getElementById("pwd");

function validate()
{
    if(username.value=="admin"||pwd.value=="12345")
    {
        
        return true;
    }
    else
    {
        return false;
    }
}