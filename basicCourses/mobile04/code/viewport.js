;~function(){
    //设计图宽度
    let picWidth = 640;
    //当前屏幕宽度
    let Ww = document.documentElement.clientWidth;
    // 求出当前屏幕和设计图的比例
    let scale =  Ww / picWidth;
    //获取视口的meta标签
    let oMeta = document.querySelector("meta[name=viewport]");
    // 修改系统缩放比例
    oMeta.content = `width=device-width, initial-scale=${scale}`;
}();