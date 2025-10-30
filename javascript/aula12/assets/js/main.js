function meuEscopo() {
    const elements = document.querySelectorAll('.paragrafos')
    const styles = getComputedStyle(document.body)
    const backgroundColor = styles.backgroundColor

    for (let element of elements) {
        element.style.backgroundColor = backgroundColor
        element.style.color = "#FFF"
    }
}

meuEscopo()