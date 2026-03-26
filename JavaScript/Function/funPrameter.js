var num1=prompt("enter first number");
        var num2=prompt("enter second number");
        var oper=prompt("enter operator");
        function calculate(num1, num2, oper) {
            if(oper=="+"){
                return parseInt(num1) + parseInt(num2);
            }
            else if(oper=="-"){
                return parseInt(num1) - parseInt(num2);
            }
            else if(oper=="*"){
                return parseInt(num1) * parseInt(num2);
            }
            else if(oper=="/"){
                return parseInt(num1) / parseInt(num2);
            }
            else{
                return "invalid operator";
            }


        }
        var result=calculate(num1, num2, oper);
        document.write("the result is: " + result);