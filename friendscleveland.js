function initDonatePage() {
    const isDonatePage = /4970020|Donate\.htm|donate\.asp/.test(window.location.href);
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
                document.querySelector('.js-custom-amount').value = button.getAttribute('data-value');
                document.querySelector('.js-next-button').click();
            });
        });

        function initFloatingLabel() {
            document.querySelectorAll('.js-field-wrapper').forEach(wrapper => {
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

        function updateLabels() {
            document.querySelectorAll('.js-field-wrapper input, .js-field-wrapper textarea, .js-field-wrapper select')
                .forEach(el => el.closest('.js-field-wrapper').classList.toggle('has-value', el.value.length > 0));
        }

        const styles = `
      #notifyModal { display: none; position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%);
          padding: 20px; background-color: #e3d9da; border: 1px solid #ccc;
          box-shadow: 0 0 0 2000px rgba(0,0,0,0.4); z-index: 1000; width: min(600px, 100%); }
      .button-like-div { display: inline-block; padding: 10px 20px; margin-right: 5px; background-color: #317cb8;
          color: #fff; text-align: center; cursor: pointer; border-radius: 40px; user-select: none; }
      .button-like-div:hover { background-color: #0056b3; }
      .notify-link { text-decoration: underline; cursor: pointer; }
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
            const notesRow = document.querySelector('#notes').closest('.row');
            notesRow.insertAdjacentElement('afterend', createElement('div', { class: 'row' }, [
                createElement('div', { class: 'col flex-1' }, [
                    createElement('span', { class: 'notify-link' }, [
                        createTextElement('Notify someone about this dedication?')
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

            document.querySelector('.content-box.screen-2').appendChild(notifyModal);
            const formElement = document.querySelector('#donate-wrapper main form');
            const xNotesInput = createElement('input', { type: 'hidden', name: 'x_notes' });
            formElement.appendChild(xNotesInput);
        }

        function setupEventListeners() {
            const notifyLink = document.querySelector('.notify-link');
            const modal = document.getElementById('notifyModal');

            notifyLink.addEventListener('click', () => {
                modal.style.display = 'block';
            });

            document.getElementById('saveNotify').addEventListener('click', () => {
                const fields = ['notifyName', 'notifyAddress'].map(id => document.getElementById(id).value);
                if (fields.every(v => !v)) {
                    // Show error
                    alert('Please enter name and address');
                    return;
                }

                const xNotesInput = document.querySelector('input[name="x_notes"]');
                xNotesInput.value = ` Notify: ${fields[0]} (${fields[1]})`;
                modal.style.display = 'none';
                notifyLink.parentElement.innerHTML = '<i class="fa fa-check-circle"></i> <span class="notify-link">Notification Saved</span>';
            });

            document.getElementById('cancelNotify').addEventListener('click', () => {
                modal.style.display = 'none';
            });

            window.addEventListener('click', event => {
                if (event.target === modal) modal.style.display = 'none';
            });

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
            newRow.classList.add("row", "new-row");

            const col = document.createElement("div");
            col.classList.add("col", "flex-1");

            const fieldWrapper = document.createElement("div");
            fieldWrapper.classList.add("field-wrapper", "js-field-wrapper", "no-value");

            const label = document.createElement("label");
            label.setAttribute("for", "recurrences");
            label.innerHTML = "Number of Months<span class='req'>*</span>";

            const input = document.createElement("input");
            input.setAttribute("id", "recurrences");
            input.setAttribute("name", "x_recurrences");
            input.setAttribute("type", "text");
            input.classList.add("active", "recurrences-input");

            fieldWrapper.appendChild(label);
            fieldWrapper.appendChild(input);
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
        const notesLabel = document.querySelector("label[for=notes]");

        if (recurringBtn && notesLabel) {
            const newRow = createRecurrencesRow();
            notesLabel.closest(".content-box").insertBefore(newRow, notesLabel.closest(".row"));
            newRow.style.display = "none";

            recurringBtn.addEventListener("click", () => toggleRecurrencesRow(newRow, true));
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
