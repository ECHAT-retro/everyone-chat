const secs = document.querySelector(".seconds");
const mins = document.querySelector(".minutes");
const hour = document.querySelector(".hours")
const textsecs = document.querySelector("#time")

function to0(value) {
    return value < 10 ? "0" + value : value;
}

for (let i = 0; i < 100000; i++) {
        setTimeout(() => {
            const time = new Date();
            let hours = time.getHours();
            let minuts = time.getMinutes(); 
            let secoonds = time.getSeconds();
            secs.style.transform = `rotate(${(secoonds * 6)}deg)`;
            mins.style.transform = `rotate(${(minuts * 6)}deg)`;
            hour.style.transform = `rotate(${(hours * 6)}deg)`;
            document.querySelector(".selector").style.width = `${(hours / 24) * 100}%`;
            textsecs.innerText = `${to0(hours%60)}:${to0(minuts%60)}:${to0(secoonds%60)}`;
        }, 100 * i); 
 }
