window.addEventListener("load", addListener);
var item;
let items = [];
function addListener()
{
	document.getElementById("btnadd").addEventListener("click", Add);
	document.getElementById("btndisplay").addEventListener("click", Display);
}

function Add()
{
	item = document.getElementById("txtitem").value;
	CheckItem()
	document.getElementById("txtitem").value = "";
	items.push(item)
}

function CheckItem()
{
	if (item == "")
	{
		alert("You have to enter something");
		Add();
	}
	else
	{
		alert("Added" + " " + item);
	}
}

function Display()
{
	document.getElementById("Ask").style.display = "none";
	document.getElementById("display").style.display = "block";
	length = items.length;
	for(let i=0; i<length; i++)
	{
		let li = document.createElement("li");
		li.innerText = items[i];
		list.appendChild(li);	
	}
}
