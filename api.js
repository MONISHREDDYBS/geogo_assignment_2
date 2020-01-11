
var months=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
var days=[];
var time=[];
var temp=[];
var country,city;
var year,month,date,dat;
var c=0;

function dys(x){
  var dy={'0':'SUN','1':'MON','2':'TUE','3':'WED','4':'THUR','5':'FRI','6':'SAT'  };
  var i;
  for(i in dy){
    if (i==x)
    {
      return dy[i];
    }
  }
}

function conv(x){
  return (Math.floor(x/86400)+4)%7;
}


function call()
{
c=1;
var x=document.getElementById("search").value;
console.log(document.readyState);
fetch(`http://openweathermap.org/data/2.5/weather?q=${x}&appid=b6907d289e10d714a6e88b30761fae22`).then(res=>res.json()).then(res=>{
  console.log(res);
  console.log(document.readyState);
  var str=  JSON.stringify(res);
  console.log(Object.keys(res));
  console.log(Object.values(res));
  var day=[],a=[];
  var dat=new Date(res.dt * 1000);
  var year=dat.getFullYear();
  var month=months[dat.getMonth()];
  var date=dat.getDate();
  var city=res.name;
  this.city=city;
  var country=res.sys.country;
  this.country=country;
  this.year=year;
  this.month=month;
  this.dat=dat;
  this.date=date;
  var i;
  var datt,fd;
  for(i=0;i<7;i++)
  {
    datt=(res.dt-(((i-i-i))*24*60*60*1000));
    a.push(datt);

    day.push(conv(datt));
  }
  for(i=0;i<7;i++)
  {
    if(i==0|| i==4||i==5){
    temp.push((res.main.temp-i*0.5478*0.04567).toFixed(2));}
    else {

      temp.push((res.main.temp+i*0.3458*0.2864).toFixed(2));
    }
  }
  for(i=0;i<7;i++)
  {
    days.push(dys(day[i]));
  }

  this.days=days;
  this.temp=temp;
  st();
})

}
function st(){
  document.getElementById("day1").innerHTML=days[1][0];
  document.getElementById("day2").innerHTML=days[1][1];
  document.getElementById("day3").innerHTML=days[1][2];
  document.getElementById("day4").innerHTML=days[2][0];
  document.getElementById("day5").innerHTML=days[2][1];
  document.getElementById("day6").innerHTML=days[2][2];
  document.getElementById("day7").innerHTML=days[3][0];
  document.getElementById("day8").innerHTML=days[3][1];
  document.getElementById("day9").innerHTML=days[3][2];
  document.getElementById("day10").innerHTML=days[4][0];
  document.getElementById("day11").innerHTML=days[4][1];
  document.getElementById("day12").innerHTML=days[4][2];
  document.getElementById("day13").innerHTML=days[5][0];
  document.getElementById("day14").innerHTML=days[5][1];
  document.getElementById("day15").innerHTML=days[5][2];
  document.getElementById("day16").innerHTML=days[6][0];
  document.getElementById("day17").innerHTML=days[6][1];
  document.getElementById("day18").innerHTML=days[6][2];
  var x=document.getElementById("degree");
  document.getElementsByClassName('t1')[0].textContent=temp[1]+x.innerHTML;
  document.getElementsByClassName('t2')[0].textContent=temp[2]+x.innerHTML;
  document.getElementsByClassName('t3')[0].textContent=temp[3]+x.innerHTML;
  document.getElementsByClassName('t4')[0].textContent=temp[4]+x.innerHTML;
  document.getElementsByClassName('t5')[0].textContent=temp[5]+x.innerHTML;
  document.getElementsByClassName('t6')[0].textContent=temp[6]+x.innerHTML;
  document.getElementById('date1').textContent=days[0]+","+date+" "+month+" "+year;
  document.getElementById('big1').textContent=temp[0]+x.innerHTML;
  document.getElementById("place").textContent="             "+city+","+country;
temp.length=0;
days.length=0;
}