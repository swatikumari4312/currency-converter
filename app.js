const BASE_URL= "https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/eur/jpy.json";

const dropdowns = document.querySelectorAll(".dropdownn select");

for(code in countryList){
  console.log(code,countryList[code]);
}


for(let select of dropdowns){

  for(currCode in countryList){

    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    if(select.name === "from" && currCode === "USD"){
      newOption.selected="selected";
    }
   else  if(select.name === "to" && currCode === "INR"){
      newOption.selected="selected";
    }
   select.append(newOption);
}



select.addEventListener("change" , (evt) => {
  updateFlag(evt.target);
});

}

const updateFlag = (element) => {
   let currCode = element.value ;
   console.log(currCode);
};