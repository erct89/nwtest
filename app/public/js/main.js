function Main(view){
	//Properties.
	var that = this;
	var view = view;
	//that.wnd= view || window;
	that.components= {};

	//Public Methods
	that.init = function(){
		//Barra de control.
		that.components.view = that.components.view || {};
		that.components.view.exit = document.getElementsByClassName('buttonClose') || [];
		that.components.view.minimize = document.getElementsByClassName('buttonMinz') || [];
		that.components.view.maximize = document.getElementsByClassName('buttonMaxz') || [];
		console.log(that.wnd);
		addHandler(that.components.view.exit, 'click', function(){
			view.close();
		});
		//addHandler(that.components.view.minimize, 'click', that.wnd.minimize);
		//addHandler(that.components.view.maximize, 'click', that.wnd.maximize);
		
		//Añadir evento a la ventana.
		//window.on('maximize',function(){
		//	that.components.view.maximize.removeEventListener('click',that.wnd.maximize);
		//	that.components.view.maximize.removeEventListener('click',that.wnd.restore); 
		//});
	};


	//Private Methods
	var addHandler = function(elements,event,funct){
		console.log(elements);
		event = typeof(event) === 'string'? event: 'click';
		funct = typeof(funct) === 'function'? funct: function(){}; 
		
		for(let element of elements){
			console.log(element);
			element.addEventListener(event, funct);
		}
	};

	that.init();
}	