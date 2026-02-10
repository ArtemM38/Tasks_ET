import { UserCard } from "../UserCard/UserCard.js";

export function UserList({users, onDelete}){

    const ul = document.createElement('ul');

    users.forEach((user) => {
        const li = document.createElement('li');

        const card = UserCard({
            user,
            onDelete
        });

        li.appendChild(card);
        ul.appendChild(li);
    });

    return ul;
}
