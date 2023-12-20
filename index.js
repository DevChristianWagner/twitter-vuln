const express = require('express')

const app = express;

app.use('/', (req, res) => {
    if (req.headers["user-agent"].includes("Twitterbot")) {
        res.setHeader("Location", "https://x.ai");

        return;
    }

    res.redirect(301, "https://chat.openai.com");
})