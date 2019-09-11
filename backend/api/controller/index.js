const request = require("request");
const unirest = require("unirest");

// We get the list of cities 
exports.getFlightData = (req, res, next) => {
  unirest.get("http://www.ije-api.tcore.xyz/v1/plugins/cities-type-ahead/las")
    .headers({ ACCEPT: "application/json", "Content-Type": "application/json" })
    .then(response => {
      const result = response.body.data;
      res.json(result)
    })
    .catch(err => {
      res.status(400).json(err.message)
    });
}

// Login controller
exports.postLogin = (req, res) => {
  const { email, password } = req.body.data;
  request.post({
    headers: { "Accept": "application/json", "Content-Type" : "application/json" },
    url: 'http://www.ije-api.tcore.xyz/v1/auth/login',
    body: JSON.stringify(email, password)
  },(error, response, body) => {
    if (error) return res.status(400).json({ error: error.message });
    res.json(body)
  });
}

exports.getCabinType = (req, res) => {
  const { email, password } = req.body.data;
  request.get({
    headers: { "Accept": "application/json", "Content-Type" : "application/json" },
    url: 'http://www.ije-api.tcore.xyz/v1/plugins/all',
  },(error, response, body) => {
    if (error) return res.status(400).json({ error: error.message });
    res.json(body);
  });
}
//


