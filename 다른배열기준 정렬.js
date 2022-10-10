function sol(){
    // let itemsArray = [
    //     ['Anne', 'a'],
    //     ['Bob', 'b'],
    //     ['Henry', 'b'],
    //     ['Andrew', 'd'],
    //     ['Jason', 'c'],
    //     ['Thomas', 'b']
    // ];
    // function sortFunc(a, b) {
    //     var sortingArr = [ 'b', 'c', 'b', 'b', 'c', 'd' ];
    //     console.log(sortingArr.indexOf(a[1]),'sortingArr.indexOf(a[1])')
    //     return sortingArr.indexOf(a[1]) - sortingArr.indexOf(b[1]);
    // }
    //
    // let a = itemsArray.sort(sortFunc);
    //
    // console.log(a)
    // return itemsArray
    var arrayToBeSorted = [1,2,3,4,5];
    var arrayWithReferenceOrder = [3,5,8,9];
    arrayToBeSorted = arrayWithReferenceOrder.filter(v => arrayToBeSorted.includes(v));
    var groups = _.groupBy(itemArray, 1);
    var result = _.map(sortArray, function (i) { return groups[i].shift(); });
}
console.log(sol())