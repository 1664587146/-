
$(function () {
echarts_1();
echarts_2();
echarts_3();
echarts_4();
echarts_5();
echarts_6();
echarts_7();

function echarts_1() {//湿度_top7_humidity
	
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart1'));
    
    var cities = [];
    var humidities = [];
	
    $.ajax({
		type : "POST",
		async : true, 
		url : "http://127.0.0.1:8080/echartsDemo/commonCity",
		dataType : "JSON",
		success : function(data) {

			for(var i = 0;i<data.length;i++){
      				
				cities[i]= data[i].city;
      				
				humidities[i] = data[i].humidity;
				
      		}
      			
              
			    option = {
			    //backgroundColor: '#00265f',
			    tooltip: {
			        trigger: 'axis',
			        axisPointer: {
			            type: 'shadow'
			        }
			    },
			    grid: {
			        left: '0%',
					top:'10px',
			        right: '0%',
			        bottom: '4%',
			       containLabel: true
			    },
			    xAxis: [{
			        type: 'category',
			      		
			      		data:cities,
			      		axisLine: {
			            show: true,
			         lineStyle: {
			                color: "rgba(255,255,255,.1)",
			                width: 1,
			                type: "solid"
			            },
			        },
					
			        axisTick: {
			            show: false,
			        },
					axisLabel:  {
			                interval: 0,
			               // rotate:50,
			                show: true,
			                splitNumber: 15,
			                textStyle: {
			 					color: "rgba(255,255,255,.6)",
			                    fontSize: '12',
			                },
			            },
			    }],
			    yAxis: [{
			        type: 'value',
			        axisLabel: {
			           //formatter: '{value} %'
						show:true,
						 textStyle: {
			 					color: "rgba(255,255,255,.6)",
			                    fontSize: '12',
			                },
			        },
			        axisTick: {
			            show: false,
			        },
			        axisLine: {
			            show: true,
			            lineStyle: {
			                color: "rgba(255,255,255,.1	)",
			                width: 1,
			                type: "solid"
			            },
			        },
			        splitLine: {
			            lineStyle: {
			               color: "rgba(255,255,255,.1)",
			            }
			        }
			    }],
			    series: [
					{
			        type: 'bar',
			        data:humidities,
			        
			        barWidth:'35%', //柱子宽度
			       // barGap: 1, //柱子之间间距
			        itemStyle: {
			            normal: {
			                color:'#06a0ab',
			                opacity: 1,
							barBorderRadius: 5,
			            }
			        }
			    }
					
				]
			};
			       
   
   
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){    myChart.resize();   });
    
    myChart.on('click', function (params) {
    	console.log(params.name);
    	//window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
    	window.location.href="index_2.html"
    	
    });

    
    
			}

});


}



