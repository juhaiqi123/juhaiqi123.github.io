//导航点击消失隐藏
var  dian=document.querySelector(".list header .top .right");
var nav=document.querySelector(".list header .top .nav");
nav.style.display="none";
dian.onclick=function(){
    if(nav.style.display=="none"){
        nav.style.display="block";
    }else{
        nav.style.display="none";
    }
    
}


//分类数组vue

new Vue({
    el:"#list",
    data:{
        lists:[{
            h3:"电脑专区",
            divs:[
                {img:"img/list/diannao1.webp",span:"平板电脑"}, {img:"img/list/diannao2.webp",span:"笔记本"}, {img:"img/list/diannao3.webp",span:"轻薄本"}, {img:"img/list/diannao4.webp",span:"游戏本"}, {img:"img/list/diannao5.webp",span:"游戏台机"}, {img:"img/list/diannao6.webp",span:"商务台机"}, {img:"img/list/diannao7.webp",span:"一体机"}, {img:"img/list/diannao8.webp",span:"二手优选"}
            ]
        },{ 
            h3:"外设专区",
            divs:[
                {img:"img/list/waishe1.webp",span:"鼠标"}, {img:"img/list/waishe2.webp",span:"键盘"}, {img:"img/list/waishe3.webp",span:"移动硬盘"}, {img:"img/list/waishe4.webp",span:"U盘"}, {img:"img/list/waishe5.webp",span:"路由器"}, {img:"img/list/waishe6.webp",span:"电脑管家"}, {img:"img/list/waishe7.webp",span:"打印机"}, {img:"img/list/waishe8.webp",span:"投影"}
            ]
        },{
            h3:"DIY专区",
            divs:[
                {img:"img/list/div1.webp",span:"显示器"}, {img:"img/list/div2.webp",span:"固态硬盘"}, {img:"img/list/div3.webp",span:"CUP"}, {img:"img/list/div4.webp",span:"内存条"}, {img:"img/list/div5.webp",span:"显卡"}, {img:"img/list/div6.webp",span:"电源"}, {img:"img/list/div7.webp",span:"机械硬盘"}, {img:"img/list/div8.webp",span:"机箱"}
            ]
        },{
            h3:"品牌专区",
            divs:[
                {img:"img/list/pinpai1.webp",span:"苹果"}, {img:"img/list/pinpai2.webp",span:"华硕"}, {img:"img/list/pinpai3.webp",span:"联想"}, {img:"img/list/pinpai4.webp",span:"小米"}, {img:"img/list/pinpai5.webp",span:"三星"}, {img:"img/list/pinpai6.webp",span:"惠普"}, {img:"img/list/pinpai7.webp",span:"thinkPad"}, {img:"img/list/pinpai8.webp",span:"华为"}
            ]
        }]
    }
})






