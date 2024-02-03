const quoteArr =[

    {'author': '', 
    'wisdom': ''
   },

    {'author': 'Jim Rohn', 
    'wisdom': 'Beware of what you become in pursuit of what you want.'
   },

   {'author': 'Epictetus', 
    'wisdom': 'It\'s not what happens to you, but how you react to it that matters.'
   },

   {'author': 'Frank Sinatra', 
    'wisdom': 'The best revenge is massive success.'
   },

   {'author': 'Wayne Gretzy', 
   'wisdom': "You miss 100% of the shots you don't take."
   },

   {'author': 'Nelson Mandela', 
   'wisdom': '"Resentment is like drinking poison and waiting for your enemies to die."'
  },

  {'author': 'Elbert Hubbard', 
  'wisdom': '"Do not take life too seriously. You will not get out alive."'
 },

 {'author': 'Frank Sinatra', 
    'wisdom': 'The best revenge is massive success.'
   },

   
{'author': 'Wayne Gretzy', 
'wisdom': "You miss 100% of the shots you don't take."
},


   {'author': 'Nelson Mandela', 
   'wisdom': '"Resentment is like drinking poison and waiting for your enemies to die."'
  },

  {'author': 'Elbert Hubbard', 
  'wisdom': '"Do not take life too seriously. You will not get out alive."'
 },

{'author': 'Frank Sinatra', 
    'wisdom': 'The best revenge is massive success.'
   },

 {'author': 'Epictetus', 
    'wisdom': 'It\'s not what happens to you, but how you react to it that matters.'
   },

   {'author': 'Wayne Gretzy', 
   'wisdom': "You miss 100% of the shots you don't take."
   },
   
  {'author': 'Elbert Hubbard', 
  'wisdom': '"Do not take life too seriously. You will not get out alive."'
 },

 {'author': 'Frank Sinatra', 
 'wisdom': 'The best revenge is massive success.'
},

{'author': 'Wayne Gretzy', 
    'wisdom': "You miss 100% of the shots you don't take."
   },

   {'author': 'Elbert Hubbard', 
   'wisdom': '"Do not take life too seriously. You will not get out alive."'
  },
 
  {'author': 'Frank Sinatra', 
     'wisdom': 'The best revenge is massive success.'
    },
 
    
 {'author': 'Wayne Gretzy', 
 'wisdom': "You miss 100% of the shots you don't take."
 },
 
 
    {'author': 'Nelson Mandela', 
    'wisdom': '"Resentment is like drinking poison and waiting for your enemies to die."'
   },
 
   {'author': 'Elbert Hubbard', 
   'wisdom': '"Do not take life too seriously. You will not get out alive."'
  },
 
 {'author': 'Frank Sinatra', 
     'wisdom': 'The best revenge is massive success.'
    },
 
  {'author': 'Epictetus', 
     'wisdom': 'It\'s not what happens to you, but how you react to it that matters.'
    },
    
   {'author': 'Elbert Hubbard', 
   'wisdom': '"Do not take life too seriously. You will not get out alive."'
  },
 
  {'author': 'Frank Sinatra', 
  'wisdom': 'The best revenge is massive success.'
 },
 
 {'author': 'Wayne Gretzy', 
     'wisdom': "You miss 100% of the shots you don't take."
    },
    ];


function Quote()
{
   var quote1 = Number.parseInt(Math.random()*quoteArr.length + 1);
document.querySelector("#text").textContent = `\"${quoteArr[quote1].wisdom}\"`;
document.querySelector("#author").textContent = `--${quoteArr[quote1].author}`;
}
 
