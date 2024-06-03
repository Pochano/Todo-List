document.addEventListener("DOMContentLoaded", () => {
    

    const btn_cargar = document.getElementById('Cargar');

    btn_cargar.addEventListener("click", function(){

        const tarea = document.getElementById('Nombre_Elemento');
    
        if(tarea.value == ""){
            alert("Ingrese una tarea");
        }

        else{

        //Crear un div para los elementos

        const div_elementos = C.create('li');

        //Creamos el checkbox

        const checkbox_add = C.create('input', {type:"checkbox", id: 'Box'});

        C.append(checkbox_add, div_elementos);

       //Obtenemos el nombre de la tarea

       

       const nombre = C.create('span', {id: 'Nombre_Tarea', innerText: tarea.value});

        C.append(nombre, div_elementos);
       


        const cancelar = C.create('a', {href: 'javascript:void(0)', innerHTML:
        'X', onclick: function(){C.remove(div_elementos);}
        });

        C.append(cancelar, div_elementos);

        C.append(div_elementos, C.id("Tareas"));

        tarea.value = "";
    }

    })

    const Seleccionados = document.getElementById('Seleccionar_Todo');

    Seleccionados.addEventListener("click", function(event){

        const item_seleccionado = document.querySelectorAll("#Box");

        item_seleccionado.forEach((item) =>{
            console.log(item.checked);
            item.checked = true;
        })

    })

    const Deseleccionados = document.getElementById('Deseleccionar_Todo');

    Deseleccionados.addEventListener('click', function(event){

        const item_seleccionado = document.querySelectorAll("#Box");

        item_seleccionado.forEach((item) =>{
            console.log(item.checked);
            item.checked = false;
        })

    })


});



