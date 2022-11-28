 window.addEventListener('load',() =>{
    const form   = document.querySelector('.input') ; 
    const input1 =  document.querySelector('#input1') ; 
    const input2 =  document.querySelector('#input2') ; 
    const list_el = document.querySelector('.div') ;
    
    form.addEventListener('submit', e => {
        e.preventDefault() ; 
        const task1 = input1.value ;
        const task2 = input2.value ; 
        if(!task1)
        {
            alert('Please Enter the Tittle') ;    
            return ; 
        }
        const task_el = document.createElement("div") ; 
        task_el.classList.add("div2") ;

        const task_content_el1 = document.createElement("div") ; 
        task_content_el1.classList.add("content1") ;
        
        task_el.appendChild(task_content_el1) ; 

        const task_input1 = document.createElement("input") ; 
        task_input1.classList.add("div3")
        task_input1.type = "text" ; 
        task_input1.value = task1 ; 
        task_input1.setAttribute("readonly", "readonly") ;

        task_content_el1.appendChild(task_input1) ;

        const task_content_el2 = document.createElement('div') ; 
        task_content_el2.classList.add('content2') ;
        task_content_el2.innerText = task2 ; 

        task_el.appendChild(task_content_el2) ; 
        
        const task_input2 = document.createElement("input") ; 
        task_input2.classList.add("div4")
        task_input2.type = "text" ; 
        task_input2.value = task2 ; 
        task_input2.setAttribute("readonly", "readonly") ;

        task_content_el2.appendChild(task_input2) ;

        const action = document.createElement('div') ; 
        action.classList.add('content3') ; 

        task_el.appendChild(action) ; 

        const action1 = document.createElement("button") ; 
        action1.classList.add("div5") ;  
        action1.innerText = 'X'

        action.appendChild(action1) ;

        list_el.appendChild(task_el) ;

        action1.addEventListener('click', e=>{
              list_el.removeChild(task_el) ; 
        })
    })
    
})
