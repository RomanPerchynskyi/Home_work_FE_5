const root = document.querySelector('#root');
const form = document.querySelector('.addInfo');

form.addEventListener('submit', function(event){
        event.preventDefault();
        const name = form.name;
        const lastname = form.lastname;
        
        const Container = document.createElement('div'); 
        const pName = document.createElement('p');
        const pLastname = document.createElement('p');
            
        Container.classList.add('item');

            pName.innerText = name.value;
            pLastname.innerText = lastname.value;
        
            Container.append(pName, pLastname);
            root.append(Container);
        
        
        
            name.value ='';
            lastname.value ='';
})