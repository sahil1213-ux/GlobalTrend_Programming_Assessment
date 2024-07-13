// Implement a simple HashMap class with put, get, and remove methods.

class SimpleHashMap {
    // here map is initialized as empty object 
    constructor() {
      this.map = {};
    }
  
    put(key, value) {
      this.map[key] = value;
    }
  
    get(key) {
      return this.map.hasOwnProperty(key) ? this.map[key] : undefined;
    }
  
    remove(key) {
      if (this.map.hasOwnProperty(key)) {
        delete this.map[key];
        console.log(`${key} deleted successfully`); 
      }
    }
}

const myMap = new SimpleHashMap();

myMap.put('1', "Mohan Das"); 
myMap.put('2', "Sahil Anand"); 
myMap.put('3', "Manisha Tiwari"); 

console.log(myMap.get('2')); 
myMap.remove('1'); 
