//refresh the page 

document.querySelector('.refresh').addEventListener('click', (e)=>{
    window.location.reload()
})

//light mode and dark

document.getElementById('toggle').addEventListener('click', (e)=>{
    document.body.classList.toggle('theme')
    document.querySelector('.layout').classList.toggle('theme')
    document.querySelector('.infoSection').classList.toggle('theme')
    document.querySelector('.navbar').classList.toggle('theme')
    document.querySelector('.btn').classList.toggle('theme')
    document.querySelector('.details').classList.toggle('theme')
    document.querySelector('.info').classList.toggle('theme')
    document.querySelector('.footer').classList.toggle('theme')

})