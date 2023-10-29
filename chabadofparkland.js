if (window.location.href.includes(6146943)) {
    // add https://chabad.netlify.app/chabadofparkland.css to header
    document.querySelector("#Head1").insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="https://chabad.netlify.app/chabadofparkland.css" />');
    const pageFunctions = () => {
        const ctaSelector = "#id_3, #id_1, #cid_4";
        const sponsorSelector = "#id_17";
        const ctaElements = document.querySelectorAll(ctaSelector);
        const sponsorElement = document.querySelector(sponsorSelector);
        ctaElements.forEach((element) => {
            element.addEventListener("click", () => {
                sponsorElement.style.display = "flex";
                sponsorElement.scrollIntoView({ behavior: "smooth" });
            });
        });

        const seferBtn = document.querySelector("#sefer");
        const parshaBtn = document.querySelector("#parsha");
        const perekBtn = document.querySelector("#perek");
        const pasukBtn = document.querySelector("#pasuk");
        const wordBtn = document.querySelector("#word");
        const letterBtn = document.querySelector("#letter");
        const sponsorSelections = "#id_5, #id_10, #id_11, #id_7, #id_8, #id_9";
        const sefer = document.querySelector("#id_5");
        const parsha = document.querySelector("#id_10");
        const perek = document.querySelector("#id_11");
        const pasuk = document.querySelector("#id_7");
        const word = document.querySelector("#id_8");
        const letter = document.querySelector("#id_9");
        const sponsorElements = document.querySelectorAll(sponsorSelections);
        // depending on which button is clicked, scroll to the appropriate element and show them all
        const showElements = () => {
            sponsorElements.forEach((element) => {
                element.style.display = "block";
            })
        }
        seferBtn.addEventListener("click", () => {
            showElements();
            sefer.scrollIntoView({ behavior: "smooth" });
        })
        parshaBtn.addEventListener("click", () => {
            showElements();
            parsha.scrollIntoView({ behavior: "smooth" });
        })
        perekBtn.addEventListener("click", () => {
            showElements();
            perek.scrollIntoView({ behavior: "smooth" });
        })
        pasukBtn.addEventListener("click", () => {
            showElements();
            pasuk.scrollIntoView({ behavior: "smooth" });
        })
        wordBtn.addEventListener("click", () => {
            showElements();
            word.scrollIntoView({ behavior: "smooth" });
        })
        letterBtn.addEventListener("click", () => {
            showElements();
            letter.scrollIntoView({ behavior: "smooth" });
        })
    }
    // once the page is loaded, hide the back to site bar
    window.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".cco_templateless_template").remove();
        pageFunctions();
    })
}