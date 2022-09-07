// Example numero 02

const manoAmzius = 28

if(manoAmzius > 100 || manoAmzius < 0){
    console.log("invalid age")
}else if(manoAmzius > 1 && manoAmzius < 18 ){
    console.log("Child")
}else if(manoAmzius > 19 && manoAmzius < 99 ){
    console.log("Adult")
}    


const car = "BMW";
  if (car === 'VW' || car === 'Audi' || car === 'Bentley' || car === 'Bugatti' || car === 'Lamborghini' || car === 'Porsche') {
      console.log('VW Group');
  } else if (car === 'BMW' || car === 'Mini' || car === 'Rolls-Royce') {
      console.log('BMW Group');
  } else {
      console.log('Nei vienam');
  }
