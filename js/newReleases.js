const grande = document.querySelector('.grande');
const btn = document.querySelectorAll('.btn');

// Cuando hago click en punto
    //saber posicion del punto
    //Aplicar un transfotm translateX al grande
    //Quitar la clase activo de todos puntos
    //Añadir la clase activo al punto que hacemos click

    //recorre el Array y sabemos la posicion
btn.forEach(( cadabtn, i )=> {
    //Evento al hacer click en una posicion 
    btn[i].addEventListener('click', ()=>{
        
        let posicion = i;
        let operacion = posicion * -50;
        //Posicion es 0, el transform es 0
        //Posicion es 1, el transform es -50%      
        //operacion = posicion + (-50)  
        
        //Agregamos en style 
        grande.style.transform = `translateX(${operacion}%)`;
        
        //Marcar el btn
        //Remueve la clase de los 2 puntos
        btn.forEach( (cadabtn, i) => {
            btn[i].classList.remove('activo');
        })
        
        btn[i].classList.add('activo')
        
        btn.forEach( (cadabtn, i) => {
            
            verifica(cadabtn);
        })
        
    })
    
});

function verifica(boton){
    if(boton.classList.contains('activo')){
        boton.style.display = 'none'
    }else{
        boton.style.display = 'inline'
    }
}