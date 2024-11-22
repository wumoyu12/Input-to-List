window.addEventListener("load", addListener);

function addListener()
{
    /*document.getElementById("which").style.display = "block";
    document.getElementById("ol").style.display = "none";
	/*document.getElementById("ul").style.display = "none";*/
	document.getElementById("btnol").addEventListener("click", OrderList);
    document.getElementById("btnul").addEventListener("click", UnorderedList);
}

function OrderList()
{
	/*document.getElementById("which").style.display = "none";
	document.getElementById("ol").style.display = "block";*/
	GetItem()
}

function UnorderedList()
{
	/*document.getElementById("which").style.display = "none";
	document.getElementById("ul").style.display = "block";*/
	GetItem()
}

function GetItem()
{
	num = document.getElementById("txtnum").value;
	item = document.getElementById("txtitem").value;
}
