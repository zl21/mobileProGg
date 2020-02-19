;~function(doc){
    let picWidth = 640;
    let docEle = doc.documentElement;
    let Ww = docEle.clientWidth;

    //以下两个判断是可选
    //只要屏幕宽度小于320  那么不再考虑缩放 最小设置为320  小于320的屏幕生成滚动条
    Ww = Ww < 320 ? 320 : Ww;
    //只要屏幕宽度大于640  那么不再考虑放大  最大设置640  所以屏幕可能会留白
    Ww = Ww > 640 ? 640 : Ww;

    docEle.style.fontSize = Ww * 100 / picWidth + "px";
}(document);