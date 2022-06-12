// TODO: import module bila dibutuhkan di sini
const fs = require("fs");

// ! JANGAN DIMODIFIKASI
let file1 = "./data1.json";
let file2 = "./data2.json";
let file3 = "./data3.json";

// ! JANGAN DIMODIFIKASI
let modifyFile1 = (val) => {
  file1 = val;
};
let modifyFile2 = (val) => {
  file2 = val;
};
let modifyFile3 = (val) => {
  file3 = val;
};

// TODO: Kerjakan bacaData
// gunakan variabel file1, file2, dan file3

const processData = (datas) => {
  const extract = JSON.parse(datas);
  if (extract.message !== undefined) {
    const letSplit = extract.message.split(" ");
    return letSplit[1];
  } else if (extract[0].message !== undefined) {
    const letSplit = extract[0].message.split(" ");
    return letSplit[1];
  } else if (extract[0].data.message !== undefined) {
    const letSplit = extract[0].data.message.split(" ");
    return letSplit[1];
  }
};

const bacaData = (fnCallback) => {
  let files = [file1, file2, file3];
  let finalResult = [];
  // files.forEach((readFiles, index) => {
  //   fs.readFile(
  //     readFiles,
  //     { encoding: 'utf8' },
  //     (err, data) => {
  //       if (err) {
  //         fnCallback(err, null)
  //       } else {
  //         const result = processData(data)
  //         finalResult.push(result)
  //         if (index == 2) {
  //           fnCallback(err, finalResult)
  //         }
  //       }
  //     })
  // })
  fs.readFile(file1, { encoding: "utf8" }, (err, data) => {
    if (err) {
      fnCallback(err, null);
    } else {
      const result = processData(data);
      finalResult.push(result);
      //fnCallback(err, finalResult);

      fs.readFile(file2, { encoding: "utf8" }, (err, data) => {
        if (err) {
          fnCallback(err, null);
        } else {
          const result = processData(data);
          finalResult.push(result);
          //fnCallback(err, finalResult);

          fs.readFile(file3, { encoding: "utf8" }, (err, data) => {
            if (err) {
              fnCallback(err, null);
            } else {
              const result = processData(data);
              finalResult.push(result);
              fnCallback(err, finalResult);
            }
          });
        }
      });
    }
  });
};

// ! JANGAN DIMODIFIKASI
module.exports = {
  modifyFile1,
  modifyFile2,
  modifyFile3,
  bacaData,
};
