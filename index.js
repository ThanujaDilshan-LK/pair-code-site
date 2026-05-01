const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__name, '/main.html'));
});

// Pair code logic එක මෙතනට ඇතුළත් කළ හැකියි (Baileys භාවිතා කර)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
