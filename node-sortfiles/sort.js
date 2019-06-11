var fs = require('fs'),
  path = require('path'),
  folderName = process.argv.slice(2), // передаем название папки которую нужно сортировать
  sortedFolder = path.join(__dirname, './sorted'), // путь sorted папки  
  dir = path.join(__dirname, folderName.toString()), // сохраняем текущую директорию 
  files = fs.readdirSync(dir); // считываем все файлы из текущего каталога
// console.log(dir);

if (!fs.existsSync('./sorted')) {
  fs.mkdirSync('./sorted');
}
// console.log(sortedFolder);

const readDir = (dir, level) => {
  const files = fs.readdirSync(dir);

  files.forEach(item => {
    let localDir = path.join(dir, item);
    console.log('localDir', localDir);
    let state = fs.statSync(localDir);
    if (state.isDirectory()) {
      // console.log('DIR: ' + item);
      readDir(localDir, level + 1);

    } else {
      // console.log('File: ' + item);
      makeAndCopy(localDir, item);
    }
  })
}

function makeAndCopy(item, fileName) {
  var firstLetter = fileName.charAt(0).toUpperCase(),
    newFolder = path.join(sortedFolder, firstLetter),
    fileForCopy = path.join(newFolder, fileName);
  // console.log('item', item);

  if (!fs.existsSync(newFolder)) {
    fs.mkdirSync(newFolder);
  }

  console.log('item', item)
  console.log(fileForCopy)
  fs.copyFile(item, fileForCopy, (err) => {

    if (err) console.log('err');
    console.log('file ' + item);
  });


  // console.log('new folder', newFolder);
  // console.log('fileForCopy', fileForCopy);

}

readDir(dir, 0);