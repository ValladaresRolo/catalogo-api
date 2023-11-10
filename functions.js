const fs = require("fs")
const { stringify } = require("querystring")
const readData = () => {
    try {
        const data = fs.readFileSync("./db.json")
        return JSON.parse(data)
    } catch (error) {

    }
}

const writeData = (data) => {
    try {
        fs.writeFileSync("./db.json", JSON.stringify(data))
    } catch (error) {
        console.log(error)
    }
}

module.exports = { readData, writeData }