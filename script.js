const display=document.querySelector('#status');

const capcha=document.querySelector('#generator');

const clientText=document.querySelector('#client-text');

const submit=document.querySelector('#submit');

const refresh=document.querySelector('#refresh');

const body=document.body;
const char="1234567890ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghifklmnopqrstuvwxyz";
let genaratedcapcha="";
const capchaLength=6;
body.onload=function generateCaptcha()
{
    
    for (let i = 0; i <capchaLength; i++) {
        const randomIndex=Math.floor(Math.random()*char.length);
        genaratedcapcha+=char.substring(randomIndex,randomIndex+1);
    }
    capcha.value=genaratedcapcha;
}

submit.addEventListener('click', function()
{
    const clientValue=document.getElementById('client-text').value;

    if (clientValue === "") {
        display.innerHTML="<h2>Please Enter the Captcha</h2>";
    }
    else if(clientValue === genaratedcapcha)
    {
        display.innerHTML="<h2>Captcha Matched</h2>";
    }
    else{
        display.innerHTML="<h2>Captcha Not Matched</h2>";
    }
})

refresh.addEventListener('click', function()
{
    let newCaptcha="";
    for (let i = 0; i < genaratedcapcha.length; i++) {
        const randomChar=char[Math.floor(Math.random()*char.length)];
        newCaptcha+=randomChar;
    }
    genaratedcapcha=newCaptcha;
    capcha.value=genaratedcapcha;
    display.innerHTML="<h2>Captcha Generator</h2>";
})