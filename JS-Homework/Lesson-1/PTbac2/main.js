let a
let b
let c
function giaiptbac2(a,b,c){
    let delta = b*b-4*a*c
    if (a==0 && b!=0)
    {
        console.log("phuong trinh co nghiem" + (-c/b))
    }
    else if (a==0 && b==0){
        if (c==0){
            console.log("phuong trinh vo so nghiem")
        }
        else console.log("phuong trinh vo nghiem")
    }
    else {
        if(delta<0){
            console.log("phuong trinh vo nghiem")
        }
       else if (delta>0){
            console.log("phuong trinh co 2 nghiem phan biet x1 = " + (-b+Math.sqrt(delta))/(2*a) + " x2 = " + (-b-Math.sqrt(delta))/(2*a))
        }
        else if(delta==0){
            console.log("phuong trinh co nghiem kep x1 = x2 = " + -b/(2*a))
        }
    }
}
    giaiptbac2(4,-2,-6)