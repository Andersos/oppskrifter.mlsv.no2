/*
const axios = require("axios");
const sheetID = "11pWO1TTTL7Myl0X6OooKboFsiCqYzfUU1568jpMRwL0";
const googleSheetUrl = `https://spreadsheets.google.com/feeds/list/${sheetID}/od6/public/values?alt=json`;


// Må endres til -> 'https://sheets.googleapis.com/v4/spreadsheets/${sheetID}/values/1'?alt=json&key='
module.exports = () => {
  return new Promise((resolve, reject) => {
    console.log(`Requesting data from ${googleSheetUrl}`);
    const data = [];
    axios
      .get(googleSheetUrl)
      .then((response) => {
        response.data.feed.entry.forEach((item) => {
          data.push(item.gsx$id.$t);
        });

        // resolve the promise and return the data
        resolve(data);
      })

      // uh-oh. Handle any errrors we might encounter
      .catch((error) => {
        console.log("Error :", error);
        reject(error);
      });
  });
};
*/
