// Cuenta los caracteres en los que aparece
String.prototype.count = function(char){
	
  var r = this.match(new RegExp(char, 'g'));
  return r ? r.length : 0;
  
}

// Busca en un array
Array.prototype.search = function(key){

	for(i=0; this.length < i; i++){ 
	
		if(this[i]==key) return true;
	
	}
	
	return false;
	
}