function echarts_7() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart7'));
    var beijing_rain = [];
    var shanghai_rain = [];
    var date = [];
	$.ajax({
		type : "POST",
		async : true, 
		url : "http://127.0.0.1:8080/echartsDemo/starCity_Rain_Servlet",
		dataType : "JSON",
		success : function(data) {

			for(var i = 0;i<(data.length/2);i++){
				shanghai_rain[i]= data[i].rain;
				date[i]=data[i].date;
      		}
			for(var j = 0;i<data.length;i++,j++){
				beijing_rain[j]= data[i].rain;
      		}
			
			
			option = {
				    tooltip: {
				    trigger: 'axis',
				    axisPointer: {
				        lineStyle: {
				            color: '#dddc6b'
				        }
				    }
				},
					    legend: {
				top:'0%',
				    data:['北京','上海'],
				            textStyle: {
				       color: 'rgba(255,255,255,.5)',
						fontSize:'12',
				    }
				},
				grid: {
				    left: '50',
					top: '30',
				    right: '50',
				    bottom: '10',
				    containLabel: true
				},

				xAxis: [{
				    type: 'category',
				    boundaryGap: false,
				axisLabel:  {
				            textStyle: {
									color: "rgba(255,255,255,.6)",
								fontSize:12,
				            },
				        },
				    axisLine: {
						lineStyle: { 
							color: 'rgba(255,255,255,.2)'
						}

				    },

				//data: ['01', '02', '03', '04', '05', '06', '07'],
				data: date,

				}, {

				    axisPointer: {show: false},
				    axisLine: {  show: false},
				    position: 'bottom',
				    offset: 20,

				}],

				yAxis: [{
				    type: 'value',
				    axisTick: {show: false},
				    axisLine: {
				        lineStyle: {
				            color: 'rgba(255,255,255,.1)'
				        }
				    },
				   axisLabel:  {
				            textStyle: {
									color: "rgba(255,255,255,.6)",
								fontSize:12,
				            },
				        },

				    splitLine: {
				        lineStyle: {
				             color: 'rgba(255,255,255,.1)'
				        }
				    }
				}],
				series: [
					{
				    name: '北京',
				    type: 'line',
				     smooth: true,
				    symbol: 'circle',
				    symbolSize: 5,
				    showSymbol: false,
				    lineStyle: {
						
				        normal: {
							color: '#0184d5',
				            width: 2
				        }
				    },
				    areaStyle: {
				        normal: {
				            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				                offset: 0,
				                color: 'rgba(1, 132, 213, 0.4)'
				            }, {
				                offset: 0.8,
				                color: 'rgba(1, 132, 213, 0.1)'
				            }], false),
				            shadowColor: 'rgba(0, 0, 0, 0.1)',
				        }
				    },
						itemStyle: {
						normal: {
							color: '#0184d5',
							borderColor: 'rgba(221, 220, 107, .1)',
							borderWidth: 12
						}
					},
				    //data: [3, 4, 3, 4, 3, 4, 3]
					data: beijing_rain

				}, 
				{
				    name: '上海',
				    type: 'line',
				    smooth: true,
				    symbol: 'circle',
				    symbolSize: 5,
				    showSymbol: false,
				    lineStyle: {
						
				        normal: {
							color: '#00d887',
				            width: 2
				        }
				    },
				    areaStyle: {
				        normal: {
				            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
				                offset: 0,
				                color: 'rgba(0, 216, 135, 0.4)'
				            }, {
				                offset: 0.8,
				                color: 'rgba(0, 216, 135, 0.1)'
				            }], false),
				            shadowColor: 'rgba(0, 0, 0, 0.1)',
				        }
				    },
						itemStyle: {
						normal: {
							color: '#00d887',
							borderColor: 'rgba(221, 220, 107, .1)',
							borderWidth: 12
						}
					},
				    //data: [5, 3, 5, 6, 1, 5, 3]
					data: shanghai_rain,
					       
				}, 

					 ]

				};
        
			       
   
   
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){    myChart.resize();   });
    
    
    
			}

});


}


        
        

function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

        var cities = [];
        var temphighs = [];
    	$.ajax({
    		type : "POST",
    		async : true, 
    		url : "http://127.0.0.1:8080/echartsDemo/commonCity_temp_top_Servlet",
    		dataType : "JSON",
    		success : function(data) {

    			for(var i = 0;i<data.length;i++){
	      				
    				cities[i]= data[i].city;
	      				
    				temphighs[i] = data[i].temphigh;
    				
	      		}
        
       option = {
  //  backgroundColor: '#00265f',
    tooltip: {
        trigger: 'axis',
        axisPointer: { type: 'shadow'}
    },
    grid: {
        left: '0%',
		top:'10px',
        right: '0%',
        bottom: '4%',
       containLabel: true
    },
    xAxis: [{
        type: 'category',
      		data: cities,//['江宁', '上海', '江苏', '广东', '北京', '深圳', '安徽'],
        axisLine: {
            show: true,
         lineStyle: {
                color: "rgba(255,255,255,.1)",
                width: 1,
                type: "solid"
            },
        },
		
        axisTick: {
            show: false,
        },
		axisLabel:  {
                interval: 0,
               // rotate:50,
                show: true,
                splitNumber: 15,
                textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
            },
    }],
    yAxis: [{
        type: 'value',
        axisLabel: {
           //formatter: '{value} %'
			show:true,
			 textStyle: {
 					color: "rgba(255,255,255,.6)",
                    fontSize: '12',
                },
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: true,
            lineStyle: {
                color: "rgba(255,255,255,.1	)",
                width: 1,
                type: "solid"
            },
        },
        splitLine: {
            lineStyle: {
               color: "rgba(255,255,255,.1)",
            }
        }
    }],
    series: [
		{
       
        type: 'line',
        data: temphighs,//[1500, 1200, 600, 200, 300, 300, 900],
        barWidth:'35%', //柱子宽度
       // barGap: 1, //柱子之间间距
        itemStyle: {
            normal: {
                color:'#27d08a',
                opacity: 1,
				barBorderRadius: 5,
            }
        }
    }
		
	]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
        
    }
    	
});
    	
}



