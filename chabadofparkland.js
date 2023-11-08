if (window.location.href.includes(6146943)) {
    // add https://chabad.netlify.app/chabadofparkland.css to header
    document.querySelector("#Head1").insertAdjacentHTML("beforeend", '<link rel="stylesheet" href="https://chabad.netlify.app/chabadofparkland.css" />');
    const pageFunctions = () => {
        const ctaElement = document.querySelector("#cid_4");
        const sponsorElement = document.querySelector("#id_17");
        const sponsorSelections = "#id_5, #id_10, #id_23, #id_25";

        const sponsorElements = document.querySelectorAll(sponsorSelections);
        // move the sponsor elements to a new div we create called sponsorElements directly below where they were before
        const sponsorElementsDiv = document.createElement("div");
        sponsorElementsDiv.id = "sponsorElements";
        document.querySelector("#cid_17").insertAdjacentElement("afterend", sponsorElementsDiv);
        sponsorElementsDiv.append(...sponsorElements);

        const personalInfo = document.querySelectorAll("#id_15, #id_16, #id_13, #id_12, #id_2, #id_21");
        // move the personal info elements to a new div we create called personalInfo directly below where they were before
        const personalInfoDiv = document.createElement("div");
        personalInfoDiv.id = "personalInfo";
        const personalInfoInnerDiv = document.createElement("div");
        personalInfoInnerDiv.id = "personalInfoInnerDiv";
        document.querySelector("#id_15").insertAdjacentElement("beforebegin", personalInfoDiv);
        personalInfoDiv.append(personalInfoInnerDiv);
        personalInfoInnerDiv.append(...personalInfo);
        ctaElement.addEventListener("click", () => {
            sponsorElement.style.display = "flex";
            personalInfoDiv.style.display = "flex";
            personalInfoDiv.classList.add("fadeIn");
            sponsorElement.classList.add("fadeIn");
            sponsorElement.scrollIntoView({ behavior: "smooth" });
        });

        // add photo iframe
        const div = document.createElement('div');
        div.className = 'gallery';
        document.querySelector("#id_14").insertAdjacentElement("beforebegin", div);
        const iframe = document.createElement('iframe');
        iframe.src = 'https://docs.google.com/presentation/d/e/2PACX-1vRFKr8cLNAhBSiusAHLZulS9o7loPzrYabCxCZ7k2QOER18QMw-pKgf-ziXVybyLPqDHYdvdoTas4qz/embed?start=true&loop=true&delayms=2000';
        iframe.frameBorder = '0';
        iframe.allowFullscreen = 'true';
        iframe.className = 'gallery';
        div.append(iframe);
        // make pressing .button.cta trigger a click on #cid_4
        document.querySelector(".button.cta").addEventListener("click", () => {
            ctaElement.click();
        })
        // make pressing .button.live scroll to photos
        document.querySelector(".button.live").addEventListener("click", () => {
            document.querySelector("iframe.gallery").scrollIntoView({ behavior: "smooth" });
        })

        // add full video under rebbe video
        const video = `<div style="padding:56.25% 0 0 0;position:relative;"><iframe src="https://player.vimeo.com/video/882485673?badge=0&amp;autopause=0&amp;quality_selector=1&amp;player_id=0&amp;app_id=58479" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" style="position:absolute;top:0;left:0;width:100%;height:100%;" title="IDF Unity Torah"></iframe></div><script src="https://player.vimeo.com/api/player.js"></script>`;
        document.querySelector("#full-video").innerHTML = video;
    }
    // once the page is loaded, hide the back to site bar
    window.addEventListener("DOMContentLoaded", () => {
        document.querySelector(".cco_templateless_template").remove();
        pageFunctions();
    })
}