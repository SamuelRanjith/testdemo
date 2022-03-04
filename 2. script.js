var request=new XMLHttpRequest();
request.open("GET","https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json");
request.send();
request.onload=function(){
    var data=JSON.parse(request.response);
      console.log(data);
      let res=data.filter((element)=>element.region==="Asia");    
      console.log(res);

      for (var i=0; i<res.length;i++){
console.log(res[i].name);
console.log(res[i].name+population);
      }
}