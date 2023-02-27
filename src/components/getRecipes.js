import {GoogleSpreadsheet} from "google-spreadsheet";
export const accessSpreadsheet = async () => {
    console.log("We are accessing the spreadsheet");
    console.log(process.env.REACT_APP_SHEET_ID);
    const doc = new GoogleSpreadsheet(process.env.REACT_APP_SHEET_ID);
    await doc.useServiceAccountAuth({
        private_key: process.env.REACT_APP_GOOGLE_PRIVATE_KEY.replace(/\\n/gm, "\n"),
        client_email: process.env.REACT_APP_GOOGLE_SERVICE_ACCOUNT_EMAIL
    });

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