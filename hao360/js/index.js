window.onload=function(){
	/*搜素显示隐藏*/
	var oTag=document.getElementById('tag');
	var oSelect=document.getElementById('select');
	var oList=document.getElementById('list');
	var aLi=oList.getElementsByTagName('li');
	var onOff=true;
	oTag.onclick=function(){
		if(onOff)
		{
			oTag.style.backgroundImage='url(images/nav_0.png)';
			oList.style.display='block';
			onOff=false;
		}
		else
		{
			oTag.style.backgroundImage='url(images/nav_1.png)';
			oList.style.display='none';
			onOff=true;
		}
	};
	
	/*头部下拉框*/
	var oExtend=document.getElementById('extend');
	var oSpan=oExtend.getElementsByTagName('span')[0];
	oExtend.onclick=function(){
		if(oSpan.style.display=='none')
		{	
			oSpan.style.display='block';
		}
		else
		{
			oSpan.style.display='none';
		}
	};
	
	for(var i=0;i<aLi.length;i++)
	{	
		aLi[i].onclick=function(){
			oSelect.innerHTML=this.innerHTML;
			};
	}
	
	
		/*轮播图*/
	var aSlider= document.getElementsByClassName('slider');
	for(var i=0;i<aSlider.length;i++)
	{
		slider(aSlider[i]);
	}
	function slider(oSlider){
		var aPic =oSlider.getElementsByClassName('pic');
		var oPrev= oSlider.getElementsByClassName('prev')[0];
		var oNext= oSlider.getElementsByClassName('next')[0];
		var num=0;
			oPrev.onclick=function(){
				for(var i=0;i<aPic.length;i++)
				{
					aPic[i].style.display='none';
				}
				num++;
				if(num==aPic.length)
				{
					num=0;
				}
				aPic[num].style.display='block';
			};
		
			oNext.onclick=function(){
				for(var i=0;i<aPic.length;i++)
				{
					aPic[i].style.display='none';
				}
				num--;
				if(num==-1)
				{
					num=aPic.length-1;
				}
				aPic[num].style.display='block';
			};
	}

		//轮播图2
	var aSlider1= document.getElementsByClassName('slider1');
	for(var i=0;i<aSlider1.length;i++)
	{
		slider1(aSlider1[i]);
	}
	function slider1(oSlider1){
		var aPic1 =oSlider1.getElementsByClassName('pic1');
		var oPrev1= oSlider1.getElementsByClassName('prev1')[0];
		var oNext1= oSlider1.getElementsByClassName('next1')[0];
		var num=0;
			oPrev1.onclick=function(){
				for(var i=0;i<aPic1.length;i++)
				{
					aPic1[i].style.display='none';
				}
				num++;
				if(num==aPic1.length)
				{
					num=0;
				}
				aPic1[num].style.display='block';
			};
		
			oNext1.onclick=function(){
				for(var i=0;i<aPic1.length;i++)
				{
					aPic1[i].style.display='none';
				}
				num--;
				if(num==-1)
				{
					num=aPic1.length-1;
				}
				aPic1[num].style.display='block';
			};
	}



	// 选项卡重用1
	var aParent=document.getElementsByClassName('tab');
	
	for (var i=0; i<aParent.length; i++)
	{
		tab(aParent[i]);
	}
	
	function tab(oParent)
	{
		var aBtn=oParent.getElementsByClassName('btn');
		var aCont=oParent.getElementsByClassName('cont');
		for (var i=0; i<aBtn.length; i++)
		{
			aBtn[i].index=i;
			aBtn[i].onclick=function (){
				for (var i=0; i<aBtn.length; i++)
				{
					aBtn[i].className='btn';
					aCont[i].className='cont';
				}
				
				this.className='active btn';
				aCont[this.index].className='active cont';
			};
		}
	}
	
	//选项卡重用2
	var aParent1=document.getElementsByClassName('tab1');
	
	for (var i=0; i<aParent1.length; i++)
	{
		tab1(aParent1[i]);
	}
	
	function tab1(oParent)
	{
		var aBtn3=oParent.getElementsByClassName('btn3');
		var aCont1=oParent.getElementsByClassName('cont1');
		for (var i=0; i<aBtn3.length; i++)
		{
			aBtn3[i].index=i;
			aBtn3[i].onclick=function (){
				for (var i=0; i<aBtn3.length; i++)
				{
					aBtn3[i].className='btn3 fl';
					aCont1[i].style.display='none';
				}
				
				this.className='active3 btn3 fl';
				aCont1[this.index].style.display='block';
			};
		}
	}

	/*网址管理弹出层*/
	var oShow=document.getElementById('show');
	var oPop=document.getElementById('pop');
	var oMask=document.getElementById('mask');
	var oClose=document.getElementById('close');
	oShow.onclick=function(){
			
			oMask.style.display='block';
			oPop.style.display='block';
	};
	oClose.onclick=function(){
		oMask.style.display='none';
		oPop.style.display='none';
	};


	// find 换一换部分
	var aFind=document.getElementsByClassName('find_list');
	for(var i=0;i<aFind.length;i++)
	{
		change(aFind[i]);
	}
	function change(oFind){
		var aDd=oFind.getElementsByTagName('dd');
		var oChange=oFind.getElementsByClassName('change')[0];
		var arrText=[
		['今日特价秒杀','四库海外代购','家巨亏帅清仓','9块9全场包邮','童装一折包邮','童装一折包邮'],
		['一切装备靠打','178游戏网','中国好声音4','中国好声音4','太平洋游戏','最新武侠小说'],
		['太平洋游戏','女外套2折','每日轻松游戏','每日轻松游戏','蘑菇街','每日轻松游戏'],
		];
		
			var num=0;
			oChange.onclick=function(){
				num++
				if(num==arrText.length)
				{
					num=0;
				}
				for(var j=0;j<aDd.length;j++)
				{	
					aDd[j].innerHTML='<a href="javascript:;">'+arrText[num][j]+'</a>';
				}
			};
		}

// 换一换结束

};
