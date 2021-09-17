import { useState, useEffect } from "react";
const Pagination = () => {
  const [usersData, setUsersData] = useState([{}]);
  const [pageNumber, setPageNumber] = useState(1);

  const getTheDataFromServer = async () => {
    const response = await fetch(
      `https://dummyapi.io/data/v1/user?page=${pageNumber}&limit=10`,
      {
        method: "GET",
        headers: {
          "app-id": "61421a5a6a9b4d3ad64b8cb1",
        },
      }
    );
    const { data } = await response.json();
    console.log(data);
    setUsersData(data);
  };

  useEffect(() => {
    getTheDataFromServer();
  }, [pageNumber]);

  //   1000

  //   https://dummyapi.io/data/v1/user?page=1&limit=10
  return (
    <div>
      <h2>Pagination</h2>
      <table className="table table-striped w-75 m-auto">
        <tr>
          <th>Title</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Picture</th>
        </tr>
        <tbody>
          {usersData.map((user) => (
            <tr key={user.id}>
              <td>{user.title}</td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>
                <img
                  className="img-fluid"
                  src={user.picture}
                  alt={user.firstName}
                />{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button
          onClick={() => {
            setPageNumber(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setPageNumber(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setPageNumber(3);
          }}
        >
          3
        </button>
      </div>
      {/* {usersData.map((user))} */}
    </div>
  );
};
export default Pagination;
