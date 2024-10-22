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

// myButton.addEventListener('click', () => {
//     if(myButton.textContent.includes('Accendi')) {
//         myButton.textContent = 'Spegni';
//         lamp.src = './img/yellow_lamp.png';
//     } else if (myButton.textContent.includes('Spegni')){
//         myButton.textContent = 'Accendi';
//         lamp.src = './img/white_lamp.png';
//     }
// })

myButton.addEventListener('click', () => {
    if(myButton.classList.contains('power-off')) {
        myButton.textContent = 'Spegni';
        lamp.src = './img/yellow_lamp.png';
        myButton.classList.toggle('power-off')
        myButton.classList.toggle('power-on')
    } else if (myButton.classList.contains('power-on')){
        myButton.textContent = 'Accendi';
        lamp.src = './img/white_lamp.png';
        myButton.classList.toggle('power-off')
        myButton.classList.toggle('power-on')
    }
})