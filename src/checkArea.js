import convertString from './convertString';

const checkArea = (...args) =>{
    
  let shape = args[0];
  let area = 0;
  let unit = "";
  let output = "";

    if(shape === 'square'){
         
         let result = convertString(args[1])
         let length = result.number;
         unit = result.unit;
         area = length * length;
         output = `name:square, dimension:${length} x ${length}, area: ${area} ${unit}`;
       
    }
    if(shape === 'rectangle'){
    

      let result1 = convertString(args[1]);
      let result2 = convertString(args[1]);

      let length = result1.number;
      let width = result2.number;
      unit = result1.unit;

      area = length * width;
      output = `name:square, dimension:${length} x ${width}, area: ${area} ${unit}`;
    } 

    if(shape === 'triangle'){

      let result1 = convertString(args[1]);
      let result2 = convertString(args[2]);
      let result3 = convertString(args[3]);

      let side1 = result1.number;
      let side2 = result2.number;
      let side3 = result3.number;
      unit = result1.unit;

      const perimeter = (side1 + side2 + side3)/2;
      area =  Math.sqrt(perimeter*((perimeter-side1)*(perimeter-side2)*(perimeter-side3)));   
      output = `name:square, dimension: a${side1} x b${side2} x b${side3}, area: ${area} ${unit}`;
    } 

    if(shape === 'circle'){

      let result = convertString(args[1]);
      let radius = result.number;
      unit = result.unit;
      area = radius * radius * Math.PI;
      output = `name:square, dimension:${radius}, area: ${area} ${unit}`;
    }  

    return output;
}

export default checkArea;