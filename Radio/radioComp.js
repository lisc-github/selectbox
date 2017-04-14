/**
 * Created by admin on 2017/4/13.
 */
(function(){
    function RadioComp(){

    }
    RadioComp.prototype = {
        init:function(id,obj){
            var radioBox = document.getElementById(id);
            var input = this.createInput(obj);
            var pic = this.createPicBox(obj);
            radioBox.appendChild(input);
            radioBox.appendChild(pic);
            this.radioBox = radioBox;
            this.eventBind();
        },
        createInput:function(obj){
            var input = document.createElement("input");
            input.setAttribute("type","radio");
            input.style.margin = "0";
            for(var attr in obj){
                if(obj.hasOwnProperty(attr)){
                    input.setAttribute(attr,obj[attr]);
                }
            }
            return input;
        },
        createPicBox:function(obj){
            var picBox = document.createElement("span");
            var img = document.createElement("img");
            picBox.style.position = "relative";
            img.style.width = "100%";
            img.style.position = 'absolute';
            img.setAttribute("name","li-"+obj.name);
            img.setAttribute("src","radioIcon.jpg");
            picBox.appendChild(img);
            picBox.style.position = "absolute";
            picBox.style.height = "100%";
            picBox.style.width = "100%";
            picBox.style.left = 0;
            picBox.style.top = 0;
            if(obj.checked){
                img.style.top = 0;
            }
            else{
                img.style.bottom = 0;
            }
            this.img = img;
            this.picBox = picBox;
            return picBox;
        },
        eventBind:function(){
            var parent = this.radioBox.parentNode;
            parent.style.cursor = "pointer";
            var _this = this;
            parent.onclick = function(){
                var input = _this.findChild(parent,"input");
                var name = input.getAttribute("name");
                var imgs = _this.findAttrChild("img","name","li-"+name);
                for(var i=0;i<imgs.length;i++){
                    imgs[i].style.bottom = 0;
                    imgs[i].style.top = "";
                }
                this.getElementsByTagName("img")[0].style.top = 0;
                this.getElementsByTagName("input")[0].click();
            }
        },
        findChild:function(parent,ele){
            return parent.getElementsByTagName(ele)[0];
        },
        findAttrChild:function(ele,attrName,attrValue){
            var arr = [];
            var eles = document.getElementsByTagName(ele);
            for(var i=0;i<eles.length;i++){
                if(eles[i].getAttribute(attrName)==attrValue){
                    arr.push(eles[i]);
                }
            }
            return arr;
        }

    };
    var rc = new RadioComp();
    window.radioComp = function(id,obj){
        rc.init.call(rc,id,obj);
    }
})(window);
