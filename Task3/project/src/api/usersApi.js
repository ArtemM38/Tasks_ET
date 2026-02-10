export async function loadUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error("Ошибка сервера");
        }

        let users = await response.json();

        return users;

    } catch (error) {
        throw error;
    }


}
