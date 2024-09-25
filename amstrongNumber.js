let input=prompt("Enter Number:");
let num=Number(input);
let sum=0;
for(i=0;i<input.length;i++){
    sum=sum+(Number(input[i])**input.length)
}
let res=(num==sum)?`${input} is an Amstrong Number`:`${input} is not an Amstrong`;
console.log(res);