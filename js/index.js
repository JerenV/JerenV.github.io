function showDiv(sectionId,divId)
{
//    var height = 0;
//    var id = setInterval(frame, 5);
//    function frame() {
//        if (height == 350) {
//            clearInterval(id);
//        } else {
//            height++; 
//            document.getElementById(divId).style.height = height + 'px'; 
//             
//        }
//    }
    document.getElementById(divId).style.display='inline';
}
function hideDiv(divId)
{
    
    document.getElementById(divId).style.display='none';
}