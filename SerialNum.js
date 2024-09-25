// 1 
// 2 6 
// 3 7 10 
// 4 8 11 13 
// 5 9 12 14 15 
let rows=+prompt("Enter No.of rows:");
// let rows=5;
for(i=1;i<=rows;i++){
    let res="";
    let num=i;
    for(j=1;j<=i;j++){
        res=res+num+" ";
        num=num+rows-j;

    }
    console.log(res);
}