function Book1()
{
  try
  {
      let a1=document.getElementById('a1');

  let response = fetch('https://anapioficeandfire.com/api/books/1').then((l)=>{
    return l.json();
   }).then((j)=>{console.log(j);
    
        window.card=`
       <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
           <li class="list-group-item">Book Name: ${j.name}</li>
           <li class="list-group-item">ISBN: ${j.isbn}</li>
           <li class="list-group-item">Authors: ${j.authors}</li>
           <li class="list-group-item">Publishers: ${j.publisher}</li>
           <li class="list-group-item">Released: ${j.released}</li>
         </ul>
       </div>`
   
       a1.innerHTML += card;
   let a2=document.getElementById('a2')
    for(let i=0;i<5;i++)
    {
    
    let response = fetch(j.characters[i]).then((m)=>{
        return m.json();
    }).then((n)=>{console.log(n);

        window.title=`
         <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
       <li class="list-group-item">BookTitle: ${n.name}</li>
    ` 
    a2.innerHTML += title;  
  })
     }
     
    })
  } catch(error){
    console.log('NetworkError')
  }
}

function Book2()
{
  try
  {
      let b1=document.getElementById('b1');

  let response = fetch('https://anapioficeandfire.com/api/books/2').then((l)=>{
    return l.json();
   }).then((j)=>{console.log(j);
    
        window.card=`
       <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
           <li class="list-group-item">Book Name: ${j.name}</li>
           <li class="list-group-item">ISBN: ${j.isbn}</li>
           <li class="list-group-item">Authors: ${j.authors}</li>
           <li class="list-group-item">Publishers: ${j.publisher}</li>
           <li class="list-group-item">Released: ${j.released}</li>
         </ul>
       </div>`
   
       b1.innerHTML += card;
   let b2=document.getElementById('b2')
    for(let i=0;i<5;i++)
    {
    
    let response = fetch(j.characters[i]).then((m)=>{
        return m.json();
    }).then((n)=>{console.log(n);

        window.title=`
         <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
       <li class="list-group-item">BookTitle: ${n.name}</li>
    ` 
    b2.innerHTML += title;  
  })
     }
     
    })
  } catch(error){
    console.log('NetworkError')
  }
}

function Book3()
{
  try
  {
      let c1=document.getElementById('c1');

  let response = fetch('https://anapioficeandfire.com/api/books/3').then((l)=>{
    return l.json();
   }).then((j)=>{console.log(j);
    
        window.card=`
       <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
           <li class="list-group-item">Book Name: ${j.name}</li>
           <li class="list-group-item">ISBN: ${j.isbn}</li>
           <li class="list-group-item">Authors: ${j.authors}</li>
           <li class="list-group-item">Publishers: ${j.publisher}</li>
           <li class="list-group-item">Released: ${j.released}</li>
         </ul>
       </div>`
   
       c1.innerHTML += card;
   let c2=document.getElementById('c2')
    for(let i=0;i<5;i++)
    {
    
    let response = fetch(j.characters[i]).then((m)=>{
        return m.json();
    }).then((n)=>{console.log(n);

        window.title=`
         <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
       <li class="list-group-item">BookTitle: ${n.name}</li>
    ` 
    c2.innerHTML += title;  
  })
     }
     
    })
  } catch(error){
    console.log('NetworkError')
  }
}

function Book4()
{
  try
  {
      let d1=document.getElementById('d1');

  let response = fetch('https://anapioficeandfire.com/api/books/4').then((l)=>{
    return l.json();
   }).then((j)=>{console.log(j);
    
        window.card=`
       <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
           <li class="list-group-item">Book Name: ${j.name}</li>
           <li class="list-group-item">ISBN: ${j.isbn}</li>
           <li class="list-group-item">Authors: ${j.authors}</li>
           <li class="list-group-item">Publishers: ${j.publisher}</li>
           <li class="list-group-item">Released: ${j.released}</li>
         </ul>
       </div>`
   
       d1.innerHTML += card;
   let d2=document.getElementById('d2')
    for(let i=0;i<5;i++)
    {
    
    let response = fetch(j.characters[i]).then((m)=>{
        return m.json();
    }).then((n)=>{console.log(n);

        window.title=`
         <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
       <li class="list-group-item">BookTitle: ${n.name}</li>
    ` 
    d2.innerHTML += title;  
  })
     }
     
    })
  } catch(error){
    console.log('NetworkError')
  }
}

function Book5()
{
  try
  {
      let e1=document.getElementById('e1');

  let response = fetch('https://anapioficeandfire.com/api/books/5').then((l)=>{
    return l.json();
   }).then((j)=>{console.log(j);
    
        window.card=`
       <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
           <li class="list-group-item">Book Name: ${j.name}</li>
           <li class="list-group-item">ISBN: ${j.isbn}</li>
           <li class="list-group-item">Authors: ${j.authors}</li>
           <li class="list-group-item">Publishers: ${j.publisher}</li>
           <li class="list-group-item">Released: ${j.released}</li>
         </ul>
       </div>`
   
       e1.innerHTML += card;
   let e2=document.getElementById('e2')
    for(let i=0;i<5;i++)
    {
    
    let response = fetch(j.characters[i]).then((m)=>{
        return m.json();
    }).then((n)=>{console.log(n);

        window.title=`
         <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
       <li class="list-group-item">BookTitle: ${n.name}</li>
    ` 
    e2.innerHTML += title;  
  })
     }
     
    })
  } catch(error){
    console.log('NetworkError')
  }
}

