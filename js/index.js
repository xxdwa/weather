//块级注释，快捷键是ctrl+shift+/
/*var weather;
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/data/?city=吕梁",
	dataType:"jsonp",//解决跨域
	type:"get",//设置获取数据的方式
	success:function(obj){//用obj接收数据
		weather=obj.data.weather;
		// console.log(weather);
	}
})*/


//获取各个城市:
var city;
$.ajax({
	url:"https://www.toutiao.com/stream/widget/local_weather/city/",
	dataType:"jsonp",
	type:"get",
	success:function(obj){
		city=obj.data;
		renderCity(city);
		// console.log(city);

	}
})

function renderCity(city){
	//渲染城市开始：
	for(var m in city){
		//输出
		// console.log(m);
		var h2=document.createElement("h2");
		h2.innerHTML=m;
		var citybox=document.querySelector(".citybox");
		citybox.appendChild(h2);
		//创建con1
		var con1=document.createElement("div");
		con1.className="con1";
		citybox.appendChild(con1);

		for(var n in city[m]){
			//输出
			// console.log(n);
			var son=document.createElement("div");
			son.className="son";
			son.innerHTML=n;

			//var con1=document.querySelector(".con1");
			con1.appendChild(son);

		}
	}
}
//渲染数据
function updata(weather){//注意是updata()不是update()
	//城市名称
	var city_name=document.querySelector(".city");
	city_name.innerHTML=weather.city_name;
	//当前天气情况
	var condition=document.querySelector(".condition");
	condition.innerHTML=weather.current_condition;
	//当前温度
	var temperature=document.querySelector(".tamputer");
	temperature.innerHTML=weather.current_temperature+"°";
	//今天的最高温
	var dat_high_temperature=document.querySelector("#dat_high_temperature");
	dat_high_temperature.innerHTML=weather.dat_high_temperature;
	//今天的最低温
	var dat_low_temperature=document.querySelector("#dat_low_temperature");
	dat_low_temperature.innerHTML=weather.dat_low_temperature+"°";
	//今天的天气情况
	var dat_condition=document.querySelector("#dat_condition");
	dat_condition.innerHTML=weather.dat_condition;
	//今天的icon
	var dat_weather_icon_id=document.querySelector("#dat_weather_icon_id");
	dat_weather_icon_id.style=`background-image:url(img/${weather.dat_weather_icon_id}.png)`;
	//明天的最高温度
	var tomorrow_high_temperature=document.querySelector("#tomorrow_high_temperature");
	tomorrow_high_temperature.innerHTML=weather.tomorrow_high_temperature;
	//明天的最低温度
	var tomorrow_low_temperature=document.querySelector("#tomorrow_low_temperature");
	tomorrow_low_temperature.innerHTML=weather.tomorrow_low_temperature+"°";
	//明天的天气情况
	var tomorrow_condition=document.querySelector("#tomorrow_condition");
	//console.log(tomorrow_condition);
	tomorrow_condition.innerHTML=weather.tomorrow_condition;
	//明天的icon
	var tomorrow_weather_icon_id=document.querySelector("#tomorrow_weather_icon_id");
	tomorrow_weather_icon_id.style=`background-image:url(img/${weather.tomorrow_weather_icon_id}.png)`;

	//未来24小时天气开始
	//声明变量是字符串类型
	var str="";

	//循环 es6 模板字符串
	weather.hourly_forecast.forEach((item,index)=>{
		// console.log(item,index);
		str=str+`
			<div class="now">
                <h2 class="now_time">${item.hour}:00</h2>
                <div class="now_icon" style="background-image:url(img/${item.weather_icon_id}.png)"></div>
                <h2 class="now_temp">${item.temperature}°</h2>
            </div>
		`
	})
	$(".wrap").html(str);
	//未来24小时天气结束


	// for(var i in weather.hourly_forecast){
	// 	//创建now  1.创建div元素：
	// 	var now=document.createElement("div");
	// 	//添加类名   不是必须有的
	// 	now.className="now";
	// 	//添加到页面 1.获取父元素
	// 	var wrap=document.querySelector(".wrap");
	// 	wrap.appendChild(now);

	// 	// //创建now_time
	// 	// var h2=document.createElement("h2");
	// 	// h2.className="now_time";
	// 	// h2.innerHTML=weather.hourly_forecast[i].hour+":00";
	// 	// now.appendChild(h2);


	// 	// //创建now_icon
	// 	// var now_icon=document.createElement("div");
	// 	// now_icon.className="now_icon";
	// 	// now.appendChild(now_icon);
	// 	// //var weather_icon_id=document.querySelector("weather_icon_id");
	// 	// now_icon.style=`background-image:url(img/${weather.hourly_forecast[i].weather_icon_id}.png)`;

	// 	// //创建now_temp
	// 	// var h2=document.createElement("h2");
	// 	// h2.className="now_temp";
	// 	// now.appendChild(h2);
	// 	// h2.innerHTML=weather.hourly_forecast[i].temperature+"°";
	// // }
//近期天气开始
	
	
	//近期天气开始
	var strr="";
	weather.forecast_list.forEach((item,index)=>{
		console.log(item,index);
		strr=strr+`
			<div class="con">
                <div class="con_date">${item.date.slice(5,7)+"/"+item.date.slice(8)}</div>
                <div class="con_weaH">${item.condition}</div>
                <div class="con_picH" style="background-image:url(img/${item.weather_icon_id}.png)"></div>
                <div class="con_high">${item.high_temperature}</div>
                <div class="con_low">${item.low_temperature}</div>
                <div class="con_wind">${item.wind_direction}</div>
                <div class="con_level">${item.wind_level}</div>
            </div>
		`
		
	})
	$(".wrap1").html(strr);
	//近期天气结束


	// for(var j in weather.forecast_list){

	// 	//创建con
	// 	var con=document.createElement("div");
	// 	con.className="con";
	// 	var wrap1=document.querySelector(".wrap1");
	// 	wrap1.appendChild(con);

	// 	//日期
	// 	var con_date=document.createElement("div");
	// 	con_date.className="con_date";
	// 	con_date.innerHTML=weather.forecast_list[j].date.slice(5,7)+"/"+weather.forecast_list[j].date.slice(8);
	// 	con.appendChild(con_date);

	// 	//天气情况
	// 	var con_weaH=document.createElement("div");
	// 	con_weaH.className="con_weaH";
	// 	con_weaH.innerHTML=weather.forecast_list[j].condition;
	// 	con.appendChild(con_weaH);

	// 	//图片
	// 	var con_picH=document.createElement("div");
	// 	con_picH.className="con_picH";
	// 	con.appendChild(con_picH);
	// 	con_picH.style=`background-image:url(img/${weather.forecast_list[j].weather_icon_id}.png)`
		
	// 	//最高温
	// 	var con_high=document.createElement("div");
	// 	con_high.className="con_high";
	// 	con_high.innerHTML=weather.forecast_list[j].high_temperature+"°";
	// 	con.appendChild(con_high);

	// 	//最低温
	// 	var con_low=document.createElement("div");
	// 	con_low.className="con_low";
	// 	con_low.innerHTML=weather.forecast_list[j].low_temperature+"°";
	// 	con.appendChild(con_low);

	// 	//风向
	// 	var con_wind=document.createElement("div");
	// 	con_wind.className="con_wind";
	// 	con_wind.innerHTML=weather.forecast_list[j].wind_direction;
	// 	con.appendChild(con_wind);

	// 	//风级
	// 	var con_level=document.createElement("div");
	// 	con_level.className="con_level";
	// 	con_level.innerHTML=weather.forecast_list[j].wind_level;
	// 	con.appendChild(con_level);


	// }
//近期天气结束
		
	//渲染城市开始：
	/*for(var m in city){
		//输出
		// console.log(m);
		var h2=document.createElement("h2");
		h2.innerHTML=m;
		var citybox=document.querySelector(".citybox");
		citybox.appendChild(h2);
		//创建con1
		var con1=document.createElement("div");
		con1.className="con1";
		citybox.appendChild(con1);

		for(var n in city[m]){
			//输出
			// console.log(n);
			var son=document.createElement("div");
			son.className="son";
			son.innerHTML=n;

			//var con1=document.querySelector(".con1");
			con1.appendChild(son);

		}
	}
	
}*/
}
			//形参
