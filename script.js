function randomPizza(){
        var pizza = {};
                     crust = Math.round(Math.random()*2+1);
                     if (crust ==1) {crust="Hand-Tossed"}
                      else if (crust ==2){crust="Thin crust"}
                     else if(crust==3){crust="Pan"}
        pizza.crust = crust;
                     protein = Math.round(Math.random()*2+1);
                     if (protein ==1) {protein="Pepperoni"}
                     else if (protein ==2){protein="Bacon"}
                    else if(protein==3){protein="Ham"}
        pizza.protein = protein;
                    cheese = Math.round(Math.random()*2+1);
                    if (cheese ==1) {cheese="Mozarella"}
                    else if (cheese ==2){cheese="Mexican Blend"}
                    else if(cheese==3){cheese="Italina Blend"}
        pizza.cheese = cheese;
                     sauce = Math.round(Math.random()*2+1);
                    if (sauce ==1) {sauce="Roma Italiano"}
                    else if (sauce ==2){sauce="Marinara"}
                    else if(sauce==3){sauce="Creamy Alfredo"}
        pizza.sauce = sauce;
                    pizza.toppings = "";
                    toppings = Math.round(Math.random());
                        if (toppings){pizza.toppings+="Green Pepper"}
                        toppings = Math.round(Math.random());
                        if (toppings){pizza.toppings+=", Onion"}
                        toppings = Math.round(Math.random());
                        if (toppings){pizza.toppings+=", Mushroom"}
                        toppings = Math.round(Math.random());
                        if (toppings){pizza.toppings+=", Black Olive"}
                        toppings = Math.round(Math.random());
                        if (toppings){pizza.toppings+=", Minced Garlic,"}
                        toppings = Math.round(Math.random());
                        if (toppings){pizza.toppings+=", Fresh Basil"}
                        toppings = Math.round(Math.random());
                        if (toppings){pizza.toppings+=", Chilli Flakes"}
                        toppings = Math.round(Math.random());
                        if (toppings){pizza.toppings+=", Grated Parmesean"}
        return pizza;
    }

    console.log(randomPizza());