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
        const paymentInfo = document.querySelectorAll("#id_12, #id_13, #id_15, #id_16, #id_2");
        // move the sponsor elements to a new div we create called sponsorElements directly below where they were before
        const sponsorElementsDiv = document.createElement("div");
        sponsorElementsDiv.id = "sponsorElements";
        document.querySelector("#id_5").insertAdjacentElement("beforebegin", sponsorElementsDiv);
        sponsorElementsDiv.append(...sponsorElements);

        // move the payment info elements to a new div we create called paymentInfo directly below where they were before
        const paymentInfoDiv = document.createElement("div");
        paymentInfoDiv.id = "paymentInfo";
        document.querySelector("#id_12").insertAdjacentElement("beforebegin", paymentInfoDiv);
        paymentInfoDiv.append(...paymentInfo);

        // depending on which button is clicked, scroll to the appropriate element and show them all
        const showElements = () => {
            sponsorElementsDiv.style.display = "block";
            paymentInfoDiv.style.display = "block";
        }
        const highlightElemement = (element) => {
            element.classList.add("highlight");
        }
        seferBtn.addEventListener("click", () => {
            showElements();
            sefer.scrollIntoView({ behavior: "smooth" });
            highlightElemement(sefer);
        })
        parshaBtn.addEventListener("click", () => {
            showElements();
            parsha.scrollIntoView({ behavior: "smooth" });
            highlightElemement(parsha);
        })
        perekBtn.addEventListener("click", () => {
            showElements();
            perek.scrollIntoView({ behavior: "smooth" });
            highlightElemement(perek);
        })
        pasukBtn.addEventListener("click", () => {
            showElements();
            pasuk.scrollIntoView({ behavior: "smooth" });
            highlightElemement(pasuk);
        })
        wordBtn.addEventListener("click", () => {
            showElements();
            word.scrollIntoView({ behavior: "smooth" });
            highlightElemement(word);
        })
        letterBtn.addEventListener("click", () => {
            showElements();
            letter.scrollIntoView({ behavior: "smooth" });
            highlightElemement(letter);
        })
    }
    // once the page is loaded, hide the back to site bar
    window.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".cco_templateless_template").remove();
        pageFunctions();
    })
}