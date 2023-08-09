const express = require('express');
const app = express();
const pets = require('./pets');

// Route to get all pets
app.get('/pets', (req, res) => {
    const allNamesHTML = pets.map(pet => `
        <div>
            <h2>${pet.name}</h2>
        </div>
    `).join('');

    const petOwnerHTML = pets.map(pet => `
        <div>
            <h2>${pet.owner}</h2>
        </div>
    `).join('');

    const html = `
        <html>
        <head>
            <title>Pet Names</title>
        </head>
        <body>
            <h1>Individual Pet Names</h1>
            ${allNamesHTML}
            <h2>Pet Owners</h2>
            ${petOwnerHTML}
        </body>
        </html>
    `;

    res.send(html);
});

// Route to get a pet by name
app.get('/pets/:name', (req, res) => {
    const petName = req.params.name;
    const petNameHTML = `<h1>${petName}</h1>`;

    res.send(petNameHTML);
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});
