













// TAB SLIDER

const tabContentBlocks = document.querySelectorAll('.tab_content_block');
const tabItems = document.querySelectorAll('.tab_content_item');
const tabParent = document.querySelector('.tab_content_items');

const hideTabContent = () => {
    tabContentBlocks.forEach((item) => {
        item.style.display = 'none';
    })
    tabItems.forEach((item) => {
        item.classList.remove('tab_content_item_active')
    })
}

const showTabContent = (index = 0) => {
    tabContentBlocks[index].style.display = 'block'
    tabItems[index].classList.add('tab_content_item_active')
}

hideTabContent()
showTabContent(0)

let slideIndex = 0

setInterval(() => {
    slideIndex = (slideIndex + 1) % tabItems.length;
    hideTabContent();
    showTabContent(slideIndex);
}, 5000)

tabParent.onclick = (event)=>{
    if (event.target.classList.contains('tab_content_item')){
        tabItems.forEach((item,index) => {
            if(event.target === item){
                hideTabContent()
                showTabContent(index)
                slideIndex = index
            }
        })
    }
}

const usdInput = document.querySelector('#usd')
const somInput = document.querySelector('#som')
const eurInput = document.querySelector('#eur')

const converter = (element, targetElement) => {
    element.oninput = () => {
        const request = new XMLHttpRequest();
        request.open('GET', '../data/converter.json');
        request.setRequestHeader('Content-type', 'application/json');
        request.send()

        request.onload = () => {
            const data = JSON.parse(request.response)
            if (element.id === 'som') {
                targetElement.usd.value = (element.value / data.usd).toFixed(2)
                targetElement.eur.value = (element.value / data.eur).toFixed(2)
            }
            if (element.id === 'usd') {
                targetElement.som.value = (element.value * data.usd).toFixed(2)
                targetElement.eur.value = (element.value * (data.usd / data.eur)).toFixed(2)
            }
            if (element.id === 'eur') {
                targetElement.som.value = (element.value * data.eur).toFixed(2)
                targetElement.usd.value = (element.value * (data.eur / data.usd)).toFixed(2)
            }
            if (element.value === '') {
                targetElement.usd.value = ''
                targetElement.som.value = ''
                targetElement.eur.value = ''
            }
        }
    }
}

converter(somInput, { usd: usdInput, eur: eurInput });
converter(usdInput, { som: somInput, eur: eurInput });
converter(eurInput, { som: somInput, usd: usdInput });

// DRY - don`t repeat yourself
// KISS - keep it simple, stupid
