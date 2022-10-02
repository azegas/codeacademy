// Example numero 31
// codeacademy examples for reference


// example 1
// promise turi tureti resolve ir reject
const myPromise = new Promise((resolve, reject) => {
    // imituojam backendo response, pasakom, kad per 2 sekundes butinai backendas atsius kazka
    setTimeout(() => {
        resolve({ tekstas: "works" }); // pasakom kas bus, jeigu atsius duomenis
        // reject("labas, sufeilino nes servisas labai apkrautas");
    }, 2000);
});

myPromise
    .then((res) => {
        console.log(res);           // ka darom jeigu atsius
    })
    .catch((err) => console.log("err", err)); // ka darom jeigu neatsius


// example 2
const func = (username, password) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username && password) {
                resolve("Stuff worked!");
            } else {
                reject(Error("It broke"));
            }
        }, 2000);
    });
};

func("rob", "slaptazodis")
    .then((res) => {
        console.log("res", res);
    })
    .catch((err) => console.log("err", err));

// example3 - BAD example
const badFunc = (resolve, reject) => {
    setTimeout(() => {
        return "fail";
    }, 3000);
};

const goodFunc = () => {
    return "works";
};

// const result = badFunc();
const result = goodFunc();

console.log(result);

// example 4

const myPromise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({ Tekstas: "works blyn"});
    } ,4000); 
});

myPromise2
    .then((betkoksPavadinimas) => {
        console.log(betkoksPavadinimas);
    });

// example5

const goodFunc2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      return resolve("works");
    }, 2000);
  });
};

goodFunc2()
  .then((res) => {
    console.log("res", res);

    return "first then result";
  })
  .then((secondRes) => {
    console.log("secondRes", secondRes);
  })
  .catch((err) => {
    console.log("err", err);
  });

// pasakyta situ nenaudoti dar, per daug anksti
const fn1 = ()=>{ return 'some result'};
const fn2 = ()=>'some result';


// example 6
// Parašykite pažadą, kuris visada resolve'insis po 5 sekundžių. Jam
// resolve - išoka alert "yes, veikia!".

const pazadas = new Promise((resolve, reject) => {
    setTimeout(() => resolve(), 5000);
});

pazadas.then(() =>{
    document.getElementById("noHtmlWrapper3").textContent = "example 6";
});

console.log("Šitas kodas pasileis pirmas, nors ir yra paskutinis. Tai būtent mūsų asinchroniškumas");


// example 7
// Pakoreguokite pirmą pratimą, kad būtų 4/5 tikimybė, jog resolve'ins
// po 5 sekundžių, ir 1/5 tikimybė, kad po 5 sekundžių bus reject.


const pazadas2 = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 5) + 1;

  setTimeout(() => {
    if(random === 1){
      reject();
    }
    else{
      resolve();
    }
  }, 5000)
})

pazadas.then(() =>{
    document.getElementById("noHtmlWrapper3").textContent = "async example 6";
});

pazadas2
    .then(() => {
        document.getElementById("noHtmlWrapper4").textContent = "async example 7";
    })
    .catch(() => {
        document.getElementById("noHtmlWrapper4").textContent = "async example 7 reject";
    });

// example 8
// Then bendrauja su kitu then. Pakoreguokite antrą pratimą, kad jei
// resolve'inasi pirmas pažadas - pasileidžia then(), kuris
// paprasčiausiai grąžina žinutę "this is a message", šią žinutę
// pagauna antrasis then() ir ją alertina. Prisiminkime - ką then()
// returnina, tą pasigauna kitas then() kaip parametrą.


const pazadas3 = new Promise((resolve, reject) => {
  const random = Math.floor(Math.random() * 5) + 1;

  setTimeout(() => {
    if(random === 1){
      reject();
    }
    else{
      resolve();
    }
  }, 8000)
});

pazadas3
    .then(() => "This is message")
    .then(() => {
        document.getElementById("noHtmlWrapper5").textContent = "async example 8";
    })
// .catch(() => alert("Oops, pažadas buvo atmestas"));
    .catch(() => {
        document.getElementById("noHtmlWrapper6").textContent = "async example 8";
    });


// example 9

// let mylesiu = new Promise((resolve, reject) => {
//     // if(Petras.tampa.geras){
//     //     resolve()
//     // }
//     // else{
//     //     reject()
//     // }
//     setTimeout(() => resolve(), 1000)
// })

// mylesiu
//     .then(() => console.log("susitaikom"));
//     .catch(() => console.log("radau kita, geresni"))


// example 10
// fetch api

// let fetch = new Promise((resolve, reject) => {
//     console.log("EIK I URL");
//     console.log("SIUSK TA JSONa");
//     if(file.ok){
//         resolve(file);
//     }
//     else{
//         reject(error)
//     }
// })

// cool fetch example!
// fetch is similar to a promise. it promises us to return data
fetch("https://randomuser.me/api/")
// .then(file => file.json())
    .then(function(file2){return file2.json()}) // jeigu gauna data ir sekmingai konvertuoja
    .then(function(pasiimu){                    // tuomet paleidzia paskutine funkcija su duota data is praeitos eilutes
        console.log(pasiimu.results[0])
    });

// kaip tiksliau parasyti virsuje esanti example

fetch("https://randomuser.me/api/")
    .then(response => response.json())
    .then(data3 => console.log(data3))