function Book6()
{
  try
  {
      let f1=document.getElementById('f1');

  let response = fetch('https://anapioficeandfire.com/api/books/6').then((l)=>{
    return l.json();
   }).then((j)=>{console.log(j);
    
        window.card=`
       <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
           <li class="list-group-item">Book Name: ${j.name}</li>
           <li class="list-group-item">ISBN: ${j.isbn}</li>
           <li class="list-group-item">Authors: ${j.authors}</li>
           <li class="list-group-item">Publishers: ${j.publisher}</li>
           <li class="list-group-item">Released: ${j.released}</li>
         </ul>
       </div>`
   
       f1.innerHTML += card;
   let f2=document.getElementById('f2')
    for(let i=0;i<5;i++)
    {
    
    let response = fetch(j.characters[i]).then((m)=>{
        return m.json();
    }).then((n)=>{console.log(n);

        window.title=`
         <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
       <li class="list-group-item">BookTitle: ${n.name}</li>
    ` 
    f2.innerHTML += title;  
  })
     }
     
    })
  } catch(error){
    console.log('NetworkError')
  }
}

function Book7()
{
  try
  {
      let g1=document.getElementById('g1');

  let response = fetch('https://anapioficeandfire.com/api/books/7').then((l)=>{
    return l.json();
   }).then((j)=>{console.log(j);
    
        window.card=`
       <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
           <li class="list-group-item">Book Name: ${j.name}</li>
           <li class="list-group-item">ISBN: ${j.isbn}</li>
           <li class="list-group-item">Authors: ${j.authors}</li>
           <li class="list-group-item">Publishers: ${j.publisher}</li>
           <li class="list-group-item">Released: ${j.released}</li>
         </ul>
       </div>`
   
       g1.innerHTML += card;
   let g2=document.getElementById('g2')
    for(let i=0;i<5;i++)
    {
    
    let response = fetch(j.characters[i]).then((m)=>{
        return m.json();
    }).then((n)=>{console.log(n);

        window.title=`
         <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
       <li class="list-group-item">BookTitle: ${n.name}</li>
    ` 
    g2.innerHTML += title;  
  })
     }
     
    })
  } catch(error){
    console.log('NetworkError')
  }
}


function Book8()
{
  try
  {
      let h1=document.getElementById('h1');

  let response = fetch('https://anapioficeandfire.com/api/books/8').then((l)=>{
    return l.json();
   }).then((j)=>{console.log(j);
    
        window.card=`
       <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
           <li class="list-group-item">Book Name: ${j.name}</li>
           <li class="list-group-item">ISBN: ${j.isbn}</li>
           <li class="list-group-item">Authors: ${j.authors}</li>
           <li class="list-group-item">Publishers: ${j.publisher}</li>
           <li class="list-group-item">Released: ${j.released}</li>
         </ul>
       </div>`
   
       h1.innerHTML += card;
   let h2=document.getElementById('h2')
    for(let i=0;i<5;i++)
    {
    
    let response = fetch(j.characters[i]).then((m)=>{
        return m.json();
    }).then((n)=>{console.log(n);

        window.title=`
         <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
       <li class="list-group-item">BookTitle: ${n.name}</li>
    ` 
    h2.innerHTML += title;  
  })
     }
     
    })
  } catch(error){
    console.log('NetworkError')
  }
}

function Book9()
{
  try
  {
      let o1=document.getElementById('o1');

  let response = fetch('https://anapioficeandfire.com/api/books/9').then((l)=>{
    return l.json();
   }).then((j)=>{console.log(j);
    
        window.card=`
       <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
           <li class="list-group-item">Book Name: ${j.name}</li>
           <li class="list-group-item">ISBN: ${j.isbn}</li>
           <li class="list-group-item">Authors: ${j.authors}</li>
           <li class="list-group-item">Publishers: ${j.publisher}</li>
           <li class="list-group-item">Released: ${j.released}</li>
         </ul>
       </div>`
   
       o1.innerHTML += card;
   let o2=document.getElementById('o2')
    for(let i=0;i<5;i++)
    {
    
    let response = fetch(j.characters[i]).then((m)=>{
        return m.json();
    }).then((n)=>{console.log(n);

        window.title=`
         <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
       <li class="list-group-item">BookTitle: ${n.name}</li>
    ` 
    o2.innerHTML += title;  
  })
     }
     
    })
  } catch(error){
    console.log('NetworkError')
  }
}


function Book10()
{
  try
  {
      let p1=document.getElementById('p1');

  let response = fetch('https://anapioficeandfire.com/api/books/10').then((l)=>{
    return l.json();
   }).then((j)=>{console.log(j);
    
        window.card=`
       <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
           <li class="list-group-item">Book Name: ${j.name}</li>
           <li class="list-group-item">ISBN: ${j.isbn}</li>
           <li class="list-group-item">Authors: ${j.authors}</li>
           <li class="list-group-item">Publishers: ${j.publisher}</li>
           <li class="list-group-item">Released: ${j.released}</li>
         </ul>
       </div>`
   
       p1.innerHTML += card;
   let p2=document.getElementById('p2')
    for(let i=0;i<5;i++)
    {
    
    let response = fetch(j.characters[i]).then((m)=>{
        return m.json();
    }).then((n)=>{console.log(n);

        window.title=`
         <div class="card" style="width: 18rem;">
         <ul class="list-group list-group-flush">
       <li class="list-group-item">BookTitle: ${n.name}</li>
    ` 
    p2.innerHTML += title;  
  })
     }
     
    })
  } catch(error){
    console.log('NetworkError')
  }
}
