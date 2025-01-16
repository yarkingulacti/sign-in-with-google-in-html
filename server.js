const express = require("express");
const { OAuth2Client } = require("google-auth-library");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");

const client = new OAuth2Client();

const port = 4000;

app.use(cors());

async function verify(clientId, token) {
  const ticket = await client.verifyIdToken({
    idToken: token,
    audience: clientId
  });

  return ticket.getPayload();
}

app.use(bodyParser.json());

app.post("/auth/google", async (req, res) => {
  const { token, clientId } = req.body;
  res.status(200).send(await verify(clientId, token));
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
