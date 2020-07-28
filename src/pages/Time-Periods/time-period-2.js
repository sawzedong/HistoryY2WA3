/*eslint no-unused-vars: 0*/
import React from "react";
import PageTemplate from "../../components/PageTemplate";


export default function Interview2() {
  return (
    <PageTemplate padding>
      <div className="min-vh-100 vw-100">
        <div className="px-5 py-4">
        <h1>Time Period 2</h1>
        </div>
        <div className="row py-4">
          <div className="col-md-3 px-5">
            <h2>Details</h2>
            <p>
              Time Period: <strong>~1985</strong>
              <br />
              Interviewee: <strong>If can reveal</strong>
              <br />
              Interviewee Age: <strong>Around 50</strong>
              <br />
            </p>
          </div>
          <div className="col-md-9 px-5">
          <h2>Information</h2>
            <table>
              <tr>
                <td className="p-2 w-30"><h3>Housing</h3></td>
                <td className="p-2 w-70">
                  <ul>
                    <li>Yay</li>
                    <li>Yay</li>
                    <li>Yay</li>
                    <li>Yay</li>
                    <li>Yay</li>
                    <li>Yay</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td className="p-2 w-30"><h3>Environment</h3></td>
                <td className="p-2 w-70">SOMETHING</td>
              </tr>
              <tr>
                <td className="p-2 w-30"><h3>Population</h3></td>
                <td className="p-2 w-70">SOMETHING</td>
              </tr>
              <tr>
                <td className="p-2 w-30"><h3>Monetary</h3></td>
                <td className="p-2 w-70">SOMETHING</td>
              </tr>
              <tr>
                <td className="p-2 w-30"><h3>Social</h3></td>
                <td className="p-2 w-70">SOMETHING</td>
              </tr>
            </table>
            
          </div>
        </div>
      </div>
    </PageTemplate>
  );
}
