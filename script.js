/* TODO: inserite il codice JavaScript necessario a commentopletare il MHW! */


function select(){
    
  const image=event.currentTarget; 
  if(image.dataset.questionId === 'one'){
    ris[0] = aggiorna(1,image);
    
  }
  else if(image.dataset.questionId === 'two'){
    ris[1] = aggiorna(2,image);
    
  }
  else{
    ris[2] = aggiorna(3,image);
    
  }
  
  if(ris[0] != null && ris[1] != null && ris[2] != null ){
    frase_stampata(ris);
  }
}



function aggiorna(n_domanda, image){
  const lista_aggiorna=[];
  
  if(n_domanda===1){
    const generale = document.querySelectorAll('div[data-question-id="one"]');
    for(const j of generale){
      lista_aggiorna.push(j);
      j.classList.remove('selezionato');
      j.classList.remove('non_selezionato');
      const V = j.querySelector('.checkbox');
      V.src="images/unchecked.png";
    }
  }

  else if(n_domanda===2){
    const generale = document.querySelectorAll('div[data-question-id="two"]');
    for(const j of generale){
      lista_aggiorna.push(j);
      j.classList.remove('selezionato');
      j.classList.remove('non_selezionato');
      const V = j.querySelector('.checkbox');
      V.src="images/unchecked.png";
    }
  }
  else{
    const generale = document.querySelectorAll('div[data-question-id="three"]');
    for(const j of generale){
      lista_aggiorna.push(j);
      j.classList.remove('selezionato');
      j.classList.remove('non_selezionato');
      const V = j.querySelector('.checkbox');
      V.src="images/unchecked.png";
    }
  }
  const indice=lista_aggiorna.indexOf(image); //index of ti ritorna l'indice di una lista che passi.
  lista_aggiorna.splice(indice, 1); //splice cancella all'interno della lista l'indice trovato tramite index of, e l'1 e la quantità
  for(const j of lista_aggiorna){
    j.classList.add('non_selezionato');
  }
  image.classList.add('selezionato');
  const V = image.querySelector('.checkbox');
  V.src="images/checked.png";
  return image.dataset.choiceId;
}



  
  function frase_stampata(ris){
    if((ris[0] === ris[1]) || (ris[1] === ris[2])){
      const titolo = document.getElementById('titolo');
      const commento = document.getElementById('commento');
      titolo.textContent = RESULTS_MAP[ris[1]].title;
      commento.textContent = RESULTS_MAP[ris[1]].contents;
      
    }
    else{
      const titolo = document.getElementById('titolo');
      const commento = document.getElementById('commento');
      titolo.textContent = RESULTS_MAP[ris[0]].title;
      commento.textContent = RESULTS_MAP[ris[0]].contents;
      
    }
    const cont = document.querySelectorAll('.choice-grid div');
    for (const img2 of cont)
    {
      img2.removeEventListener('click', select);
    }

  }



  function reset(){
    const testo= document.querySelector('#frase');
    testo.classList.add('hidden');
    const blocchi = document.querySelectorAll('.choice-grid div');
    for( const j of blocchi){
      j.classList.remove('selezionato');
      j.classList.remove('non_selezionato');
      const V = j.querySelector('.checkbox');
      V.src="images/unchecked.png";
      j.addEventListener('click', select);
    }
    for(let j = 0; j<3; j++){
      ris[j]=null;
    }
  }

  
    
  const ris=[];
  
  const imm1 = document.querySelectorAll('.choice-grid div');
  for (const img2 of imm1)
  {
    img2.addEventListener('click', select);
  }
  const res = document.querySelector('#responsive');
  res.addEventListener('click', reset);
  
  
  
  
  
  