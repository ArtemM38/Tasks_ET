const state = {
    users: [],
    search: "",
    loading: false,
    error: null,
};

const listeners = [];

function notify() {
    listeners.forEach((listener) => listener(state));
}

function subscribe(listener) {
    listeners.push(listener);
}

function setLoading(isLoading) {
    state.loading = isLoading;
    notify();
}

function setUsers(users) {
    state.users = users;
    state.error = null;
    notify();
}

function deleteUser(id){
    state.users = state.users.filter(user => user.id !== id);
    notify();
}

function setError(error) {
    state.error = error;
    state.users = [];
    notify();
}

function setSearch(value){
    state.search = value;
    notify();
}

function addUser(user){
    const newId = state.users.length > 0
        ? Math.max( ...state.users.map(u => u.id)) + 1
        : 1;

    state.users.push({id: newId, ...user });
    notify();
}

export {
    state,
    setLoading,
    setUsers,
    setError,
    deleteUser,
    setSearch,
    subscribe,
    addUser
};