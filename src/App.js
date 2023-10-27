import "./App.css";

function App() {
  const createGoogleSheet = () => {
    fetch("https://sheetdb.io/api/v1/dlagswofezzjz", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: [
          {
            id: "11",
            name:"Ritik",
            phone: 4364733,
          },
        ],
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };


  const readGoogleSheet = () => {
    // Sort results by id in descending order, take two
    // and return the age as an integer.

    fetch("https://sheetdb.io/api/v1/dlagswofezzjz")
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const updateGoogleSheet1 = () => {
    fetch("https://sheetdb.io/api/v1/dlagswofezzjz/id/2", {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          name: "Kunal",
        },
      }),
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };


  const deleteGoogleSheet = () => {
    fetch("https://sheetdb.io/api/v1/dlagswofezzjz/id/10", {
      method: "DELETE",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  
  return (
    <div>
  
    <div className="App">
     <button type="button" class="btn btn-primary" className="btn btn-primary" onClick={() => createGoogleSheet()}>Create</button>
     <button className="btn btn-success" onClick={() => readGoogleSheet()}>Read</button>
     <button className="btn btn-warning" onClick={() => updateGoogleSheet1()}>Update</button>
     <button className="btn btn-danger" onClick={() => deleteGoogleSheet()}>Delete</button>
    </div>
    </div>
  );
}

export default App;
