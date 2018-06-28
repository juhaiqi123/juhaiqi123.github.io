//导航点击消失隐藏
var  dian=document.querySelector("header .top .right");
var nav=document.querySelector("header .top .nav");
nav.style.display="none";
dian.onclick=function(){
    if(nav.style.display=="none"){
        nav.style.display="block";
    }else{
        nav.style.display="none";
    }
    
}

//弹框
var tankuang=document.querySelector(".tankuang")
var daojishi=document.querySelector(".tankuang div .time")
var guanbi=document.querySelector(".tankuang div .guanbi");
guanbi.onclick=function(){
    tankuang.style.display="none";
}
var n=5;
daojishi.innerHTML=n+"秒";
dd=setInterval(function(){
    n--;
    daojishi.innerHTML=n+"秒";
    if(n==0){
        tankuang.style.display="none";
        clearInterval(dd)
    }
},1000)
//轮播

var swiper = new Swiper('.swiper-container', {
      spaceBetween: 30,
     loop:"ture",
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
 })
//banner>top数组vue
new Vue({
    el:"#fenlei",
    data:{
        fenleis:[{img:"img/home/bijiben.png",p:"笔记本"},{img:"img/home/pingbandiannao.png",p:"平板电脑"},{img:"img/home/taishidiannao.png",p:"台式电脑"},{img:"img/home/xianshiqi.png",p:"显示器"},{img:"img/home/luyouqi.png",p:"路由器"},{img:"img/home/dianjingguan.png",p:"电竞馆"},{img:"img/home/nvshenguan.png",p:"女神馆"},{img:"img/home/xueshengguan.png",p:"学生馆"},{img:"img/home/bangongshangyong.png",p:"办公商用"},{img:"img/home/heikeji.png",p:"黑科技"}]
    
    }
            
})

//消息广告
function run(){
    $(".banner .content .right .text").css({"transform":"translateY(-30px)","transition":"1s"})
}
function run1(){
    $(".banner .content .right .text").css({"transform":"translateY(0px)","transition":"0s"});
    $(".banner .content .right .text").eq(0).appendTo($(".banner .content .right"));
 
}
setInterval(function(){
    run();
    setTimeout(function(){
        run1();
    },1000)
},3000)
  

//倒计时
   function time(){
            var date1=new Date("2018-6-22 8:00:00");//目标时间
            var date2=new Date();//当前时间
            var date1time=date1.getTime();//目标时间时间戳
            var date2time=date2.getTime();//当前时间时间戳
            var time=date1time-date2time;//时间戳差值
            var days=Math.floor(time/(1000*60*60*24));//天数
            var daysyu=time%(1000*60*60*24);//余下毫秒数
            var hours=Math.floor(daysyu/(1000*60*60));
            var hoursyu=daysyu%(1000*60*60);
            var minutes=Math.floor(hoursyu/(1000*60));
            var minutesyu=hoursyu%(1000*60);
            var seconds=Math.floor(minutesyu/(1000));
            var h=document.querySelector(".biqiang .h");
            var m=document.querySelector(".biqiang .m");
            var s=document.querySelector(".biqiang .s");
            h1=days*24+hours;
            m1=minutes;
            s1=seconds;
            if(h1<10){
                h.innerHTML="0"+h1;
            }else{
                h.innerHTML=h1;
            }
            if(m1<10){
                m.innerHTML="0"+m1;
            }else{
                m.innerHTML=m1;
            }
            if(s1<10){
                s.innerHTML="0"+s1;
            }else{
                s.innerHTML=s1;
            }
        }
        time();
        setInterval(function(){
            time();
        },1000);

//今日爆款数组vue

