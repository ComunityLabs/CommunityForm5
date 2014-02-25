var BASE_URL	= 'http://localhost/cms/',
	public		= new Array({'js' : BASE_URL+'public/js/','css':BASE_URL+'public/css/'}),
	private		= new Array({'js' : BASE_URL+'views/layouts/default/js/','css':BASE_URL+'views/layouts/default/css/'});
	
	
loaded = function(lib){
	
	self   = this,
	
	// Busca y agrega la libreria
	self.search		= function(lib,count){
		
		if(typeof lib == 'object'){
			
			if(count < lib.length){
			
				var script = document.createElement('script');
					script.src = lib[count];
					script.type= 'text/javascript';
				document.getElementsByTagName('body').item(0).appendChild(script);
				count++;
				self.search(lib,count);
				
			}
			
		}else{
		
			var script = document.createElement('script');
				script.src = lib;
				script.type= 'text/javascript';
			document.getElementsByTagName('body').item(0).appendChild(script);
			
		}
				
	};
	
	self._construct	= function(){
	
		try{
			
			self.search(lib,0);			
		
		}catch(e){
			
			console.log('Surgio el siguiente error dentro del script:'+lib+'\n La exception producida es '+e);
		
		}
	
	}
	
	_construct();
	
}

