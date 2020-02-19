;~function(){
    //先创建一个style标签
    let styleNode = document.createElement("style");
    //计算屏幕宽度 并缩放一个比例
    let Ww = document.documentElement.clientWidth / 16;
    // 把html的fontsize给上去  并且提高到最大优先级
    styleNode.innerHTML = `
        html{
            font-size: ${Ww}px !important;
        }
    `;
    //把style标签插入到页面中
    document.head.appendChild(styleNode);
}();