function echarts_5() {           //洪涝预警
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart5'));

    var cities = [];
    var rains = [];
	$.ajax({
		type : "POST",
		async : true, 
		url : "http://127.0.0.1:8080/echartsDemo/city_Rain_Servlet",
		dataType : "JSON",
		success : function(data) {

			for(var i = 0;i<data.length;i++){
      				
				cities[i]= data[i].city;
      				
				rains[i] = data[i].rain;
				
      		}


			var dataAxis = cities;
			var data =	rains;
			
			var yMax = 100;
			var dataShadow = [];

			for (var i = 0; i < data.length; i++) {
			    dataShadow.push(yMax);
			}

			option = {
			    title: {
			        text: '',
			        subtext: ''
			    },
			    xAxis: {
			        data: dataAxis,
			        axisLabel: {
			            inside: false,
			            textStyle: {
			                color: '#fff',
			                //frontsize: '40'
			            }
			        },
			        axisTick: {
			            show: false
			        },
			        axisLine: {
			            show: false
			        },
			        z: 10
			    },
			    yAxis: {
			        axisLine: {
			            show: false
			        },
			        axisTick: {
			            show: false
			        },
			        axisLabel: {
			            textStyle: {
			                color: '#999'
			            }
			        }
			    },
			    dataZoom: [
			        {
			            type: 'inside'
			        }
			    ],
			    series: [
			        { // For shadow
			            type: 'bar',
			            itemStyle: {
			                color: 'rgba(0,0,0,0.05)'
			            },
			            barGap: '-100%',
			            barCategoryGap: '5%',
			            data: dataShadow,
			            animation: false
			        },
			        {
			            type: 'bar',
			            itemStyle: {
			                color: new echarts.graphic.LinearGradient(
			                    0, 0, 0, 1,
			                    [
			                        {offset: 0, color: '#83bff6'},
			                        {offset: 0.5, color: '#188df0'},
			                        {offset: 1, color: '#188df0'}
			                    ]
			                )
			            },
			            emphasis: {
			                itemStyle: {
			                    color: new echarts.graphic.LinearGradient(
			                        0, 0, 0, 1,
			                        [
			                            {offset: 0, color: '#2378f7'},
			                            {offset: 0.7, color: '#2378f7'},
			                            {offset: 1, color: '#83bff6'}
			                        ]
			                    )
			                }
			            },
			            data: data
			        }
			    ]
			};

			// Enable data zoom when user click bar.
			var zoomSize = 6;
			myChart.on('click', function (params) {
			    console.log(dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)]);
			    myChart.dispatchAction({
			        type: 'dataZoom',
			        startValue: dataAxis[Math.max(params.dataIndex - zoomSize / 2, 0)],
			        endValue: dataAxis[Math.min(params.dataIndex + zoomSize / 2, data.length - 1)]
			    });
			});    			
			
			
			

/*        option = {
//  backgroundColor: '#00265f',
tooltip: {
    trigger: 'axis',
    axisPointer: {
        type: 'shadow'
    }
},

grid: {
    left: '0%',
	top:'10px',
    right: '0%',
    bottom: '2%',
   containLabel: true
},
xAxis: [{
    type: 'category',
  		data: dts,//['浙江', '上海', '江苏', '广东', '北京', '深圳', '安徽', '四川'],
    axisLine: {
        show: true,
     lineStyle: {
            color: "rgba(255,255,255,.1)",
            width: 1,
            type: "solid"
        },
    },
	
    axisTick: {
        show: false,
    },
	axisLabel:  {
            interval: 0,
           // rotate:50,
            show: true,
            splitNumber: 15,
            textStyle: {
					color: "rgba(255,255,255,.6)",
                fontSize: '12',
            },
        },
}],
yAxis: [{
    type: 'value',
    axisLabel: {
       //formatter: '{value} %'
		show:true,
		 textStyle: {
					color: "rgba(255,255,255,.6)",
                fontSize: '12',
            },
    },
    axisTick: {
        show: false,
    },
    axisLine: {
        show: true,
        lineStyle: {
            color: "rgba(255,255,255,.1	)",
            width: 1,
            type: "solid"
        },
    },
    splitLine: {
        lineStyle: {
           color: "rgba(255,255,255,.1)",
        }
    }
}],
series: [{
    type: 'bar',
    data: gmvamounts,//[2, 3, 3, 9, 15, 12, 6, 4, 6, 7, 4, 10],
    barWidth:'35%', //柱子宽度
   // barGap: 1, //柱子之间间距
    itemStyle: {
        normal: {
            color:'#06dcab',
            opacity: 1,
			barBorderRadius: 5,
        }
    }
}
]
};
*/      
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
	    }
	
});
	    	
}
	
