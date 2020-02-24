///////////////QUESTIONS FOR CASSIE/////////////
//how link... api to... things...?
//gradient scrolling
//structuring divs for days of the week???
//custom inline styling for text?
//strong is being weird!!

//NOTES:
//.onChildren? = drills down into a container to change text
//Spans like div, but inline
//Background: Body w/h 100%. Main w/h 100%, (overflow-y scroll). Bigger div that's w/h 100%
//OR div that has the gradient that is positioned absolutely
/////////////////////////////////////////////

const api_url = 'https://api.nasa.gov/insight_weather/?api_key=2LQeZihvF2aBJHPydE2v7ZoyZa1GMmamTDvDwnf4&feedtype=json&ver=1.0'
// "2LQeZihvF2aBJHPydE2v7ZoyZa1GMmamTDvDwnf4"
// locationName: "Brooklyn,nyc"

window.onload = async function getData() {
    const response = await fetch(api_url)
    const data = await response.json();
    // console.log(data.sol_keys);
    // console.log(data);
    data.sol_keys.forEach((sol, index) => printData(sol, data[sol], index));

    function printData(sol, sol_obj, index) {
        let solDay = `day${index + 1}`;
        let solText = document.getElementById(solDay);
        solText.textContent = 'Sol ' + sol;

        let cpDay = `cp${index + 1}`
        let cpText = document.getElementById(cpDay);
        cpText.textContent = 'Compass ' + sol_obj.WD.most_common.compass_point;

        let minDay = `min${index + 1}`
        let minText = document.getElementById(minDay);
        minText.textContent = 'Low: ' + Math.floor(sol_obj.AT.mn) + '° C';

        let maxDay = `max${index + 1}`
        let maxText = document.getElementById(maxDay);
        maxText.textContent = 'High: ' + Math.floor(sol_obj.AT.mx) + '° C';

        console.log('maxCompassPoint', sol_obj.WD.most_common.compass_point);

    }
}

let title = document.getElementById('title');

title.addEventListener("mouseover", function (event) {
    // highlight the mouseover target
    event.target.style.color = "#83decd";
    console.log("mouseover!");

    // reset the color after a short delay
    setTimeout(function () {
        event.target.style.color = "";
    }, 5000);
}, false);
