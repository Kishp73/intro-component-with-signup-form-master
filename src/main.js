
const button = document.querySelector('#button');

const focusInputs = document.querySelectorAll('.input_style');

for (let p of focusInputs){

    p.addEventListener('focus',()=>{
        p.classList.remove('error');
    });

}

function getValueInputs(){

    const inputs = document.querySelectorAll('.input_style');
    const menssage_error = document.querySelectorAll('.error_span');

    //get value ----------------------------------------------------

    let firstname = inputs[0].value;
    let lastname = inputs[1].value;
    let email = inputs[2].value;
    let password = inputs[3].value;

    let datas = [firstname, lastname, email, password];
    console.log(datas);

    let stateError = [false, false, false, false];

    function validation(){
        let count = 0;
        
        for (let i of datas){

            if (i === ''){

                inputs[count].placeholder = '';
                inputs[count].classList.add('error');
                menssage_error[count].style.visibility = 'visible';
                stateError[count] = true;

                if (count == 2){    
                    inputs[count].placeholder = 'email@example.com';
                }
                

            }else if (i !== ''){

                inputs[count].classList.remove('error');
                inputs[count].classList.add('valid');
                menssage_error[count].style.visibility = 'collapse';
                stateError[count] = false;

            }
            count++;
        }

        let have = String(inputs[2].value);

        if(have.includes('@') && have.includes('.')){

            inputs[2].classList.remove('error');
            inputs[2].classList.add('valid');
            menssage_error[2].style.visibility = 'collapse';

            stateError[2] = false;

        }else{
            
            inputs[2].classList.add('error');
            inputs[2].classList.remove('valid');
            menssage_error[2].style.visibility = 'visible';
            stateError[2] = true;
            
        }

        console.log(stateError);

    }

    validation();

}

button.addEventListener('click', getValueInputs);