function echarts_4() {  //空气质量分布统计
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart4'));
    
    var qualities = [];
    var numbers = [];
	$.ajax({
		type : "POST",
		async : true, 
		url : "http://127.0.0.1:8080/echartsDemo/city_Quality_Servlet",
		dataType : "JSON",
		success : function(data) {

			for(var i = 0;i<data.length;i++){
      				
				qualities[i]= data[i].quality;
				numbers[i] = data[i].number;
				
      		}
    
    option = {

            tooltip : {
                trigger: 'item',
                formatter: "{b}: <br/>  {c} ({d}%)"
            },

            toolbox: {
                show : false,
                feature : {
                    mark : {show: true},
                    dataView : {show: true, readOnly: false},
                    magicType : {
                        show: true,
                        type: ['pie', 'funnel']
                    },
                    restore : {show: true},
                    saveAsImage : {show: true}
                }
            },
            calculable : true,
            series : [

                {
                    name:'排名',
                    type:'pie',
                    color: ['#33b565', '#20cc98', '#20b9cf', '#2089cf', '#205bcf'],
                    radius : [30, 70],
                    center : ['50%', '50%'],
                    roseType : 'area',
                    data:[
                          
                        {value:numbers[0], name:qualities[0]},
                        {value:numbers[1], name:qualities[1]},
                        {value:numbers[2], name:qualities[2]},
                        {value:numbers[3], name:qualities[3]},
                        {value:numbers[4], name:qualities[4]},
                        
                        
                        /*
                        {value:90, name:'良'},
                        {value:35, name:'轻度污染'},
                        {value:15, name:'中度污染'},
                        {value:4, name:'重度污染'}*/

                    ]
                }
            ]
        };


/*原双曲线图内容    
    //var dts1 = [];
    //var dts2 = [];
    var gmvamounts = [];
	$.ajax({
		type : "POST",
		async : true, 
		url : "http://127.0.0.1:8080/echartsDemo/history",
		dataType : "JSON",
		success : function(data) {

			for(var i = 0;i<data.length;i++){
      				
				//dts1[i]= data[i].dt;
				//dts2[i]= data[i].dt;
      				
				gmvamounts[i] = data[i].gmvAmount;
				//gmvamounts[i] = i+1;
				
      		}
			
    
option = {
    tooltip: {
    trigger: 'axis',
    axisPointer: {
        lineStyle: {
            color: '#dddc6b'
        }
    }
},
	    legend: {
top:'0%',
    data:['北京','上海'],
            textStyle: {
       color: 'rgba(255,255,255,.5)',
		fontSize:'12',
    }
},
grid: {
    left: '10',
	top: '30',
    right: '10',
    bottom: '10',
    containLabel: true
},

xAxis: [{
    type: 'category',
    boundaryGap: false,
axisLabel:  {
            textStyle: {
					color: "rgba(255,255,255,.6)",
				fontSize:12,
            },
        },
    axisLine: {
		lineStyle: { 
			color: 'rgba(255,255,255,.2)'
		}

    },

//data: ['01', '02', '03', '04', '05', '06', '07'],
data: ['01', '02'],

}, {

    axisPointer: {show: false},
    axisLine: {  show: false},
    position: 'bottom',
    offset: 20,

   

}],

yAxis: [{
    type: 'value',
    axisTick: {show: false},
    axisLine: {
        lineStyle: {
            color: 'rgba(255,255,255,.1)'
        }
    },
   axisLabel:  {
            textStyle: {
					color: "rgba(255,255,255,.6)",
				fontSize:12,
            },
        },

    splitLine: {
        lineStyle: {
             color: 'rgba(255,255,255,.1)'
        }
    }
}],
series: [
	{
    name: '北京',
    type: 'line',
     smooth: true,
    symbol: 'circle',
    symbolSize: 5,
    showSymbol: false,
    lineStyle: {
		
        normal: {
			color: '#0184d5',
            width: 2
        }
    },
    areaStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(1, 132, 213, 0.4)'
            }, {
                offset: 0.8,
                color: 'rgba(1, 132, 213, 0.1)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
        }
    },
		itemStyle: {
		normal: {
			color: '#0184d5',
			borderColor: 'rgba(221, 220, 107, .1)',
			borderWidth: 12
		}
	},
    //data: [3, 4, 3, 4, 3, 4, 3]
	//data: [9899, 2345]
	//data: [1, 2]
	data: gmvamounts

}, 
{
    name: '上海',
    type: 'line',
    smooth: true,
    symbol: 'circle',
    symbolSize: 5,
    showSymbol: false,
    lineStyle: {
		
        normal: {
			color: '#00d887',
            width: 2
        }
    },
    areaStyle: {
        normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: 'rgba(0, 216, 135, 0.4)'
            }, {
                offset: 0.8,
                color: 'rgba(0, 216, 135, 0.1)'
            }], false),
            shadowColor: 'rgba(0, 0, 0, 0.1)',
        }
    },
		itemStyle: {
		normal: {
			color: '#00d887',
			borderColor: 'rgba(221, 220, 107, .1)',
			borderWidth: 12
		}
	},
    //data: [5, 3, 5, 6, 1, 5, 3]
	data: [5, 3]
	//date: gmvamounts,
	       
}, 

	 ]

};

*/
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
    

/*
}				//success
    
});						//ajax
*/

		}				//success
    
	});						//ajax
}

