const path = require('path')
const fs = require('fs-extra')
const unflatten = require('flat').unflatten
const { extractSheets } = require('spreadsheet-to-json')

extractSheets(
  {
    spreadsheetKey: '1z52Kdt_Whwo4Kqp1lR087mvvKnLUGEzNIhWkWKkcKM8',
    credentials: require('./auth.json'),
    sheetsToExtract: ['home'] // excel 分頁
  },
  (err, data) => {
    if (err) { throw err }
    const read = [...data.home] // 可新增多個分頁
    const result = {}
    const files = []

    for (const key in read[0]) {
      if (key !== 'key') {
        files.push(key)
        result[key] = {}
      }
    }
    read.forEach((el) => {
      for (const file of files) {
        result[file][el.key] = el[file] ? el[file] : ''
      }
    })
    for (const fileName of files) {
      fs.ensureDirSync(
        path.dirname(
          path.resolve(__dirname, '../locales', `${fileName}.json`)
        )
      )
      fs.writeJSONSync(
        path.resolve(__dirname, '../locales', `${fileName}.json`),
        unflatten(result[fileName], { object: true }),
        { spaces: 2 }
      )
    }
  }
)