new Vue({
    el:"#shop",
    data:{
        shops:[
            {img:"img/home/baokuanpic1.webp",p:"Apple iPad mini 4 7.9英寸 平板电脑（128GB WLAN版 MK9Q2CH A 金色）",span:"￥3188.00",del:"￥3298.00"},
            {img:"img/home/baokuanpic2.webp",p:"华为(HUAWEI)平板M3 青春版 10.1英寸 平板电脑(4GB+64GB WiFi版 哈曼卡顿音效 流光金)",span:"￥2199.00",del:"￥2327.00"},
            {img:"img/home/baokuanpic3.webp",p:"小米(MI)Air 13.3英寸全金属轻薄笔记本电脑(i5-8250U 四核 8G 256G 2G独显 指纹识别）",span:"￥5399.00",del:"￥5699.00"},
            {img:"img/home/baokuanpic4.webp",p:"ThinkPad E570（1TCD）15.6英寸笔记本电脑 i5-7200U 8G 500G 2G独显",span:"￥4699.00",del:"￥4999.00"},
            {img:"img/home/baokuanpic5.webp",p:"戴尔（DELL） U2414H 23.8英寸窄边框旋转升降IPS屏 出厂色彩校准 99%sRGB 电脑显示器（DP线）",span:"￥1399.00",del:"￥1699.00"},
            {img:"img/home/baokuanpic6.webp",p:"惠普(HP)星14-ce0027TX轻薄本14.0英寸笔记本电脑（I5-8250U 1TB+128GB 2G独显 银色）",span:"￥5199.00",del:"￥5353.00"},
            {img:"img/home/baokuanpic7.webp",p:"华为(HUAWEI) MateBook D 15.6英寸笔记本电脑(i5 8G 128G+500G 2G独显 极光蓝)",span:"￥5988.00",del:"￥6610.00"},
            {img:"img/home/baokuanpic8.webp",p:"西部数据Elements Portable新元素系列 2.5英寸USB3.0移动硬盘1TB（WDBUZG0010BBK）",span:"￥389.00",del:"￥428.00"},
            {img:"img/home/baokuanpic9.webp",p:"罗技 Logitech M238球迷典藏系列无线鼠标 - 巴西 足球球迷鼠标",span:"￥109.00",del:"￥129.00"},
        ]
    
    }
            
})
//广告轮播
var swiper = new Swiper('.swiper-container1', {
      spaceBetween: 30,
     loop:"ture",
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
 })



