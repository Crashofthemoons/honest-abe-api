const $ = require("jquery")

const HonestAbeApi = Object.create({}, {

  "getPolitician": {
    value: function() {
      return $.ajax("http://localhost:3000/Politicians") //get politicians
    }
  },
  "getDonations": {
    value: function(polId) {
        return $.ajax(`http://localhost:3000/PoliticiansAndDonations?_expand=donation&politicianId=${polId}`) //get donations
    }
  },
  "getCorporateDonations": {
    value: function() {
      return $.ajax("http://localhost:3000/CorporateDonations") //get corporate donations
    }
  },
  "getBills": {
    value: function(polId) {
      return $.ajax(`http://localhost:3000/PoliticiansAndBills?_expand=legislativeBill&politicianId=${polId}`)
    }
  },
  "getPacId": {
    value: function(donId) {
      return $.ajax(`http://localhost:3000/pacAndDonations?_expand=pac&donationId=${donId}`)
    }
  },
  "getPacs": {
    value: function(pacId) {
      return $.ajax(`http://localhost:3000/pacs?id=${pacId}`)
    }
  }
})

module.exports = HonestAbeApi