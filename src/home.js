//const functionOne = () => console.log('hello');

//export {functionOne};
import Icon from './img/cat-logo.gif';

export function restaurantHome() {

    content.innerHTML = '';

    const homePageTitle = document.createElement("div");
    homePageTitle.classList.add("title");
    homePageTitle.innerHTML ="Little Cakes";

    const catImage = document.createElement("div");
    catImage.classList.add("cat");
    
    const myIcon = new Image();
    myIcon.classList.add("cat-img");
    myIcon.src = Icon;


    
    catImage.appendChild(myIcon);
    content.appendChild(homePageTitle);
    content.appendChild(catImage)
}

