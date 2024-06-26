const { resolve } = require("styled-jsx/css")

const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export default sleep;