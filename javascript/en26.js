// Example numero 26

// defininu klase Car
function Car(brand, model, engine, price){
    this.brand = brand;
    this.model = model;
    this.engine = engine;
    this.basePrice = price;
    
    this.getPrice = function(){
        let additionalPrice = 0;
        if(this.engine === "electric"){
            additionalPrice = 10000;
        } else if (this.engine === "diesel"){
            additionalPrice = 5000;
        }
        return this.basePrice + additionalPrice;
    }
    
    this.wroom = function (){
        console.log("wroom says " + this.model)
    }
}

// susikuriu kelis objektus pagal klases template
const audi = new Car("audi", "bulka", "electric", 40000);
const bmw = new Car("bmw", "gt", "diesel", 20000);

// consoleloginu

document.getElementById("classAudi").textContent = "class 1 = " + JSON.stringify(audi)
document.getElementById("classBmw").textContent = "class 2 = " + JSON.stringify(bmw)

document.getElementById("classAudiPrice").textContent = "Class 1 basePrice + additionalPrice = "+ audi.getPrice();
document.getElementById("classBmwPrice").textContent = "Class 2 basePrice + additionalPrice = "+ bmw.getPrice();
    
audi.wroom();
console.log(bmw.model);
console.log(audi.getPrice());
console.log(bmw.getPrice());
