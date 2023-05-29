/**
 * Rotates a table by 90 degrees.
 *
 * @param {string} selector - The CSS selector of the table to rotate.
 */
const rotateTable = (selector) => {
  const table = document.querySelector(selector);

  if (!table) {
    console.error(`No element with selector ${selector} found`);
    return;
  }

  const rows = Array.from(table.querySelectorAll("tr"));
  const rotatedTable = document.createElement("table");
  const headers = Array.from(rows[0].querySelectorAll("th"));

  headers.forEach((header, headerIndex) => {
    const newCell = rotatedTable.insertRow(-1).insertCell(-1);
    newCell.textContent = header.textContent;
    rows.forEach((row, rowIndex) => {
      if (rowIndex === 0) return;
      const cell = row.querySelectorAll("td, th")[headerIndex];
      const newCell = rotatedTable.rows[headerIndex].insertCell(-1);
      newCell.textContent = cell.textContent;
    });
  });

  table.replaceWith(rotatedTable);
};

rotateTable(".response_table");
