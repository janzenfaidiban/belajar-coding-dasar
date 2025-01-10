// JavaScript codes

const showButton = document.getElementById('show-button');

const hiddenText = document.getElementById('hidden-text');

showButton.addEventListener('click', () => {
    hiddenText.classList.toggle('hidden');

    if(hiddenText.classList.contains('hidden')){
        showButton.textContent = 'Show';
    } else {
        showButton.textContent = 'Hide';
    }
});