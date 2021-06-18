var squares=document.querySelectorAll(".square");
var easy=document.querySelector("#easy");
var hard=document.querySelector("#hard");
var colordisplay=document.querySelector("h1 span");
var message=document.querySelector("#message");
var h1=document.querySelector("h1");
var reset=document.querySelector("#reset");

var color=generateRandomColor(6);
var picked=pick();
hard.addEventListener("click",function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    message.textContent="";
    color=generateRandomColor(6);
    picked=pick();
    colordisplay.textContent=picked;
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color[i];
        squares[i].style.display="block";
    }
    
})
easy.addEventListener("click",function(){
    easy.classList.add("selected");
    hard.classList.remove("selected");
    message.textContent="";
    color=generateRandomColor(3);
    picked=pick();
    colordisplay.textContent=picked;
    for(var i=0;i<squares.length;i++)
    {
        if(i<color.length)
          squares[i].style.backgroundColor=color[i];
        else
          squares[i].style.display="none";
    }
})
function generateRandomColor(l)
{
    var arr=[];
    for(var i=0;i<l;i++)
    {
      var no1=randomno();
      var no2=randomno();
      var no3=randomno();
      var c="rgb("+no1+", "+no2+", "+no3+")";
      arr.push(c);
    }
    console.log(arr);
    return arr;
}

function randomno()
{
    var no=Math.floor(Math.random()*256);
    return no;
}

reset.addEventListener("click",function(){
    hard.classList.add("selected");
    easy.classList.remove("selected");
    color=generateRandomColor(6);
    message.textContent="";
    h1.style.backgroundColor="steelblue";
    picked=pick();
    colordisplay.textContent=picked;
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color[i];
        squares[i].style.display="block";
    }
})

function pick()
{
    var random=Math.floor(Math.random()*color.length);
    return color[random];
}
colordisplay.textContent=picked;

for(var i=0;i<squares.length;i++)
{
    squares[i].style.backgroundColor=color[i];
    
    squares[i].addEventListener("click",function(){
        console.log(this.style.backgroundColor);
        console.log(picked)
        if(picked==this.style.backgroundColor)
        {
            message.textContent="Correct:)";
            changecolors(picked);

        }
        else
        {
            this.style.backgroundColor="#232323";
            message.textContent="Try Again!";
        }
    })
}

function changecolors(color)
{
    for(var i=0;i<squares.length;i++)
    {
        squares[i].style.backgroundColor=color;
    }
    h1.style.backgroundColor=color;
    console.log(color);
}

