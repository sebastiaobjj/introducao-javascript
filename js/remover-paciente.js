var tabela = document.querySelector("#tabela-pacientes");

tabela.addEventListener("dblclick", function(event){
    
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function() {
    event.target.parentNode.remove();
}, 500);

});






//REMOVER PACIENTES
/*var pacientes = document.querySelectorAll('.paciente');

pacientes.forEach(function(paciente){
    paciente.addEventListener("dblclick", function(){
        console.log("Fui clicado");
        this.remove();
    });
});*/