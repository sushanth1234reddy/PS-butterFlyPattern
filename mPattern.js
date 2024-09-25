// Enter No.Of Rows:5
// *                 *
// * *             * *
// * * *         * * *
// * * * *     * * * *
// * * * * * * * * * *
// * * * *     * * * *
// * * *         * * *
// * *             * *
// *                 *
let rows=+prompt("Enter No.Of Rows:");
// let rows=5;
for(i=1;i<=2*rows-1;i++){
    res="";
    
    let cols=(i<=rows)?(i):(2*rows-i);
    let space=(i<=rows)?(2*rows-2*i):(2*i-2*rows);
    for(j=1;j<=cols;j++){
        res=res+"* ";
    }
    let temp=res.trim().split(" ").reverse().join(" ");
    for(k=1;k<=space;k++){
        res=res+"  ";
    }
    console.log(res+temp);
    
}