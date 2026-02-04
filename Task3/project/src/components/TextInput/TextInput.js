export function TextInput({ label, placeholder, value = "", onInput }) {
    const div = document.createElement('div');

    const labelEl = document.createElement('label');
    labelEl.textContent = label;

    const input = document.createElement('input');
    input.placeholder = placeholder;
    input.value = value;

    input.addEventListener("input", (e) => {
        onInput(e.target.value);
    });

    labelEl.appendChild(input);
    div.appendChild(labelEl);

    return div;
}
