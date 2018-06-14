var list=document.querySelector("#list");
if(list !=null){
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
}
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