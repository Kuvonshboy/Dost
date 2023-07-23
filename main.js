 const NewArr = [
    { 
     name:"Og'abek",
     years: 2003,
     gender: 'man'
    },

    { 
     name:"Sardor",
     years: 2004,
     gender: 'man'
    },
    
    { 
     name:"Anvar",
     years: 2003,
     gender: 'man'
    },
   
    { 
     name:"Akbar",
     years: 2003,
     gender: 'man'
    }, 
   
    { 
     name:"MAdina",
     years: 2004,
     gender: 'woman'
    }, 
    
    { 
     name:"Muhlisa",
     years: 2003,
     gender: 'woman'
    },

    { 
     name:"Mardon",
     years: 2004,
     gender: 'man'
    },

    { 
     name:"Bobur",
     years: 2004,
     gender: 'man'
    },
    
    { 
     name:"Zebo",
     years: 2004,
     gender: 'woman'
    },

    { 
     name:"Bonu",
     years: 2003,
     gender: 'woman'
    },

 ]

// function Dost(arr){
//     for (let i = 0; i < arr.length; i++){
//         if(arr[i].gender === `woman`){
//             console.log(arr[i].name);
//         }
//     }
// }
// Dost(NewArr)

 const person = () =>{
    NewArr.map((NewArr)=>{
        if(NewArr.years === 2004){
            console.log(NewArr.name);
        } 
    })
 }

 const btn = document.getElementById(`btn`);
 btn.addEventListener(`click`,person);
 btn.style.color =`red`
 btn.style.background= `darkgreen`