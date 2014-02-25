/*(function($){

	// Variables privadas
	var _typeAttr = 'data-form5-type';

	// METODO - CONSTRUCTOR
	$.fn.form5 = function(option){
		
		// Definiendo opciones
		options = $.extend($.fn.form5.default,option);
		
		// Iterator
		$(this).each(function(index, element) {
            
			// UniqId
			var id = (new Date().getTime()).toString(16);
			
			// Estructurador
			$.fn.form5._estructurador(element,id,options);
				
        });
		
		// Eventualizador
		$.fn.form5.event(options);

	}

	// FORMULARIO - ESTRUCTURADOR
	$.fn.form5._estructurador = function(element,id,options){
		
		switch($(element).attr(_typeAttr)){
		
			case 'switch' : $.fn.form5._switch(element,id,options); break;
			
			case 'boxtag' : $.fn.form5._boxtag(element,id,options); break;
		
		}
				
	}

	// FORMULARIO - EVENTOS
	$.fn.form5.event = function(options){
		
		// Boxtag
		$.fn.form5._boxtag.event();

		// Switch
		$.fn.form5._switch.event(options);
	
	}

	// ----- Switch
	$.fn.form5._switch = function(element,id,options){
	
		element = $(element);
		
		// Ocultamos el checkbox
		element.hide();
		
		// Determinando que activo sera
		if(element.prop('value') == options.switchMessage['cancel']['text'])
			element.wrapAll('<div class="form5-switch"><a href="javascript:void(0);" data-id="'+id+'" data-form5-role="switch"/><label class="form5-switch-off active"><p>'+options.switchMessage['cancel']['text']+'</p></label><label class="form5-switch-on"><p>'+options.switchMessage['accept']['text']+'</p></label></div>');
		
		else
			element.wrapAll('<div class="form5-switch"><a href="javascript:void(0);" data-id="'+id+'" data-form5-role="switch"/><label class="form5-switch-off"><p>'+options.switchMessage['cancel']['text']+'</p></label><label class="form5-switch-on active"><p>'+options.switchMessage['accept']['text']+'</p></label></div>');

	
	}
	
	$.fn.form5._switch.event = function(options){
	
		$('.form5-switch').on('click','a',function(){
			
			if($(this).parent('div').find('.form5-switch-off').hasClass('active')){
			
				$(this).parent('div').find('.form5-switch-off').removeClass('active');
				$(this).parent('div').find('.form5-switch-on').addClass('active');
				$(this).find('[type=checkbox]').val(options.switchMessage['accept']['value']);
				
			}else{
				
				$(this).parent('div').find('.form5-switch-off').addClass('active');
				$(this).parent('div').find('.form5-switch-on').removeClass('active');
				$(this).find('[type=checkbox]').val(options.switchMessage['cancel']['value']);
				
			}
			
		});
	
	}

	// ----- Boxtag
	$.fn.form5._boxtag = function(element,id,options){
	
		// Estructurizando
		$(element).attr(
			{'data-id':id,
			 'data-form5-type':'boxtag',
			 'data-form5-role':'boxtag'
			 }).wrapAll('<div class="form5-boxtag"></div>').before('<input type="hidden" value="{}" data-form5-boxtag-data="'+id+'" id="'+$(this).attr('id')+'">').removeAttr('id');	
		
		// Por si existe
		$.fn.form5._boxtag.prevent(element);
		
	}

	$.fn.form5._boxtag.event = function(){
	
		$('[data-form5-role="boxtag"]').bind('keydown',function(e){
			
			if(e.keyCode==9 || e.keyCode==188 || e.keyCode==13){
				
				value = $.fn.form5._boxtag.replace($(this).val());
				
				if(value!=='' && value!==' '){
					
					if($.fn.form5._boxtag.exists($(this)))
						$.fn.form5._boxtag.add($(this),value);
					
				}
				
				e.preventDefault();
				
			}

		});
		
		// Elimina el tag
		$('.form5-boxtag').on('click','span input:button',function(){
			
			// Parseo
			parse = $.fn.form5._boxtag.replace($(this).parent('span').text());
			
			// Remover dato
			$.fn.form5._boxtag.delete(
				$(this).parent('span').parent('div').find('input[type=hidden]'),
				parse
			);
		
			// Remover Span
			$(this).parents('span').remove();
			
		});

	}

	$.fn.form5._boxtag.add = function(element,value){
		
		// Input hidden
		hidden = $(element).parent('div').find('input[type=hidden]');
				
		// Insertamos el tag
		$(element).before('<span>'+value+'<input type="button" value="x" class="form5-boxtag-remove"></span>').val('');
		
		// Insertamos el dato
		if(hidden.val()=='{}') 
			hidden.val('{'+value+'},'); 
		
		else 
			hidden.val(hidden.val()+'{'+value+'},');
		
	}

	$.fn.form5._boxtag.replace = function(value,revert){
		
		return String(value).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/  /g,' ');
		
	}

	$.fn.form5._boxtag.prevent = function(element){
		
		if($(element).val()!==''){
			
			value = $.fn.form5._boxtag.replace($(element).val());
			$.fn.form5._boxtag.add(element,value);
		
		}
		
	}
	
	$.fn.form5._boxtag.delete = function(element,value){
		
		if(typeof $(element).val() !=='undefined'){
			
			if($(element).val()=='{'+value+'},'){
			
				$(element).val('{}');
			
			}else{
				
				neo = $(element).val();
				$(element).val(neo.replace('{'+value+'},',''));
			
			}
		
		}
		
	}
	
	$.fn.form5._boxtag.exists = function(element){
			
		hidden = $(element).parent('div').find('[type=hidden]').val().toString();
		value  = $.fn.form5._boxtag.replace($(element).val());
		
		if(hidden.indexOf('{'+value.toString()+'},') == -1){
			
			$(element).removeClass('isset');
			return true;
		
		}else{
			
			$(element).addClass('isset');
			return false;	
		
		}
		
	}

	// ----- Opciones
	$.fn.form5.default = {
	
		switchMessage: {'accept':{text:'si',value:'1'},'cancel':{text:'no',value:'0'}},
	
	}

})(jQuery);*/


