document.getElementById("form1").addEventListener("submit", myFunction);

function myFunction(event){
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    console.log(event.target.elements.abc);
    console.log(document.querySelector("input[name=abc]"));
    console.log(document.querySelector("input[name=abc]").value);
    const result = document.querySelector("input[name=abc]").value;

    document.getElementById("firstforma").textContent = "Tavo vardas: " + result;
}