function echarts_6() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart6'));
        
        var weathers = [];
        var numbers = [];
    	$.ajax({
    		type : "POST",
    		async : true, 
    		url : "http://127.0.0.1:8080/echartsDemo/startCity_Weather_Servlet",
    		dataType : "JSON",
    		success : function(data) {

    			for(var i = 0;i<data.length;i++){
	      				
    				weathers[i]= data[i].weather;
	  				numbers[i] = data[i].number;
    				
	      		}
        
        let j = 0;///这里把声明提前了
        //天气种类可以读取，也可以不读
        //var salvProName =["晴","多云","阴","阵雨","小雨","中雨","大雨"];
        
	    //var salvProValue =[239,181,154,144,135,117,74];
	    var salvProMax =[];//背景按最大值
	    for (; j< numbers.length; j++) {
	        salvProMax.push(numbers[0])
	    }

	    option = {
	        //backgroundColor:"#003366",
	        grid: {
	            left: '0%',
	            right: '2%',
	            bottom: '4%',
	            top: '10px',
	            containLabel: true,
	        },
	        tooltip: {
	            trigger: 'axis',
	            axisPointer: {
	                type: 'shadow',
	            },
	            formatter: function(params) {
	                return params[0].name  + ' : ' + params[0].value
	            }
	        },
	        xAxis: {
	            show: false,
	            type: 'value',
	        },
	        yAxis: [{
	            type: 'category',
	            inverse: true,
	            axisLabel: {
	                show: true,
	                textStyle: {
	                    color: '#fff',
	                },
	            },
	            splitLine: {
	                show: false,
	            },
	            axisTick: {
	                show: false,
	            },
	            axisLine: {
	                show: false,
	            },
	            data: weathers,
	        }, {
	            type: 'category',
	            inverse: true,
	            axisTick: 'none',
	            axisLine: 'none',
	            show: true,
	            axisLabel: {
	                textStyle: {
	                    color: '#ffffff',
	                    fontSize: '12',
	                },
	            },
	             data:numbers,
	        }],
	        series: [{
	                name: '值',
	                type: 'bar',
	                zlevel: 1,
	                itemStyle: {
	                    normal: {
	                        barBorderRadius: 30,
	                        color: new echarts.graphic.LinearGradient(0, 0, 1, 0, [{
	                            offset: 0,
	                            color: 'rgb(57,89,255,1)',
	                        }, {
	                            offset: 1,
	                            color: 'rgb(46,200,207,1)',
	                        }]),
	                    },
	                },
	                barWidth: 12,
	                data: numbers,
	            },
	            {
	                name: '背景',
	                type: 'bar',
	                barWidth: 12,
	                barGap: '-100%',
	                data: salvProMax,
	                itemStyle: {
	                    normal: {
	                        color: 'rgba(24,31,68,1)',
	                        barBorderRadius: 30,
	                    }
	                },
	            },
	        ]
	    };
   
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
}
    	
    	});						//ajax


}


