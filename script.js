//Ya do whatever ya wants with this here code ~@Enoxh

var names = ["the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he", "was", "for", "on", "are", "as", "with", "his", "they", "I", "at", "be", "this", "have", "from", "or", "one", "had", "by", "word", "but", "not", "what", "all", "were", "we", "when", "your", "can", "said", "there", "use", "an", "each", "which", "she", "do", "how", "their", "if", "will", "up", "other", "about", "out", "many", "then", "them", "these", "so", "some", "her", "would", "make", "like", "him", "into", "time", "has", "look", "two", "more", "write", "go", "see", "number", "no", "way", "could", "people", "my", "than", "first", "water", "been", "call", "who", "oil", "its", "now", "find", "long", "down", "day", "did", "get", "come", "made", "may", "part"];




var values = ["the", "of", "and", "a", "to", "in", "is", "you", "that", "it", "he", "was", "for", "on", "are", "as", "with", "his", "they", "I", "at", "be", "this", "have", "from", "or", "one", "had", "by", "word", "but", "not", "what", "all", "were", "we", "when", "your", "can", "said", "there", "use", "an", "each", "which", "she", "do", "how", "their", "if", "will", "up", "other", "about", "out", "many", "then", "them", "these", "so", "some", "her", "would", "make", "like", "him", "into", "time", "has", "look", "two", "more", "write", "go", "see", "number", "no", "way", "could", "people", "my", "than", "first", "water", "been", "call", "who", "oil", "its", "now", "find", "long", "down", "day", "did", "get", "come", "made", "may", "part"];


function randomName() {

    var rndId = getRandomInt(0, names.length);

    var rndName = names[rndId];


    return rndName;

}


function randomValue() {

    var rndId = getRandomInt(0, values.length);

    var rndName = values[rndId];


    return rndName;
}


//--------//    
//--------//      
//---V----// 
//make a variable
function makeVar() {
    var name = document.getElementById('name').value;
    var val = document.getElementById('val').value;
    var isString = document.getElementById('isString').checked;
    var declared = document.getElementById('declared').checked;
    var content = "";
    document.getElementById('errBox').innerHTML = ""
        //console.log(isString);    
        //console.log(declared);     


    if (name == "" || val == "") {
        document.getElementById('errBox').innerHTML = "Error Empty Field!";
        return;
    } else


    if (declared && isString) {
        content = "var " + name + " = '" + val + "' ; \n";
        document.getElementById('output').innerHTML += content;
        return;
    }

    if (isString) {
        content = name + " = '" + val + "' ; \n";
        document.getElementById('output').innerHTML += content;
        return;
    }

    if (declared) {
        content = "var " + name + " = " + val + " ; \n";
        document.getElementById('output').innerHTML += content;
        return;
    } else {
        content = name + " = " + val + " ; \n";
        document.getElementById('output').innerHTML += content;
        return;
    }
}

//--------//    
//---A----//      
//--------//        
//make an array
function makeArray() {

    var arrName = document.getElementById('arrName').value;
    var arrVal = document.getElementsByClassName('av');
    var arrIsString = document.getElementById('arrIsString').checked;
    var arrDeclared = document.getElementById('arrDeclared').checked;
    var content = "";
    var arrArgs = "";
    var arrArgStrings = "";
    document.getElementById('errBox').innerHTML = "";
    console.log(arrVal);
    //console.log(declared);     
    for (var i = 0; i < arrVal.length; i++) {
        if (i < arrVal.length - 1) {
            arrArgStrings += '"' + arrVal[i].value + '",';
            arrArgs += arrVal[i].value + ',';
        } else {
            arrArgs += arrVal[i].value;
            arrArgStrings += '"' + arrVal[i].value + '"';
        }
    }

    if (arrName == "" || arrVal == "") {
        document.getElementById('errBox').innerHTML = "Error Empty Field!";
        return;
    } else

    if (arrDeclared && arrIsString) {
        content = "var " + arrName + " = [" + arrArgStrings + "] ; \n";
        document.getElementById('output').innerHTML += content;
        return;
    }

    if (arrIsString) {
        content = arrName + " = [" + arrArgStrings + "] ; \n";
        document.getElementById('output').innerHTML += content;
        return;
    }

    if (arrDeclared) {
        content = "var " + arrName + " = [" + arrArgs + "] ; \n";
        document.getElementById('output').innerHTML += content;
        return;
    } else {
        content = arrName + " = [" + arrArgs + "] ; \n";
        document.getElementById('output').innerHTML += content;
        return;
    }
}


