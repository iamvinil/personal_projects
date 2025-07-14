async function validateForm() {
  let response = await fetch("https://jsonplaceholder.typicode.com/users");
  let data = await response.json();
  console.log(data);
  let headings = [];
  for (let i = 0; i < data.length; i++) {
    let card = `
      <div class="card-container">
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h4>${data[i].name}</h4>
        <p>${data[i].address.city}<br />${data[i].email}</p>
        <button>Message</button><button>Follow</button>
        <hr />
        <div>
          <h4>COMPANY</h4>
          Name : <span>${data[i].company.name}</span><br />
          CatchPhrase : <span>${data[i].company.catchPhrase}</span>
        </div>
      </div>
      </div>`;
    headings.push(card);
  }
  console.log(headings.join("<br>"));

  document.getElementById("errorMessages").innerHTML = headings.join("<br>");
}
validateForm();
