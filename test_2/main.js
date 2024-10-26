// ЗАДАНИЕ 1
function extractNumbers(str) {
    return str.match(/\d/g).map(Number);
}

console.log(extractNumbers("a1fg5hj6"));
console.log(extractNumbers("шгаиу3381388вр"));
console.log(extractNumbers("jndn4892djopwfnen480"));

// ЗАДАНИЕ 2
function number(a = 0, b = 1) {
    if (a > 144) return;
    setTimeout(() => {
        number(b, a + b)
        console.log(a);
    }, 1000);
}

number();

// ЗАДАНИЕ 3
const URL = 'https://fakestoreapi.com/products'
const products = async() =>{
    const product = await fetch(URL);
    const data = await product.json();
    data.forEach((item) => {
        console.log(item.title);
    })
}
products()

// ЗАДАНИЕ 4
const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
    button.onclick = () => {
        if (button.className === 'red') {
            document.body.style.background = 'red';
        }
        if(button.className === 'blue') {
            document.body.style.background = 'blue';
        }
        if(button.className === 'green') {
            document.body.style.background = 'green';
        }
        if(button.className === 'yellow') {
            document.body.style.background = 'yellow';
        }
        if(button.className === 'purple') {
            document.body.style.background = 'purple';
        }
    };
});


// Задание 5
const block = document.querySelector('.block');
const none = document.querySelector('.none');

none.onclick = () => {
    if(block.style.display === 'none') {
        block.style.display = 'block';
    }
    else {
        block.style.display = 'none';
    }
}
// ЗАДАНИЕ 6
const seconds = document.querySelector(".second");
let timer= 0
setInterval(() => {
    timer++
    seconds.innerHTML = timer
    clearInterval( timer === 100)
}, 100)



// ЗАДАНИЕ 7
const btn = document.querySelector('.btn');

btn.onclick = async () =>{
    const response = await fetch('data.json');
    const data = await response.json();
    console.log(data);
}