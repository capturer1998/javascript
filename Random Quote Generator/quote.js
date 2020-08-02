

let btn = document.getElementById('btn');
let output = document.getElementById('output');
let quotes = [
    
    '“Failure Will Never Overtake Me If My Determination To Succeed Is Strong Enough.” – Og Mandino',
    '“Entrepreneurs Are Great At Dealing With Uncertainty And Also Very Good At Minimizing Risk. That’s The Classic Entrepreneur.” – Mohnish Pabrai',
    '“We May Encounter Many Defeats But We Must Not Be Defeated.” – Maya Angelou',
    '“Knowing Is Not Enough; We Must Apply. Wishing Is Not Enough; We Must Do.” – Johann Wolfgang Von Goethe',
    "Your future needs you, Your past doesn't",
    "Laughter is timeless, imagination have no age, dreams are forever - Disney ",
    "Faith and prayer are both invisible but they make imposible things possible - Buddha ",
    "If you win, you can lead! If you loss, you can guide - Swami Vivekananda  ",
    "I don\'t believe in God of theologians; But that there is a suprime intelligence I do not doubt. - Thomas Edison ",
    "Peace means far more than The opposite of war - Mr. Rogers ",
    "Ups and downs in life are very important to keep us going because a straight line even in an ECG means we are not alive. - Ratan Tata",
    "Everything happens for a reason, don'\t question it - Buddha",
    "The way to get started is to quit talking and being doing - Disney ",
    '"The Pessimist Sees Difficulty In Every Opportunity. The Optimist Sees Opportunity In Every Difficulty.” – Winston Churchill', 
    '“Don’t Let Yesterday Take Up Too Much Of Today.” – Will Rogers',
    '“You Learn More From Failure Than From Success. Don’t Let It Stop You. Failure Builds Character.” – Unknown',
    '“It’s Not Whether You Get Knocked Down, It’s Whether You Get Up.” – Inspirational Quote By Vince Lombardi',
    '“If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed. The Vision Pulls You.” – Steve Jobs',
    '“People Who Are Crazy Enough To Think They Can Change The World, Are The Ones Who Do.” – Rob Siltanen',
];

btn.addEventListener('click', function(){
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]
    output.innerHTML = randomQuote;
})