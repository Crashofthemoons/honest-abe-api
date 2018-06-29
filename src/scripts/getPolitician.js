const HonestAbeApi = require("./getThatApi")
const $ = require("jquery")

{/* <article class="politician">
    <header class="politician__name">
        <h1>Abby Fleming</h1>
    </header>
    <section class="politician__bills">
        <h3>Sponsored Bills</h3>
        <div>
            <h4>S. 2325: Northern Mariana Islands U.S. Workforce Act</h4>
            <ul>
                <li>Employment</li>
                <li>Energy</li>
                <li>Natural Resources</li>
            </ul>
        </div>
    </section>
    <section class="politician__influencers">
        <h3>Related PACs</h3>
        <ul>
            <li>American Gas Association</li>
            <li>League of Conservation Voters Action Fund</li>
        </ul>
    </section>
</article> */}

HonestAbeApi.getPolitician().then((politicianArray) => {
    politicianArray.forEach(politician => {
        let polId = politician.id
        console.log(polId)
        $("#main").append($(`<article class='politician' id=${polId}><h1>${politician.name}</h1></article>`))
        HonestAbeApi.getBills(polId).then((billArray) => {
            $(`#${polId}`).append($("<section class='politician__bills'><h3>Sponsored Bills</h3></section>"))
            billArray.forEach(billObject =>{
                console.log(billObject.legislativeBill.name)
                $(`#${polId}`).append($(`<h4>${billObject.legislativeBill.name}</h4>`))
            })
        })
        HonestAbeApi.getDonations(polId).then((donationArray) => {
            $(`#${polId}`).append($("<section class='politician_influencers'><h3>RelatedPacs</h3></section>"))
            donationArray.forEach(donationObject => {
                let donId = donationObject.donationId
                console.log(donId)
                HonestAbeApi.getPacId(donId).then((pacAndDonArray) => {
                    pacAndDonArray.forEach(pacObject => {
                        $(`#${polId}`).append($(`<h4>${pacObject.pac.name}</h4>`))
                    })
                })
            })
        })
    })
})