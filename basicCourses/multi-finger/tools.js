+(function(w){
	w.tools1 = {};
	w.tools1.css=function (node,type,val){
        if(typeof node ==="object" && typeof node["transform"] ==="undefined" ){
            node["transform"]={};
        }
        if(arguments.length>=3){
            //设置
            var text ="";
            node["transform"][type] = val;
            
            for( item in node["transform"]){
                if(node["transform"].hasOwnProperty(item)){
                    switch (item){
                        case "translateX":
                        case "translateY":
                        case "translateZ":
                            text +=  item+"("+node["transform"][item]+"px)";
                            break;
                        case "scaleX":
                        case "scaleY":
                        case "scale":
                            text +=  item+"("+node["transform"][item]+")";
                            break;
                        case "rotateX":
                        case "rotateY":
                        case "rotate":
                            text +=  item+"("+node["transform"][item]+"deg)";
                            break;
                    }
                }
            }
            node.style.transform = node.style.webkitTransform = text;
        }else if(arguments.length==2){
            //读取
            val =node["transform"][type];
            if(typeof val === "undefined"){
                switch (type){
                    case "translateX":
                    case "translateY":
                    case "rotate":
                    case "rotateX":
                    case "rotateY":
                        val =0;
                        break;
                    case "scale":
                    case "scaleX":
                    case "scaleY":
                        val =1;
                        break;
                }
            }
            return val;
        }
    }
	
})(window)
