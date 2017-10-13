function menuFix() {
    var sfEls = document.getElementById("nav").getElementsByTagName("li");
    for (var i = 0; i < sfEls.length; i++) {
        sfEls[i].onmouseover = function() {
            this.className += (this.className.length > 0 ? " ": "") + "sfhover";
        }
        sfEls[i].onMouseDown = function() {
            this.className += (this.className.length > 0 ? " ": "") + "sfhover";
        }
        sfEls[i].onMouseUp = function() {
            this.className += (this.className.length > 0 ? " ": "") + "sfhover";
        }
        sfEls[i].onmouseout = function() {
            this.className = this.className.replace(new RegExp("( ?|^)sfhover\\b"),

            "");
        }
    }
}
window.onload=menuFix;
function fixImage1(ImgD,width,height){
    var image=new Image();
    image.src=ImgD.src;

    imgw = image.width;
    imgh = image.height;
    if(imgw*1>width){
        imgh = imgh/imgw*width;
        imgw=width;
    }
    if(imgh*1>height){
        imgw = imgw/imgh*height;
        imgh=height;
    }
    ImgD.width = imgw;
    ImgD.height = imgh;
}
function yqdt(id){
    if(id=="yq_yangquan")
    {
        document.getElementById("yq_yuxian").style.display="none";

        document.getElementById("yq_yangquan").style.display="block";
        document.getElementById("yq_pingding").style.display="none";
        document.getElementById("yq_jiaoqu").style.display="none";
        document.getElementById("yq_chengqu").style.display="none";
        document.getElementById("yq_kuangqu").style.display="none";

        document.getElementById("yq_yuxiantp").style.display="none";

        document.getElementById("yq_yangquantp").style.display="block";
        document.getElementById("yq_pingdingtp").style.display="none";
        document.getElementById("yq_jiaoqutp").style.display="none";
        document.getElementById("yq_chengqutp").style.display="none";
        document.getElementById("yq_kuangqutp").style.display="none";

        document.getElementById("yq_yuxianmore").style.display="none";

        document.getElementById("yq_yangquanmore").style.display="block";
        document.getElementById("yq_pingdingmore").style.display="none";
        document.getElementById("yq_jiaoqumore").style.display="none";
        document.getElementById("yq_chengqumore").style.display="none";
        document.getElementById("yq_kuangqumore").style.display="none";
    }
    if(id=="yq_yuxian")
    {
        document.getElementById("yq_yuxian").style.display="block";

        document.getElementById("yq_yangquan").style.display="none";
        document.getElementById("yq_pingding").style.display="none";
        document.getElementById("yq_jiaoqu").style.display="none";
        document.getElementById("yq_chengqu").style.display="none";
        document.getElementById("yq_kuangqu").style.display="none";

        document.getElementById("yq_yuxiantp").style.display="block";

        document.getElementById("yq_yangquantp").style.display="none";
        document.getElementById("yq_pingdingtp").style.display="none";
        document.getElementById("yq_jiaoqutp").style.display="none";
        document.getElementById("yq_chengqutp").style.display="none";
        document.getElementById("yq_kuangqutp").style.display="none";

        document.getElementById("yq_yuxianmore").style.display="block";

        document.getElementById("yq_yangquanmore").style.display="none";
        document.getElementById("yq_pingdingmore").style.display="none";
        document.getElementById("yq_jiaoqumore").style.display="none";
        document.getElementById("yq_chengqumore").style.display="none";
        document.getElementById("yq_kuangqumore").style.display="none";
    }
    if(id=="yq_pingding")
    {
        document.getElementById("yq_pingding").style.display="block";

        document.getElementById("yq_yangquan").style.display="none";
        document.getElementById("yq_yuxian").style.display="none";
        document.getElementById("yq_jiaoqu").style.display="none";
        document.getElementById("yq_kuangqu").style.display="none";
        document.getElementById("yq_chengqu").style.display="none";

        document.getElementById("yq_pingdingtp").style.display="block";

        document.getElementById("yq_yangquantp").style.display="none";
        document.getElementById("yq_yuxiantp").style.display="none";
        document.getElementById("yq_jiaoqutp").style.display="none";
        document.getElementById("yq_kuangqutp").style.display="none";
        document.getElementById("yq_chengqutp").style.display="none";

        document.getElementById("yq_pingdingmore").style.display="block";

        document.getElementById("yq_yangquanmore").style.display="none";
        document.getElementById("yq_yuxianmore").style.display="none";
        document.getElementById("yq_jiaoqumore").style.display="none";
        document.getElementById("yq_kuangqumore").style.display="none";
        document.getElementById("yq_chengqumore").style.display="none";
    }
    if(id=="yq_kuangqu")
    {
        document.getElementById("yq_kuangqu").style.display="block";

        document.getElementById("yq_yangquan").style.display="none";
        document.getElementById("yq_yuxian").style.display="none";
        document.getElementById("yq_pingding").style.display="none";
        document.getElementById("yq_jiaoqu").style.display="none";
        document.getElementById("yq_chengqu").style.display="none";

        document.getElementById("yq_kuangqutp").style.display="block";

        document.getElementById("yq_yangquantp").style.display="none";
        document.getElementById("yq_yuxiantp").style.display="none";
        document.getElementById("yq_pingdingtp").style.display="none";
        document.getElementById("yq_jiaoqutp").style.display="none";
        document.getElementById("yq_chengqutp").style.display="none";

        document.getElementById("yq_kuangqumore").style.display="block";

        document.getElementById("yq_yangquanmore").style.display="none";
        document.getElementById("yq_yuxianmore").style.display="none";
        document.getElementById("yq_pingdingmore").style.display="none";
        document.getElementById("yq_jiaoqumore").style.display="none";
        document.getElementById("yq_chengqumore").style.display="none";
    }
    if(id=="yq_jiaoqu")
    {
        document.getElementById("yq_jiaoqu").style.display="block";

        document.getElementById("yq_yangquan").style.display="none";
        document.getElementById("yq_yuxian").style.display="none";
        document.getElementById("yq_pingding").style.display="none";
        document.getElementById("yq_kuangqu").style.display="none";
        document.getElementById("yq_chengqu").style.display="none";

        document.getElementById("yq_jiaoqutp").style.display="block";

        document.getElementById("yq_yangquantp").style.display="none";
        document.getElementById("yq_yuxiantp").style.display="none";
        document.getElementById("yq_pingdingtp").style.display="none";
        document.getElementById("yq_kuangqutp").style.display="none";
        document.getElementById("yq_chengqutp").style.display="none";

        document.getElementById("yq_jiaoqumore").style.display="block";

        document.getElementById("yq_yangquanmore").style.display="none";
        document.getElementById("yq_yuxianmore").style.display="none";
        document.getElementById("yq_pingdingmore").style.display="none";
        document.getElementById("yq_kuangqumore").style.display="none";
        document.getElementById("yq_chengqumore").style.display="none";

    }
    if(id=="yq_chengqu")
    {
        document.getElementById("yq_chengqu").style.display="block";

        document.getElementById("yq_yuxian").style.display="none";
        document.getElementById("yq_yangquan").style.display="none";
        document.getElementById("yq_pingding").style.display="none";
        document.getElementById("yq_kuangqu").style.display="none";
        document.getElementById("yq_jiaoqu").style.display="none";

        document.getElementById("yq_chengqutp").style.display="block";

        document.getElementById("yq_yuxiantp").style.display="none";
        document.getElementById("yq_yangquantp").style.display="none";
        document.getElementById("yq_pingdingtp").style.display="none";
        document.getElementById("yq_kuangqutp").style.display="none";
        document.getElementById("yq_jiaoqutp").style.display="none";

        document.getElementById("yq_chengqumore").style.display="block";

        document.getElementById("yq_yuxianmore").style.display="none";
        document.getElementById("yq_yangquanmore").style.display="none";
        document.getElementById("yq_pingdingmore").style.display="none";
        document.getElementById("yq_kuangqumore").style.display="none";
        document.getElementById("yq_jiaoqumore").style.display="none";
    }
}

