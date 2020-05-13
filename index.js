const server = require("./server.js");
require('dotenv').config();
const colors = require('colors');
const NODE = process.env.NODE_ENV
const PORT = process.env.PORT;

server.listen(PORT, () => {
    console.log(`\n** API running in ${NODE} mode on http://localhost:${PORT} **\n`.magenta.underline.bold);
});
