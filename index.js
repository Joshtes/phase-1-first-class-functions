function receivesAFunction(callback){
    callback();
}

receivesAFunction(function () {console.log ("hello this function is being called back")});

function returnsANamedFunction(){
    return function namedFunction(){

    }
}

function returnsAnAnonymousFunction(){
    return function (){
        console.log ('this is a random string')
    }
}