import { randomNumber } from "@mansartesteban/utils"

import "./style.css"

const sleep = ms => new Promise(r => setTimeout(r, ms))

const defaultOptions = {
    displayDuration: 2000
}

export default (wordList = [], options = {}) => {

    options = { ...defaultOptions, ...options }

    let displayedText = ""

    const animate = async (container, index = 0) => {
        container.classList.toggle("typing-animation__writer", true)
        container.classList.toggle("typing-animation__typing", true)

        let word = [...wordList[index]]

        for (let i = 0; i < word.length; i++) {
            displayedText += word[i]
            container.innerText = displayedText
            await sleep(randomNumber(50, 150))
        }

        container.classList.toggle("typing-animation__typing", false)
        await sleep(options.displayDuration)

        container.classList.toggle("typing-animation__typing", true)
        while (displayedText.length > 0) {
            displayedText = displayedText.substr(0, displayedText.length - 1)
            container.innerText = displayedText
            await sleep(randomNumber(50, 150))
        }

        animate(container, (index + 1) % wordList.length)
    }
    return {
        animate
    }
}