//Movement Animation to happen
const card1 = document.querySelector(".card1");
const proj1 = document.querySelector(".proj1");
const host1 = document.querySelector(".host1")
const repo1 = document.querySelector(".repo1")
const tit1 = document.querySelector(".tit1")
const des1 = document.querySelector(".des1")
const img1 = document.querySelector(".img1")

proj1.addEventListener("mousemove", (e) => {
    //console.log(e)
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    card1.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
});

proj1.addEventListener("mouseenter", (e) => {
    card1.style.transition = "none"
    host1.style.transform = "translateZ(150px)";
    repo1.style.transform = "translateZ(150px)";
    img1.style.transform = "translateZ(50px) rotateZ(-15deg)";
    tit1.style.transform = "translateZ(75px)";
    des1.style.transform = "translateZ(100px)";
})

proj1.addEventListener("mouseleave", (e) => {
    card1.style.transition = "all 0.5s ease";
    card1.style.transform = `rotateY(0deg) rotateX(0deg)`;
    host1.style.transform = "translateZ(0px)";
    repo1.style.transform = "translateZ(0px)";
    img1.style.transform = "translateZ(0px) rotateZ(0deg)";
    tit1.style.transform = "translateZ(0px)";
    des1.style.transform = "translateZ(0px)";
})

//Movement Animation to happen
const card2 = document.querySelector(".card2");
const proj2 = document.querySelector(".proj2");
const host2 = document.querySelector(".host2")
const repo2 = document.querySelector(".repo2")
const tit2 = document.querySelector(".tit2")
const des2 = document.querySelector(".des2")
const img2 = document.querySelector(".img2")

proj2.addEventListener("mousemove", (e) => {
    //console.log(e)
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    card2.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

proj2.addEventListener("mouseenter", (e) => {
    card2.style.transition = "none"
    host2.style.transform = "translateZ(150px)";
    repo2.style.transform = "translateZ(150px)";
    img2.style.transform = "translateZ(50px) rotateZ(15deg)";
    tit2.style.transform = "translateZ(75px)";
    des2.style.transform = "translateZ(100px)";
})

proj2.addEventListener("mouseleave", (e) => {
    card2.style.transition = "all 0.5s ease";
    card2.style.transform = `rotateY(0deg) rotateX(0deg)`;
    host2.style.transform = "translateZ(0px)";
    repo2.style.transform = "translateZ(0px)";
    img2.style.transform = "translateZ(0px) rotateZ(0deg)";
    tit2.style.transform = "translateZ(0px)";
    des2.style.transform = "translateZ(0px)";
})


const card3 = document.querySelector(".card3");
const proj3 = document.querySelector(".proj3");
const host3 = document.querySelector(".host3")
const repo3 = document.querySelector(".repo3")
const tit3 = document.querySelector(".tit3")
const des3 = document.querySelector(".des3")
const img3 = document.querySelector(".img3")

proj3.addEventListener("mousemove", (e) => {
    console.log(window.innerHeight)
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 60;
    card3.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
});

proj3.addEventListener("mouseenter", (e) => {
    card3.style.transition = "none"
    host3.style.transform = "translateZ(150px)";
    repo3.style.transform = "translateZ(150px)";
    img3.style.transform = "translateZ(50px) rotateZ(15deg)";
    tit3.style.transform = "translateZ(75px)";
    des3.style.transform = "translateZ(100px)";
})

proj3.addEventListener("mouseleave", (e) => {
    card3.style.transition = "all 0.5s ease";
    card3.style.transform = `rotateY(0deg) rotateX(0deg)`;
    host3.style.transform = "translateZ(0px)";
    repo3.style.transform = "translateZ(0px)";
    img3.style.transform = "translateZ(0px) rotateZ(0deg)";
    tit3.style.transform = "translateZ(0px)";
    des3.style.transform = "translateZ(0px)";
})


const card4 = document.querySelector(".card4");
const proj4 = document.querySelector(".proj4");
const host4 = document.querySelector(".host4")
const repo4 = document.querySelector(".repo4")
const tit4 = document.querySelector(".tit4")
const des4 = document.querySelector(".des4")
const img4 = document.querySelector(".img4")

proj4.addEventListener("mousemove", (e) => {
    //console.log(e)
    let xAxis = (window.innerWidth / 2 - e.pageX) / 50;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 50;
    card4.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

proj4.addEventListener("mouseenter", (e) => {
    card4.style.transition = "none"
    host4.style.transform = "translateZ(150px)";
    repo4.style.transform = "translateZ(150px)";
    img4.style.transform = "translateZ(50px) rotateZ(15deg)";
    tit4.style.transform = "translateZ(75px)";
    des4.style.transform = "translateZ(100px)";
})

proj4.addEventListener("mouseleave", (e) => {
    card4.style.transition = "all 0.5s ease";
    card4.style.transform = `rotateY(0deg) rotateX(0deg)`;
    host4.style.transform = "translateZ(0px)";
    repo4.style.transform = "translateZ(0px)";
    img4.style.transform = "translateZ(0px) rotateZ(0deg)";
    tit4.style.transform = "translateZ(0px)";
    des4.style.transform = "translateZ(0px)";
})

const card5 = document.querySelector(".card5");
const proj5 = document.querySelector(".proj5");
const repo5 = document.querySelector(".repo5")
const tit5= document.querySelector(".tit5")
const des5 = document.querySelector(".des5")
const img5 = document.querySelector(".img5")

proj5.addEventListener("mousemove", (e) => {
    //console.log(e)
    let xAxis = (window.innerWidth / 2 - e.pageX) / 80;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 80;
    card5.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

proj5.addEventListener("mouseenter", (e) => {
    card5.style.transition = "none"
    repo5.style.transform = "translateZ(150px)";
    img5.style.transform = "translateZ(50px) rotateZ(15deg)";
    tit5.style.transform = "translateZ(75px)";
    des5.style.transform = "translateZ(100px)";
})

proj5.addEventListener("mouseleave", (e) => {
    card5.style.transition = "all 0.5s ease";
    card5.style.transform = `rotateY(0deg) rotateX(0deg)`;
    repo5.style.transform = "translateZ(0px)";
    img5.style.transform = "translateZ(0px) rotateZ(0deg)";
    tit5.style.transform = "translateZ(0px)";
    des5.style.transform = "translateZ(0px)";
})

const card6 = document.querySelector(".card6");
const proj6 = document.querySelector(".proj6");
const repo6 = document.querySelector(".repo6")
const tit6 = document.querySelector(".tit6")
const des6 = document.querySelector(".des6")
const img6 = document.querySelector(".img6")

proj6.addEventListener("mousemove", (e) => {
    //console.log(e)
    let xAxis = (window.innerWidth / 2 - e.pageX) / 80;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 80;
    card6.style.transform = `rotateY(${xAxis}deg) rotateX(${-yAxis}deg)`;
});

proj6.addEventListener("mouseenter", (e) => {
    card6.style.transition = "none"
    repo6.style.transform = "translateZ(150px)";
    img6.style.transform = "translateZ(50px) rotateZ(15deg)";
    tit6.style.transform = "translateZ(75px)";
    des6.style.transform = "translateZ(100px)";
})

proj6.addEventListener("mouseleave", (e) => {
    card6.style.transition = "all 0.5s ease";
    card6.style.transform = `rotateY(0deg) rotateX(0deg)`;
    repo6.style.transform = "translateZ(0px)";
    img6.style.transform = "translateZ(0px) rotateZ(0deg)";
    tit6.style.transform = "translateZ(0px)";
    des6.style.transform = "translateZ(0px)";
})
