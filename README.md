# inlineTest
将html页面里的外链资源，比如js、css、img，变成内联资源。

比如：

带有__inline标记的link标签，会变成内联样式

\<link href="css/style.css?__inline=true" rel="stylesheet" /\>

带有__inline标记的img标签，会变成内联base64字符串

\<img src="img/icon.png?__inline=true" /\>

带有__inline标记的script标签，会变成内联脚本

\<script src="js/erport.js?__inline=true"\>\</script\> 
