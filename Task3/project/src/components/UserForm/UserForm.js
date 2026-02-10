import { TextInput } from "../TextInput/TextInput.js";
import { Button } from "../Button/Button.js";


export function UserForm({ onAdd }) {
    const form = document.createElement('div');

    const nameInput = TextInput({
        label: "Имя",
        placeholder: "Введите имя",
        onInput: () => {}
    });

    const emailInput = TextInput({
        label: "Электронная почта",
        placeholder: "Введите электронную почту",
        onInput: () => {}
    });

    const addButton = Button({
        text: "Добавить",
        onClick: () => {
            const name = nameInput.querySelector('input').value.trim();
            const email = emailInput.querySelector('input').value.trim();

            if (!name || !email){
                alert("Пожалуйста, заполните все поля");
                return;
            }

            onAdd({ name, email });

            nameInput.querySelector('input').value = "";
            emailInput.querySelector('input').value = "";
        }
    });

    form.appendChild(nameInput);
    form.appendChild(emailInput);
    form.appendChild(addButton);

    return form;

}