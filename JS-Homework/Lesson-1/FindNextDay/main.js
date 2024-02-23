let Day31Month = [1,3,5,7,8,10,12]
let Day30Month = [4,6,9,11]
let day 
let month
let year
function FindNextDay(day, month, year){

    if(Day31Month.includes(month)){
           if(day<31){
            day++
            console.log(day, month, year)
        }
            else if (day==31){
                if(month<12){
                    month++
                    day = 1
                    console.log(day, month, year)
                }
                else if (month==12){
                    day = 1
                    month = 1   
                    year++;
                    console.log(day, month, year)
                }
                else {
                    console.log("khong co ngay nay")
                }
            }
            else {
                console.log("khong co ngay nay")
            }
        }
        else if(Day30Month.includes(month)){
            if(day<30){
                day++
                console.log(day, month, year)
            }
            else if(day==30) {
                if (month<12){
                    month++
                    day = 1
                    console.log(day, month, year)
                }
                else {
                    console.log("khong co ngay nay")
                }
            }
            else {
                console.log("khong co ngay nay")
            }
        }
        else if(month==2)
        {
            if (day==29){
                if((year%4==0 && year%100!=0)|| (year%400==0)){
                    day = 1
                    month = 3
                    console.log(day,month,year)          
                }
                else {
                    console.log("khong co ngay nay")
                }
            }
            if (day==28){
                if((year%4==0 && year%100!=0)|| (year%400==0)){
                    day++
                    console.log(day, month, year)
                }
                else{
                    day = 1
                    month++
                    console.log(day,month,year) 
                }
            }  
            else if(day<28)
            {
                day++
                console.log(day,month,year)
            }
            else if(day>=30){
                console.log("khong co ngay nay")
            }
        }
    }
FindNextDay(31,5,2024)