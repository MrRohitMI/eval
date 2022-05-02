// write js code here corresponding to matches.html
var matchArr=JSON.parse(localStorage.getItem("schedule"));
var favArr=JSON.parse(localStorage.getItem("favourites"))||[];
console.log(matchArr);
display(matchArr);

var filter=document.querySelector("#filterVenue")
filter.onchange=myfun4;

function myfun4()
{
   var sel=document.querySelector("#filterVenue").value;
   var disp=[];
    
    for(var i=0;i<matchArr.length;i++)
    {
        if(matchArr[i].venue==sel)
        {
           disp.push(matchArr[i])
           
        }
        
        
    }
    console.log(disp)
    display1(disp)

}

function display(data)
{
    
    data.forEach(function(el){
        
        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        td1.innerText=el.match;
        var td2=document.createElement("td");
        td2.innerText=el.teamA;
        var td3=document.createElement("td");
        td3.innerText=el.teamB;
        var td4=document.createElement("td");
        td4.innerText=el.date;
        var td5=document.createElement("td");
        td5.innerText=el.venue;
        var td6=document.createElement("td");
        td6.innerText="Add as Favourites";
        td6.style.color="green";
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){
            myfun2(el)
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)

    })
}
function display1(data)
{
    document.querySelector("tbody").innerHTML="";
    data.forEach(function(el){
        
        var tr=document.createElement("tr");
        var td1=document.createElement("td");
        td1.innerText=el.match;
        var td2=document.createElement("td");
        td2.innerText=el.teamA;
        var td3=document.createElement("td");
        td3.innerText=el.teamB;
        var td4=document.createElement("td");
        td4.innerText=el.date;
        var td5=document.createElement("td");
        td5.innerText=el.venue;
        var td6=document.createElement("td");
        td6.innerText="Add as Favourites";
        td6.style.color="green";
        td6.style.cursor="pointer";
        td6.addEventListener("click",function(){
            myfun2(el)
        })
        tr.append(td1,td2,td3,td4,td5,td6)
        document.querySelector("tbody").append(tr)

    })
}
function myfun2(el)
{
    favArr.push(el)
    // console.log(favArr);
    localStorage.setItem("favourites",JSON.stringify(favArr));

}