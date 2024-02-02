const upperContent = document.getElementById('upper');
const lowerContent = document.getElementById('lower');

document.addEventListener("click", (event) => {
    if(event.target.classList.contains("key")){
        calculcatorAction(event.target.textContent);
    }
})

function calculcatorAction(key){
    let expression = upperContent.textContent;
    upperContent.classList.remove("animate");
    if(key==="AC"){
        upperContent.textContent = "";
        lowerContent.textContent = "";
    }
    else if(key==="="){
        upperContent.classList.add("animate");
        expression = expression.replaceAll("%","*(1/100)*");
        try {
            expression = eval(expression);
            if(expression == undefined){
                expression = "";
            }
            if(expression.toString().length>12){
                if(Number(expression).toFixed(2).toString().length>12){
                    throw new Error("Out of range");
                }
                else{
                    lowerContent.textContent = Number(expression).toFixed(2);
                }
            }
            else{
                lowerContent.textContent = expression;
            }
        }
        catch (error) {
            window.alert(error);
        }
    }
    else if(key==="<-"){
        lowerContent.textContent = "";
        upperContent.textContent = upperContent.textContent.slice(0,upperContent.textContent.length-1)
    }
    else if(lowerContent.textContent != ""){
        upperContent.textContent = lowerContent.textContent + key;
        lowerContent.textContent = "";
    }
    else{
        try{
            if(upperContent.textContent.length>=12){
                throw new Error("more characters not allowed")
            }
            upperContent.textContent += key;
        } catch(error){
            window.alert(error);
        }
    }
}

function getUpperContent(){
    return upperContent.textContent;
}

