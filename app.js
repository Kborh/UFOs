const { object } = require("prop-types");

// import the data from data.js
const tableData = data;

// import the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    // Frist, clear out any exisxting data
    tbody("");

    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dtaRow) => {

        // Append a row to the table body
        let row = tbody.append("tr");

        //Loop through each field in the dataRow and add
        // each value as a table cell a(td)
        object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);

        });

    });

}