export function Button({ text, onClick }) {
    const button = document.createElement('button');

    button.textContent = text;

    button.addEventListener('click', () => {
        if (onClick){
        onClick();
        }
    })

    return button;
}