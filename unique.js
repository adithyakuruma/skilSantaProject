function difference(array1,array2) {
  
  var flat_a1= flatten(array1,true);
  var flat_a2= flatten(array2,true);
  
 var a=[], difference=[];
  for(var i=0;i< flat_a1.length;i++)
    a[flat_a1[i]]=false;
  for(i=0;i< flat_a2.length;i++)
  if(a[flat_a2[i]]===true) 
     { delete a[flat_a2[i]];}
    else a[flat_a2[i]]=true;
  for(var k in a)
    difference.push(k);
  return difference;   
  }

var flatten = function(a, shallow,r){
  if(!r){ r = [];}
if (shallow) {
  return r.concat.apply(r,a);
  }  
   for(i=0; i< a.length; i++){
        if(a[i].constructor == Array){
            flatten(a[i],shallow,r);
        }else{
            r.push(a[i]);
        }
    }
    return r;
};
console.log(difference([1, 2, 3], [100, 2, 1, 10]));
document.getElementById("unique").innerHTML="Output of 2 arrays after removing duplicate elements:"+"["+difference([1, 2, 3], [100, 2, 1, 10])+"]";
