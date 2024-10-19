const gmailInput = document.querySelector('#gmail_input')
const gmailButton = document.querySelector('#gmail_button')
const gmailResult = document.querySelector('#gmail_result')

const regExp = /^[A-Za-z\d._%+]+@gmail\.com$/

gmailButton.onclick =  () =>{
    if(regExp.test(gmailInput.value)){
        gmailResult.innerHTML = 'OK'
        gmailResult.style.color = 'green'
    }else{
        gmailResult.innerHTML = 'NOT OK'
        gmailResult.style.color = 'red'
    }
}
const parentBlock = document.querySelector('.parent_block')
const childBlock = document.querySelector('.child_block')

const offsetWidth = parentBlock.offsetWidth - childBlock.offsetWidth;
const offsetHeight = parentBlock.offsetHeight - childBlock.offsetHeight;

let positionX = 0
let positionY = 0

const slide = () => {
    if (positionX < offsetWidth && positionY === 0) {
        positionX++;
        childBlock.style.left = `${positionX}px`;
        requestAnimationFrame(slide);
    }
    else if (positionX >= offsetWidth && positionY < offsetHeight) {
        positionY++;
        childBlock.style.top = `${positionY}px`;
        requestAnimationFrame(slide);
    }
    else if (positionY >= offsetHeight && positionX > 0) {
        positionX--;
        childBlock.style.left = `${positionX}px`;
        requestAnimationFrame(slide);
    }
    else if (positionX === 0 && positionY > 0) {
        positionY--;
        childBlock.style.top = `${positionY}px`;
        requestAnimationFrame(slide);
    }
};

slide();

const seconds = document.querySelector('#seconds')
const start = document.querySelector('#start')
const stop = document.querySelector('#stop')
const reset = document.querySelector('#reset')

let timer = 0
let interval;

start.addEventListener('click', () =>{
    clearInterval(interval)
    interval = setInterval(() =>{
        timer++
        seconds.innerHTML = timer
    },1000)
})
stop.addEventListener('click', () =>{
    clearInterval(interval)
})
reset.addEventListener('click', () =>{
    clearInterval(interval)
    timer = 0
    seconds.innerHTML = timer
})
const charactersList = document.querySelector('.characters-list')

const xhr = new XMLHttpRequest();

xhr.open('GET', '../data/persons.json');
xhr.setRequestHeader('Accept', 'application/json');
xhr.send()
xhr.onload = ()=>{
    const characterCard = JSON.parse(xhr.response);
    characterCard.forEach((item) => {
        const characterCard = document.createElement('div');
        characterCard.setAttribute('class', 'character-card');
        characterCard.innerHTML = `
        <div class="character-photo">
            <img src="${item.person_photo}" alt="">
        </div>
        <h2> ${" " + item.name}</h2>
        
        
        `

        charactersList.append(characterCard)
    })
}

const team = new XMLHttpRequest()
team.open('GET', '../data/team.json');
team.setRequestHeader('Accept', 'application/json');
team.send()

team.onload = () => {
    const teamCard = JSON.parse(team.response);
    console.log(teamCard)
}










