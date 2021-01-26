const allImages = document.getElementsByTagName('img');

for (let img of allImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg'
}


const squareImages = document.getElementsByClassName('square');

for (let img of squareImages) {
    img.src = 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/Silky_bantam.jpg/440px-Silky_bantam.jpg';
}
//document.querySelector('p') //only shows 1
//document.getElementsByTagName('p') //shows all the P tags

//document.querySelector('#banner')
//document.querySelector('.square')
//document.querySelector('img:nth-of-type(2)')

//document.querySelector('a[title="Java"]')

const links = document.querySelectorAll('p');

const links = document.querySelectorAll('p a');

for (let link of links) {
    console.log(link.href)
}