//小编推荐数组vue
new Vue({
    el:"#xiaobian",
    data:{
         goods:[{
             good:[
                 {img:"img/home/rexiao1.webp",h4:"戴尔（DELL）G5-5587-R1545B 15.6英寸游戏本笔记本电脑（ i5八代 8G 混合硬盘 1050Ti）",p:"镁铝合金框架，背光键盘、 雷电接口、两年全智服务，游匣G7姊妹版",span:"￥6299.00",del:"￥6599.00"},
                 {img:"img/home/rexiao2.webp",h4:"Apple MacBook Air 13.3英寸笔记本电脑(I5 8G 128GB MQD32CH/A 银色)",p:"CPU升级至1.8GHz 性能强劲 续航持久",span:"￥6488.00",del:"￥6988.00"},{img:"img/home/rexiao3.webp",h4:"联想(Lenovo)拯救者Y7000 15.6英寸游戏本笔记本电脑（i5-8300H 8GB 2TB+128GB 黑）",p:"GTX1050 4G独显 窄边框 全面屏 双硬盘 大存储 A面酷炫灯效",span:"￥6399.00",del:"￥6699.00"},
                 {img:"img/home/rexiao4.webp",h4:"【爆款】雷神911ST旗舰版 15.6英寸游戏本笔记本电脑i7-8750H 8GB 128GB+1TB 1050Ti",p:"金属外观 全新升级8代酷睿六核十二线程 128G 固态硬盘",span:"￥7295.00",del:"￥7701.00"},
                 {img:"img/home/rexiao5.webp",h4:"极米(XGIMI)H1S 高清智能投影仪 家用投影机（1920×1080P 1100流明)手机WIFI 品质家用",p:"品质音箱，流畅画面，开启世界杯大屏看球季！",span:"￥4999.00",del:"￥5299.00"},
                 {img:"img/home/rexiao6.webp",h4:"亚太森博 橙拷贝可乐70g 百旺 复印纸 A4 5包装打印纸 500页/包",p:"【新老包装随机发货】全木浆中性纸-光滑硬挺-优质打印纸-笑脸拷贝，让你办公不忘好心情",span:"￥111.00",del:"￥149.00"}
             ]
         },{
             good:[
             {img:"img/home/xinpin1.jpg",h4:"Apple iPad 9.7英寸 2018年新款 128G WIFI版 平板电脑 MRJP2CH/A 金色",p:"A10芯片/支持Pencil/Retina显示屏/Touch ID技术 轻便易用 随时创造",span:"￥3188.00",del:"￥3388.00"},
             {img:"img/home/xinpin2.jpg",h4:"斐讯 TC1 智能插座 多功能 WIFI远程控制 USB充电 快充功能 电量统计 收纳功能 安全防护 阻燃外壳 新国标",p:"插座 插排 接线板 USB插座 智能插座 WiFi控制 快充 收纳盒",span:"￥999.00",del:"￥1173.90"},
             {img:"img/home/xinpin3.jpg",h4:"罗技（Logitech）G512 CARBON RGB 有线 机械游戏键盘（GX-Blue C轴）黑色",p:"智能炫光科技 激发机械潜能",span:"￥699.00",del:"￥749.00"},
             {img:"img/home/xinpin4.jpg",h4:"斐讯智能路由器K2G WIFI穿墙",p:"信号覆盖广 穿墙不掉线",span:"￥459.00",del:"￥499.00"},
             {img:"img/home/xinpin5.jpg",h4:"惠普HP光影精灵4代绿刃15.6英寸游戏本笔记本电脑I5-8300H 1T+128GB 1050Ti 144Hz电竞屏",p:"暗影兄弟版！新品来袭！八代CPU，1050Ti，性能大提升！144电竞屏，刷新装备好时机",span:"￥6999.00",del:"￥7167.00"},
             {img:"img/home/xinpin6.jpg",h4:"戴尔（DELL）G5-5587-R1545B 15.6英寸游戏本笔记本电脑（ i5八代 8G 混合硬盘 1050Ti）",p:"镁铝合金框架，背光键盘、 雷电接口、两年全智服务，游匣G7姊妹版",span:"￥6299.00",del:"￥6599.00"}
            ]
         },{
             good:[
            {img:"img/home/haohuo1.jpg",h4:"火影 金钢4K GTX1050Ti 机械键盘游戏本 4KIPS屏笔记本电脑 i7-7700HQ 8G 1T+128G",p:"性价比之王+性能野兽 英特尔八代i7 72%色域",span:"￥6299.00",del:"￥6799.00"},
            {img:"img/home/haohuo2.jpg",h4:"联想(Lenovo)小新潮5000 15.6英寸轻薄本笔记本电脑(I5-7200U 4G 1TB 2G独显 银灰)",p:"【价保618】2G独显 4G 1T大硬盘 15.6英寸全高清大屏 第七代CPU",span:"￥4099.00",del:"￥4699.00"},
            {img:"img/home/haohuo3.jpg",h4:"雷神ST Plus明星版15.6英寸轻薄游戏本手提笔记本电脑i7-7700HQ GTX1050Ti 128GB+1TB",p:"吃鸡神器 升级版RGB键盘 正版Win10 LED灯带 GTX1050Ti",span:"￥6999.00",del:"￥7199.00"},
            {img:"img/home/haohuo4.jpg",h4:"火影 金钢4K GTX1050Ti 机械键盘游戏本 4KIPS屏笔记本电脑 i7-7700HQ 8G 1T+128G",p:"金属系列 高端4K屏 机械键盘 GTX1050Ti+4G 超高端PCI-E固态盘",span:"sale-price",del:"￥7999.00"},
            {img:"img/home/haohuo5.jpg",h4:"闪迪（SanDisk）酷刃（CZ50）16GB U盘 USB2.0 黑色",p:"精致小巧 锐气十足 流线造型 盘体磨砂处理",span:"￥37.90",del:"￥59.00"},
            {img:"img/home/haohuo6.jpg",h4:"微星(MSI)GF62VR-1014 15.6游戏本笔记本电脑i7-7700HQ 128GB+1TB GTX1060",p:"GP升级版GF系列 6G独显 120Hz3MS电竞屏 赛睿多彩背光键盘",span:"￥8999.00",del:"￥10488.00"}
        ]
         }]
    }
})
//小编推荐选项卡

var spans=document.querySelectorAll(".xiaobian .row .col-xs-4 span");
var divs=document.querySelectorAll(".xiaobian .good");
divs[0].style.display="block";
for(var i=0;i<spans.length;i++){
    spans[i].ii=i;
    spans[i].onclick=function(){
        for(var i=0;i<spans.length;i++){
            spans[i].className="";
            divs[i].style.display="none";
        }
        spans[this.ii].className="active";
        divs[this.ii].style.display="block";
    }
    
}

//回到顶部
var tops=document.querySelector(".gotop");
    if(tops !=null){
        tops.style.display="none";
        window.onscroll = function(){
            var juli1=document.documentElement.scrollTop||document.body.scrollTop;
            if(juli1<500){
                tops.style.display="none";
            }else{
                tops.style.display="block";
            }
        };
    
       tops.onclick=function(){
           timer=setInterval(function(){
               var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
               var ispeed=Math.floor(-scrollTop/6);
               if(scrollTop==0){
                   clearInterval(timer);
               }
               document.documentElement.scrollTop=document.body.scrollTop=scrollTop+ispeed;
           },30)

       };
    }

