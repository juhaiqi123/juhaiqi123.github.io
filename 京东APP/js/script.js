var ad=document.querySelector(".ad");
var close=document.querySelector(".ad .left span");
if(ad !=null,close !=null){
    if(sessionStorage=="false"){
    ad.style.display="none";
    }else{
        ad.style.display="block";
    }
    close.onclick=function(){
        ad.style.display="none";
        sessionStorage="false";
    }
}

///快报/
var text=document.querySelectorAll(".news .center .text");
function run(){
    $(".news .center .text").css({"transform":"translateY(-16px)","transition":"1s"})
}
function run1(){
    $(".news .center .text").css({"transform":"translateY(0px)","transition":"0s"});
    $(".news .center .text").eq(0).appendTo($(".news .center"));
 
}
setInterval(function(){
    run();
    setTimeout(function(){
        run1();
    },1000)
},2000)
//倒计时
    function time(){
            var span =document.querySelector("span");
            var date1=new Date("2018-6-13 8:00:00");//目标时间
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
            var h=document.querySelector(".miaosha .title .left .h");
            var m=document.querySelector(".miaosha .title .left .m");
            var s=document.querySelector(".miaosha .title .left .s");
            h1=days*24+hours;
            m1=minutes;
            s1=seconds;
            if(h !=null,m !=null,s !=null){
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
        }
            
        time();
        setInterval(function(){
            time();
        },1000);

//顶部搜索框鼠标滚动

//var search=document.querySelector(".search");
//$(function(){
//    $(window).scroll(function(){
//        if($(window).scrollTop()>100){
//            search.style.background="palevioletred";
//        }else{
//            search.style.background="";
//        }
//    })
//})
var search=document.querySelector(".search");
    window.onscroll = function(){
        var juli=document.documentElement.scrollTop||document.body.scrollTop;
        if(juli<100){
                 search.style.background="";
            }else{
                  search.style.backgroundColor="palevioletred";
            }
    }

//轮播

var mySwiper = new Swiper ('.swiper-container', {
    //direction: 'vertical',
    loop: true,

    // 如果需要分页器
    pagination: {
        el: '.swiper-pagination',
    }
})

//京东直播

var swiper = new Swiper('.swiper-container1', {
    effect: 'coverflow',
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows : true,
    },
});

//为你推荐
new Vue({
    el:"#tuijian",
    data:{
        arrs:[
            {span:"自营",name:"【京东超市】e洁 自动收口垃圾袋加厚手提式 45c...",img:"img/weinituijian/1.png",price:"￥21.8",price1:"￥19.50",class:"ibg"},
            {name:"安昕 良选男士船袜5双装 中简棉袜商务男袜子吸汗透气短袜 船",img:"img/weinituijian/2.png",price:"￥38.00",button:"看相似"},
            {name:"苹果原装数据线iPhone7Plus//6P/5SE/iPadpro手机USB线",img:"img/weinituijian/3.png",price:"￥155.00",button:"看相似"},{name:"真皮多卡拉零钱包女士卡夹信用卡包头层牛皮驾驶证皮套风琴",img:"img/weinituijian/4.png",price:"￥59.00",button:"看相似"},
            {name:"QANLIIY千里鹰便携双筒望远镜高倍高清微光夜视非红外军演",img:"img/weinituijian/5.png",price:"￥138.00",button:"看相似"},
            {span:"自营",name:"【京东超市】蒙牛（MENGNIU）成人奶粉 全脂",img:"img/weinituijian/6.png",price:"￥27.80",button:"看相似"},
            {span:"自营",name:"【京东超市】清风（APP）卷纸 原木纯品 3层270段卫生",img:"img/weinituijian/7.png",price:"￥18.90",button:"看相似"},
            {span:"自营",name:"【京东超市】绿之源 360°室内装修安全卫士活性炭汽车",img:"img/weinituijian/8.png",price:"￥99.00",button:"看相似"},
            {span:"全球购",name:"澳洲进口 卢卡斯Lucas番木瓜膏滋润保湿万用膏 驱蚊",img:"img/weinituijian/9.png",price:"￥49.00",button:"看相似"},{span:"自营",name:"海尔（Haier）BCD-201STPA 201升 三门冰",img:"img/weinituijian/10.png",price:"￥1199.00",button:"看相似"},
            {name:"",img:"img/weinituijian/11.png",price:"",button:"看相似"},
            {span:"自营",name:"【京东超市】三只松鼠 肉干肉脯 零食小吃 牛肉烧烤味小",img:"img/weinituijian/12.png",price:"￥21.90",button:"看相似"},
            {span:"自营",name:"【京东超市】泰国进口 休闲零食 小老板 烤海苔卷 脆紫菜",img:"img/weinituijian/13.png",price:"￥13.80",button:"看相似"},
            {span:"全球购",name:"日本 熊野油脂（Horse oil）无硅油马油洗发水 丝质顺滑",img:"img/weinituijian/14.png",price:"￥49.00",button:"看相似"},
            {span:"自营",name:"【京东超市】惠氏启赋（Wyeth illuma）较大婴儿和",img:"img/weinituijian/15.png",price:"￥298.00",button:"看相似"},{name:"【国际名品直销】GOLF精品牛皮多卡位男士手包可装手机加",img:"img/weinituijian/16.png",price:"￥219.00",button:"看相似"},
            {name:"【京东超市】【京东配送】【双轴承 宽轮 可折叠】健爵滑板车 三轮多彩闪",img:"img/weinituijian/17.png",price:"￥18.90",button:"看相似"},
            {span:"自营",name:"【京东超市】法国进口 达能正品 依云（evian）天然矿泉水",img:"img/weinituijian/18.png",price:"￥99.00",button:"看相似"},
            {name:"【苏之润记忆棉靠垫】办公室汽车座椅护腰靠垫腰靠靠背靠枕",img:"img/weinituijian/19.png",price:"￥89.00",button:"看相似"},
            {span:"自营",name:"泰昌（taichang）TC-5197全自动按摩足浴盆洗脚盆泡脚",img:"img/weinituijian/20.png",price:"￥369.00   ",button:"看相似"}
            
        ]
    }
})




