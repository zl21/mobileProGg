;~function () {
    //创建一个style标签
    let styleNode=document.createElement('style');
    //计算屏幕的宽度，并且缩放比例
    let Ww=document.documentElement.clientWidth / 16;
    //提高优先级
    styleNode.innerHTML=`
        html{
            font-size:${Ww}px !important;
        }
    `;
    //把style插入页面中
    document.head.appendChild(styleNode);
}();