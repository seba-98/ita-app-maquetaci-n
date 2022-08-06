
    let selectList=document.getElementById('select_list');
    
    let selectedfield=document.getElementById('select_field');
    let selectedText=document.getElementById('selected_text');
    let robotAreaInput=document.getElementById('robotAreaInput');
    let options=document.getElementsByClassName('select_options');
    
    selectedfield.addEventListener('click',()=>{
      if(selectList.style.display == 'none' || selectList.style.display == ''){
         selectList.style.display='block'
        }
        else{
        selectList.style.display='none'
      }
    })
    
  

    const areas=[
        'argentina',
        'brazil',
        'colombia',
        'costarica',
        'españa',
        'usa',
        'mexico',
      ]
      
      for (const flag of areas) {
      
        const option= document.createElement('div');

        option.innerHTML=`
        <li class="select_options">
            <div id="select_field">
                <img class="select_img" src="../../static/images/flags/${flag}.png" alt="${flag} img">
                <p id="selected_text">${flag.slice(0,3)}</p>
            </div>
        </li>
        `

        selectList.appendChild(option);
      }
      

        
    for (const option of options) {
        let inputValue = document.getElementById('selectInputValue');
            
        option.addEventListener('click',(e)=>{
        selectedfield.innerHTML=option.outerHTML;
        inputValue.value =  option.textContent.trim();
    })
    }


