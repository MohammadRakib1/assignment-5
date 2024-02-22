const allSeats = document.getElementsByClassName('seat-tickets');

let count = 0;
for (const seats of allSeats) {
    seats.addEventListener('click', function (event) {
        count = count + 1;

        console.log()
        const seatName = event.target.parentNode.innerText;
        const seatPrice = event.target.parentNode.childNodes[2].innerText;

        const selectedContainer = document.getElementById('selected-seat-container');
        const li = document.createElement('li');
        
        const h6 = document.createElement('h6');
        h6.innerText = seatName;

        const p2 = document.createElement('p');
        p2.classList.add('flex')
        p2.innerText = seatPrice;

        li.appendChild(h6);
        li.appendChild(p2);

        selectedContainer.appendChild(li);


        setInnerText('seat-count', count);
    })
}




function setInnerText(id, value) {
    document.getElementById(id).innerText = value;
}