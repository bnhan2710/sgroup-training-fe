function slowAddition(n1, n2) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(n1 + n2);
        }, 2000);
    });
}

async function increaseSalary(base, increase) {
  const salary = await slowAddition(base, increase);
  console.log(salary);
  return salary;
}

// increaseSalary(1000, 2000);
//const newSalary = increaseSalary(1000, 2000);
//console.log(newSalary);
increaseSalary(1000, 2000).then(function() {
  console.log('done');
});