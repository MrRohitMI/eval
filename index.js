// write js code here corresponding to index.html
// You should add submit event on the form
var form=document.querySelector("form");
form.addEventListener("submit",myfun);
var arr=JSON.parse(localStorage.getItem("schedule"))||[];
function myfun()
{
    event.preventDefault();
    var data={
        match:form.matchNum.value,
        teamA:form.teamA.value,
        teamB:form.teamB.value,
        date:form.date.value,
        venue:form.venue.value
    }
    arr.push(data)
    console.log(arr);
    localStorage.setItem("schedule",JSON.stringify(arr));
    window.location.href="matches.html"
}
