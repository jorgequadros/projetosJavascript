openMenu.addEventListener('click', () => {
    menu.style.display='flex'

    setTimeout(()=> {
        menu.style.opacity='1'
    },10)
    menu.style.opacity ='1'
})
closeMenu.addEventListener('click', () => {
    menu.style.opacity ='0'
    menu.removeAttribute('style')
})