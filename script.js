function escrevendoLetra (){
    function ativaLetra(elemento){
        const arrayTexto = elemento.innerHTML.split('');
        elemento.innerHTML = '';
        arrayTexto.forEach((Letra, i) => {
            setTimeout(() =>{
                elemento.innerHTML += Letra;
            }, 75 * i)
        })
    }
    
    const titulo = document.querySelector('.digitando');
    ativaLetra(titulo)
}
escrevendoLetra()

function menuMobol (){
    const ativaMenu = document.querySelector('.fa-bars');
    const navMenu = document.querySelector('header .navegacaoPrimaria')
    
    
    ativaMenu.addEventListener('click', () => {
        ativaMenu.classList.toggle('fa-x')
        navMenu.classList.toggle('ativado')
    })
}
menuMobol()

function sobreMim(){
    const divExperience = document.querySelectorAll('.experienceContent div')
    const liExperience = document.querySelectorAll('.experienceContent ul li')
    const divEducation = document.querySelectorAll('.educationContent div')
    const liEducation = document.querySelectorAll('.educationContent ul li')

    divExperience[0].classList.add('ativo')
    liExperience[0].classList.add('ativo')
    divEducation[0].classList.add('ativo')
    liEducation[0].classList.add('ativo')
    
    function slideShow(index){

        divExperience.forEach((div)=>{
            div.classList.remove('ativo');
        });
        liExperience.forEach((botao)=>{
            botao.classList.remove('ativo');
        });
        divExperience[index].classList.add('ativo')
        liExperience[index].classList.add('ativo')
    }

    function slideShow2(index){
        divEducation.forEach((div)=>{
            div.classList.remove('ativo');
        });
        liEducation.forEach((botao)=>{
            botao.classList.remove('ativo');
        });
        divEducation[index].classList.add('ativo')
        liEducation[index].classList.add('ativo')
    }
    liExperience.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow(index)
        });
    });
    liEducation.forEach((event,index)=>{
        event.addEventListener('click', ()=>{
            slideShow2(index)
        });
    });
    
}
sobreMim()

const listaALL = document.querySelectorAll('.projectsArmazenamento ul li')
const buttonGeral = document.querySelectorAll('.projectsModels ul li')
const buttonall = document.querySelectorAll('.projectsModels .all')

function removeClick(index){
    buttonGeral.forEach((item)=>{
        item.classList.remove('ativo')
    });
    buttonGeral[index].classList.add('ativo');
}

buttonGeral.forEach((item, index) =>{
    item.addEventListener('click', ()=>{
        removeClick(index);
    })
})

function showLista(lista, buttom = "all"){
    lista.forEach((item)=>{
        item.classList.remove('ativo')
    })
    if(buttom == 'design'){
        lista[0].classList.add('ativo')
        lista[1].classList.add('ativo')
    }
    if(buttom == 'graphic'){
        lista[2].classList.add('ativo')
        lista[3].classList.add('ativo')
    }
    if(buttom == 'website'){
        lista[4].classList.add('ativo')
        lista[5].classList.add('ativo')
        lista[6].classList.add('ativo')
        lista[7].classList.add('ativo')
    }
    if(buttom == 'all'){
        lista[0].classList.add('ativo')
        lista[1].classList.add('ativo')
        lista[2].classList.add('ativo')
        lista[3].classList.add('ativo')
        lista[4].classList.add('ativo')
        lista[5].classList.add('ativo')
        lista[6].classList.add('ativo')
        lista[7].classList.add('ativo')
    }
}


buttonGeral.forEach((item)=>{
    item.addEventListener('click', (e)=>{
        let currentButton = e.target;
        if(currentButton.classList.contains('all')){
        showLista(listaALL);
        }
        if(currentButton.classList.contains('design')){
        showLista(listaALL, "design");
        }
        if(currentButton.classList.contains('graphic')){
        showLista(listaALL, "graphic");
        }
        if(currentButton.classList.contains('website')){
        showLista(listaALL, "website");
        }
        if(currentButton.classList.contains('all')){
        showLista(listaALL, "all");
        }
    })
})