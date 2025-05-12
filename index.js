// Get the switch element
const switchInput = document.querySelector('.switch input');

// Add event listener for the switch
switchInput.addEventListener('change', function() {
    if (this.checked) {
        console.log('Switch is ON');
        document.body.classList.add('dark-mode');
    } else {
        console.log('Switch is OFF');
        document.body.classList.remove('dark-mode');
    }
});