new Vue({
    el:".tuijian",
    data:{
        tuijians:[{img:"img/shop/pic1.webp",p:"华硕(ASUS)飞行堡垒FX63 15.6英寸游戏本笔记本电脑 i7-7700HQ 1TB+128GB GTX1050",span:"￥6599.00",del:"￥7660.00"},{img:"img/shop/pic2.webp",p:"小米(MI)Air 12.5英寸轻薄笔记本电脑(Core m3-7Y30 4G 256G固态硬盘 office版 银色)",span:"￥3999.00",del:"￥4199.00"},{img:"img/shop/pic3.webp",p:"Apple MacBook Air 13.3英寸笔记本电脑(I5 8G 128GB MQD32CH/A 银色)",span:"￥6488.00",del:"￥6988.00"},{img:"img/shop/pic4.webp",p:"雷神ST Plus-U5tb 15.6英寸游戏本笔记本电脑（i7-7700HQ 8GB 256GB 1050Ti）",span:"￥5999.00 q",del:"￥6999.00"},{img:"img/shop/pic5.webp",p:"【爆款】雷神911ST旗舰版 15.6英寸游戏本笔记本电脑i7-8750H 8GB 128GB+1TB 1050Ti",span:"￥6999.00",del:"￥7701.00"},{img:"img/shop/pic6.webp",p:"戴尔（DELL）Ins15-5570-R1525S 15.6英寸灵越笔记本电脑（i5-8250U 4G 1T 2G独显）",span:"￥3999.00",del:"￥4199.00"},{img:"img/shop/pic7.webp",p:"小米(MI) 15.6英寸游戏本笔记本电脑（四核i7 16G 1T+256G GTX 1060）",span:"￥8999.00",del:"￥9299.00"},{img:"img/shop/pic8.webp",p:"惠普（HP）Envy13-ad108TU 轻薄本笔记本电脑（Intel i5 4G 256GB 银 集显13.3英寸 ）",span:"￥5299.00",del:"￥6999.00"},{img:"img/shop/pic9.webp",p:"雷神911幻影15.6英寸游戏本笔记本电脑（旗舰版i7-8750H 8G 128GB+1TB GTX1060）",span:"￥8499.00",del:"￥9300.00"},{img:"img/shop/pic10.webp",p:"惠普HP光影精灵Ⅲ代绿刃Pav15-cb073TX15.6英寸游戏本笔记本电脑(I5-7300HQ 128GB+1TB)",span:"￥5299.00",del:"￥6999.00"},{img:"img/shop/pic11.webp",p:"小米(MI)Pro 15.6英寸金属轻薄笔记本电脑(i5-8250U 8G 256G固态硬盘 2G独显 指纹识别 灰)",span:"￥5595.00",del:"￥5899.00"},{img:"img/shop/pic12.webp",p:"联想(Lenovo)YOGA 720 12.5英寸轻薄本翻转笔记本电脑 (i5-7200U 4G 256GB 天蝎灰)",span:"￥5799.00",del:"￥6599.00"},{img:"img/home/haohuo1.jpg",h4:"火影 金钢4K GTX1050Ti 机械键盘游戏本 4KIPS屏笔记本电脑 i7-7700HQ 8G 1T+128G",p:"性价比之王+性能野兽 英特尔八代i7 72%色域",span:"￥6299.00",del:"￥6799.00"},
            {img:"img/home/haohuo2.jpg",h4:"联想(Lenovo)小新潮5000 15.6英寸轻薄本笔记本电脑(I5-7200U 4G 1TB 2G独显 银灰)",p:"【价保618】2G独显 4G 1T大硬盘 15.6英寸全高清大屏 第七代CPU",span:"￥4099.00",del:"￥4699.00"},
            {img:"img/home/haohuo3.jpg",h4:"雷神ST Plus明星版15.6英寸轻薄游戏本手提笔记本电脑i7-7700HQ GTX1050Ti 128GB+1TB",p:"吃鸡神器 升级版RGB键盘 正版Win10 LED灯带 GTX1050Ti",span:"￥6999.00",del:"￥7199.00"},
            {img:"img/home/haohuo4.jpg",h4:"火影 金钢4K GTX1050Ti 机械键盘游戏本 4KIPS屏笔记本电脑 i7-7700HQ 8G 1T+128G",p:"金属系列 高端4K屏 机械键盘 GTX1050Ti+4G 超高端PCI-E固态盘",span:"sale-price",del:"￥7999.00"},
            {img:"img/home/haohuo5.jpg",h4:"闪迪（SanDisk）酷刃（CZ50）16GB U盘 USB2.0 黑色",p:"精致小巧 锐气十足 流线造型 盘体磨砂处理",span:"￥37.90",del:"￥59.00"},
            {img:"img/home/haohuo6.jpg",h4:"微星(MSI)GF62VR-1014 15.6游戏本笔记本电脑i7-7700HQ 128GB+1TB GTX1060",p:"GP升级版GF系列 6G独显 120Hz3MS电竞屏 赛睿多彩背光键盘",span:"￥8999.00",del:"￥10488.00"},{img:"img/home/xinpin1.jpg",h4:"Apple iPad 9.7英寸 2018年新款 128G WIFI版 平板电脑 MRJP2CH/A 金色",p:"A10芯片/支持Pencil/Retina显示屏/Touch ID技术 轻便易用 随时创造",span:"￥3188.00",del:"￥3388.00"},
             {img:"img/home/xinpin2.jpg",h4:"斐讯 TC1 智能插座 多功能 WIFI远程控制 USB充电 快充功能 电量统计 收纳功能 安全防护 阻燃外壳 新国标",p:"插座 插排 接线板 USB插座 智能插座 WiFi控制 快充 收纳盒",span:"￥999.00",del:"￥1173.90"},
             {img:"img/home/xinpin3.jpg",h4:"罗技（Logitech）G512 CARBON RGB 有线 机械游戏键盘（GX-Blue C轴）黑色",p:"智能炫光科技 激发机械潜能",span:"￥699.00",del:"￥749.00"},
             {img:"img/home/xinpin4.jpg",h4:"斐讯智能路由器K2G WIFI穿墙",p:"信号覆盖广 穿墙不掉线",span:"￥459.00",del:"￥499.00"},
             {img:"img/home/xinpin5.jpg",h4:"惠普HP光影精灵4代绿刃15.6英寸游戏本笔记本电脑I5-8300H 1T+128GB 1050Ti 144Hz电竞屏",p:"暗影兄弟版！新品来袭！八代CPU，1050Ti，性能大提升！144电竞屏，刷新装备好时机",span:"￥6999.00",del:"￥7167.00"},
             {img:"img/home/xinpin6.jpg",h4:"戴尔（DELL）G5-5587-R1545B 15.6英寸游戏本笔记本电脑（ i5八代 8G 混合硬盘 1050Ti）",p:"镁铝合金框架，背光键盘、 雷电接口、两年全智服务，游匣G7姊妹版",span:"￥6299.00",del:"￥6599.00"}]
    }
})




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
