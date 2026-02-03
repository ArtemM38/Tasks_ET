import { setLoading, setUsers, setError } from "./store.js";
import { loadUsers } from "../api/usersApi.js";

export async function fetchUsers() {

    setLoading(true)

    try {

        const users = await loadUsers();
        setUsers(users);

    } catch (error) {

        setError(error.message)

    } finally {

        setLoading(false)

    }
}