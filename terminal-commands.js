const fs = require('fs');

module.exports.ls = () => {
  fs.readdir('./', (err, files) => {
    const filesToString = files.reduce((acc, file) => {
      return `${acc} ${file}`;
    }, '');

    console.log(filesToString);
  });
};

module.exports.touch = (fileName) => {
  fs.writeFile(fileName, {recursive: false}, (err) => {
    if (err) throw err;
  });
  console.log(`${fileName} created!`)
};

module.exports.mkdir = (dirName) => {
  fs.mkdir(dirName, (err) => {
    if (err) throw err;
  });
  console.log(`${dirName} made!`);
};
