if (window.location.href.includes(6146943)) {
    // add https://chabad.netlify.app/chabadofparkland.css to header
    document.querySelector("#Head1").insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="https://chabad.netlify.app/chabadofparkland.css" />');
    const pageFunctions = () => {
        const ctaElement = document.querySelector("#cid_4");
        const sponsorElement = document.querySelector("#id_17");
        ctaElement.addEventListener("click", () => {
            sponsorElement.style.display = "flex";
            sponsorElement.classList.add("fadeIn");
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

        // Scroll to the appropriate element and show them all
        const showElements = (element) => {
            const elements = [sponsorElementsDiv, personalInfoDiv];
            elements.forEach(el => {
                el.style.display = "flex";
                el.classList.add("fadeIn");
            });
            const scrollPosition = element.getBoundingClientRect().top + window.scrollY - 200;
            window.scrollTo({ top: scrollPosition, behavior: "smooth" });
        }
        const highlightElemement = (element) => {
            element.classList.add("highlight");
        }
        seferBtn.addEventListener("click", () => {
            showElements(sefer);
            highlightElemement(sefer);
        })
        parshaBtn.addEventListener("click", () => {
            showElements(parsha);
            highlightElemement(parsha);
        })
        perekBtn.addEventListener("click", () => {
            showElements(perek);
            highlightElemement(perek);
        })
        pasukBtn.addEventListener("click", () => {
            showElements(pasuk);
            highlightElemement(pasuk);
        })
        wordBtn.addEventListener("click", () => {
            showElements(word);
            highlightElemement(word);
        })
        letterBtn.addEventListener("click", () => {
            showElements(letter);
            highlightElemement(letter);
        })

        // move p.live to after #id_14 (the scroll iframe div)
        document.querySelector("#id_14").insertAdjacentElement("afterend", document.querySelector("p.live"));
        // add photo iframe
        const div = document.createElement('div');
        div.className = 'container';
        const iframe = document.createElement('iframe');
        iframe.src = 'https://www.canva.com/design/DAFy1pjV1m4/view?embed';
        iframe.allowfullscreen = 'allowfullscreen';
        iframe.allow = 'fullscreen';
        div.append(iframe);
        // put it before #id_14
        document.querySelector("#id_14").insertAdjacentElement("beforebegin", div);
        // make pressing .button.cta trigger a click on #cid_4
        document.querySelector(".button.cta").addEventListener("click", () => {
            ctaElement.click();
        })
        // make pressing .button.live scroll to photos
        document.querySelector(".button.live").addEventListener("click", () => {
            document.querySelector("iframe.live").scrollIntoView({ behavior: "smooth" });
        })
    }
    // once the page is loaded, hide the back to site bar
    window.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".cco_templateless_template").remove();
        pageFunctions();
    })
}