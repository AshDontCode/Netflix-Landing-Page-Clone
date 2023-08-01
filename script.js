const acc = document.querySelectorAll('.question-container');

for(i=0; i<acc.length; i++){
    acc[i].addEventListener('click', function(){
        console.log('clicked');
        this.classList.toggle('active');
    })
}