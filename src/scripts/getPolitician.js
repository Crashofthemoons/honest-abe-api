const HonestAbeApi = require("./getThatApi")
const $ = require("jquery")

HonestAbeApi.getPolitician().then((response) => {
    console.log(response)
    response.forEach(politician => {
        let polId = politician.politicianId
        let polName = politician.name
        let polBill = politician.legislativeBillId

        console.log(polName)
        let $politicianArticle = $("<article>")
        $politicianArticle.addClass("politician").appendTo("body")

        let $politicianHeader = $("<header>")
        $politicianHeader.addClass("politician__name")
        let $politicianH1 = $("<h1>")
        $politicianH1.text(`Politician: ${polName}`).appendTo($politicianHeader)
        $politicianHeader.appendTo($politicianArticle)

        HonestAbeApi.getBills().then((response) => {
            response.forEach(bill => {
                let billId = bill.legislativeBillId
                let billName = bill.name
                let billCorpId = bill.corporationId

                if (billId === polBill) {
                    let $billSection = $("<section>")
                    $billSection.addClass("politician__bills").appendTo($politicianArticle)
                    let $billH3 = $("<h3>")
                    $billH3.text("Sponsored Bills").appendTo($billSection)
                    let $bill = $("<h4>")
                    $bill.text(`Bills: ${billName}`).appendTo($billSection)
                }
            })
        })
        HonestAbeApi.getDonations().then((response) => {
            response.forEach(donation => {
                let donationId = donation.donationId
                let donName = donation.name
                let donPolId = donation.politicianId
                let donPacId = donation.donPacId

                if (donPolId === polId) {
                    let $pacSection = $("<section>")
                    $pacSection.addClass("politician__influencers").appendTo($politicianArticle)
                    let $pacH3 = $("<h3>")
                    $pacH3.text("Related PACs").appendTo($pacSection)
                    let $pac = $("<h4>")
                    $pac.text(donName).appendTo($pacSection)
                }
            })
        })
    })

})