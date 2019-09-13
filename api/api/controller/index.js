const moment = require("moment");
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
  console.log(email, password);
  unirest
    .post('http://www.ije-api.tcore.xyz/v1/auth/login')
    .headers({
      'Accept': 'application/json', 
      'Content-Type': 'application/json'
    })
    .send(JSON.stringify({
      body: {
        email: email,
        password: password
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

// Flight Search
exports.postSearch = (req, res) => {
  const { 
    deptCity, 
    destCity, 
    deptDate, 
    cabinClass, 
    returnDate, 
    noOfAdult, 
    noOfChildren, 
    noOfInfant,
    token,
  } = req.body

  const dept_date = moment(deptDate).format("MM/DD/YYYY");
  const ret_date = moment(returnDate).format("MM/DD/YYYY");
  
  const origin_destinations = [
    {
        departure_city: deptCity,
        destination_city: destCity,
        departure_date: dept_date,
        return_date: ret_date
    }
  ];
  const search_param =  {
    no_of_adult: Number(noOfAdult),
    no_of_child: Number(noOfChildren),
    no_of_infant: Number(noOfInfant),
    preferred_airline_code : "",
    calendar : false,
    cabin: cabinClass
  }
  
  unirest
    .post('http://www.ije-api.tcore.xyz/v1/flight/search-flight')
    .headers({
      "Content-Type": "application/json",
    })
    .send(JSON.stringify({
      header: {
        cookie: token
      },
      body: {
        origin_destinations: origin_destinations,
        search_param: search_param,
      }
    }))
    .then((response) => {
      console.log(response.body)
      res.json(response.body)
      return " Returned from server";
    })
    .catch(err => {
      console.log(err.message)
      res.json(err.message)
    });
}