function echarts_3() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart3')); 
    //这部分要参考给出的数据格式

    var cityname = [];
    
    var temp_high_25 = [];
    var temp_high_26 = [];
    var temp_high_27 = [];
    var temp_high_28 = [];
    
    var temp_low_25 = [];
    var temp_low_26 = [];
    var temp_low_27 = [];
    var temp_low_28 = [];
    
    
    $.ajax({
		type : "POST",
		async : true, 
		url : "http://127.0.0.1:8080/echartsDemo/starCity_Temp_TopAndLow_Servlet",
		dataType : "JSON",
		success : function(data) {
			
			var j = 0;
			for(var i = 0;i<7;i++,j++){
				cityname[i] = data[j].city;
				temp_high_25[i] = data[j].temphigh;
				temp_low_25[i] = data[j].templow;
      		}
			for(var i = 0;i<7;i++,j++){
				temp_high_26[i] = data[j].temphigh;
				temp_low_26[i] = data[j].templow;
      		}
			for(var i = 0;i<7;i++,j++){
				temp_high_27[i] = data[j].temphigh;
				temp_low_27[i] = data[j].templow;
      		}
			for(var i = 0;i<7;i++,j++){
				temp_high_28[i] = data[j].temphigh;
				temp_low_28[i] = data[j].templow;
      		}
    
			
    
    //var myData = ['南京', '苏州', '拉萨', '济南', '温州', '厦门', '青岛'];//这里可以固定，也可以读出数个不同城市名字，存在cityname数组里
    /*var databeast = {
        25: [389, 259, 262, 324, 232, 176, 196],
        26: [100, 350, 300, 250, 200, 150, 100],
        27: [200, 350, 300, 250, 200, 150, 100],
        28: [300, 350, 300, 250, 200, 150, 100],
       

    };
    var databeauty = {
        25: [121, 388, 233, 309, 133, 308, 297],
        26: [363, 396, 388, 108, 325, 120, 180],
        27: [280, 128, 255, 254, 313, 143, 360],
        28: [227, 210, 328, 292, 241, 110, 130],

    };
    */
	var myData = cityname;
	var databeast = {
			//25: [121, 388, 233, 309, 133, 308, 297],
	        25: temp_high_25,
	        26: temp_high_26,
	        27: temp_high_27,
	        28: temp_high_28,
	    };
	
	 var databeauty = {
			 //25: [121, 388, 233, 309, 133, 308, 297],
		    25: temp_low_25,
    		26: temp_low_26,
	        27: temp_low_27,
	        28: temp_low_28,
	    };
	    
	    
    var timeLineData = [25, 26, 27, 28];

    option = {
        baseOption: {
            //backgroundColor: '#000',
        	timeline: {
                show: true,
                axisType: 'category',
                right: '-60',
                left:'294',
                top:'0',
                bottom:'0',
                tooltip: {
                    show: false,
                    formatter: function(params) {
                        console.log(params);
                        return params.name + '月份数据统计';
                    }
                },
                autoPlay: false,
                currentIndex: 5,
                playInterval: 1000, //变化速度
                label: {
                    normal: {
                        show: false,
                        interval: 'auto',
                        formatter: '7月{value}日',
                    },
                },
                controlStyle: {
                    normal : { color: '#fff'},
                   
                },
                data: [],
            },
            title: {
               
                textStyle: {
                    color: '#fff',
                    fontSize: 14,
                },
               
            },
            legend: {
                data: ['最高温度', '最低温度'],
                top: 25,
                right: '20%',
                textStyle: {
                    color: '#fff',
                    fontSize: 10,
                },
            },
            tooltip: {
                show: true,
                trigger: 'axis',
                formatter: '{b}<br/>{a}: {c}度',
                axisPointer: {
                    type: 'shadow',
                }
            },
            
            toolbox:{
                right:1,
                feature:{
                    //saveAsImage: {},
                    //restore: {},
                    //dataView: {},
                    //dataZoom: {},
                    //magicType: {
                    //    type:['line','bar']
                    //},
                    // brush: {},
                }
            },
            
            grid: [{
                show: false,
                left: '1%',
                top: 60,
                bottom: 1,
                containLabel: true,
                width: '40%',
            }, {
                show: false,
                left: '53.2%',
                top: 80,
                bottom: 1,
                width: '15%',
            }, {
                show: false,
                right: '1%',
                top: 60,
                bottom: 1,
                containLabel: true,
                width: '40%',
            }, ],

            xAxis: [
                {
                type: 'value',
                inverse: true,
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',//左边数值颜色
                        fontSize: 12,
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#1F2022',
                        width: 1,
                        type: 'solid',
                    },
                },
            }, {
                gridIndex: 1,
                show: false,
            }, {
                gridIndex: 2,
                type: 'value',
                axisLine: {
                    show: false,
                },
                axisTick: {
                    show: false,
                },
                position: 'top',
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 12,
                    },
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        color: '#1F2022',
                        width: 1,
                        type: 'solid',
                    },
                },
            }, ],
            yAxis: [{
                type: 'category',
                inverse: true,
                position: 'right',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    margin: 8,
                    textStyle: {
                        color: '#9D9EA0',
                        fontSize: 12,
                    },

                },
                data: myData,
            }, {
                gridIndex: 1,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    textStyle: {
                        color: '#fff',
                        fontSize: 12, //城市字体大小
                    },

                },
                data: myData.map(function(value) {
                    return {
                        value: value,
                        textStyle: {
                            align: 'center',
                        }
                    }
                }),
            }, {
                gridIndex: 2,
                type: 'category',
                inverse: true,
                position: 'left',
                axisLine: {
                    show: false
                },
                axisTick: {
                    show: false
                },
                axisLabel: {
                    show: false,
                    textStyle: {
                        color: '#9D9EA0',
                        fontSize: 12,
                    },

                },
                data: myData,
            }, ],
            series: [],

        },

        options: [],


    };

    for (var i = 0; i < timeLineData.length; i++) {
        option.baseOption.timeline.data.push(timeLineData[i]);
        option.options.push({
            title: {
                text: '              重点城市7月' + timeLineData[i] + '日高低温对比图',
            },
            series: [{
                    name: '最高温度',
                    type: 'bar',
                    barGap: 20,
                    barWidth: 10,
                    label: {
                        normal: {
                            show: false,
                        },
                        emphasis: {
                            show: true,
                            position: 'left',
                            offset: [0, 0],
                            textStyle: {
                                color: '#fff',
                                fontSize: 14,
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#06c8ab',
                        },
                        emphasis: {
                            color: '#06f0ab',
                        },
                    },
                    data: databeast[timeLineData[i]],
                },


                {
                    name: '最低温度',
                    type: 'bar',
                    barGap: 20,
                    barWidth: 10,
                    xAxisIndex: 2,
                    yAxisIndex: 2,
                    label: {
                        normal: {
                            show: false,
                        },
                        emphasis: {
                            show: true,
                            position: 'right',
                            offset: [0, 0],
                            textStyle: {
                                color: '#fff',
                                fontSize: 14,
                            },
                        },
                    },
                    itemStyle: {
                        normal: {
                            color: '#0682ab',
                        },
                        emphasis: {
                            color: '#06a0ab',
                        },
                    },
                    data: databeauty[timeLineData[i]],
                }
            ]
        });
    }

    
    
    
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });

		}				//success
    
	});						//ajax
		
		
	}//charts_3()

	
	
})


