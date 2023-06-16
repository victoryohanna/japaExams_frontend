
import "./table.scss";

const Table = ()=>{
    return(
        <table className="table table-s table-responsive"> 
              <thead>
                <tr>
                  <th scope="col">Id</th>
                  <th scope="col">Applicant Name</th>
                  <th scope="col">Email Address</th>
                  <th scope="col">Phone N0</th>
                  <th scope="col">Exam</th>
                  <th scope="col">Exam Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Mark</td>
                  <td>Otto</td>
                  <td>mdo</td>
                  <td >Larry the Bird</td>
                  <td >Larry the Bird</td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>fat</td>
                  <td >Larry the Bird</td>
                  <td >Larry the Bird</td>
                </tr>
                <tr>
                  <td>3</td>
                  <td >Larry the Bird</td>
                  <td>twitter</td>
                  <td >Larry the Bird</td>
                  <td >Larry the Bird</td>
                  <td >Larry the Bird</td>
                </tr>
              </tbody>
            </table>
    )
}

export default Table;