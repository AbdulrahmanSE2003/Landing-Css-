// *STUB - 
let allSkills = document.querySelectorAll(".bar .skill-progress span");
let skillSection = document.querySelector("#skills");
let plans = document.querySelectorAll(".plan");
let whiteFlag = document.querySelector("#pricing .plan.special::after");
// *STUB - 
let stats = document.querySelector("#stats");
let statCard = document.querySelectorAll("#stats .row .card h5");
let isCounted = false;
// *STUB - Counter
let counterOne = document.querySelector("#events .evnet-body .counters .counter:nth-child(1) h5");
let counterTwo = document.querySelector("#events .evnet-body .counters .counter:nth-child(2) h5");
let counterThree = document.querySelector("#events .evnet-body .counters .counter:nth-child(3) h5");
let counterFour = document.querySelector("#events .evnet-body .counters .counter:nth-child(4) h5");
let currentTime = new Date();
let targetedTime = new Date(currentTime.getFullYear(),  11, 31, 23, 59, 59)


const currentDate = new Date();
const endOfYear = new Date(currentDate.getFullYear(), 11, 31, 23, 59, 59);
let timeLeft = Math.floor((endOfYear - currentDate) / 1000);

if (timeLeft > 0) {
    let timer = setInterval(() => {
        let days = Math.floor(timeLeft / (24 * 60 * 60));
        let hours = Math.floor((timeLeft % (24 * 60 * 60)) / (60 * 60));
        let minutes = Math.floor((timeLeft % (60 * 60)) / 60);
        let seconds = timeLeft % 60;

        document.querySelector('.counter.days h5').textContent = days;
        document.querySelector('.counter.hours h5').textContent = hours;
        document.querySelector('.counter.minutes h5').textContent = minutes;
        document.querySelector('.counter.seconds h5').textContent = seconds;

        if (timeLeft <= 0) {
            clearInterval(timer);
        }

        timeLeft--;
    }, 1000);
} 
// *SECTION - Skills 
window.addEventListener("scroll", ()=>{
    let sectionTop = skillSection.offsetTop;
    let sectionHeight = skillSection.clientHeight;
    // console.log(sectionTop - sectionHeight+ 200);
    // console.log(window.scrollY);
    if (window.scrollY >=(sectionTop - sectionHeight + 200)){
        allSkills.forEach(bar=>{
            // console.log(bar);
            // console.log(bar.dataset.progress);
            bar.style.width = bar.dataset.progress;
        })
    }
})
// *SECTION - Stat card Animate
window.addEventListener("scroll", () => {
    // console.log(window.scrollY + " scrollY");
    // console.log(stats.offsetTop + " section top");

    if (window.scrollY > (stats.offsetTop - stats.clientHeight)) {
        // console.log("true");
        if (!isCounted){
            statCard.forEach(card => {
                let targetedNum = Number(card.dataset.num); 
    
                let currentNum = 0;
                let increment = Math.ceil(targetedNum / 100);
                let interval = setInterval(() => {
                    currentNum += increment;
                    if (currentNum >= targetedNum) {
                        currentNum = targetedNum; 
                        clearInterval(interval); 
                    }
                    card.innerHTML = currentNum; 
                }, 20); 
            });
            isCounted=true;
        }
    }
});