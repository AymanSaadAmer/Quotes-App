var Quotes=[
    {
        Quote:"Resentment is like drinking poison and waiting for your enemies to die.",
        writer:"--Nelson Mandela"
    },
    {
        Quote:"Do not take life too seriously. You will not get out alive",
        writer:"--Elbert Hubbard"
    },
    {
        Quote:"The best revenge is massive success",
        writer:"--Frank Sinatra"
    },
    {
        Quote:"It's not what happens to you, but how you react to it that matters.",
        writer:"--Epictetus"
    },
    {
        Quote:"You miss 100% of the shots you don't take.",
        writer:"--Wayne Gretzy"
    },
    {
        Quote:"“Be yourself; everyone else is already taken.",
        writer:"― Oscar Wilde"
    },
    {
        Quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
        writer:"― Marilyn Monroe"
    },
    {
        Quote:"“So many books, so little time.”",
        writer:"― Frank Zappa"
    },
    {
        Quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
        writer:"― Albert Einstein"
    },
    {
        Quote:"“A room without books is like a body without a soul.”",
        writer:"― Marcus Tullius Cicero"
    },
    {
        Quote:"“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”",
        writer:"― Bernard M. Baruch"
    },
    {
        Quote:"“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”",
        writer:"― Dr. Seuss"
    },

]
// Select Html element
var text_Quotes=document.getElementById("quote");
var text_writer=document.getElementById("writer");
var previous;
//  main function
function main_function(){
    var rondm=generateNumber();
    while(rondm===previous){
        var rondm=generateNumber();
    }
    display(rondm);

    previous=rondm;
}

// generate number
function generateNumber(){
var random=Math.floor(Math.random() * Quotes.length);
return random;
}

// display function
function display(x){
    text_Quotes.innerHTML= Quotes[x].Quote ;
    text_writer.innerHTML= Quotes[x].writer;
}