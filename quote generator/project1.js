// Quote Generator/Beginner

// key concepts for project

// document.querySelector()
// addEventListener()
// math Object()
// innerText

//variables
let btn=document.querySelector('#new-quote');
let quote=document.querySelector('.quote');
let person=document.querySelector('.person');

const quotes=[
    {quote:"The greatest glory in living lies not in never falling, but in rising every time we fall." ,person: 'Nelson Mandela'},
    {quote:"The way to get started is to quit talking and begin doing.",person:"Walt Disney"},
    {quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",person:"Steve Jobs"},
    {quote:"If life were predictable it would cease to be life, and be without flavor." ,person:"Eleanor Roosevelt"},
    {quote:"If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.", person:"Oprah Winfrey"},
    {quote:"If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success." ,person:"James Cameron"},
    {quote:"Life is what happens when you're busy making other plans." ,person:"John Lennon"},
    {quote:"You will face many defeats in life, but never let yourself be defeated." ,person:"Maya Angelou"},
    {quote:"The greatest glory in living lies not in never falling, but in rising every time we fall." ,person:"Nelson Mandela"},
    {quote:"In the end, it's not the years in your life that count. It's the life in your years." ,person:"Abraham Lincoln"},
    {quote:"Never let the fear of striking out keep you from playing the game. ",person:"Babe Ruth"},
    {quote:"Life is either a daring adventure or nothing at all." ,person:"Helen Keller"},
    {quote:"Many of life's failures are people who did not realize how close they were to success when they gave up." ,person:"Thomas A. Edison"},
    {quote:"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose." ,person:"Dr. Seuss"},
    {quote:"Keep smiling, because life is a beautiful thing and there's so much to smile about." ,person:"Marilyn Monroe"},
    {quote:"Life is a long lesson in humility." ,person:"James M. Barrie"},
    {quote:"In three words I can sum up everything I've learned about life: it goes on." ,person:"Robert Frost"},
    {quote:"Love the life you live. Live the life you love. ",person:"Bob Marley"},
    {quote:"Life is either a daring adventure or nothing at all." ,person:"Helen Keller"},
    {quote:"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose." ,person:"Dr. Seuss"},
    {quote:"Life is made of ever so many partings welded together." ,person:"Charles Dickens"},
    {quote:"Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma — which is living with the results of other people's thinking." ,person:"Steve Jobs"},
    {quote:"Life is trying things to see if they work." ,person:"Ray Bradbury"},
    {quote:"Many of life's failures are people who did not realize how close they were to success when they gave up." ,person:"Thomas A. Edison"},
    {quote:"You miss 100% of the shots you don't take." ,person:"Wayne Gretzky"},
    {quote:"Whether you think you can or you think you can't, you're right." , person:"Henry Ford"},
    {quote:"I have learned over the years that when one's mind is made up, this diminishes fear." ,person:"Rosa Parks"},
    {quote:"I alone cannot change the world, but I can cast a stone across the water to create many ripples." ,person:"Mother Teresa"},
    {quote:"Nothing is impossible, the word itself says, ‘I'm possible!' ",person:"Audrey Hepburn"},
    {quote:"The question isn't who is going to let me; it's who is going to stop me.",person:"Ayn Rand"},
    {quote:"The only person you are destined to become is the person you decide to be. ",person:"Ralph Waldo Emerson"}
];

btn.addEventListener("click",function(){
    let random = Math.floor(Math.random()* quotes.length);

    quote.innerText = quotes[random].quote;
    person.innerText = quotes[random].person;
})

