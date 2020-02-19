;~function(){
    //设计图宽度
    let picWidth = 640;
    //当前屏幕宽度
    let Ww = document.documentElement.clientWidth;
    // 求出当前屏幕和设计图的比例
    let scale =  Ww / picWidth;
    // 修改HTML标签的比例
    document.documentElement.style.transform = `scale(${scale},${scale})`;
}();