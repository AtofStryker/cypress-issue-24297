describe("empty spec", { pageLoadTimeout: 2000 }, () => {
  it("no op failure (downloads the file)", () => {
    cy.on("fail", () => false);
    cy.visit("cypress/fixtures/index.html");

    cy.get("a").click();
  });

  it("reads the file downloaded and makes sure they are equal", () => {
    cy.visit("cypress/fixtures/index.html");
    cy.readFile("cypress/downloads/Sample-Spreadsheet-10-rows.csv").then(
      (text) => {
        // return carriages exist in the downloaded version
        text = text.replaceAll('\r', '')
        // with the first test unskipped, this will crash the runner =(
        cy.readFile(
          "Sample-Spreadsheet-10-rows-compare.csv"
        ).should("eq", text);
      }
    );
  });
});
