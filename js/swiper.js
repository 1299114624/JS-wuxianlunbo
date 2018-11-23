var swiper=(function(){
    return{
        init:function(){
            this.$banner=document.querySelector('.banner-inner');
            this.$tip=document.querySelector('.banner-tip');
            this.$tipLiAll=this.$tip.querySelectorAll('li');
            this.$prevBtn=document.querySelector('.left-btn');
            this.$nextBtn=document.querySelector('.right-btn');
            this.index=0;
            for(i=0;i<this.$tipLiAll.length;i++){
                this.$tipLiAll[i].index=i
            }
            var first=this.$banner.firstElementChild;
            var last=this.$banner.lastElementChild.cloneNode(true);
            this.$banner.appendChild(first.cloneNode(true));
            this.$banner.insertBefore(last,first)
            this.$banner.style.left = '-670px';
            this.event()
            this.autoPlay()
        },
        event:function(){
            _this=this;
            this.$tip.onclick=function(ev){
                ev=ev||window.event;
                var target=ev.target||ev.srcElement;
                if(target.nodeName=='LI'){
                    _this.showImage(target.index);
                    _this.autoPlay();
                }
            }
            this.$prevBtn.onclick=function(){
                _this.showImage(--_this.index);
                _this.autoPlay();
            }
            this.$nextBtn.onclick=function(){
                _this.showImage(++_this.index);
                _this.autoPlay();
            }
        },
        showImage(index){
            if(index>5){
                index=0;
                this.$banner.style.left = 0;
            }
            if(index<0){
                index=5;
                this.$banner.style.left = -670*7+'px';
            }
            this.index=index;
            for(var i=0;i<this.$tipLiAll.length;i++){
                this.$tipLiAll[i].removeAttribute('class');
            }
            this.$tipLiAll[index].className='active';
            move(this.$banner,'left',-(index+1)*670)
        },
        autoPlay(){
            clearInterval(this.timer1)
            _this=this;
            this.timer1=setInterval(function(){
                _this.index++
                _this.showImage(_this.index);
            },2000)
        }
    }
}())