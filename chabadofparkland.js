if (window.location.href.includes(6146943)) {
    // add https://chabad.netlify.app/chabadofparkland.css to header
    document.querySelector("#Head1").insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="https://chabad.netlify.app/chabadofparkland.css" />');
    const pageFunctions = () => {
        const ctaElement = document.querySelector("#cid_4");
        const sponsorElement = document.querySelector("#id_17");
        ctaElement.addEventListener("click", () => {
            sponsorElement.style.transition = "all 0.5s ease-in-out";
            sponsorElement.style.display = "flex";
            sponsorElement.scrollIntoView({ behavior: "smooth" });
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
        // move the sponsor elements to a new div we create called sponsorElements directly below where they were before
        const sponsorElementsDiv = document.createElement("div");
        sponsorElementsDiv.id = "sponsorElements";
        document.querySelector("#id_5").insertAdjacentElement("beforebegin", sponsorElementsDiv);
        sponsorElementsDiv.append(...sponsorElements);

        const personalInfo = document.querySelectorAll("#id_15, #id_16, #id_13, #id_12, #id_2, #id_21");
        // move the personal info elements to a new div we create called personalInfo directly below where they were before
        const personalInfoDiv = document.createElement("div");
        personalInfoDiv.id = "personalInfo";
        personalInfoInnerDiv = document.createElement("div");
        personalInfoInnerDiv.id = "personalInfoInnerDiv";
        document.querySelector("#id_15").insertAdjacentElement("beforebegin", personalInfoDiv);
        personalInfoDiv.append(personalInfoInnerDiv);
        personalInfoInnerDiv.append(...personalInfo);

        // depending on which button is clicked, scroll to the appropriate element and show them all
        const showElements = () => {
            sponsorElementsDiv.style.transition = "all 0.5s ease-in-out";
            sponsorElementsDiv.style.display = "flex";
            personalInfoDiv.style.transition = "all 0.5s ease-in-out";
            personalInfoDiv.style.display = "flex";
            sponsorElementsDiv.scrollIntoView({ behavior: "smooth" });
        }
        const highlightElemement = (element) => {
            element.classList.add("highlight");
        }
        seferBtn.addEventListener("click", () => {
            showElements();
            highlightElemement(sefer);
        })
        parshaBtn.addEventListener("click", () => {
            showElements();
            highlightElemement(parsha);
        })
        perekBtn.addEventListener("click", () => {
            showElements();
            highlightElemement(perek);
        })
        pasukBtn.addEventListener("click", () => {
            showElements();
            highlightElemement(pasuk);
        })
        wordBtn.addEventListener("click", () => {
            showElements();
            highlightElemement(word);
        })
        letterBtn.addEventListener("click", () => {
            showElements();
            highlightElemement(letter);
        })
    }
    // once the page is loaded, hide the back to site bar
    window.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".cco_templateless_template").remove();
        pageFunctions();
    })
}