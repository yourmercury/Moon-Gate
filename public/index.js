
let vw = 0;
let width = window.innerWidth;
let height = window.innerHeight;
let myChart
vw = 1 / 100 * width;
const canvas = document.querySelector('canvas');
const ctx = canvas.getContext("2d");

let legendOrientation = width <= 1200 ? "bottom" : "right";
let withinMobile = width <= 1200 ? true : false;
let y;
y = canvas.getBoundingClientRect().y

let colors = [
    '#5472d2',
    '#fe6c61',
    '#6dab3c',
    '#b97ebb',
    '#ebebeb'
]

document.onscroll = () => {
    y = canvas.getBoundingClientRect().y
    if (y < height - (height / 5)) {
        drawPieChart();
        document.onscroll = null;
    }
}

if (y < height - (height / 5)) {
    drawPieChart()
    document.onscroll = null;
}
// onresize = () => {
//     width = window.innerWidth;
//     vw = 1 / 100 * width;
// }

// document.onanimationend = () => {
//     document.querySelector("body").style.overflowY = "auto";
// }


onresize = () => {
    width = window.innerWidth;
    height = window.innerHeight;
    vw = 1 / 100 * width;
    if (width <= 1200 && !withinMobile) {
        legendOrientation = "bottom";
        myChart.destroy();
        ctx.fillStyle = "#050510"
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fill();
        drawPieChart();
        withinMobile = true;
    } else if (width > 1200 && withinMobile) {
        legendOrientation = "right";
        myChart.destroy();
        ctx.fillStyle = "#050510"
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.fill();
        drawPieChart();
        withinMobile = false;
    }
}

function drawPieChart() {
    let data = {
        labels: [
            'Presale: 450000000000 ',
            'Partnerships: 100000000000',
            'Charity/Bounties: 100000000000',
            'Burn Wallet: 200000000000',
            'Pancakeswap Liquiditys: 150000000000'
        ],
        datasets: [{
            label: 'My First Dataset',
            data: [450000000000, 100000000000, 100000000000, 200000000000, 150000000000],
            backgroundColor: colors,
            hoverOffset: 4
        }]
    };

    let config = {
        type: 'pie',
        data: data,
        options: {
            plugins: {
                legend: {
                    position: legendOrientation,
                    display: false,
                    labels: {
                        boxWidth: 30,
                        font: {
                            size: 1 * vw + 5
                        }
                    }
                }
            }
        }
    };



    console.log(legendOrientation);

    myChart = new Chart(
        canvas,
        config
    );
}



const legendBoxes = document.querySelectorAll(".color-box");

legendBoxes.forEach((box, i) => {
    box.style.backgroundColor = colors[i];
})


// Here is for the Sticky nav bar
const nav = document.querySelector("#nav");
const navbar = document.querySelector(".dropDown");
const logo = document.querySelector(".logo");
const ham = document.querySelector(".fa-bars");
const exit = document.querySelector(".fa-times");
const min = document.querySelector("#min");
const toTop = document.querySelector(".to-top");
const navAnchors = document.querySelectorAll(".dropDown > a");

onscroll = (e) => {

    if (scrollY < 20) {
        nav.style.position = "static";
        nav.style.background = "rgba(0, 0, 0, 0)";
        logo.style.height = "64px";
        logo.style.width = "64px";
        toTop.style.bottom = "-100px";
        toTop.style.background = "rgba(0, 0, 0, 0)";


    } else {
        nav.style.position = "fixed";
        nav.style.background = "black";
        logo.style.height = "45px";
        logo.style.width = "45px";
        toTop.style.bottom = "40px";
        toTop.style.background = "#1aafe9";
    }
}

navAnchors.forEach(anchor => {
    anchor.onclick = (e) => {
        //e.preventDefault();
        navbar.id = "";
        console.log("clicked")
        return true;
    }
})

console.log(navAnchors)

ham.onclick = () => {
    navbar.id = "dropDown";
}

exit.onclick = (e) => {
    navbar.id = "";
}

toTop.onclick = () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}