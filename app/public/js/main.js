function Main(nw){
	//Properties.
	var that = this;
	var wnd = nw.Window.get();
	//that.wnd= view || window;
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
			wnd.maximize();
		});
		
		//Añadir evento a la ventana.
		wnd.on('maximize',function(){
			if(wnd.height !== 1200){
				removeHandler(that.components.view.maximize,'click',wnd.maximize);
				addHandler(that.components.view.maximize,'click',function(){
					wnd.resizeTo(1200, 600);
					wnd.setPosition("center");wnd.setPosition("center");
				}); 
			}else{
				removeHandler(that.components.view.maximize,'click',function(){
					wnd.resizeTo(1200, 600);
					wnd.setPosition("center");wnd.setPosition("center");
				}); 
				addHandler(that.components.view.maximize,'click',wnd.maximize);
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