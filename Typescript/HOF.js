

const inputnumber= [10, 20, 30, 40];
inputnumber.forEach((el)=>{
    console.log("ELement is",el)
})


const fruitarr= ["apple", "banana", "mango"];
fruitarr.forEach((value,index)=>{
    console.log(index,"->",value);
})
// =============================================================================

const nummm= [2, 5, -1, 9];
function isNegative(){
const negativenum=nummm.some((el)=>{
    if(el<0){
        return el;
    }
});
console.log(negativenum);
}
isNegative();


// ========================================================================
const studMark= [78, 55, 90, 34, 88];
function isStudResult(){
    const studPAss=studMark.every((el)=>{
        return el>35;
    })
    console.log(studPAss);
}
isStudResult();
// ====================================================================
const allNum= [1, 7, 9, 4, 6];
function isEven(){
    const evennum=allNum.find((el)=>{
       return el%2==0
    })
    console.log(evennum);
}
isEven();  //4

// Find the user whose id is 3.
const userdata=
[
 {id:1, name:"Anil"},
 {id:2, name:"Neha"},
 {id:3, name:"Rahul"}
]

const userid=userdata.find((el)=>{
    return el.id=3;
})
console.log(userid);/// {id:3, name:"Rahul"}
// ============================================================================
const arrnum= [100, 5, 25, 8];
function isSort(){
  const sortdata=arrnum.sort((a,b)=>{
    return a-b;
  })
  console.log(sortdata);
}
isSort()

// ========================================================================
const empdata=
[
 {name:"A", salary:50000},
 {name:"B", salary:30000},
 {name:"C", salary:70000}
]

const sortSalary=empdata.sort((a,b)=>{
        return (a.salary)-(b.salary)
})
console.log(sortSalary)

// ==========================================================
// Return true if ANY product has stock = 0.
const hardware=
[
 {name:"Laptop", stock:5},
 {name:"Mouse", stock:0},
 {name:"Keyboard", stock:10}
]

const outstock=hardware.some((el)=>{
    return el.stock==0;
})
console.log(outstock);


// ====================================================

const nestedarr= [1, 2, [3, 4], [5, 6]]
const flatarr=nestedarr.flat();
console.log(flatarr);