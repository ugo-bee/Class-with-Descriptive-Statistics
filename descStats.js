

class DescStatistic {
    constructor(sample) {
      this.sample = sample;
    }
    
    mean() {
      let sum = 0;
      for (let i = 0; i < this.sample.length; i++) {
        sum += this.sample[i];
      }
      return sum / this.sample.length;
    }
  
    median() {
    const sortedData = this.sample.sort((a, b) => a - b);
    const middleIndex = Math.floor(sortedData.length / 2);

    if (sortedData.length % 2 === 0) {
      return (sortedData[middleIndex - 1] + sortedData[middleIndex]) / 2;
    } else {
      return sortedData[middleIndex];
    }
    
    }
  
    mode() {
      const frequency = {};
      this.sample.forEach(num => {
        frequency[num] = frequency[num] + 1 || 1;
      });
      let mode;
      let maxFrequency = 0;
      for (let num in frequency) {
        if (frequency[num] > maxFrequency) {
          mode = num;
          maxFrequency = frequency[num];
        }
      }
      return mode;
  
    }
      range(){
        return Math.max(...this.sample) - Math.min(...this.sample);
  
      }
  
      standardDeviation() {
        const mean = this.mean();
        const deviation = this.sample.map(num => Math.pow(num - mean, 2));
        const sum = deviation.reduce((sum, num) => sum + num);
        return Math.sqrt(sum / this.sample.length);
      }
  
      quartileDeviation() {
            const sortedData = this.sample.sort((a, b) => a - b);
            const mid = Math.floor(sortedData.length / 2);
            let q1 = 0
            let q3 = 0;
        
            if (sortedData.length % 2 === 0) {
            q1 = (sortedData[mid - 1] + sortedData[mid]) / 2;
             q3 = (sortedData[mid + 1] + sortedData[mid + 2]) / 2;
        } else {
            q1 = sortedData[mid - 1];
            q3 = sortedData[mid + 1];
        }
  
        return q3 - q1;
     }
  
      variance() {
        const mean = this.sample.reduce((acc, curr) => acc + curr) / this.sample.length;
        return this.sample.reduce((acc, curr) => acc + (curr - mean) ** 2, 0) / this.sample.length;
      }
  
      absoluteDeviation() {
        const mean = this.sample.reduce((acc, curr) => acc + curr) / this.sample.length;
        return this.sample.reduce((acc, curr) => acc + Math.abs(curr - mean), 0) / this.sample.length;
      }
    }
  
  //instantiating class 
  const sample = [1,2,3,2,4,2,5]
  const descStatistic = new DescStatistic(sample)
  
  //acessing instance  methods
  console.log(descStatistic.mean())
  
  console.log(descStatistic.median())
  
  console.log(descStatistic.mode())
  
  console.log(descStatistic.range())
  
  console.log(descStatistic.standardDeviation())
  
  console.log(descStatistic.quartileDeviation())
  
  console.log(descStatistic.variance())
  
  console.log(descStatistic.absoluteDeviation())