// Import react and react-dom from cdn

// Read the id from the request
const id = req.params.id;

// Call the json file called by that id and return it
page = res.json(require(`./data/${id}.json`));

// Get metadata from the json file
const title = page.title;
const year = page.year;
const message = page.message;

// Render send to the #app div
