// GET CURRENT DATE
var currentDate = new Date();

var day = currentDate.getDay();
var date = currentDate.getDate();
var month = currentDate.getMonth();
var year = currentDate.getFullYear();

// CHANGE DOM
var currentDay = "";
var currentMonth = "";
var updateDate = "";
var fulldate = "";

var dateBox = document.querySelectorAll(".date-box");

switch (day) {
    case 0:
        currentDay = "Sunday" 
    break;
    case 1:
        currentDay = "Monday"  
    break;
    case 2:
        currentDay = "Tuesday"  
    break;
    case 3:
        currentDay = "Wednesday"  
    break;
    case 4:
        currentDay = "Thursday"  
    break;
    case 5:
        currentDay = "Friday"  
    break;
    case 6:
        currentDay = "Saturday"  
    break;
} 


switch (month) {
    case 0:
        currentMonth = "Jan";    
     break;
    case 1:
        currentMonth = "Feb";
    break;
    case 2:
        currentMonth = "Mar";
    break;
    case 3:
        currentMonth = "Apr";
    break;
    case 4:
        currentMonth = "May";
    break;
    case 5:
        currentMonth = "Jun";
    break;
    case 6:
        currentMonth = "Jul";
    break;
    case 7:
        currentMonth = "Aug";
    break;
    case 8:
        currentMonth = "Sep";
    break;
    case 9:
        currentMonth = "Oct";
    break;
    case 10:
        currentMonth = "Nov";
    break;
    case 11: 
        currentMonth = "Dec";
    break;
}

// UPDATE

fulldate = currentDay + ", " + currentMonth + " " + date + "th" + ", " + year;

for (var i = 0;i < dateBox.length;i++) {
    dateBox[i].innerText = fulldate;
}

// BOX DANG NHAP

const appearance = document.querySelector('.js-appearance')
const boxxx = document.querySelector('.js-box')
const boxContainer = document.querySelector('.js-box-container')
const titles = document.querySelectorAll('.js-title')
function AppearanceSearchBox () {
    boxxx.classList.add('open')
}
function CloseSearchBox()
{
    boxxx.classList.remove('open')
}
function Stop (event)
{
    event.stopPropagation()
}
appearance.addEventListener('click', AppearanceSearchBox)
boxxx.addEventListener('click', CloseSearchBox)
boxContainer.addEventListener('click', Stop)
for ( const title of titles )
{
    title.addEventListener('click', AppearanceSearchBox)
}
// End Box Dang nhap
 
// Start Box Search
const modal = document.querySelector('.js-modal')
const buttonSearch = document.querySelector('.js-icon-search')
const buttonClose = document.querySelector('.js-modal-container')
function ModalAppearance () {
    modal.classList.add('open')
}
function Close ()
{
    modal.classList.remove('open')
}
buttonSearch.addEventListener('click', ModalAppearance)
buttonClose.addEventListener('click', Close)
// End Box Search

// Start Scroll 
const scrollUpp = document.querySelector('.js-scroll')
function ScrollUpToo ()
{
    if ( window.scrollY > 200 )
    {
        scrollUpp.style.display = "flex"
    }
    else
    {
        scrollUpp.style.display = "none"
    }
}
window.addEventListener('scroll', ScrollUpToo)
scrollUpp.addEventListener('click', () => {
    window.scrollTo({
        top : 0
    })
} )
