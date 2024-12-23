const isMemorialPage = window.location.href.includes('embed=true');
if (isMemorialPage) {
    const styles = '<link rel="Stylesheet" href="https://chabad.netlify.app/friendscleveland/memorial.css">';
    document.head.insertAdjacentHTML('beforeend', styles);
}

function initDonatePage() {
    const isDonatePage = /4970020|donate\.htm|donate\.asp/i.test(window.location.href);
    if (!isDonatePage) return;

    const amounts = [
        { value: "36", label: "Gift of Inclusion" },
        { value: "72", label: "Gift of Friendship" },
        { value: "100", label: "Gift of Hope" },
        { value: "180", label: "Gift of Acceptance" },
        { value: "500", label: "Gift of Comfort" },
        { value: "1000", label: "Gift of Love" }
    ];

    window.addEventListener('load', () => {
        const amountsContainer = document.querySelector('.amounts');
        if (!amountsContainer) return;

        amountsContainer.innerHTML = amounts.map(({ value, label }) =>
            `<button type="button" class="js-amounts-button" data-value="${value}">
                <div>
                    <div class="amount-value">$${value}</div>
                    <div class="amount-label">${label}</div>
                </div>
            </button>`
        ).join('') +
            `<style>
                .amount-value {
                    font-weight: 600;
                }
                .amount-label {
                    font-size: 12px;
                }
            </style>`;

        amountsContainer.querySelectorAll('.js-amounts-button').forEach(button => {
            button.addEventListener('click', () => {
                // @ts-ignore
                document.querySelector('.js-custom-amount').value = button.getAttribute('data-value');
                // @ts-ignore
                document.querySelector('.js-next-button').click();
            });
        });

        function initFloatingLabel() {
            document.querySelectorAll('.js-field-wrapper').forEach(wrapper => {
                // @ts-ignore
                wrapper.addEventListener('click', () => wrapper.querySelector('input,textarea,select')?.focus());
                wrapper.addEventListener('focusin', () => {
                    document.querySelectorAll('.js-field-wrapper.focused').forEach(el => el.classList.remove('focused'));
                    wrapper.classList.add('focused');
                });
                wrapper.querySelectorAll('input,textarea,select').forEach(input => {
                    input.addEventListener('blur', () => {
                        // @ts-ignore
                        input.closest('.js-field-wrapper').classList.remove('focused');
                        updateLabels();
                    });
                    input.addEventListener('change', updateLabels);
                });
            });
            updateLabels();
        }

        function updateLabels() {
            document.querySelectorAll('.js-field-wrapper input, .js-field-wrapper textarea, .js-field-wrapper select')
                // @ts-ignore
                .forEach(el => el.closest('.js-field-wrapper').classList.toggle('has-value', el.value.length > 0));
        }

        const styles = `
      #notifyModal { display: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
          padding: 20px; background-color: #e3d9da; border: 1px solid #ccc;
          box-shadow: 0 0 0 2000px rgba(0,0,0,0.4); z-index: 1000; width: min(600px, 100%); }
      .button-like-div { display: inline-block; padding: 10px 20px; margin-right: 5px; background-color: #317cb8;
          color: #fff; text-align: center; cursor: pointer; border-radius: 40px; user-select: none; }
      .button-like-div:hover { background-color: #0056b3; }
      .notify-link { text-decoration: underline; cursor: pointer; font-weight: 600; font-size: 110%; color: #0000ee; }
      .notify-link:hover { text-decoration: none; }
  `;

        function addStyles() {
            const styleElement = document.createElement('style');
            styleElement.innerHTML = styles;
            document.head.appendChild(styleElement);
        }

        function createElement(type, attributes = {}, children = []) {
            const element = document.createElement(type);
            Object.keys(attributes).forEach(key => element.setAttribute(key, attributes[key]));
            children.forEach(child => element.appendChild(child));
            return element;
        }

        function createTextElement(text) {
            return document.createTextNode(text);
        }

        function renderUI() {
            // @ts-ignore
            const notesRow = document.querySelector('#notes').closest('.row');
            // @ts-ignore
            notesRow.insertAdjacentElement('beforebegin', createElement('div', { class: 'row' }, [
                createElement('div', { class: 'col flex-1' }, [
                    createElement('span', { class: 'notify-link' }, [
                        createTextElement('Click here to mail an acknowledgement card for this donation.')
                    ])
                ])
            ]));

            const notifyModal = createElement('div', { id: 'notifyModal' }, [
                createElement('h1', {}, [createTextElement('Please Notify')]),

                // Notify Name
                createElement('div', { class: 'row new-row' }, [
                    createElement('div', { class: 'col flex-1' }, [
                        createElement('div', { class: 'field-wrapper js-field-wrapper no-value' }, [
                            createElement('label', { for: 'notifyName' }, [createTextElement('Name')]),
                            createElement('input', { type: 'text', class: 'form-control active', id: 'notifyName' })
                        ])
                    ])
                ]),

                // Notify Address
                createElement('div', { class: 'row' }, [
                    createElement('div', { class: 'col flex-1' }, [
                        createElement('div', { class: 'field-wrapper js-field-wrapper no-value' }, [
                            createElement('label', { for: 'notifyAddress' }, [createTextElement('Mailing Address')]),
                            createElement('input', { type: 'text', class: 'form-control active', id: 'notifyAddress' })
                        ])
                    ])
                ]),

                // Save and Cancel buttons
                createElement('div', { style: 'text-align: right;' }, [
                    createElement('div', { id: 'saveNotify', class: 'button-like-div' }, [createTextElement('Save')]),
                    createElement('div', { id: 'cancelNotify', class: 'button-like-div' }, [createTextElement('Cancel')])
                ])
            ]);

            // @ts-ignore
            document.querySelector('.content-box.screen-2').appendChild(notifyModal);
            const formElement = document.querySelector('#donate-wrapper main form');
            const xNotesInput = createElement('input', { type: 'hidden', name: 'x_notes' });
            // @ts-ignore
            formElement.appendChild(xNotesInput);
        }

        function setupEventListeners() {
            const notifyLink = document.querySelector('.notify-link');
            const modal = document.getElementById('notifyModal');

            // @ts-ignore
            notifyLink.addEventListener('click', () => {
                // @ts-ignore
                modal.style.display = 'block';
            });

            // @ts-ignore
            document.getElementById('saveNotify').addEventListener('click', () => {
                // @ts-ignore
                const fields = ['notifyName', 'notifyAddress'].map(id => document.getElementById(id).value);
                if (fields.every(v => !v)) {
                    // Show error
                    alert('Please enter name and address');
                    return;
                }

                const xNotesInput = document.querySelector('input[name="x_notes"]');
                // @ts-ignore
                xNotesInput.value = ` Notify: ${fields[0]} (${fields[1]})`;
                // @ts-ignore
                modal.style.display = 'none';
                // @ts-ignore
                notifyLink.parentElement.innerHTML = '<i class="fa fa-check-circle"></i> <span class="notify-link">Notification Saved</span>';
            });

            // @ts-ignore
            document.getElementById('cancelNotify').addEventListener('click', () => {
                // @ts-ignore
                modal.style.display = 'none';
            });

            window.addEventListener('click', event => {
                // @ts-ignore
                if (event.target === modal) modal.style.display = 'none';
            });

            // @ts-ignore
            modal.addEventListener('click', event => event.stopPropagation());
        }

        function initFloatingLabelForElement(element) {
            const fieldWrappers = element.querySelectorAll('.js-field-wrapper');

            fieldWrappers.forEach(wrapper => {
                wrapper.addEventListener('click', () => wrapper.querySelector('input,textarea,select')?.focus());
                wrapper.addEventListener('focusin', () => {
                    document.querySelectorAll('.js-field-wrapper.focused').forEach(el => el.classList.remove('focused'));
                    wrapper.classList.add('focused');
                });
                wrapper.querySelectorAll('input,textarea,select').forEach(input => {
                    input.addEventListener('blur', () => {
                        input.closest('.js-field-wrapper').classList.remove('focused');
                        updateLabels();
                    });
                    input.addEventListener('change', updateLabels);
                });
            });

            updateLabels();
        }

        function createRecurrencesRow() {
            const newRow = document.createElement("div");
            newRow.classList.add("row");

            const col = document.createElement("div");
            col.classList.add("col", "flex-1");

            const fieldWrapper = document.createElement("div");
            fieldWrapper.classList.add("field-wrapper", "js-field-wrapper", "no-value");

            const label = document.createElement("label");
            label.setAttribute("for", "recurrences");
            label.innerHTML = "Number of Months<span class='req'>*</span>";

            const select = document.createElement("select");
            select.setAttribute("id", "recurrences");
            select.setAttribute("name", "x_recurrences");
            select.classList.add("active", "recurrences-input");

            const options = [
                "", "Until I cancel", "1 Month", "2 Months", "3 Months", "4 Months", "5 Months",
                "6 Months", "7 Months", "8 Months", "9 Months", "10 Months", "11 Months",
                "12 Months", "13 Months", "14 Months", "15 Months", "16 Months", "17 Months",
                "18 Months", "19 Months", "20 Months", "21 Months", "22 Months", "23 Months",
                "24 Months"
            ];

            options.forEach(value => {
                const option = document.createElement("option");
                option.value = value;
                option.textContent = value;
                select.appendChild(option);
            });

            fieldWrapper.appendChild(label);
            fieldWrapper.appendChild(select);
            col.appendChild(fieldWrapper);
            newRow.appendChild(col);

            initFloatingLabelForElement(newRow);

            return newRow;
        }

        function toggleRecurrencesRow(row, show) {
            const recurrencesInput = row.querySelector(".recurrences-input");
            row.style.display = show ? "flex" : "none";
            recurrencesInput.required = show;
            if (!show) recurrencesInput.value = "";
        }

        const recurringBtn = document.querySelector("#frequency-toggle .monthly");
        const oneTimeBtn = document.querySelector("#frequency-toggle .one-time");
        const paymentSection = document.querySelector(".row.pay-with");

        if (recurringBtn && paymentSection) {
            const newRow = createRecurrencesRow();
            // @ts-ignore
            paymentSection.parentElement.insertBefore(newRow, paymentSection);
            newRow.style.display = "none";

            recurringBtn.addEventListener("click", () => toggleRecurrencesRow(newRow, true));
            // @ts-ignore
            oneTimeBtn.addEventListener("click", () => toggleRecurrencesRow(newRow, false));
        }

        addStyles();
        renderUI();
        setupEventListeners();
        initFloatingLabel();
    });
}

if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", initDonatePage);
} else {
    initDonatePage();
}
