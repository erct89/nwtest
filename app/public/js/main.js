function Main(nw){
	//Properties.
	var that = this;
	var wnd = nw.Window.get();
	wnd.frameState = "maximize";
	that.components = {};

	//Public Methods
	that.init = function(){
		//Barra de control.
		that.components.view = that.components.view || {};
		that.components.view.exit = document.getElementsByClassName('buttonClose') || [];
		that.components.view.minimize = document.getElementsByClassName('buttonMinz') || [];
		that.components.view.maximize = document.getElementsByClassName('buttonMaxz') || [];

		//Handlers for control
		addHandler(that.components.view.exit, 'click', function(){
			wnd.close();
		});
		addHandler(that.components.view.minimize, 'click', function(){
			wnd.minimize();
		});
		addHandler(that.components.view.maximize, 'click', function(){
			wnd[wnd.frameState]();
			if(wnd.frameState === 'maximize'){
				wnd.frameState = 'unmaximize';
			}else{
				wnd.frameState = 'maximize';
			}
		});
	};


	//Private Methods
	var addHandler = function(elements,event,funct){
		//elements =  Array.isArray(elements)?elements:[];
		event = typeof(event) === 'string'? event: 'click';
		funct = typeof(funct) === 'function'? funct: function(){}; 

		for(let element of elements){
			element.addEventListener(event, funct);
		}
	};
	var removeHandler = function(elements,event,funct){
		//elements =  Array.isArray(elements)?elements:[];
		event = typeof(event) === 'string'? event: 'click';
		funct = typeof(funct) === 'function'? funct: function(){};
		for( let element of elements){
			element.removeEventListener(event,funct);
		}
	};

	that.init();
}	