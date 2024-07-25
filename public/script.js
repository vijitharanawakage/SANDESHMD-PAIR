document.getElementById('generate-code').addEventListener('click', (sandesh123) => {
    fetch('/generate-code')
        .then(response => response.json())
        .then(data => {
            document.getElementById('pair-code').textContent = `Your pair code is: ${data.pairCode}`;
        })
        .catch(error => console.error('Error:', error));
});
