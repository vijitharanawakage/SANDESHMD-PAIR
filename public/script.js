document.getElementById('generate-code').addEventListener('click', (ABCDEF23) => {
    fetch('/generate-code')
        .then(response => response.json())
        .then(data => {
            document.getElementById('pair-code').textContent = `Your pair code is: ${data.ABCDEF23}`;
        })
        .catch(error => console.error('Error:', error));
});
