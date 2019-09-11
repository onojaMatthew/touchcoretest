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
  const { email, password } = req.body;
  
  unirest
    .post('http://www.ije-api.tcore.xyz/v1/auth/login')
    .headers({
      'Accept': 'application/json', 
      'Content-Type': 'application/json'
    })
    .send(JSON.stringify({
      body: {
        email: 'customer@travelportal.com',
        password: 'customer'
      }
    }))
    .then((response) => {
      // console.log(response.body)
      res.json(response.body)
    })
    .catch(err => {
      console.log(err.message)
      res.json(err.message)
    })
}

exports.getCabinType = (req, res) => {
  unirest.get("http://www.ije-api.tcore.xyz/v1/plugins/all")
    .headers({ ACCEPT: "application/json", "Content-Type": "application/json" })
    .then(async (response) => {
      const result = await response.body;
      res.json(result)
    })
    .catch(err => {
      res.status(400).json(err.message)
    });
}

exports.postSearch = (req, res) => {
//   "body": {
//     "origin_destinations": [
//         {
//             "departure_city": "LOS",
//             "destination_city": "DXB",
//             "departure_date": "12/26/2019",
//             "return_date": ""
//         }
//     ],
//     "search_param": {
//         "no_of_adult": 1,
//         "no_of_child": 1,
//         "no_of_infant": 0,
//         "preferred_airline_code" : "",
//         "calendar" : false,
//         "cabin": "All"
//     }
// }
  // request.post({
    
  //   "http://www.ije-api.tcore.xyz/v1/plugins/all"
    
  //   body: JSON.stringify()
  // })
  //   .then(async (response) => {
  //     const result = await response.body;
  //     res.json(result)
  //   })
  //   .catch(err => {
  //     res.status(400).json(err.message)
    // });
}