function AJAX(str){
	let url=`https://www.toutiao.com/stream/widget/local_weather/data/?city=${str}`;
	$.ajax({
		url:url,
		dataType:"jsonp",
		type:"get",
		success:function(obj){
			//获取数据
			var weather=obj.data.weather;
			//渲染数据
			updata(weather);
			//让城市盒子消失
			$(".location").css({"display":"none"});
			$(".hide").addClass('block');

		}

	})
}



//页面加载完成以后再执行
window.onload=function(){
	// updata();
	//点击每个son时，自动跳转到这个城市温度的界面
	$(".son").on("click",function(){
		var cityh=this.innerHTML;
		AJAX(cityh);
	})
	//使城市盒子出现
	$(".city").on("click",function(){
		var cityv=this.innerHTML;
		$(".location").css({"display":"block"});
	})

	$("input").on("focus",function(){
        $(".s-right").html("搜索");
    })

    var button=document.querySelector(".s-right");
    // console.log(button);
    button.onclick=function(){
        var text=button.innerText;
        console.log(text);
        if(text=="取消"){
            $(".location").css({"display":"none"});
        }
        else{
            var str1=document.querySelector("input").value;
            for(var i in city){
                for(var j in city[i]){
                    if(str1==j){
                        AJAX(str1);
                        return;
                    }
                }
            }
            alert("没有该城市")
        }
    }
}

