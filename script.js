    document.addEventListener('DOMContentLoaded',function() {
    fetch('products.xml')
     .then(response=>{
        if(!response.ok){
            throw new Error('Network response was not ok');
        }
        return response.text(); 
    })                                                                                                                                         
     .then(data=>{
        const parser=new DOMParser();
        const xmlDoc=parser.parseFromString(data, 'text/xml');
        const products= xmlDoc.getElementsByTagName('product');
        const productGrid=document.getElementById('product-grid');

        for(let product of products){
            const name=product.getElementsByTagName('name')[0].textContent;
            const description=product.getElementsByTagName('description')[0].textContent;
            const price=product.getElementsByTagName('price')[0].textContent;
            const image=product.getElementsByTagName('image')[0].textContent;

            
               const productDiv=document.createElement('div');
               productDiv.classList.add('product-grid');
               productDiv.classList.add('product-container');
            
              
               const orderButton= document.createElement("button");
               orderButton.textContent='Order Now';
               orderButton.classList.add('order-btn');
               orderButton.addEventListener('click', function () {
                alert(`You have ordered: ${name}`);
               });

               productDiv.innerHTML=`
               <img src="${image}" alt="${name}">
               <h3>${name}</h3>
               <p>${description}</p>
               <p>Price:${price}</p>
               `;
            productDiv.appendChild(orderButton);
            productGrid.appendChild(productDiv);
        
        }
     });

    const contactForm=document.getElementById('contactForm');
    const contactMessage=document.getElementById('contactMessage');

    contactForm.addEventListener('submit',function(event){
        event.preventDefault();

        const name=document.getElementById('name').value;
        const email=document.getElementById('email').value;
        const message=document.getElementById('message').value;
        console.log('Name:',name,'Email:',email,'Message:',message);

        contactMessage.textContent='Message sent succesfully!';
           contactForm.reset();
    });
    
    function toggleTheme(){
        document.body.classList.toggle("dark-mode");
    }
});