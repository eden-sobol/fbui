let jsf = {r:function(width,height,color,id,left,top){var name;name=document.createElement("p");name.style.backgroundColor=color;name.style.width=width;name.style.height=height;name.id=id;name.style.position="absolute";name.style.left=left;name.style.top=top;document.body.innerHTML+=name.outerHTML}}