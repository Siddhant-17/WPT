function personinfo(pname,page)
{
this.personname=pname
this.personage=page
// this.showinfo=function(){
//     console.log(this.personname,this.personage)
// }

}

//let obj=new personinfo("sumedh",25)
//obj.showinfo()

let arr=[]
arr.push(new personinfo("kunal",59))
arr.push(new personinfo("digu",54))
arr.push(new personinfo("swapnil",58))

for(i of arr){
    console.log(i.personname,i.personage)
}
