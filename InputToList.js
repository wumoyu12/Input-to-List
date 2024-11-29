window.addEventListener("load", addListener);

let items = [];

function addListener()
{
  document.getElementById("btnadd").addEventListener("click", Add);
  document.getElementById("btndisplay").addEventListener("click", Display);
}

function Add()
{
  let item = document.getElementById("txtitem").value;

  if (CheckItem(item))
  {
    items.push(item);
    alert("Added: " + item);
  }

  document.getElementById("txtitem").value = "";
}

function CheckItem(item)
{
  if (item == "")
  {
    alert("You have to enter something");
    return false;
  }

  for (let i = 0; i < items.length; i++)
  {
    if (items[i] == item)
    {
      alert("You've already entered : " + item + ", please enter something else");
      return false;
    }
  }

  return true;
}

function Display()
{
  if (items.length < 2)
  {
    alert("You need to enter at least two things before displaying the list.");
    return;
  }

  document.getElementById("Ask").style.display = "none";
  document.getElementById("display").style.display = "block";

  let list = document.getElementById("list");
  list.innerHTML = "";

  for (let i = 0; i < items.length; i++)
  {
    let li = document.createElement("li");
    li.innerText = items[i];
    list.appendChild(li);
  }
}
