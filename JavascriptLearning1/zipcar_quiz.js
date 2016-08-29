

//Function to pick passengers
function pickPassenger(vehicle, peoples){
  peoples.forEach( function ( person ){
    if ( vehicle.peoples.length< 4 &&  vehicle.x === person.x && vehicle.y === person.y  ){
        console.log(JSON.strigify(vehicles[0]));
        vehicle.pick( person );
    }
});


}

//Move a vehicles on each turn.
function moveVehicles(vehicles, peoples, buildings){
//Need to move vehicles to different paths to maximize efficiency.
 vehicles.forEach(function(vehicle){
   // move vehicle to new location.
   for( var i=0;i<buildings.length; i++){
     if ( vehicle.x < 6 && vehicle.y === 3 ){
       vehicle.moveTo( buildings[0] );
     }
     else if ( vehicle.x === buildings[i].x && vehicle.y === buildings[i].y){
       if(i+1 <= buildings.length){
         vehicle.moveTo( buildings[i+1] );
      }else{
        vehicle.moveTo( buildings[0] );
      }
    }
   }
   pickPassenger(vehicle, peoples)
 });
}
function turn(vehicles,peoples,buildings){
    console.log("in turn function");
    moveVehicles(vehicles, peoples, buildings);
}


//        vehicles[0].moveUp();
//        vehicles[0].moveUp();

 //       vehicles[0].pick(peoples[0]);

//         vehicles[0].moveTo(buildings[0]);


// “turn” is called at each turn of the game
        // your goal is to move the vehicles in order to bring people to their destination
        // you can only:
        //  - move vehicles (up, down, left or right, not in diagonal)
        //  - select which people you want to pick up
        //
        // a vehicle can pick-up / drop people only when it's on the same
        // coordinates as the building of origin / destination
        //
        // Examples of moving a vehicle:
        //  vehicles[0].moveUp();
        //  vehicles[0].moveDown();
        //  vehicles[0].moveLeft();
        //  vehicles[0].moveRight();
        //  and very handy:
        //  vehicles[0].moveTo(buildings[0]); >> moves 1px toward the target
        //
        // Picking up someone:
        //  You can ask a vehicle to pick someone by doing something like:
        //   vehicles[0].pick(peoples[0]);
        //  If the vehicle is on the same building as the people during that turn, it will pick him/her up
        //  You can pick 4 peoples max in a vehicle
        //  Note: the vehicle will pick people up before they can move
        //
        // Dropping someone:
        //  Dropping off is automatic: whenever a vehicle contains someone that has
        //  reached destination it drops him off.
        //  This is when you earn $50
        //
        // Time:
        //  each people has a people.time, which represent the time (in turns) left
        //  to bring them to the correct destination.
        //  If they feel they're late, they'll go by foot.
        //  They go at a speed of 1px every 2 turns
        //
        //
        // “turn” function's params :
        //
        // vehicles is an array of vehicle
        //  vehicle.x/vehicle.y is the position of the vehicle
        //  vehicle.peoples is an array of people in the vehicle (must be <=4)
        //
        // peoples is an array of people who are currently not in a vehicle
        //  people.x/people.y is the position of the people
        //  people.destination is a string representing the name of a building
        //
        // buildings are the buildings
        //  building.x/building.y is the position of the building
        //  building.name is the name of the building
        //

        // You can add your own parameters to each variable; they will be copied from turn to turn.
}
