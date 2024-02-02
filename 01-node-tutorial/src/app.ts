import { readFile } from 'fs'
import path from 'path'

const getText = (path: string) => {
    return new Promise((resolve, reject) => {
        readFile(path, 'utf8', (err, data) => {
            if (err) {
                reject(err)
            } else {
                resolve(data)
            }
        })
    })
}

// getText(path.join(__dirname, '../content/first.txt'))
// .then(result => console.log(result))
// .catch((err) => console.log(err))

const start = async () => {
    try {
    const first = await getText(path.join(__dirname, '../content/first.txt'))
    const second = await getText(path.join(__dirname, '../content/second.txt'))
    console.log(first, second)
    } catch (error) {
        console.log(error)
    }
}

start()