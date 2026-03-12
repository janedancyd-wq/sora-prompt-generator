function generatePrompt(){

let topic=document.getElementById("topic").value;

let prompt=
"Ultra realistic cinematic scene of "+topic+
", natural lighting, high detail, 4k, shallow depth of field, handheld camera feel";

document.getElementById("result").value=prompt;

}
