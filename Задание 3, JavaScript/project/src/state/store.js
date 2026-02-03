const state = {
    users: [],
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

function setError(error) {
    state.error = error;
    state.users = [];
    notify();
}

export {
    state,
    setLoading,
    setUsers,
    setError
};