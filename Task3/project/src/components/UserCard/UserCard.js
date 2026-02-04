import { Button } from "../Button/Button.js";

export function UserCard({ user, onDelete}) {
    const card = document.createElement('div');
    
    const name = document.createElement('div');
    name.textContent = user.name;

    const email = document.createElement('div');
    email.textContent = user.email;

    const deleteBtn = Button({
        text: "Удалить",
        onClick: () => onDelete(user.id)
    });

    card.appendChild(name);
    card.appendChild(email);
    card.appendChild(deleteBtn);

    return card;
}