// Enter No.of Rows:7
// 1                       1
// 1 0                   1 0
// 1 0 1               1 0 1
// 1 0 1 0           1 0 1 0
// 1 0 1 0 1       1 0 1 0 1
// 1 0 1 0 1 0   1 0 1 0 1 0
// 1 0 1 0 1 0 1 0 1 0 1 0 1
// 1 0 1 0 1 0   1 0 1 0 1 0
// 1 0 1 0 1       1 0 1 0 1
// 1 0 1 0           1 0 1 0
// 1 0 1               1 0 1
// 1 0                   1 0
// 1                       1

let rows=+prompt("Enter No.of Rows:");
// let rows=7;
for(i=1;i<=2*rows-1;i++){
    let res="";
    let cols=(i<=rows)?i:(2*rows-i);
    for(k=1;k<=cols;k++){
        if(k%2==0){
            res=res+"0 ";
        }
        else{
            res=res+"1 ";
        }
    }
    let temp="";
    if(i==rows){
        temp=res.trim().split(" ");
        temp.pop();
        temp=temp.reverse().join(" ");
    }
    else{
    temp=res.trim();
    }
    if(i<rows){
        res=res+"  ".repeat(2*rows-1-2*i);
    }
    if(i>rows){
        res=res+"  ".repeat(2*i-2*rows-1);
    }
    console.log(res+temp);
}