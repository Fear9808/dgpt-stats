const jsonFindAllByKey = (obj, key) => {
    const arr = obj['prop'];
    if(arr.length){
       const result = arr.filter(el => {
          return el['key'] === key;
       });
       if(result && result.length){
          return result[0].value;
       }
       else{
          return '';
       }
    }
 }

 export default {jsonFindAllByKey};