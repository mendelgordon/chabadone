const pageURL = window.location.pathname;

if (pageURL.includes(4970020) && pageURL.includes('highholidays')) {
    document.addEventListener('DOMContentLoaded', function () {
        const introWrapper = document.querySelector('.intro-wrapper .col');

        if (introWrapper) {
            introWrapper.innerHTML = `
            <img src="/media/images/1289/CchY12894173.jpeg" style="max-width: 500px; margin: auto; display: block;" class="mobile-only" alt="" />
            <h1 style="font-weight: bold;">Support Our Jewish Community during the High Holidays!</h1>
            <p class="description">
              It’s been a difficult year for Jewish communities all over the world. People in our own community face challenges. Many feeling isolated and misunderstood by their friends, neighbors, and peers. The polarizing charged environment can often make one feel that there are many who are increasingly hostile toward their Jewish identity.
            </p>
            <p class="description">
              But your gift can change that. You can provide a sanctuary of comfort, connection, and Jewish pride during the High Holidays and all year long!
            </p>
            <p class="description">
              Your donation to our High Holidays Campaign will ensure:
            </p>
            <ul class="description">
                <li>A welcoming place to celebrate.</li>
                <li>A supportive community to be part of and to lean on.</li>
                <li>An opportunity to grow their Jewish pride in the face of uncertainty.</li>
            </ul>
            <p class="description">
              Your generosity will help create an environment where people feel safe, cherished, and inspired.
            </p>
            <p class="description">
              Your name(s) will be listed on our Caring Wall, a special display that brings our community together. (Donors who wish to remain anonymous can do so, but still contribute to the sense of community.)
            </p>
          `;
        }

        const submitButton = document.querySelector('.js-donate-button');

        if (submitButton) {
            const newText = document.createElement('p');
            newText.className = 'submission-additional-text';
            newText.innerHTML = `
        Every gift counts. Whether you can give $360, $540, or more, your support will have a direct and lasting impact on the people in our community.<br/><br/>
        Together, we can make this year’s High Holidays a time of joy, unity, and spiritual renewal for our community.<br/><br/>
        Thank you for standing with us and helping to keep Jewish traditions alive and vibrant!
      `;

            submitButton.parentElement.appendChild(newText);
        }

        const container = document.querySelector('.screen-1');
        if (container) {
            container.insertAdjacentHTML('afterbegin', `<aside class="image-bg"></aside>`);
        }
    });

    const amountsButtons = document.querySelectorAll(".js-amounts-button");
    const nextButton = document.querySelector("button.next-button");
    const pageTwo = document.querySelector("h1");

    const scrollIntoView = function (element) {
        if (element === null) {
            setTimeout(function () {
                scrollIntoView(element);
            }, 100);
            return;
        }
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
            inline: 'nearest'
        });
    };

    nextButton.addEventListener('click', function () {
        scrollIntoView(pageTwo);
    });
    amountsButtons.forEach(function (amountsButton) {
        amountsButton.addEventListener('click', function () {
            scrollIntoView(pageTwo);
        });
    });
};