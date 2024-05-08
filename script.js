fetch('./data.json')
  .then((response) => response.json())
  .then((json) => {

    const container = document.querySelector(".chart-wrap");

    json.forEach(function(el) {
        let barWrap = document.createElement("li");
        barWrap.classList.add("bar-wrap");
        
        barWrap.innerHTML = `
            <div class="expense-box">$${el.amount}</div>
            <div class="bar"></div>
            <div class="day">${el.day}</div>
        `;
        
        const bar = barWrap.querySelector(".bar"); // Corrected here
        if (el.day === "mon") {
            bar.classList.add("bar-1");
        } 
        if (el.day === "tue") {
            bar.classList.add("bar-2");
        }
        if (el.day === "wed") {
            bar.classList.add("bar-3");
        }
        if (el.day === "thu") {
            bar.classList.add("bar-4");
        }
        if (el.day === "fri") {
            bar.classList.add("bar-5");
        }
        if (el.day === "sat") {
            bar.classList.add("bar-6");
        } 
        if (el.day === "sun") {
            bar.classList.add("bar-7");
        } 
        
        container.appendChild(barWrap);
    });

    const bars = document.querySelectorAll(".bar");
    bars.forEach(function(bar) {
        bar.addEventListener("mouseover", function() {
            const box = bar.previousElementSibling;
            box.style.visibility = "visible"
        })
        bar.addEventListener("mouseout", function() {
            const box = bar.previousElementSibling;
            box.style.visibility = "hidden"
        })
    })

});