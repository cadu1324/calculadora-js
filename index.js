var capture = ''
var number = ''
var split = ''
var result = ''
var operation = ''
var percentage = ''

function take(id){
    capture = (capture + document.getElementById(id).value)
    document.getElementById('display').innerText = capture  
}

function sum(){
    number = document.getElementById('display').innerText + ',' 
    
    split = number.split(',')
   
    document.getElementById('display').innerText = ''
    capture = ''
   
    operation = '+'
} 

function subtraction(){
    
    number = document.getElementById('display').innerText + ',' 

    split = number.split(',')

    document.getElementById('display').innerText = ''
    capture = ''

    console.log(split)
    operation = '-'
}

function division(){
    
    number = document.getElementById('display').innerText + ',' 
    
    split = number.split(',')
    
    document.getElementById('display').innerText = ''
    capture = ''
 
    operation = '/'
}

function multiplication(){
    
    number = document.getElementById('display').innerText + ',' 

    split = number.split(',')

    document.getElementById('display').innerText = ''
    capture = ''

    operation = '*'
}

function percentage(){
    number = document.getElementById('display') + ','

    split = number.split(',')

    document.getElementById('display').innerText = ''
    capture = ''
    
    operation = '%'
}

function equal(){

    if(operation == '+'){
        
        result = Number(split[0]) + Number(document.getElementById('display').innerText)

        if(result.toFixed(2).split('.')[1] > 0){
            document.getElementById('display').innerText = result.toFixed(2)
        }else{
            document.getElementById('display').innerText = result
        }

    }else if(operation == '-'){
        
        result = Number(split[0]) - Number(document.getElementById('display').innerText)
        
        if(result.toFixed(2).split('.')[1] > 0){
            document.getElementById('display').innerText = result.toFixed(2)
        }else{
            document.getElementById('display').innerText = result
        }

    }else if(operation == '/'){
        
        if(Number(document.getElementById('display').innerText) === 0){
            document.getElementById('display').innerText = 'Erro'
            return 
        }
        
        result = Number(split[0]) / Number(document.getElementById('display').innerText) 
        
        if(result.toFixed(2).split('.')[1] > 0){
            document.getElementById('display').innerText = result.toFixed(2)
        }else{
            document.getElementById('display').innerText = result
        }

    }else if(operation == '*'){
        
        result = Number(split[0]) * Number(document.getElementById('display').innerText) 
        
        if(result.toFixed(2).split('.')[1] > 0){
            document.getElementById('display').innerText = result.toFixed(2)
        }else{
            document.getElementById('display').innerText = result
        }

    }else if(operation == '%'){

        result = Number(split[0]) * (Number(document.getElementById('display').innerText) / 100)
    }
}

function clearInput(){
    
    capture = ''
    number = ''
    split = ''
    result = ''
    operation = ''
    percentage = ''
    
    document.getElementById('display').innerText = capture

}
