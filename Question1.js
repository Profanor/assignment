function mapArr(arrs) {
    let newArr = arrs.map(arr =>
        arr * 2);
        return [newArr[0], newArr];
}
console.log(mapArr([1,2,3,4,5]));
