const days = document.querySelector(".day");
const hours = document.querySelector(".hour");
const minutes = document.querySelector(".minute");
const seconds = document.querySelector(".second");

// create a function

const updateCountDown = () => {
    const currentDate = new Date();
    const fullYear = new Date().getFullYear();
    console.log(currentDate);
    console.log(fullYear);

    const countDown = new Date(`jan 1,${fullYear + 1}  00:00:00`);
    console.log(countDown);



        const difference = countDown - currentDate;

        console.log(difference);
        const d = Math.floor(difference / 1000 / 60 / 60 / 24);
        const h = Math.floor(difference / 1000 / 60 / 60) % 24;
        const m = Math.floor(difference / 1000 / 60) % 60;
        const s = Math.floor(difference / 1000) % 60;

        days.textContent = `${d}`;
        hours.textContent = `${h < 10 ? "0" + h : h}`;
        minutes.textContent = `${m < 10 ? "0" + m : m}`;
        seconds.textContent = `${s < 10 ? "0" + s : s}`;
    
    
        console.log(`${d}:${h}:${m}:${s}`)

    

}

setInterval(() => {
    updateCountDown()
}, 1000)