var a=document.querySelectorAll("#tuijian .shangpin .btn")
if(a !=null){
    a[0].style.display="none";
    a[10].style.display="none";
}
var h4=document.querySelectorAll("#tuijian .shangpin h4");
if(h4 !=null){
    h4[8].firstChild.style.backgroundColor="#b162a3";
    h4[13].firstChild.style.backgroundColor="#b162a3";
}

//回到顶部
var tops=document.querySelector(".gotop");
    if(tops !=null){
        tops.style.display="none";
        window.onscroll = function(){
            var juli1=document.documentElement.scrollTop||document.body.scrollTop;
            if(juli1<600){
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



new Vue({
    el:"#list",
    data:{    
        list:[
            {guanggao:"img/sort/guangao.jpg",
                biaotis:[
                    {h3:"热门分类",
                    shangpins:[
                        {img:"img/sort/tuijian/1.png",p:"电风扇"},{img:"img/sort/tuijian/2.png",p:"手机"},{img:"img/sort/tuijian/3.png",p:"空调"},{img:"img/sort/tuijian/4.png",p:"充电宝"},{img:"img/sort/tuijian/5.png",p:"蓝牙耳机"},{img:"img/sort/tuijian/6.png",p:"蚊帐"},{img:"img/sort/tuijian/7.png",p:"凉席"},{img:"img/sort/tuijian/8.png",p:"耳机"},{img:"img/sort/tuijian/9.jpg",p:"电饭煲"},{img:"img/sort/tuijian/10.png",p:"空调挂机"},{img:"img/sort/tuijian/11.png",p:"路由器"},{img:"img/sort/tuijian/12.png",p:"努空调扇"},
                        {img:"img/sort/tuijian/13.png",p:"男鞋"},
                        {img:"img/sort/tuijian/14.png",p:"热水器"},
                        {img:"img/sort/tuijian/15.png",p:"防晒"},
                    ]},
                    {h3:"家电热搜",
                    shangpins:[
                        {img:"img/sort/tuijian/16.png",p:"冰箱"},{img:"img/sort/tuijian/17.png",p:"洗衣机"},{img:"img/sort/tuijian/18.png",p:"电视"},
                    ]},
                    {h3:"热卖手机",
                     shangpins:[
                        {img:"img/sort/tuijian/19.png",p:"华为手机"},
                        {img:"img/sort/tuijian/20.png",p:"小米手机"},
                        {img:"img/sort/tuijian/21.png",p:"苹果"},
                     ]
                    }
                ]
            },{guanggao:"img/sort/guangao1.jpg",
               biaotis:[
                    {
                   
               }]
              
            },{},{},{},{},{},{},{},{},{},{},{},{},{},{} ,{},{},{},{},{},{},{},{},{},{},{},{},{},{},{} ,{},{},{}          
        ]
    }
})
//京东分类选项卡
var sortnav=document.querySelectorAll(".sort .main ul li");
var sortlist=document.querySelectorAll(".sort .main .row .col-xs-9 .list");
if(sortnav !=null,sortlist !=null){
    sortlist[0].style.display="block";
    for(var q=0;q<sortnav.length;q++){
        sortnav[q].qq=q;
        sortnav[q].onclick=function(){
            for(var w=0;w<sortnav.length;w++){
                sortnav[w].className="";
                sortlist[w].style.display="none";
            }
            sortlist[this.qq].style.display="block";
            sortnav[this.qq].className="active";
            var n=this.qq;
            $(".sort .main .row .col-xs-3").animate({scrollTop:40*n},500);
        }   
    }
}