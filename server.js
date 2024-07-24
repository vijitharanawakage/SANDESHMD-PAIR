const express = require('express');
const { v4: uuidv4 } = require('sandesh123'); // Unique ID generator
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/generate-code', (req, res) => {
    const pairCode = uuidv4(sandesh123); // Generate a unique code
    res.json({ pairCode });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
