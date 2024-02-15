    var __appState = {
    selected: 0,
    debugToggle: false, 

    dishes: [
        {
            name: "Ramen",
            cuisine: "Japanese",
            model: 'ramen.glb',
            volumeModel: 'ramen.glb',
            Animation: {clip:0, action: 'play'},
            vAnimation: {clip:0, action: 'play'},
            scale: 2,
            scale2: 2,
            rotation: "0 0 0", 
            position: "0 0 0", 
            // volumePosition: "-0.01 -0.015 -0.01",
            volumePosition: "0 0 0",
            desc: "Ingredients: Bean sprouts, Bamboo shoots, Shoyu broth, Chashu pork, Chicken, Corn, Ginger, Green onions, Miso paste, Mushrooms, Nori, Ramen noodles, Sesame oil, Sesame seeds, Soy sauce, Tofu.",
            allergens: "Allergens: Eggs (used in soft-boiled eggs), Sesame (in sesame oil and seeds), Soy (in soy sauce and toppings), Wheat (in noodles and broths).",
            recipe: "Start by boiling chicken or pork bones in water to create the broth. \nAdd soy sauce, mirin, garlic cloves, ginger, and green onions to the pot. \nInclude kombu and dried shiitake mushrooms for depth of flavor. \nSimmer the broth on low heat for at least 6 hours, then strain. \nCook ramen noodles according to package instructions. \nPrepare toppings: slice chashu, halve ajitama, and chop green onions. \nAssemble the ramen by placing noodles in a bowl, pouring hot broth over them, and adding toppings. \nGarnish with sesame seeds and serve immediately.\n",
            ingredients: "Chicken or pork bones, Water, Soy sauce, Mirin, Garlic cloves, Ginger, Green onions, Kombu, Dried shiitake mushrooms, Ramen noodles, Chashu, Ajitama, Bamboo shoots, Nori, and optional toppings like Corn, Butter, and Spicy bean sprout.",
        },

        {
            name: "Sashimi Bowl",
            cuisine: "Japanese",
            model: 'sashimi_bowl.glb',
            volumeModel: 'sashimi_bowl.glb',
            Animation: {clip:0, action: 'play'},
            vAnimation: {clip:0, action: 'play'},
            scale: 0.35,
            scale2: 0.35,
            rotation: "0 0 0",
            position: "0 0 0",
            // volumePosition: "-0.01 -0.010 -0.01",
            volumePosition: "0 0 0",
            desc: "Ingredients: Sashimi-grade fish (such as tuna or salmon), rice (check for potential cross-contamination if allergic to gluten), avocado, cucumber, edamame, seaweed (Nori), soy sauce, pickled ginger, wasabi.",
            allergens: "Allergens: soy sauce(look for soy-free sauces), fish(be deliberate in choosing other fish for your dish).",
            recipe: "Prepare sushi rice by cooking it and seasoning with a mix of rice vinegar, sugar, and salt. \nLet it cool. \nThinly slice fresh fish such as salmon, tuna, and yellowtail for the topping. \nCut avocado and cucumber into thin slices. \nIn a bowl, spread a layer of sushi rice as the base. \nArrange the fish slices and vegetable toppings over the rice. \nGarnish with seaweed salad, masago or tobiko, and pickled ginger. \nServe with soy sauce and wasabi on the side.\n",
            ingredients: "Short-grain sushi rice, Rice vinegar, Sugar, Salt, Fresh slices of fish such as Salmon, Tuna, Yellowtail, Avocado, Cucumber, Seaweed salad, Masago or Tobiko, Pickled ginger, Wasabi, and Soy sauce for serving.",
        },

        {
            name: "Shake Don",
            cuisine: "Japanese",
            model: 'sushi_bowl.glb',
            volumeModel: 'sushi_bowl.glb',
            Animation: {clip:0, action: 'play'},
            vAnimation: {clip:0, action: 'play'},
            scale: 0.35,
            scale2: 0.35,
            rotation: "45 0 0",
            position: "0 0 0",
            // volumePosition: "-0.01 0.05 -0.01",
            volumePosition: "0 0 0",
            desc: "Ingredients: Sushi Rice, Salmon (Shake), Avocado, Cucumber, Nori (Seaweed), Sesame Seeds, Soy Sauce (contains soy and wheat; choose gluten-free if needed), Pickled Ginger, Wasabi.",
            allergens: "Allergens: soy sauce(look for soy-free sauces), fish(be deliberate in choosing other fish for your dish).",
            recipe: "Cook short-grain Japanese rice and set aside to cool slightly. \nMarinate salmon fillets in a mixture of soy sauce, mirin, sake (optional), and sugar. \nPan-fry the salmon until fully cooked, then let it cool and cut into bite-sized pieces. \nPlace a serving of rice in a bowl, top with cooked salmon. \nGarnish with chopped green onions, sesame seeds, and shredded nori. \nOptionally, add a dollop of wasabi to the bowl for extra heat. \nServe immediately while warm.\n",
            ingredients: "Short-grain Japanese rice, Fresh salmon fillets, Soy sauce, Mirin, Sake (optional), Sugar, Green onions, Sesame seeds, Shredded nori, and optional Wasabi for seasoning.",
        },

        // {
        //     name: "Pizza Margarita",
        //     cuisine: "Italian",
        //     model: 'pizza.glb',
        //     volume: 'pizza.glb',
        //     Animation: {clip:0, action: 'play'},
        //     vAnimation: {clip:0, action: 'play'},
        //     scale: 0.2,
        //     scale2: 0.6,
        //     rotation: "45 0 0",
        //     position: "0 0 0",
        //     volumePosition: "0.01 0.05 0.01",
        //     desc: "Ingredients: pizza dough, fresh tomatoes, fresh mozzarella cheese, fresh basil, olive oil, garlic, salt and pepper to taste.",
        //     allergens: "Allergens: gluten (dough), dairy (cheese).",
        // },

        // {
        //     name: "Bacon Red Pepper Pizza",
        //     cuisine: "Italian",
        //     model: 'white_pizza.glb',
        //     volume: 'white_pizza.glb',
        //     Animation: {clip:0, action: 'play'},
        //     vAnimation: {clip:0, action: 'play'},
        //     scale: 0.2,
        //     scale2: 0.6,
        //     rotation: "45 0 0",
        //     position: "0 0 0",
        //     volumePosition: "0.01 0.05 0.01",
        //     desc: "Ingredients: Pizza dough, fresh tomatoes, mozzarella cheese, bacon, red pepper, black pepper (spice), mushrooms.",
        //     allergens: "Allergens: gluten (dough), dairy (cheese).",
        // },
    ],

    next: function (){
        if (this.selected < this.dishes.length - 1){
            this.selected++
        }
    },

    prev: function (){
        if (this.selected > 0) {
            this.selected--
        }
    },

    render: function () {
        let selectedDish = this.dishes[this.selected];

        document.querySelector("#name").innerText = selectedDish.name;
        document.querySelector("#cuisine").innerText = selectedDish.cuisine;
        document.querySelector("#desc").innerText = selectedDish.desc;
        document.querySelector("#allergens").innerText = selectedDish.allergens;
        document.querySelector("#recipe").innerText = selectedDish.recipe;
        document.querySelector("#ingredients").innerText = selectedDish.ingredients;

        let childArray = Array.from(document.querySelector("#models").childNodes);
        let foodModels = Array.from(document.querySelector("#food-models").childNodes);

        // Hide all the dishes but the selected one
        childArray.forEach(child =>{
            if (child.dataset.name == App.dishes[App.selected].name){
                child.object3D.visible = true;

            } else {
                child.object3D.visible = false;
            }
        });

        foodModels.forEach(child =>{
            if(child.dataset.name == App.dishes[App.selected].name){
                child.object3D.visible = true;
            } else {
                child.object3D.visible = false;
            }
        });
    },
}

    //Magic reactivity

    const handler = {
        set (target, property, value){
            target[property] = value;
            App.render();
            return true;
        }
    };

    //Magic reactivity
    const App = new Proxy(__appState, handler);

    App.dishes.forEach(dish =>{
        let model = document.createElement("mr-model");
        model.setAttribute("src", "./assets/" + dish.model);
        model.dataset.name = dish.name;
        model.dataset.position = dish.position;
        model.dataset.rotation = dish.rotation;
        model.object3D.visible = false; 

        let volumeModel = document.createElement("mr-model");

        volumeModel.setAttribute("src", "./assets/" + dish.volumeModel);
        volumeModel.dataset.name = dish.name;
        volumeModel.dataset.position = dish.volumePosition;
        volumeModel.object3D.visible = false;

        Object.assign(model.style, {
            scale: dish.scale
        })

        Object.assign (volumeModel.style, {
            scale: dish.scale2
        })

       

        document.querySelector("#models").append(model);
        document.querySelector("#food-models").append(volumeModel);

        model.onLoad = () => {
            model.components.set('animation', dish.animation);
        }

        volumeModel.onload = () =>{
            volumeModel.components.set('animation', dish.vAnimation);

        }

    });

    document.addEventListener('DOMContentLoaded', function(){
        App.selected = 0;
    });


    /*********** begin: mr-food entity ***********/

    class MRFood extends MREntity {

        constructor() {
            super()

            const geometry = new THREE.BoxGeometry(0.99, 0.99, 0.99);

            const material = new THREE.MeshPhongMaterial({
                // color: '#0235ff',
                // side: 2,
                // transparent: true,
                // opacity: 0,
                // specular: '#7989c4',
                // clipping: true
            })

            this.mesh = new THREE.Mesh(geometry.material)
            this.object3D.add(this.mesh)
        }
    }

    customElements.define('mr-food', MRFood);


    /*********** end: mr-food entity ***********/

    /*********** start: mr.js app code ***********/

    let volume = document.getElementById('volume')
    let panel = document.getElementById('panel')
    let xrButton = document.getElementById('xr-button')

    volume.object3D.visible = false

    let worldPosition = new THREE.Vector3()

    function toggleMR() {
        if (!mrjsUtils.xr.isPresenting) {
            return
        }
        volume.object3D.visible = !volume.object3D.visible
    }

    let food = document.getElementById('food')

    document.addEventListener('anchored', (e) => {

        if (e.target == food.parentElement && e.target.plane) {
            let width = e.target.plane.dimensions.x - 0.01
            let depth = e.target.plane.dimensions.z - 0.01
            let height = width > depth ? width : depth
            height /= 1.5

        }
    })

    document.addEventListener('exitXR', (e) => {
        volume.object3D.visible = false
    })




