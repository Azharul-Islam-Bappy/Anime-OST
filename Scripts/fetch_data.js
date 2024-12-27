
let clipsData;

// fetches data 
function fetchData(url) {
  fetch(url).then(response => {
    if (response.status === 200 && response.ok) {
      return response.json();
    }
    else if(!response.ok) {
      throw new Error(`HTTP Error!  Status: ${response.status}`);
    }
  }).then(data => {
    clipsData = [...data];
  }).catch(err => {
    console.log(`Error fetching data: ${err}`);
  });
  
}

// Initializing fetchData
fetchData('Data/clips_data.json');