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

const buildTheDom = (politicianName, politicianBills, politicianPacs) => {
    let politicianArticle = $("<article>")
    politicianArticle.addClass("politician__name")
    let politicianHeader = $("<header>")
    politicianHeader.addClass("politician__name")
    let politicianH1 = $("<h1>")
    politicianH1.text(politicianName).appendTo(politicianHeader)
    politicianHeader.appendTo(politicianArticle)

    let billSection = $("<section>")
    billSection.addClass("politician__bills")
    let billH3 = $("<h3>")
    billH3.text("Sponsored Bills")

}