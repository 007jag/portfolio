const iconbars = document.getElementById('icon-bars')

const navList = document.getElementById('nav-list')

function toggleButton() {
    navList.classList.toggle ('show')
}

iconbars.addEventListener('click', toggleButton)

console.log('hello')