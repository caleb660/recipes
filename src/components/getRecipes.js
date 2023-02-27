import {GoogleSpreadsheet} from "google-spreadsheet";
const creds = require('../client_secret.json');

export const accessSpreadsheet = async () => {
    console.log("We are accessing the spreadsheet");
    const doc = new GoogleSpreadsheet('11C_U7Xm2X43oT30uS2T4-T8HcrNLvfW-mYZKuhqEzNg');
    await doc.useServiceAccountAuth(creds);
    await doc.loadInfo();
    const serverInfo = doc.sheetsByIndex[0];

    const allRows = await serverInfo.getRows();
    let listThing = [];
    let id = 0;
    for (const row of allRows) {
        listThing.push({
            id: id++,
            title: row.Title,
            contributor: row.Contributor,
            category: row.Category,
            ingredients: row.Ingredients,
            directions: row.Directions
        })
    }
    return listThing;
}