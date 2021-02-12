module.exports = function check(str, bracketsConfig) {

    if(str.length % 2 === 1){

        return false;

    }

    let stack = [];
    let sign;

    for(let i = 0; i < str.length; i++){

        sign = stack[stack.length - 1];

        for(let brackets of bracketsConfig){

            if( brackets[0] !== brackets[1] ){

                if( str[i] === brackets[0] ){

                    stack.push(str[i]);

                }

                else if( str[i] === brackets[1] && sign === brackets[0] ){

                    stack.pop();

                }

            }
            else if( brackets[0] === brackets[1] ){

                if( str[i] === brackets[0] ){

                    if( !stack.length || sign !== brackets[0] ){

                        stack.push(str[i]);

                    }
                    else if( sign === brackets[0] ){

                        stack.pop();

                    }

                }

            }
        }
    }

    if ( stack.length ) {

        return false;

    } else  {

        return true;

    }

}
