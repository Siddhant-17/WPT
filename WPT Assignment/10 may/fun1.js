function maths(choise)
{
    function dosquare(n){
        return n*n
    }
    function docube(num,exp){
        return Math(pow(num,exp))
    }

    if(choise==1){
        return dosquare
    }
    else{
        return docube
    }
}

let y = maths(1)
let r = y(12)
console.log(r)
