import chai from "chai";
import chaiHttp from "chai-http";
import { expect, should } from "chai";
import * as data from "../data/testdata.json";

chai.use(chaiHttp);

describe("Sample API Test Suite", () => {
  const baseURL = data.baseURL;
  const httpResponse200 = 200;
  const httpResponse201 = 201;
  const httpResponse204 = 204;
  const httpResponse400 = 400;
  const httpResponse401 = 401;
  const httpResponse403 = 403;
  const httpResponse404 = 404;
  const httpResponse409 = 409;
  const httpResponse412 = 412;

  it("GET all posts data", async () => {
    console.log(baseURL);
    const response = chai.request(baseURL).get("/posts");

    expect((await response).status).to.be.equal(httpResponse200);

    const respJSONObj = JSON.parse((await response).text);

    expect(Object.keys(respJSONObj).length).to.be.greaterThanOrEqual(1);

    // Iteration each key - value pairing
    // JSON.parse((await response).text, (key, value) => {
    //   console.log(`Key: [${key}] - Value: [${value}]`);
    // });
  });

  it("GET post data by ID", async () => {
    const randomNum = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    const response = chai.request(baseURL).get("/posts/" + randomNum);

    expect((await response).status).to.be.equal(httpResponse200);
    const respJSONObj = JSON.parse((await response).text);
    expect(respJSONObj).to.be.not.empty;
  });

  it("GET post comment by post ID", async () => {
    const randomNum = Math.floor(Math.random() * (100 - 1 + 1) + 1);
    const response = chai.request(baseURL).get("/comments?postId=" + randomNum);

    expect((await response).status).to.be.equal(httpResponse200);
    const respJSONObj = JSON.parse((await response).text);
    expect(respJSONObj).to.be.not.empty;
  });
});
