document.querySelector('getThisQuery').textcontent='Got this text using querySelector.';


 document.getElementById('getThisId').textcontent = "got this text using getElementById";

 function submitanswer(){
        var X = document.querySelector('MyAnimal').value;
    document.querySelector('response').innerhtml= 'that\'s great, i like' + x +'too!';
}