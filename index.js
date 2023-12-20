const express = require('express')

const app = express();

app.get('/', (req, res) => {
    if (req.headers["user-agent"].includes("Twitterbot")) {
        res.setHeader("Location", "https://x.ai");

        return;
    }

    res.redirect(301, "https://chat.openai.com");
})

app.listen(3000)