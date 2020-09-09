var anchorTags=document.querySelectorAll(".nav-menu a");
for (var i=0;i<anchorTags.length;i++){
    anchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID=this.textContent.trim().toLowerCase();
        var targetSection=document.getElementById(targetSectionID);
        // console.log(targetSection);
        var interval=setInterval(function(){
            var coordinates=targetSection.getBoundingClientRect();
            if (coordinates.top<=0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,20);

        },10);
    });
}

