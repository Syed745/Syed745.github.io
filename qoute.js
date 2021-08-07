var arrayOfQoutes = [
    {
        "author": "Nelson Mandela",
        "qoute": "The greatest glory in living lies not in never falling, but in rising every time we fall."
    },
    {
        "author":"-Walt Disney",
        "qoute":"The way to get started is to quit talking and begin doing."
    },
    {
        "author":"Steve Jobs",
        "qoute":"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking."
    },
    {
        "author":"Eleanor Roosevelt",
        "qoute":"If life were predictable it would cease to be life, and be without flavor. "
    },
    {
        "author":"-Oprah Winfrey",
        "qoute":"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough. "
    },
    {
        "author":"-James Cameron",
        "qoute": "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success"
    }
]

function randomSelector(arrayLength){
    return Math.floor(Math.random() * arrayLength);
}
function generateQoute() {
    var randomNumber = randomSelector(arrayOfQoutes.Length);
    document.getElementById("qouteOuput").innerHTML = '"' + arrayOfQoutes[randomNumber].qoute + '"';

    document.getElementById("authorOutput").innerHTML = "- " + arrayOfQoutes[randomNumber].author; 
}
