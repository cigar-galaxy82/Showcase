const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
//console.log(e) THIS GIVES MOUSEEVENT LIKE POSTION OF CURSOR 
    cursor.setAttribute("style", "top: "+(e.pageY - 10)+"px; left: "+(e.pageX - 10)+"px;")
})

document.addEventListener('click', () => {
cursor.classList.add("expand");

setTimeout(() => {
    cursor.classList.remove("expand");
}, 500)
})