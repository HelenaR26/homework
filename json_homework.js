//commonjs style import
import fs from 'fs-extra';
import fetch from 'node-fetch'
import log4js from 'log4js'

const logger = log4js.getLogger()
logger.level = 'debug'

// //ESM import
// import fs from 'fs-extra'

// let arrN = []
// async function readJsonAndWriteName (path='./response_1694287579730.json') {
//     let jsonData2 = await fs.readJson(path)
//     for (let element of jsonData2.data) {
//         arrN.push(element['first_name'])
//     }
//     console.log(arrN)
//     await fs.writeJson('names.json', JSON.stringify(arrN))
// }

// readJsonAndWriteName('./response_1694287579730.json')

// async function getDataRegres() {
//     let response = await fetch('https://reqres.in/api/users?page=2&per_page=5')
//     let data = await response.json()
//     await fs.writeFile('responseRegres.json', JSON.stringify(data))
// }
// // getDataRegres()

// // readJsonAndWriteName('responseRegres.json')

const dataUser = {
    "username": "Frank",
    "email": "frank@mail.com",
    "password": "54Tr90i30o3o@"
  }
async function createUser(data) {
    try {
        const response = await fetch('https://reqres.in/api/user/register',
        {method: 'POST',
        body: JSON.stringify(data),
        headers: {'Content-Type': 'application/json'}
        })
       logger.debug('request was sent successfully')
       logger.trace("Entering cheese testing");
       logger.info("Cheese is Comté.");
       logger.warn("Cheese is quite smelly.");
       logger.error("Cheese is too ripe!");
       logger.fatal("Cheese was breeding ground for listeria.");
        const dataRStatusCode = await response.status
        const responsed = await response.json()
        logger.debug(dataRStatusCode)
        console.log(dataRStatusCode)
        console.log(responsed)
    } catch(error) {
        console.log(error)
    }
}

createUser(dataUser)