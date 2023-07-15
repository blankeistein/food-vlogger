const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const target = path.resolve(__dirname, 'src/public/images');
const destination = path.resolve(__dirname, 'dist/assets/images');

if (!fs.existsSync(destination)) {
  fs.mkdirSync(destination, { recursive: true });
}

const scanFile = (targetDir, nestedDir = '') => {
  const imageFiles = [];
  fs.readdirSync(targetDir).forEach((item) => {
    const currentDirectory = path.resolve(targetDir, item);
    if (fs.lstatSync(currentDirectory).isFile()) {
      imageFiles.push(path.join(nestedDir, item));
    } else {
      imageFiles.push(...scanFile(currentDirectory, item));
    }
  });

  return imageFiles;
};

scanFile(target)
  .forEach((image) => {
    if (image.match(/([^\s]+\.(jpe?g|png))$/i)) {
      const saveDirectory = path.resolve(destination, path.dirname(image));
      if (!fs.existsSync(saveDirectory)) {
        fs.mkdirSync(saveDirectory, { recursive: true });
      }

      sharp(`${target}/${image}`)
        .resize(800)
        .toFormat('webp')
        .toFile(path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}-large.webp`,
        ));

      sharp(`${target}/${image}`)
        .resize(480)
        .toFormat('webp')
        .toFile(path.resolve(
          __dirname,
          `${destination}/${image.split('.').slice(0, -1).join('.')}-small.webp`,
        ));
    }
  });
