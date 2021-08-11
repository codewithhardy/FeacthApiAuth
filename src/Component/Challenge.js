import React from "react";
import { Table } from "reactstrap";
import { removeUserSession } from "./Common";
import ChallengeList from "./ChallengeList";

function Challenge(props) {
  const handleLogout = () => {
    removeUserSession();
    props.history.push("/login");
  };

  return (
    <>
      <div>
        <Table responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>challenge_type</th>
              <th>challenge_descrption_en</th>
              <th>challenge_group</th>
              <th>challenge_about_en</th>
              <th>challenge_name_en</th>
              <th>challenge_end_date</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>Table </td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table </td>
              <td>Table cell</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
              <td>Table cell</td>
            </tr>
          </tbody>
        </Table>
      </div>
      <div>
        <input type="button" value="LogOut" onClick={handleLogout} />
      </div>
      <ChallengeList />
    </>
  );
}

export default Challenge;
