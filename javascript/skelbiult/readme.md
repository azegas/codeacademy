![skelbiu.lt](./references/prezentacinis.png)

Link to live site - [skelbiu.lt](https://arvydas.dev/codeacademy/javascript/skelbiult/index.html).

# The plan

- research skelbiu.lt page, paziurek kiek yra imanoma atkopijuoti
- susikurk index.html, index.js, index.css failus
- susikurk api su needed fields (id, pavadinimas, kaina, nuotraukos
  url, produkto aprasymas, pardavimo lokacija)
- ignoruok skelbiu.lt stilius, padaryk funkcionaluma pirma, pradek nuo
  GET
- padaryk, jog atvaizduotu data nuo maziausios iki didziausios kainos
- kai GET veiks, padaryk POST ir tuomet DELETE
- localstorage dalykai del vaiksciojimo tarp puslapiu
- kai funkcionalumas veiks - gali dabar jau ir su stiliais zaisti
- sukelk darbus i gita
- parasyk ar planas atitiko realybe
- JEIGU bus laiko ar noro - paziurek kokias dar funkcijas su JS gali
  padaryti


## Thoughts after 
- fetch, post, delete, localstorage javascript functionality turint
  pavyzdzius pasidare itin greitai.
- Daugiausiai laiko uzime layouto sudeliojimas su javascriptu ir visi
  stiliai. Norejau tureti +- isbaigta pavyzduka ateiciai.
- reikia tureti best practice kaip uzvadinti visas klases,
  kintamuojus, divus. Labai padrikai viska dariau, jauciu.. bet darbe
  esu tikras jog ismoksiu :)

# README UPDATE:

* Introduction

Today I had a final front-end part Codeacademy task. I was asked to use GET,
POST and DELETE requests while taking design and layout inspirations from
skelbiu.lt.

The goal was not to use any javascript frameworks. I have also used as much
pure html/css as possible, although for the form, I have decided to use
Bootstrap.

Here is a live codeacademy task itself - [[./media/Baigiamoji_uzduotis.pdf][Baigiamoji uzduotis]].

* The Process

- I have started with researching the skelbiu.lt page, figuring out how much of
  the cloning I can do from it.
- I then created an API for the project with [[https://mockapi.io/][mockapi]] and filled it with some
  dummy data.
- Using the dummy data I have coded the GET, POST, DELETE requests with Vanilla
  Javascrip, not using any frameworks and made sure they are displayed in the
  browser.
- Assigned localstorage values to each item so I can redirect to individual
  item pages.
- Made sure the styles match those of skelbiu.lt

* Conclusion

Here is a link to my [[https://arvydas.dev/codeacademy/javascript/skelbiult/index.html][Skelbiu.lt clone]](give it a few seconds to load, this api
service can sometimes be slow :) ).

Here is a link to the actual [[https://www.skelbiu.lt/][skelbiu.lt]] page.

Working with API’s, fetchign and updating data is one of the most intersting
things that I have done with JavaScript so far. I am happy I have learned this
skill, I can see many project ideas that can be done in a similar passion, with
API’s and GET, POST requests, I just wish I had more time to play with these :)
