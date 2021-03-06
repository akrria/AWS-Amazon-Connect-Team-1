import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

// const {
//   DynamoDBClient,
//   ListTablesCommand,
// } = require("@aws-sdk/client-dynamodb");

// (async () => {
//   const client = new DynamoDBClient({ region: "us-east-2" });
//   const command = new ListTablesCommand({});
//   try {
//     const results = await client.send(command);
//     console.log(results.TableNames.join("\n"));
//   } catch (err) {
//     console.error(err);
//   }
// })();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
