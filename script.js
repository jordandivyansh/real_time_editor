 function refresh(){
                var textContent = document.getElementById('editor-textarea').value;
                document.getElementById('viewer').srcdoc = textContent;
            }

            onkeyup="refresh()";
            
            function myFunction() {
   var element = document.body;
   element.classList.toggle("dark-mode");
}