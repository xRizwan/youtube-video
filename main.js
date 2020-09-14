const moreText = document.getElementById('more-text')
const moreBtn = document.querySelector('.more-btn')
const menuBtn = document.querySelector('.menu-icon')
const menuCloser = document.querySelector('.menu-closer');
const body = document.querySelector('body');
const overlay = document.querySelector('.overlay');
const sidebar = document.querySelector('.left-bar');
const commentInput = document.querySelector('.comment')
const sendBtn = document.querySelector('.s-btn');

// send button toggle
commentInput.addEventListener('click', () => {
    sendBtn.classList.remove('hidden');
})

// send alert
sendBtn.addEventListener('click', () => {
    alert('Why are you trying to send a comment on a dummy website, you schupid!')
    sendBtn.classList.add('hidden');
    commentInput.value = "";
})

// show more video description toggle
moreBtn.addEventListener('click', (e) => {
    let text = e.target.textContent
    if(text === "Show Less"){
        moreText.classList.add('hidden')
        e.target.textContent = "Show More"
    } else {
        moreText.classList.remove('hidden')
        e.target.textContent = "Show Less"
    }
})

// menu toggle
menuBtn.addEventListener('click', () => {
    overlay.classList.remove('hidden');
    sidebar.classList.remove('bar-outter');
    sidebar.style.display = "block";
    body.classList.add('hide-overflow')

    overlay.addEventListener('click', closeMenu)
})

menuCloser.addEventListener('click', () => {
    closeMenu();
    overlay.removeEventListener('click', closeMenu);
})

function closeMenu() {
    overlay.classList.add('hidden');
    sidebar.classList.add('bar-outter');
    body.classList.remove('hide-overflow')
    setTimeout(() => {
        sidebar.style.display = 'none';
    }, 350)
}