var price = document.getElementById('price');
var friends = document.getElementById('friends');
var tips = document.getElementById('tips');
var res = document.getElementById('res');
var  clear = document.getElementById('clear');
var result = document.getElementById('result');


res.onclick = function()
{
    if(price.value && friends.value && tips.value)
    {
        result.innerHTML =  parseInt(price.value)/parseInt(friends.value)+parseInt(tips.value)+ '  ' +'L.E';
        result.style.color="white";
    }
    else if(price.value && friends.value)
    {
        result.innerHTML =  Number(price.value) /Number(friends.value) + " " + 'L.E';
        result.style.color="white";
        
    }
    else
    {
        result.innerText = 'Please Enter your value';
        result.style.color="red";
    }
}

clear.onclick = function()
{
    location.reload();
}