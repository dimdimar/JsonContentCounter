class JSONService {
  internaldata;

  counterArray = 0;
  counterObject = 0;
  counterObjectAttributes = 0;
  counterStrings = 0;
  counterNumbers = 0
 
  summary;
  arrays = [];
  objects =[];

  constructor(data) {
    this.internaldata = data;
  }

  getSummary() {
    this.dataCheker(this.internaldata)
    return console.log(this.createSummary()); 
  }

  countArrays(data) {
      this.counterArray++;
      this.arrays.push(data)
      // *Delve into [object Array]    *Σκαλίζω το [object Array]
      for (let i = 0; i < data.length; i++) {
          this.dataCheker(data[i])
        }
      }

  countObjects(data) {
      this.counterObject++;
      this.objects.push(data)
      this.counterObjectAttributes += Object.keys(data).length;
      // *Delve into [object Object]    *Σκαλίζω το [object Object]
      for (let i = 0; i < Object.keys(data).length; i++) {
          this.dataCheker(data[Object.keys(data)[i]])
      }
    }
    
    dataCheker(data){
      if (Array.isArray(data)){
        this.countArrays(data)
      }else if(typeof data == 'object' && !Array.isArray(data)){
        this.countObjects(data)
      }else{
        if(typeof data == 'string') this.counterStrings ++;
        if (typeof data == 'number') this.counterNumbers++;
      }
    }

  createSummary() {
    this.summary = "Summary\n";
    this.summary += "-------\n";
    this.summary += `Count of Arrays     : ${this.counterArray}\n`;
    this.summary += `Count of Objects    : ${this.counterObject}\n`;
    this.summary += `Count of Object Keys: ${this.counterObjectAttributes}\n`;
    this.summary += `Count of Strings    : ${this.counterStrings}\n`;
    this.summary += `Count of Numbers    : ${this.counterNumbers}\n`;
    // this.summary += `Arrays              : ${JSON.stringify(this.arrays)}\n`;
    // this.summary += `Objects             : ${JSON.stringify(this.objects)}\n`;


    return this.summary;
  }
}

module.exports = JSONService;