(function($){

	// Variables privadas
	var _typeAttr = 'data-form5-type';

	// METODO - CONSTRUCTOR
	$.fn.CommunityForm5 = function(option){
		
		// Definiendo opciones
		options = $.extend($.fn.CommunityForm5.default,option);
		
		// Iterator
		$(this).each(function(index, element) {
            
			// UniqId
			var id = (new Date().getTime()).toString(16);
			
			// Estructurador
			$.fn.CommunityForm5._estructurador(element,id,options);
				
        });
		
		// Eventualizador
		$.fn.CommunityForm5.event(options);

	}

	// FORMULARIO - ESTRUCTURADOR
	$.fn.CommunityForm5._estructurador = function(element,id,options){
		
		switch($(element).attr(_typeAttr)){
		
			case 'switch' : $.fn.CommunityForm5._switch(element,id,options); break;
			
			case 'boxtag' : $.fn.CommunityForm5._boxtag(element,id,options); break;
		
		}
				
	}

	// FORMULARIO - EVENTOS
	$.fn.CommunityForm5.event = function(options){
		
		// Switch
		$.fn.form5._switch.event(options);

		// Boxtag
		//$.fn.form5._boxtag.event();
	
	}

	// ----- Switch
	$.fn.CommunityForm5._switch = function(element,id,options){
	
		element = $(element);
		
		// Ocultamos el checkbox
		element.hide();
		
		// Determinando que activo sera
		if(element.prop('value') == options.switchMessage['cancel']['text'])
			element.wrapAll('<div class="form5-switch"><a href="javascript:void(0);" data-id="'+id+'" data-form5-role="switch"/><label class="form5-switch-off active"><p>'+options.switchMessage['cancel']['text']+'</p></label><label class="form5-switch-on"><p>'+options.switchMessage['accept']['text']+'</p></label></div>');
		
		else
			element.wrapAll('<div class="form5-switch"><a href="javascript:void(0);" data-id="'+id+'" data-form5-role="switch"/><label class="form5-switch-off"><p>'+options.switchMessage['cancel']['text']+'</p></label><label class="form5-switch-on active"><p>'+options.switchMessage['accept']['text']+'</p></label></div>');

	
	}

	// ----- Opciones
	$.fn.CommunityForm5.default = {
	
		switchMessage: {
			'accept':{
				text:'si',
				value:'1'
			},
			'cancel':{
				text:'no',
				value:'0'
			}
		},
	}

})(jQuery);
















