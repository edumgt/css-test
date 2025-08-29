
function author_print() {
  console.log("author_print -- getElementById - ", document.getElementById("title").innerHTML);
  console.log("author_print -- querySelector - ", document.querySelector("#title").textContent);
  console.log("author_print -- getElementsByName - ", document.getElementsByName("title").innerText);
  console.log("author_print -- getElementsByClassName - ", document.getElementsByClassName("title").innerText);


  // const elems = document.getElementsByName("title");
  // // 첫 번째 요소
  // console.log(elems[0].value);
  // // 두 번째 요소 값
  // console.log(elems[1].value);


  // const elems1 = document.getElementsByClassName("title");

  // console.log(elems1[0].value); // 첫 번째
  // console.log(elems1[1].value); // 두 번째


document.getElementById("title").innerHTML=`
<img src=images/login-bg.png>
<img src=images/login-bg.png>
`

}