/*function echarts_32() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));
option = {
   
	    title: [{
        text: '风力分布',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
        
    top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['0-3级','4-6级','7-9级','10级','11级','12-13级'],
                textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'风能分布',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:5, name:'0-3级'},
                {value:1, name:'4-6级'},
                {value:6, name:'7-9级'},
                {value:2, name:'10级'},
                {value:1, name:'11级'},
                {value:1, name:'12-13级'},
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_33() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb3'));
option = {
	    title: [{
        text: '空气质量指数分布',
        left: 'center',
        textStyle: {
            color: '#fff',
			fontSize:'16'
        }

    }],
    tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b}: {c} ({d}%)",
position:function(p){   //其中p为当前鼠标的位置
            return [p[0] + 10, p[1] - 10];
        }
    },
    legend: {
    top:'70%',
       itemWidth: 10,
        itemHeight: 10,
        data:['0-50','51-100','101-150','151-200','201-300'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'空气质量指数分布',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
                   color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:2, name:'0-50'},
                {value:3, name:'51-100'},
                {value:1, name:'101-150'},
                {value:4, name:'151-200'},
                {value:8, name:'201-300'},
            ]
        }
    ]
};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
				
	
})
*/




/*

var myData = ['南京', '苏州', '拉萨', '济南', '温州', '厦门', '青岛'];
var databeast = {
    22: [389, 259, 262, 324, 232, 176, 196, 214, 133, 370, 268, 360, 185, 392, 392, 153],
    22: [111, 315, 139, 375, 204, 352, 163, 258, 385, 209, 209, 243, 204, 352, 163, 258],
    22: [227, 210, 328, 292, 241, 110, 130, 185, 392, 392, 153, 187, 150, 200, 250, 300],
    23: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    23: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163],
    23: [121, 388, 233, 309, 133, 308, 297, 283, 349, 273, 229, 238, 224, 291, 185, 203],
    24: [200, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    24: [380, 129, 173, 101, 310, 393, 386, 296, 366, 268, 208, 149, 356, 239, 208, 330],
    24: [363, 396, 388, 108, 325, 120, 180, 292, 200, 309, 223, 236, 209, 271, 215, 216],
    25: [300, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    25: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    25: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163],

};
var databeauty = {
    22: [121, 388, 233, 309, 133, 308, 297, 283, 349, 273, 229, 238, 224, 291, 185, 203],
    22: [200, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    22: [380, 129, 173, 101, 310, 393, 386, 296, 366, 268, 208, 149, 356, 239, 208, 330],
    23: [363, 396, 388, 108, 325, 120, 180, 292, 200, 309, 223, 236, 209, 271, 215, 216],
    23: [300, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    23: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    24: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163],
    24: [389, 259, 262, 324, 232, 176, 196, 214, 133, 370, 268, 360, 185, 392, 392, 153],
    24: [111, 315, 139, 375, 204, 352, 163, 258, 385, 209, 209, 243, 204, 352, 163, 258],
    25: [227, 210, 328, 292, 241, 110, 130, 185, 392, 392, 153, 187, 150, 200, 250, 300],
    25: [100, 350, 300, 250, 200, 150, 100, 150, 200, 250, 300, 350, 400, 350, 300, 250],
    25: [280, 128, 255, 254, 313, 143, 360, 343, 338, 163, 333, 317, 263, 302, 372, 163],

};
var timeLineData = [22, 22, 22, 23, 23, 23, 24, 24, 24, 25, 25, 25];

option = {
    baseOption: {
        backgroundColor: '#000',
        timeline: {
            show: true,
            axisType: 'category',
            tooltip: {
                show: true,
                formatter: function(params) {
                    console.log(params);
                    return params.name + '月份数据统计';
                }
            },
            autoPlay: true,
            currentIndex: 6,
            playInterval: 350, //变化速度
            label: {
                normal: {
                    show: true,
                    interval: 'auto',
                    formatter: '7月{value}日',
                },
            },
            data: [],
        },
        title: {
            //   text:'大北京景点帅哥美女统计', 
            textStyle: {
                color: '#fff',
                fontSize: 16,
            },
            //subtext: '作者:花自飘凌水自流',
        },
        legend: {
            data: ['最高温度', '最低温度'],
            top: 4,
            right: '20%',
            textStyle: {
                color: '#fff',
            },
        },
        tooltip: {
            show: true,
            trigger: 'axis',
            formatter: '{b}<br/>{a}: {c}人',
            axisPointer: {
                type: 'shadow',
            }
        },
        
        toolbox:{
            right:20,
            feature:{
                saveAsImage: {},
                restore: {},
                dataView: {},
                dataZoom: {},
                magicType: {
                    type:['line','bar']
                },
                // brush: {},
            }
        },
        
        grid: [{
            show: false,
            left: '4%',
            top: 60,
            bottom: 60,
            containLabel: true,
            width: '46%',
        }, {
            show: false,
            left: '50.5%',
            top: 80,
            bottom: 60,
            width: '0%',
        }, {
            show: false,
            right: '4%',
            top: 60,
            bottom: 60,
            containLabel: true,
            width: '46%',
        }, ],

        xAxis: [
            {
            type: 'value',
            inverse: true,
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'top',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',//左边数值颜色
                    fontSize: 12,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1F2022',
                    width: 1,
                    type: 'solid',
                },
            },
        }, {
            gridIndex: 1,
            show: false,
        }, {
            gridIndex: 2,
            type: 'value',
            axisLine: {
                show: false,
            },
            axisTick: {
                show: false,
            },
            position: 'top',
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 12,
                },
            },
            splitLine: {
                show: true,
                lineStyle: {
                    color: '#1F2022',
                    width: 1,
                    type: 'solid',
                },
            },
        }, ],
        yAxis: [{
            type: 'category',
            inverse: true,
            position: 'right',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                margin: 8,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },

            },
            data: myData,
        }, {
            gridIndex: 1,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff',
                    fontSize: 16,
                },

            },
            data: myData.map(function(value) {
                return {
                    value: value,
                    textStyle: {
                        align: 'center',
                    }
                }
            }),
        }, {
            gridIndex: 2,
            type: 'category',
            inverse: true,
            position: 'left',
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLabel: {
                show: false,
                textStyle: {
                    color: '#9D9EA0',
                    fontSize: 12,
                },

            },
            data: myData,
        }, ],
        series: [],

    },

    options: [],


};

for (var i = 0; i < timeLineData.length; i++) {
    option.baseOption.timeline.data.push(timeLineData[i]);
    option.options.push({
        title: {
            text: '重点城市7月' + timeLineData[i] + '日高低温对比图',
        },
        series: [{
                name: '最高温度',
                type: 'bar',
                barGap: 20,
                barWidth: 20,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: true,
                        position: 'left',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#06c8ab',
                    },
                    emphasis: {
                        color: '#06f0ab',
                    },
                },
                data: databeast[timeLineData[i]],
            },


            {
                name: '最低温度',
                type: 'bar',
                barGap: 20,
                barWidth: 20,
                xAxisIndex: 2,
                yAxisIndex: 2,
                label: {
                    normal: {
                        show: false,
                    },
                    emphasis: {
                        show: true,
                        position: 'right',
                        offset: [0, 0],
                        textStyle: {
                            color: '#fff',
                            fontSize: 14,
                        },
                    },
                },
                itemStyle: {
                    normal: {
                        color: '#0682ab',
                    },
                    emphasis: {
                        color: '#06a0ab',
                    },
                },
                data: databeauty[timeLineData[i]],
            }
        ]
    });
}





 */


		
		
		


		









