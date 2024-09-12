// localStorage.setItem("FormData", "Hello");
let form = document.querySelector("form");
let main = document.querySelector(".main");
let clear = document.querySelector(".clear");
console.log(clear);
form.addEventListener("submit", (event) => {
  let name = event.target.uname.value;
  let email = event.target.Email.value;
  let phone = event.target.Phone.value;
  let multipulEnery = 0;

  let formData = JSON.parse(localStorage.getItem("useData")) ?? [];
  for (let mData of formData) {
    if (mData.email === email || mData.phone === phone) {
      multipulEnery = 1;
      break;
    }
  }
  if (multipulEnery == 1) {
    return alert("You Have Already Registered Please Login");
  }
  formData.push({
    name: name,
    email: email,
    phone: phone,
  });
  localStorage.setItem("useData", JSON.stringify(formData));
  event.target.reset();
  displayData();
  event.preventDefault();
});

let displayData = () => {
  let formData = JSON.parse(localStorage.getItem("useData")) ?? [];
  let finalData = "";
  formData.forEach((element, i) => {
    finalData += `
    <div class="items">
        <div class="icon"><i class="ri-scissors-2-fill" onclick="removeData(${i})"></i></div>
        <h3>Name</h3>
        <h4>${element.name}</h4>
        <h3>Email</h3>
        <h4>${element.email}</h4>
        <h3>Phone</h3>
        <h4>${element.phone}</h4>
      </div>`;
  });
  main.innerHTML = finalData;
};
let removeData = (index) => {
  let formData = JSON.parse(localStorage.getItem("useData")) ?? [];
  formData.splice(index, 1);
  localStorage.setItem("useData", JSON.stringify(formData));
  displayData();
};
clear.addEventListener("click", () => {
  localStorage.clear("useData");
  displayData();
});
displayData();
