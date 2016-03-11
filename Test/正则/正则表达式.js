//获取innerhtml的标签中所有包含的代码  
function innerhtmlToInnerText(myText) {  
    var re = ">\\S*<";  
    var result = myText.match(re);  
    var ii = result.toString().length - 1;  
    result = result.toString().substring(1, ii);  
    return result;  
}  