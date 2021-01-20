//Movement Animation to happen
const card1 = document.querySelector('.card1')
const container1 = document.querySelector('.container1')

const card2 = document.querySelector('.card2')
const container2 = document.querySelector('.container2')

const card3 = document.querySelector('.card3')
const container3 = document.querySelector('.container3')

//Items
const title = document.querySelector('.title');
const title2 = document.querySelector('.title2');
const title3 = document.querySelector('.title3');

const shose = document.querySelector('.shose img');
const shose2 = document.querySelector('.shose2 img');
const shose3 = document.querySelector('.shose3 img');

const purchase = document.querySelector('.purchase');
const purchase2 = document.querySelector('.purchase2');
const purchase3 = document.querySelector('.purchase3');

const description = document.querySelector('.info h3');
const description2 = document.querySelector('.info2 h3');
const description3 = document.querySelector('.info3 h3');

const sizes = document.querySelector('.sizes');
const sizes2 = document.querySelector('.sizes2');
const sizes3 = document.querySelector('.sizes3');

//Moving Animation Event 
container1.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card1.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container2.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 20;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 20;
    card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

container3.addEventListener("mousemove", (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    card3.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animate In
container1.addEventListener("mouseenter", (e) => {
    card1.style.transition = "0.1s";
    //pop-out items
    title.style.transform = "translateZ(150px)"
    purchase.style.transform = "translateZ(75px)"
    description.style.transform = "translateZ(125px)"
    shose.style.transform = "translateZ(200px) rotateZ(-25deg)"
    sizes.style.transform = "translateZ(100px)"
});

container2.addEventListener("mouseenter", (e) => {
    card2.style.transition = "0.1s";
    //pop-out items
    title2.style.transform = "translateZ(150px)"
    purchase2.style.transform = "translateZ(75px)"
    description2.style.transform = "translateZ(125px)"
    shose2.style.transform = "translateZ(200px) rotateZ(-25deg)"
    sizes2.style.transform = "translateZ(100px)"
});

container3.addEventListener("mouseenter", (e) => {
    card3.style.transition = "0.1s";
    //pop-out items
    title3.style.transform = "translateZ(150px)"
    purchase3.style.transform = "translateZ(75px)"
    description3.style.transform = "translateZ(125px)"
    shose3.style.transform = "translateZ(200px) rotateZ(-25deg)"
    sizes3.style.transform = "translateZ(100px)"
});

//Animate Out
container1.addEventListener("mouseleave", (e) => {
    card1.style.transition = "all 0.5s ease";
    card1.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //pop-back items
    title.style.transform = "translateZ(0px)"
    purchase.style.transform = "translateZ(0px)"
    description.style.transform = "translateZ(0px)"
    shose.style.transform = "translateZ(0px) rotateZ(0deg)"
    sizes.style.transform = "translateZ(0px)"
});

container2.addEventListener("mouseleave", (e) => {
    card2.style.transition = "all 0.5s ease";
    card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //pop-back items
    title2.style.transform = "translateZ(0px)"
    purchase2.style.transform = "translateZ(0px)"
    description2.style.transform = "translateZ(0px)"
    shose2.style.transform = "translateZ(0px) rotateZ(0deg)"
    sizes2.style.transform = "translateZ(0px)"
});

container3.addEventListener("mouseleave", (e) => {
    card3.style.transition = "all 0.5s ease";
    card3.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //pop-back items
    title3.style.transform = "translateZ(0px)"
    purchase3.style.transform = "translateZ(0px)"
    description3.style.transform = "translateZ(0px)"
    shose3.style.transform = "translateZ(0px) rotateZ(0deg)"
    sizes3.style.transform = "translateZ(0px)"
});