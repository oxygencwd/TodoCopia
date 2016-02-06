angular.module('BDServices')
	.factory("BDService", function(){
		var dataService={};
		dataService.saved= localStorage.getItem("toDos"); //buscar toDos guardados en el local storage
		//settear el arreglo de toDos con los que ya estaban almacenados o como arreglo vacio
		if(localStorage.getItem("toDos")!=null){
			dataService.toDos=JSON.parse(dataService.saved);	
		}else{
			dataService.toDos=[];
		}
		/* toDos
			{actividad: "estudiar",
			descripción: "buscar videos y hacer la tarea",
			done: false}
		*/
		//agregar una actividad a la lista de actividades
		dataService.addToDo= function(newToDo, newDescrip){
			dataService.toDos.push({"actividad": newToDo,
			"descripcion": newDescrip, "done": false});	
			dataService.updateStorage();
		}//fin function

		dataService.updateStorage= function(){
			localStorage.setItem('toDos', JSON.stringify(dataService.toDos));
		}//fin function

		//remover las actividaes completadas-
		dataService.clearDone= function(){
			 dataService.toDos = dataService.toDos.filter(function(item){
			 	return !item.done;
			 	dataService.updateStorage();
			 	return dataService.getAll();
			})
		}//fin function

		//dejar en blanco la lista
		dataService.clearAll= function(){
			dataService.toDos=[];
			dataService.updateStorage();
			return dataService.getAll();
		}//fin function

		dataService.getAll= function(){
			return dataService.toDos;
		}

		return dataService;
	});