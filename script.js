// getting reference 
let isDOBOpen = false;
let dateDfBirth;
const settingsCogEl = document.getElementById('settingsIcon');
const AddDOB = document.getElementById("AddDom");
const input = document.getElementById("input");
const firstHeading = document.getElementById("firstHeading") ;
const afterDOB = document.getElementById("afterDOB");
let yearEle = document.getElementById('year')
let monthEle = document.getElementById('months')
let dayEle = document.getElementById('days')
let hoursEle = document.getElementById('hours')
let menutesEle = document.getElementById('menutes')
let secondsEle = document.getElementById('seconds')

// old Date Of Birth Process
//  let DateOld = new Date(dateDfBirth);
//  let oldYear = DateOld.getFullYear();
//  let oldMonth = DateOld.toLocaleString('en-us',{month: 'long'});
//  let oldDay = DateOld.toLocaleString('en-us',{day:'2-digit'});
//  console.log('oldYear :', oldYear)
//  console.log('oldMonth :', oldMonth)
//  console.log('oldDay :', oldDay)
// for Two Digit numbers
// const MakeTwoDigitNumbres = (num) =>{
//   return num > 9 ? num: `0${num}`
// }


// function for toggle button On / Off
const toggleDateOfBirthSetting = () => {
     if(isDOBOpen){
         AddDOB.classList.add("hide");
         input.classList.add("hide") 
     } 
     else{
         AddDOB.classList.remove("hide");
         input.classList.remove("hide") 
     } 
     isDOBOpen = !isDOBOpen;
} 
settingsCogEl.addEventListener("click", toggleDateOfBirthSetting) 

//  function for Update age 
const updateAge = () =>{ 
  const currentDate = new Date();
  // console.log(currentDate, "and", oldDate);
  const dateDiff = currentDate - dateDfBirth;
  const year = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365));
  const month = Math.floor(dateDiff / (1000 * 60 * 60 * 24 * 365) %12);
  const day = Math.floor(dateDiff / (1000 * 60 * 60 * 24)) % 30;
  const hour = Math.floor(dateDiff / (1000 * 60 * 60)) % 24;
  const minutes = Math.floor(dateDiff / (1000 * 60 )) % 60;
  const secondes = Math.floor(dateDiff / (1000 )) % 60;
  // console.log({
  //    year,
  //    month,
  //    day,
  //    hour,
  //    minutes,
  //    secondes
  //    });
  // year = currentDate.getFullYear();
  // month = currentDate.toLocaleString('en-us',{month: 'long'});
  // day = currentDate.toLocaleString('en-us',{day:'2-digit'}); 
  // let DateOld = new Date(dateDfBirth);
  // let oldYear = DateOld.getFullYear();
  // let oldMonth = DateOld.toLocaleString('en-us',{month: 'long'});
  // console.log(oldMonth);
  // let oldDay = DateOld.toLocaleString('en-us',{day:'2-digit'});
  // console.log('oldYear :', oldYear)
  // console.log('oldMonth :', oldMonth)
  // console.log('oldDay :', oldDay)
  // finalYear = year - oldYear
  // finalMonth = month - oldMonth
  // finalday = day - oldDay
  // console.log('Final Year',finalYear);
  // console.log('Final Month',finalMonth);
  // console.log('Final Day',finalday);
  // yearEle.innerText = MakeTwoDigitNumbres(year);
  // monthEle.innerText = MakeTwoDigitNumbres(month);
  // dayEle.innerText =  MakeTwoDigitNumbres(day);
  // hoursEle.innerText = MakeTwoDigitNumbres(hour);
  // menutesEle.innerText = MakeTwoDigitNumbres(minutes);
  // secondsEle.innerText = MakeTwoDigitNumbres(secondes);

  yearEle.innerText = year;
  monthEle.innerText = month;
  dayEle.innerText =  day;
  hoursEle.innerText = hour;
  menutesEle.innerText = minutes;
  secondsEle.innerText = secondes;
}  

//  function for show date or interence hide
const setDOMHandler = () =>{
     const dateString = input.value
     dateDfBirth = new Date(dateString)
    //  dateDfBirth = dateDfBirth ? new Date(dateString) : null;
     // get year month or days 
    //  const year = localStorage.getItem('year')
    //  const month = localStorage.getItem('month')
    //  const date = localStorage.getItem('date')
    //  if(year && month && date)
    //  {
    //    dateDfBirth = new Date(year,month,date);
    //  }

      if(dateDfBirth)
      { 
        localStorage.setItem('year', dateDfBirth.getFullYear());
        localStorage.setItem('month', dateDfBirth.getMonth());
        localStorage.setItem('date', dateDfBirth.getDate());
         firstHeading.classList.add("hide")
         afterDOB.classList.remove("hide")
         console.log("IF")
         setInterval(()=> {
          updateAge();
         },1000)
      } 
      else{
        afterDOB.classList.add("hide")
        firstHeading.classList.remove("hide")
        console.log("Else")
      }    
}
// setDOMHandler();
AddDOB.addEventListener("click", setDOMHandler)  