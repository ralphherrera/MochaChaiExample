import chai from "chai";
import chaiHttp from "chai-http";
import * as data from "../data/testdata.json";

chai.use(chaiHttp);
const expect = chai.expect;
const should = chai.should();

// describe("Test Suite Sample", () => {
//   const urlBase = data.baseURL;
//   let jsonObj;

//   it("Sample API Test", async () => {
//     chai
//       .request(urlBase)
//       .get("/users/1")
//       .end((err, response) => {
//         console.log(`Status code: [${response.status}]`);
//         jsonObj = JSON.parse(response.text);
//         console.log(jsonObj.name);
//         console.log(jsonObj.address["street"]);
//         expect(response.status).to.be.equal(400);
//       });
//   });

//   it.skip("Watch Kimetsu Episode 11", async () => {
//     let expectedValue = 10;
//     let actualValue = 10;

//     console.log("AAAWWWW");
//     expect(expectedValue).to.be.equal(actualValue);
//   });
// });
