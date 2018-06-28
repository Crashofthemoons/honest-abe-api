const $ = require("jquery")

const HonestAbeApi = Object.create({}, {

  "getPolitician": {
    value: function() {
      return $.ajax("http://localhost:3000/Politicians") //get politicians
    }
  },
  "getDonations": {
    value: function() {
        return $.ajax("http://localhost:3000/Donations") //get donations
    }
  },
  "getCorporateDonations": {
    value: function() {
      return $.ajax("http://localhost:3000/CorporateDonations") //get corporate donations
    }
  },
  "getBills": {
    value: function() {
      return $.ajax("http://localhost:3000/LegislativeBills") //get legislative bills
    }
  }
})

module.exports = HonestAbeApi