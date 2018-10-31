import React, { Component } from 'react';
import { Table} from 'react-bootstrap';
import TestApi from '../services/TestApi';

const api = new TestApi();
class MainPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      dataList: []
    };

  

  }

  componentDidMount() {
    api.getData()
    .then(res => {
      console.log('xxxxxxx xxxxxxxxxxx xxxxxxxxxxx res from here is ', res);
      console.log('xxxxxxx xxxxxxxxxxx xxxxxxxxxxx res from here is ', res.data.results);
      this.setState({ dataList: res.data.results});

      
    }).catch(err => {
      console.log('xxxxxxx xxxxxxxxxxx xxxxxxxxxxx err from here is ', err);
    });
  }
    render() {
        return (
            <div>
                <div className="height-100">
              <div className="padd-15">
                <h2> Assigned Items</h2>
              <Table responsive>
                <thead>
                  <tr>
                
                    <th>AssignedItemsID</th>
                    <th>AgentID</th>
                    <th>ProductItemID</th>
                    <th>itemAssignDate</th>
                    <th>itemAssignNote</th>
                   
                  </tr>
                </thead>
                <tbody>
                    {this.state.dataList.map((data, index) =>
                      <tr key={index}>
                   
                        <td>{data.assignedItemsID}</td>
                        <td>{data.agentID}</td>
                        <td>{data.productitemID}</td>
                        <td>{data.itemAssignDate}</td>
                        <td>{data.itemAssignNote}</td>
                   
                  </tr>
                    )}
                </tbody>
              </Table>
              </div>
                           
                </div>

      </div>
        );
    }
}

export default MainPage;
