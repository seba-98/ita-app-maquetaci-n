
      
      let selectSidebarList=document.getElementById('select_sidebar_list'); //sidebarlist
      let selectSidebarfield=document.getElementById('select_sidebar_field');
      let selectedSidebarText=document.getElementById('selected_sidebar_text');
      let sidebarAreaInput=document.getElementById('sidebarAreaInput');
      let sidebarOptions=document.getElementsByClassName('select_sidebar_options');
      
      const sidebarAreas=[
        {name:'argentina', value:'+54'},
        {name:'brazil', value:'+55'},
        {name:'colombia', value:'+57'},
        {name:'costarica', value:'+506'},
        {name:'españa', value:'+34'},
        {name:'usa', value:'+1'},
        {name:'mexico', value:'+52'},
      ]


      for (const flag of sidebarAreas) {
        
        const option= document.createElement('div');
        
        option.innerHTML=`
        <li class="select_sidebar_options" id="${flag.value}">
          <div id="select_sidebar_field">
          <img class="select_img" src="../../static/images/flags/${flag.name}.png" alt="${flag} img">
          <p id="selected_sidebar_text">${flag.value}</p>
          </div>
        </li>
        `
        selectSidebarList.appendChild(option);
      }
      
      selectSidebarfield.addEventListener('click',()=>{
        if(selectSidebarList.style.display == 'none' || selectSidebarList.style.display == ''){
           selectSidebarList.style.display='block'
          }
          else{
            selectSidebarList.style.display='none'
          }
      })

       
      for (const option of sidebarOptions) {
        let inputValue = document.getElementById('selectSidebarInputValue');
        
        option.addEventListener('click',(e)=>{
          selectSidebarfield.innerHTML=option.outerHTML;
          inputValue.value =  option.id;
          selectSidebarList.style.display='none'
        })
      }