const lamp = document.getElementById('lamp')
const myButton = document.getElementById('my-button')

// myButton.addEventListener('click', () => {
//     if(myButton.innerText.includes('Accendi')) {
//         myButton.innerText = 'Spegni';
//         lamp.src = './img/yellow_lamp.png';
//     } else if (myButton.innerText.includes('Spegni')){
//         myButton.innerText = 'Accendi';
//         lamp.src = './img/white_lamp.png';
//     }
// })

myButton.addEventListener('click', () => {
    if(myButton.textContent.includes('Accendi')) {
        myButton.textContent = 'Spegni';
        lamp.src = './img/yellow_lamp.png';
    } else if (myButton.textContent.includes('Spegni')){
        myButton.textContent = 'Accendi';
        lamp.src = './img/white_lamp.png';
    }
})