
var a = 
{
"HEADER": {
       "SEARCH": "Zoeken",
       "FILTER": "Filter",
       "MISC": {
         "aaaaaaaaaaaa":'ss'
       }
},
"FORM": {
       "REQUIRED": "Dit veld is verplicht",
       "MINLENGTH": "De input is te kort",
       "MAXLENGTH": "De input is te lang",
       "EMAIL": "Geen geldig e-mailadres"
},
"TODO": "sssssssssssssssn..."
}


function JSON2CSV(objArray,i,s) {
    var str = '';
    var line = '';  // 객체의 키값
    var az;
    var arr = Object.entries(objArray);
    arr.forEach(([key, val]) => {
        //line += `${key}`
        if (typeof val === 'object') {
            var ttt='';
        for (data in val) {
            line=''
            console.log(data,'val[data]')
            if(s){
            
                ttt =`${s}.${data}`
                line = `${ttt}=======${val[data]} \r\n`
            
                console.log(ttt,'아아아아')
            
            }else{

                ttt =`${key}.${data}`
                line += `${ttt}========${val[data]} \r\n`
            }
            console.log(s,'ssssssss')
                console.log(line,'라인을봐보자')
                str += line;
            
        }
        console.log(az)
        
        az += JSON2CSV(val,2,ttt);
        
        }else{
        console.log('여기야')
        line += `${key},${val}`
            str += line + '\r\n';  
        }
    })
        console.log(az,'아이얌')


    return az ?  str +=az : str;
}

function JSON2CSV2(objArray) {
var array = typeof objArray != 'object' ? JSON.parse(objArray) : objArray;

    var str = '';
    var line = '';  // 객체의 키값
        var head = array[0];
        console.log(array[0],'array[0]')
        
            for (var index in array[0]) {
                var value = index + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }
       
            for (var index in array[0]) {
                line += index + ',';
            }
        

        line = line.slice(0, -1);
        str += line + '\r\n';
  

    for (var i = 0; i < array.length; i++) {
        var line = '';

        
            for (var index in array[i]) {
                var value = array[i][index] + "";
                line += '"' + value.replace(/"/g, '""') + '",';
            }
       
            for (var index in array[i]) {
                line += array[i][index] + ',';
            }
            console.log(line,'라인라인')
  

        line = line.slice(0, -1);
        str += line + '\r\n';
    }
    return str;
    
}