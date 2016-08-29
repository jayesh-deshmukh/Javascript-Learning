
var allData = [];

function logStuff(name){
  if (typeof name ==='String'){
    console.log(name)
  }else{
  for(var item in name){
      console.log(name[item]);
    }
  }

}


function getInputs(options,callback){
  allData.push(options);
  callback(options);
}

getInputs({name1:"Michael", name2:"Camilo"}, logstuff);


/* Callback with this keyword*/
  var clientData = {
    id: '1234',
    fullName: '',
    setUserName: function (firstName, lastName) {
      console.log(this.firstName + this.lastName);
      return this.id + this.name;
    }
  }

function printName(firstName,lastName, callback){
  var inputObject = {firstName: firstName,lastName:lastName}
  callback.bind(inputObject);
}
