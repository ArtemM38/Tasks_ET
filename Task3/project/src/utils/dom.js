import { UserList } from "../components/UserList/UserList.js";
import { setSearch, deleteUser, addUser } from "../state/store.js";
import { TextInput } from "../components/TextInput/TextInput.js";
import { UserForm } from "../components/UserForm/UserForm.js";

const app = document.getElementById("app");

export function renderApp(state){

    app.innerHTML = "";

    if (state.loading){
        app.textContent = "Загрузка...";
        return;
    }

    if (state.error) {
        app.textContent = `Ошибка ${state.error}`;
        return;
    }
    
    const userForm = UserForm({
        onAdd: addUser
    });
    app.appendChild(userForm);

    const searchInput = TextInput({
        label: "Поиск",
        placeholder: "Введите имя",
        value: state.search,
        onInput: (value) => {
            setSearch(value);
        }
    });

    console.log("RENDER, search =", state.search);

    app.appendChild(searchInput);
    
    const filteredUsers = state.users.filter(user => 
        user.name.toLowerCase().includes(state.search.toLowerCase())
    );

    if (filteredUsers.length === 0){
        const empty = document.createElement("p");
        empty.textContent = "Нет данных";
        app.appendChild(empty);
        return; 
    }

    const userList = UserList({
        users: filteredUsers,
        onDelete: deleteUser
    });

    app.appendChild(userList);
}