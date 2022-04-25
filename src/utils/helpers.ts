export const overflowHidden = (condition: boolean) => {
    document.body.style.overflow = condition ? 'hidden' : 'auto'
}