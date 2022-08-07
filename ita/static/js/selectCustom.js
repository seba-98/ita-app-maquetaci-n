
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
        {name:'argentina', value:'+54'},
        {name:'brazil', value:'+55'},
        {name:'colombia', value:'+57'},
        {name:'costarica', value:'+506'},
        {name:'españa', value:'+34'},
        {name:'usa', value:'+1'},
        {name:'mexico', value:'+52'},
      ]
      
      for (const flag of areas) {
      
        const option= document.createElement('div');

        option.innerHTML=`
        <li class="select_options" id="${flag.value}">
            <div id="select_field">
                <img class="select_img" src="../../static/images/flags/${flag.name}.png" alt="${flag} img">
                <p id="selected_text">${flag.value}</p>
            </div>
        </li>
        `
        selectList.appendChild(option);
      }
      
      
      
      for (const option of options) {
        let inputValue = document.getElementById('selectInputValue');
        
        option.addEventListener('click',(e)=>{
          selectedfield.innerHTML=option.outerHTML;
          inputValue.value =  option.id;
          selectList.style.display='none'
    })
    }


