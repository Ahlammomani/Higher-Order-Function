// Q1
function function1(arr){
    const result =[]
    for (let i = 0; i < arr.length; i++) {
        result.push(Math.pow(2,arr[i]));  
    }
    return result;
}
console.log(function1([9,8,7]));

// FOREACH
function function2(arr){
const result=[];
arr.forEach ((Number)=> {
    result_forEach.push(Math.pow(2, number));
  });
  return result;
}
console.log(function2([6,5,4]))

// MAP
function function3(arr){
    const result=arr.map((number)=>{
    result.push(Math.pow(2,number));
    });
    return function3
}
console.log(function3([4,3,2]))

// Q2
function inputfun (arr){
    arr.map((element)=>{
        if(typeof(element)==="string"){
            return "N/A"
        }
        else if(element % 2 === 0  ){
            return "even"
        }
        else{
            return"odd";
        }
        return result;
    })
    console.log(function3([5,6,7,ahlam]))
}

//Q3
const array=["Rawan", "Wesam", "Hind", "Muhammad", "Esraa", "Dareen"]; 
const NewArray=[];
function Names(){
   array.forEach((singleName)=>{
    NewArray.push(singleName);
   })
   return NewArray;
}

console.log(Names(array))

//Q4
function fizzbuzz (number){
    const result=[];
    number.forEach((num)=>{
        if(num % 3 ===0 && num% 5 ===0){
            result.push("Fizz Buzz")
        }
        else if (num % 3 === 0) {
            result.push("Fizz");
        } else if (num % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(num);
        }
    })
    return result;
}
console.log(fizzbuzz([,3,16,,1,30,15]))
