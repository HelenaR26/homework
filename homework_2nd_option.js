const fs = require('fs');

function readAndSaveNamesFromJsonFile(filePath) {
  try {
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf-8'));

    const namesArray = [];

    jsonData.data.forEach((item) => {
      const fullName = `${item.first_name} ${item.last_name}`;
      namesArray.push(fullName);
    });

    return namesArray;
  } catch (error) {
    console.error('Error while reading or parsing JSON file:', error);
    return [];
  }
}


const filePath = './response_1694287579730.json';
const names = readAndSaveNamesFromJsonFile(filePath);
console.log('Names:', names);