//--------//    
//---F----//      
//--------//    
// MAke a Function
function makeFunc() {

    var funcName = document.getElementById('funcName').value;
    if (!isNaN(parseInt(funcName))) {
        document.getElementById('funcErrBox').innerHTML = "ERR Starts with Number!";
    }
    var funcVal = document.getElementsByClassName('arg');
    var funcAsVar = document.getElementById('funcAsVar').checked;
    var argIsString = document.getElementById('argIsString').checked;
    var content = "";
    var funcArgs = "";
    var funcArgStrings = "";
    document.getElementById('funcErrBox').innerHTML = "";
    console.log(funcVal);
    //console.log(declared);     
    for (var i = 0; i < funcVal.length; i++) {
        if (i < funcVal.length - 1) {
            funcArgStrings += '"' + funcVal[i].value + '",';
            funcArgs += funcVal[i].value + ',';
        } else {
            funcArgs += funcVal[i].value;
            funcArgStrings += '"' + funcVal[i].value + '"';
        }
    }

    if (funcName == "" || funcVal == "") {
        document.getElementById('funcErrBox').innerHTML = "Error Empty Field!";
        return;
    } else

    if (funcAsVar && argIsString) {
        content = "var " + funcName + " = function (" + funcArgStrings + "){} ; \n";
        document.getElementById('output').innerHTML += content;
        return;
    }

    if (funcAsVar) {
        content = "var " + funcName + " = function (" + funcArgs + "){} ; \n";
        document.getElementById('output').innerHTML += content;
        return;
    }

    if (argIsString) {
        content = "function " + funcName + "(" + funcArgStrings + "){} ; \n";
        document.getElementById('output').innerHTML += content;
        return;
    } else {
        content = "function " + funcName + "(" + funcArgs + "){} ; \n";
        document.getElementById('output').innerHTML += content;
        return;
    }
}



//--------//    
//---L----//      
//--------//    
// Make a Loop
function makeForLoop() {



    var loopStart = document.getElementById('loopStart').value;
    var loopMaxCond = document.getElementById('loopMaxCond').value;
    var loopMax = document.getElementById('loopMax').value;
    var loopIncr = document.getElementById('loopIncr').value;
    if (!loopStart || !loopMax) {
        document.getElementById('loopErrBox').innerHTML = "Error Empty Field!";
        return;
    }
    var content = "";
    console.log(loopStart);

    content = "for ( var i = " + loopStart + "; i" + loopMaxCond + loopMax + "; i" + loopIncr + "){} \n";
    document.getElementById('output').innerHTML += content;
    return;

}




//--------//    
//--Show--//      
//--------//    
// Show Values
function showVals() {
    var content = "";
    var valCount = document.getElementById('arrVal').value;

    for (var i = 0; i < valCount; i++) {
        content += '<input type="text" id="arrVal' + i + '" style="width:80px;" class="av" value="' + i + '"> <br/>';
    }
    document.getElementById('showVals').innerHTML = content;
}

//show args
function showArgs() {
    var content = "";
    var argCount = document.getElementById('argVal').value;

    for (var i = 0; i < argCount; i++) {
        var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
        content += '<input type="text" style="width:80px;"  class="arg" value="' + alphabet[i] + '"> <br/>';
    }
    document.getElementById('showArgs').innerHTML = content;
}


//--------//    
//--Randomizer-//      
//--------//    
// Random code generator 
//COMPLETE ARRAY, LOOP and FUNCTION
function randomizer() {


    var rndVar, rndArr, rndLoop, rndFunc;
    rndVar = rndArr = rndLoop = rndFunc = '';

    rndVar = document.getElementById('rndVar').checked;
    rndArr = document.getElementById('rndArr').checked;
    rndLoop = document.getElementById('rndLoop').checked;
    rndFunc = document.getElementById('rndFunc').checked;





    //

    if (rndVar) {
        makeRndVar();
    } else
    if (rndArr) {
        makeRndArr()
    } else
    if (rndLoop) {
        makeRndLoop()
    } else
    if (rndFunc) {
        makeRndFunc()
    } else {}

}






function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


//randomizer  versions






function makeRndVar() {
    var content = "";
    var name = randomName();
    var val = randomValue();

    document.getElementById('rndErrBox').innerHTML = "";
    var rndVar = document.getElementById('rndVar').value;

    if (getRandomInt(0, 6) >= 3) {
        declared = true;
    } else {
        declared = false
    }

    if (getRandomInt(0, 6) <= 3) {
        isString = true;
    } else {
        isString = false
    }


    if (declared == true && isString == true) {
        content = "var " + name + " = '" + val + "' ; \n";
        document.getElementById('output').innerHTML += content;
        return;
    }

    if (isString) {
        content = name + " = '" + val + "' ; \n";
        document.getElementById('output').innerHTML += content;
        return;
    }

    if (declared) {
        content = "var " + name + " = " + val + " ; \n";
        document.getElementById('output').innerHTML += content;
        return;
    } else {
        content = name + " = " + val + " ; \n";
        document.getElementById('output').innerHTML += content;
        return;
    }

}