
const d1 = new Date();

console.log("todays date:", d1)

console.log("Year", d1.getFullYear());
console.log("Month", d1.getMonth());
console.log("Day", d1.getDay())




const d2 = new Date();
console.log(d2);

const formattedDate = d2.getDate() + "-" + (d2.getMonth() + 1) + "-" + d2.getFullYear();
console.log(formattedDate); // Example: "21-2-2026"



const d3=new Date();
const time=d3.getHours()+":"+d3.getMinutes()+":"+d3.getSeconds();
console.log(time);



const d4=new Date();

const weekdays=["sunday","monday","tuesday","wednesday","thursday","friday","saturday"];
const dayname=weekdays[d4.getDay()];
console.log("dayname:",dayname);


const birthDate = new Date("1998-06-15");
const today = new Date();

let age = today.getFullYear() - birthDate.getFullYear();

// Adjust if birthday hasn’t happened yet this year
if (
  today.getMonth() < birthDate.getMonth() ||
  (today.getMonth() === birthDate.getMonth() && today.getDate() < birthDate.getDate())
) {
  age--;
}

console.log("Age is " + age + " years");





const date1=new Date("2026-02-01");
const date2=new Date("2026-02-20");

const diff=date2-date1;
console.log(diff);

// Convert Milliseconds → Days
const daydiff=diff/(1000*60*60*24);
console.log(daydiff);


let d = new Date();
d.setDate(d.getDate() + 10);
console.log(d)




let expiry = new Date("2026-05-01");
let todaydate = new Date();

function isExpired(expiry,todaydate){
    if(todaydate>expiry){
        console.log("Expired")
    }else{
        console.log("valid")
    }
}
isExpired(expiry,todaydate);



let futureDate = new Date("2026-12-31");
let currentDate = new Date();

const dateDiff = futureDate - currentDate; 

const days = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
const hours = Math.floor((dateDiff / (1000 * 60 * 60)) % 24);
const minutes = Math.floor((dateDiff / (1000 * 60)) % 60);
const seconds = Math.floor((dateDiff / 1000) % 60);

console.log("Days:", days);
console.log("Hours:", hours);
console.log("Minutes:", minutes);
console.log("Seconds:", seconds);

// ===========================================================================================

const d5= new Date();
const lastDayOfMonth = new Date(d5.getFullYear(), d5.getMonth() + 1, 0);

console.log("Last day of this month is:", lastDayOfMonth.getDate());


// ==================================================================================================

function bookTicket(travelDate) {
  try {
    const date = new Date(travelDate);
    const today = new Date();

    // Check if date is valid
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date format");
    }

    // Remove time part for comparison (set to midnight)
    // today.setHours(0, 0, 0, 0);
    // date.setHours(0, 0, 0, 0);

    // Cannot book past date
    if (date < today) {
      throw new Error("Cannot book a past date");
    }

    // Cannot book more than 90 days ahead
    const maxDate = new Date();
    maxDate.setDate(maxDate.getDate() + 90);

    if (date > maxDate) {
      throw new Error("Cannot book more than 90 days ahead");
    }

    console.log("Ticket booked successfully for:", date.toDateString());
  } catch (error) {
    console.log("Booking failed:", error.message);
  }
}

bookTicket("2026-02-28"); 
bookTicket("2025-12-31"); 
bookTicket("2027-05-01"); 
bookTicket("invalid-date"); 
