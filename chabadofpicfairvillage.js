const pageURL = window.location.pathname;

if (pageURL.includes(4970020) && pageURL.includes('highholidays')) {
    const introWrapper = document.querySelector('.intro-wrapper .col');

    if (introWrapper) {
        introWrapper.innerHTML = `
            <img src="/media/images/1289/fzPS12894239.jpeg" style="max-width: min(500px, 100%); margin: auto; display: block;" class="mobile-only" alt="" />

<h1 style="font-weight: bold;">Support Our Jewish Community during the High Holidays!</h1>

<p class="description">This past year has been challenging for Jewish communities worldwide. People in our own community are facing difficulties, feeling isolated, misunderstood, and even attacked as antisemitism has spiked globally. Since October 7, more people than ever are seeking a place where they can engage, connect, and rediscover their roots in a welcoming environment.</p>

<p class="description"><b>You can help! You can give them that space.</b> You can provide a sanctuary of comfort, connection, and Jewish pride during the High Holidays and all year long! Your contribution will help create a warm, welcoming space for everyone in our community.</p>

<h2><b>Add Your Name to the Caring Wall!</b></h2>

<p class="description">In a beautiful display of care and unity, your name(s) will be listed on our <b>Caring Wall</b>, a special High Holidays donor display that demonstrates our community's commitment to one another. (Requests for anonymity will be respected.)</p>

<p class="description">Every gift counts. Whether you can give $360, $500, or more, your support will have a direct and lasting impact on the people in our community.</p>

<p class="description"><b>Together, we can make this year’s High Holidays a time of joy, unity, and spiritual renewal for our community.</b></p>
          `;
    }

    const amountsBox = document.querySelector('.amounts');
    if (amountsBox) {
        amountsBox.innerHTML = `
            <button class="js-amounts-button" data-amount="180">$180</button>
            <button class="js-amounts-button" data-amount="360">$360</button>
            <button class="js-amounts-button" data-amount="500">$500</button>
            <button class="js-amounts-button" data-amount="1800">$1,800</button>
            <button class="js-amounts-button" data-amount="3600">$3,600</button>
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

    const amountsButtons = document.querySelectorAll(".js-amounts-button");
    const nextButton = document.querySelector("button.next-button");
    const pageTwo = document.querySelector("h1");

    function scrollToPageTwo() {
        pageTwo.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    nextButton.addEventListener('click', function () {
        setTimeout(scrollToPageTwo, 800);
    });

    amountsButtons.forEach(function (amountsButton) {
        amountsButton.addEventListener('click', function () {
            setTimeout(scrollToPageTwo, 400);
        });
    });
};