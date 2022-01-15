const cont = [
    'Mixed together a variety of veggies nd other ingredients to make a feeling, prepare the dough abnd the custard, then bake it all in the oven. After a little while you have yourself some savoury egg tart to serve.',
    'It burger time! Let the brown beef party sizzle on the grill, then sandwitch it between two buns covered in secret sauce, fresh veggies and chease! Every bite will be satisfying',
    'The triangular shape, the spicy flavour of chutney combined with lemon to cover up any hint of greasiness you never know true joy',
    'Eager to serve an appetizer to your customers? Toss a few vegs togetther in to a refreshing salad and dazzle everyone with some of your special dressing',
    'The ice cream is made from the freshes milk available with the added straeberries and the crunch of nuts customers will be defnitely coming back for your seconds',
    'Your culinilary journey begins with grilling steaks! place a steak on the charcoal grill let it sizzle until it oozes with tantalizing juices',
    'Islands have easy acces to fresh fish! Pan fry one until it"s nice and crispy, then serve it to your customers with lemon and tasty sauce.',
    'Fried mozarella sticks in a pan witha variety of ingredients. Let the aroma come out, and enjoy it. Don"t forget to dip it in marinara sausa',
    'Chocolates are so tasty, Jennet once had a bite and it felt like heaven, she gave her cat some, she likes her cat so much. Eat chocolate the cold one',
    'Mark is a nice agentle boy he was in Havard schooling and was doing very well hs love for software mad him dropout to focus on making the world a better place'
]
const number = document.getElementById('inp');
const form = document.querySelector('.gen-form');
const output = document.querySelector('.text');
 
form.addEventListener('submit', (e)=> {
    e.preventDefault();
    const value = parseInt(number.value);
    if(isNaN(value) || value<0 || value>10) {
        const random = Math.floor(Math.random() * cont.length);
        const out = cont[random];
        output.innerHTML =  `<p>${out}</p>`
    }else{
        const newText = cont.slice(0, value);
        const rat = newText.map((i)=> {
            return `<p>${i}</p>`
        }).join('');
        output.innerHTML = rat;
        console.log(rat);
    }
})