
const buttons = document.querySelectorAll('button');
const progress = document.querySelectorAll('span');
let counter = 0;
buttons.forEach(btn => {
    btn.addEventListener('click', (event) => {
        const clickedButton = event.target;
        if (clickedButton.innerText === 'Next') {
            console.log(counter);
            
            if(counter < 3){
            clickedButton.classList.add('enable');
            clickedButton.classList.remove('disable');}

            if(counter === 2) {
                clickedButton.classList.add('disable');
                clickedButton.classList.remove('enable');}

            if (counter <= 2){
                counter++;
            progress[counter].classList.add('active');}

                if(counter >= 1){
                    buttons[0].classList.remove('disable');
                    buttons[0].classList.add('enable');
                }
        } else {
            console.log(counter);
            if (counter >= 1){
                progress[counter].classList.remove('active');
                counter--;
        }if(counter === 0){
                clickedButton.classList.remove('enable');
                clickedButton.classList.add('disable');
            }
            else {
                clickedButton.classList.add('enable');
                clickedButton.classList.remove('disable');
            }
            if(counter <= 2){
                buttons[1].classList.remove('disable');
                buttons[1].classList.add('enable');
            }
        }

    })
});