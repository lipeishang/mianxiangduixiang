function collect_same_elements(collection_a, collection_b) {
  //在这里写入代码
var c = [];
for(var i = 0 ; i < collection_a.length ; i++){
	for(var j =0; j < collection_b.value.length; j++){
      		if(collection_a[i].key === collection_b.value[j])
        		 c.push(collection_a[i].key);
	}
}
   
return c;
}
