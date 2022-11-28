let string ='';
let string1="" ; 
let square = ''
var flag = 0 ;
document.querySelector('input').value = string;
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((but) => {
    but.addEventListener('click', (e) => {
        try {
            if (e.target.innerHTML == 'Enter') {
                string = eval(string);
                document.querySelector('input').value = string;
                string1 = string ; 
                string='' ; 
            }
            else if (e.target.innerHTML == 'clear') {
                string = "";
                document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML == 'del') {
                string = string.substring(0, string.length - 1);
                document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML == "ans") {
                string = string1 ;
                document.querySelector('input').value = string;
            }
            else if (e.target.innerHTML == "±") {
                string += '*' ; 
                string += '-1' ; 
            }
            else {
                if(string.length==1 && string[0]=='0' && e.target.innerHTML == '0'){
                    
                    string = '0' ;
                }
                
                if (e.target.innerHTML == 'x' && square.length==0) {
                    string = string + '*';
                }
                else if (e.target.innerHTML == '÷' && square.length==0) {
                    string = string + '/';
                }
                 else if (e.target.innerHTML == '√') {
                     square = '0' ;
                     flag = 1 ;
                     document.querySelector('input').value = e.target.innerHTML;
                 }
                else {
                    var st =  e.target.innerHTML ;
                    if(square.length>0 && (st>='0' && st<= '9') && flag == 1){
                        square  += st ;
                        document.querySelector('input').value = square;
                    }
                    else if(square.length>1){
                        var b = parseInt(square) ; 
                        var a = Math.sqrt(b) ; 
                        var d = toString(a) ; 
                        square='' ; 
                        string+=d ; 
                        string += st ; 
                        flag = 0 ;
                    }
                    else {
                        string = string + st;
                    }
                }

                document.querySelector('input').value = string;
            }
        }
        catch(err)
        {
            string = "Error" ;
            document.querySelector('input').value = string;
            string="0" ;
        }
    })
})