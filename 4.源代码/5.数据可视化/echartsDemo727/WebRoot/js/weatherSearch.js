
$(function () {
echarts_1();
echarts_2();
echarts_4();
echarts_31();
echarts_32();
echarts_33();
echarts_5();
echarts_6();
function echarts_1() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart1'));

    var salvProName =["安徽省","河南省","浙江省","湖北省","贵州省","江西省","江苏省","四川省","云南省","湖南省"];
    var salvProValue =[239,181,154,144,135,117,74,72,67,55];
    var salvProMax =[];//背景按最大值
    for (let i = 0; i < salvProValue.length; i++) {
        salvProMax.push(salvProValue[0])
    }

    option = {
        //backgroundColor:"#003366",
        grid: {
            left: '0%',
            right: '2%',
            bottom: '4%',
            top: '10px',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params) {
                return params[0].name  + ' : ' + params[0].value
            }
        },
        xAxis: {
            show: false,
            type: 'value'
        },
        yAxis: [{
            type: 'category',
            inverse: true,
            axisLabel: {
                show: true,
                textStyle: {
                    color: '#fff'
                },
            },
            splitLine: {
                show: false
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: false
            },
            data: salvProName
        }, {
            type: 'category',
            inverse: true,
            axisTick: 'none',
            axisLine: 'none',
            show: true,
            axisLabel: {
                textStyle: {
                    color: '#ffffff',
                    fontSize: '12'
                },
            },
             data:salvProValue
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
                            color: 'rgb(57,89,255,1)'
                        }, {
                            offset: 1,
                            color: 'rgb(46,200,207,1)'
                        }]),
                    },
                },
                barWidth: 20,
                data: salvProValue
            },
            {
                name: '背景',
                type: 'bar',
                barWidth: 20,
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






/*      option = {
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
    bottom: '4%',
   containLabel: true
},
xAxis: [{
    type: 'category',
  		data: ['江苏', '浙江', '上海', '广东', '北京', '福建', '黑龙江'],
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
    data: [200, 300, 300, 900, 1500, 1200, 600],
    barWidth:'35%', //柱子宽度
   // barGap: 1, //柱子之间间距
    itemStyle: {
        normal: {
            color:'#2f89cf',
            opacity: 1,
			barBorderRadius: 5,
        }
    }
}
	
]
};*/
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
    myChart.on('click', function (params) {
    	console.log(params.name);
    	//window.open('https://www.baidu.com/s?wd=' + encodeURIComponent(params.name));
    	window.location.href="weatherSearch.html"
    	
    });
}



function echarts_2() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart2'));

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
      		data: ['江苏', '浙江', '上海', '广东', '北京', '福建', '黑龙江'],
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
        data: [1500, 1200, 600, 200, 300, 300, 900],
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
function echarts_5() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart5'));

    var highlight = '#03b7c9';

    var demoData = [
        { name: '电压', value: 220, unit: 'V', pos: ['16.6%', '25%'], range: [0, 400] },
        { name: '电流', value: 32, unit: 'A', pos: ['49.8%', '25%'], range: [0, 60] },
        { name: '功率因数', value: 0.9, pos: ['83%', '25%'], range: [0.1, 1.0], splitNum: 9 },
        { name: '有功功率', value: 6.34, unit: 'kW', pos: ['16.6%', '75%'], range: [0, 50] },
        { name: '有功电能', value: 6.28, unit: 'kWh', pos: ['49.8%', '75%'], range: [0, 50] },
        { name: '电网频率', value: 50, unit: 'Hz', pos: ['83%', '75%'], range: [0, 100] }
    ];
    
    option = {
        //backgroundColor: '#222939',
        
        series: (function() {
            var result = [];
            
            demoData.forEach(function(item) {
                result.push(
                    // 外围刻度
                    {
                        type: 'gauge',
                        center: item.pos,
                        radius: '33.33%',  // 1行3个
                        splitNumber: item.splitNum || 10,
                        min: item.range[0],
                        max: item.range[1],
                        startAngle: 225,
                        endAngle: -45,
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 2,
                                shadowBlur: 0,
                                color: [
                                    [1, highlight]
                                ]
                            }
                        },
                        axisTick: {
                            show: true,
                            lineStyle: {
                                color: highlight,
                                width: 1
                            },
                            length: -5,
                            splitNumber: 10
                        },
                        splitLine: {
                            show: true,
                            length: -14,
                            lineStyle: {
                                color: highlight,
                            }
                        },
                        axisLabel: {
                            distance: -20,
                            textStyle: {
                                color: highlight,
                                fontSize: '14',
                                fontWeight: 'bold'
                            }
                        },
                        pointer: {
                            show: 0
                        },
                        detail: {
                            show: 0
                        }
                    },
                    
                    // 内侧指针、数值显示
                    {
                        name: item.name,
                        type: 'gauge',
                        center: item.pos,
                        radius: '30.33%',
                        startAngle: 225,
                        endAngle: -45,
                        min: item.range[0],
                        max: item.range[1],
                        axisLine: {
                            show: true,
                            lineStyle: {
                                width: 16,
                                color: [
                                    [1, 'rgba(255,255,255,.1)']
                                ]
                            }
                        },
                        axisTick: {
                            show: 0,
                        },
                        splitLine: {
                            show: 0,
                        },
                        axisLabel: {
                            show: 0
                        },
                        pointer: {
                            show: true,
                            length: '105%'
                        },
                        detail: {
                            show: true,
                            offsetCenter: [0, '100%'],
                            textStyle: {
                                fontSize: 20,
                                color: '#fff'
                            },
                            formatter: [
                                '{value} ' + (item.unit || ''),
                                '{name|' + item.name + '}'
                            ].join('\n'),
                            rich: {
                                name: {
                                    fontSize: 14,
                                    lineHeight: 30,
                                    color: '#ddd'
                                }
                            }
                        },
                        itemStyle: {
                            normal: {
                                color: highlight,
                            }
                        },
                        data: [{
                            value: item.value
                        }]
                    }
                );
            });
            
            return result;
        })()
    };
  
    // 使用刚指定的配置项和数据显示图表。
    myChart.setOption(option);
    window.addEventListener("resize",function(){
        myChart.resize();
    });
}
	
function echarts_4() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('echart4'));

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
        data:['温度','降水量'],
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

   data: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24']

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
        name: '温度',
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
        data: [3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4,3, 4, 3, 4, 3, 4, 3, 6, 2, 4, 2, 4]

    }, 
{
        name: '降水量',
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
        data: [5, 3, 5, 6, 1, 5, 3, 5, 6, 4, 6, 4, 8, 3, 5, 6, 1, 5, 3, 7, 2, 5, 1, 4]

    }, 
	
		 ]

};
      
        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        window.addEventListener("resize",function(){
            myChart.resize();
        });
    }
function echarts_6() {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echart6'));

    let data = {
        "chart": [{
                month: "1月",
                value: 138,
                ratio: 14.89
            },
    
            {
                month: "2月",
                value: 114,
                ratio: 79.49
            },
    
            {
                month: "3月",
                value: 714,
                ratio: 75.8
            },
    
            {
                month: "4月",
                value: 442,
                ratio: 19.8
            },
    
            {
                month: "5月",
                value: 622,
                ratio: 44.5
            },
    
    
            {
                month: "6月",
                value: 528,
                ratio: 87.3
            }
    
        ]
    }
    
    
    let xAxisMonth = [],
        barData = [],
        lineData = [];
    for (let i = 0; i < data.chart.length; i++) {
        xAxisMonth.push(data.chart[i].month);
        barData.push({
            "name": xAxisMonth[i],
            "value": data.chart[i].value
        });
        lineData.push({
            "name": xAxisMonth[i],
            "value": data.chart[i].ratio
        });
    }
    
    option = {
        //backgroundColor: "#020d22",
        title: '',
        grid: {
            top: '2%',
            left: '7%',
            bottom: '6%',
            containLabel: true
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'shadow'
            },
            formatter: function(params) {
                return params[0]["data"].name + "<br/>" + '训练人次: ' + params[1]["data"].value + "<br/>" + '合格率: ' + params[0]["data"].value;
            }
        },
        xAxis: [{
                type: 'category',
                show: false,
                data: ['3月', '4月', '5月', '6月', '7月', '8月'],
                axisLabel: {
                    textStyle: {
                        color: '#b6b5ab'
                    }
                }
            },
            {
                type: 'category',
                position: "bottom",
                data: xAxisMonth,
                boundaryGap: true,
                // offset: 40,
                axisTick: {
                    show: false
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    textStyle: {
                        color: '#b6b5ab'
                    }
                }
            }
    
        ],
        yAxis: [{
            show: true,
            offset: 52,
            splitLine: {
                show: false,
                lineStyle: {
                    color: "rgba(255,255,255,0.2)"
                }
            },
            axisTick: {
                show: false
            },
            axisLine: {
                show: true
            },
            axisLabel: {
                show: true,
                color: '#b6b5ab'
            }
        }, {
            show: false,
            type: "value",
            name: "合格率(%)",
            nameTextStyle: {
                color: '#ccc'
            },
            axisLabel: {
                color: '#ccc'
            },
            splitLine: {
                show: false
            },
            axisLine: {
                show: false
            },
            axisTick: {
                show: false
            }
        }],
        color: ['#e54035'],
        series: [{
                name: '训练人次',
                type: 'pictorialBar',
                xAxisIndex: 1,
                barCategoryGap: '-80%',
                // barCategoryGap: '-5%',
                symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
                itemStyle: {
                    normal: {
                        color: function(params) {
                            let colorList = [
                                'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                                'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
                                'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)'
                            ];
                            return colorList[params.dataIndex];
                        }
                    },
                    emphasis: {
                        opacity: 1
                    }
                },
                data: barData,
            },
            {
                symbol: 'image://data:image/png;base64,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',
                symbolSize: 42,
                name: "完成率",
                type: "line",
                yAxisIndex: 1,
                data: lineData,
                itemStyle: {
                    normal: {
                        borderWidth: 5,
                        color: {
                            colorStops: [{
                                    offset: 0,
                                    color: '#821eff'
                                },
    
                                {
                                    offset: 1,
                                    color: '#204fff'
                                }
                            ],
                        }
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


function echarts_31() {   
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb1')); 
option = {
   
	    title: [{
        text: '湿度',
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
        data:['0-20%','20%-40%','40%-60%','60%-80%','80%以上'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'湿度',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
                  color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:10, name:'0-20%'},
                {value:30, name:'20%-40%'},
                {value:90, name:'40%-60%'},
                {value:20, name:'60%-80%'},
                {value:10, name:'80%以上'},
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
function echarts_32() {
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('fb2'));
option = {
   
	    title: [{
        text: '空气质量',
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
        data:['优','良','轻度污染','中度污染','重度污染','严重污染'],
                textStyle: {
           color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'空气质量',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
            color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:20, name:'优'},
                {value:90, name:'良'},
                {value:5, name:'轻度污染'},
                {value:4, name:'中度污染'},
                {value:1, name:'重度污染'},
                {value:1, name:'严重污染'},
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
        text: '风力',
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
        data:['0-2级','3-5级','6-8级','9-11级','12-14级','15-17级'],
                textStyle: {
            color: 'rgba(255,255,255,.5)',
			fontSize:'12',
        }
    },
    series: [
        {
        	name:'风力',
            type:'pie',
			center: ['50%', '42%'],
            radius: ['40%', '60%'],
                   color: ['#065aab', '#066eab', '#0682ab', '#0696ab', '#06a0ab','#06b4ab','#06c8ab','#06dcab','#06f0ab'],	
            label: {show:false},
			labelLine: {show:false},
            data:[
                {value:2, name:'0-2级'},
                {value:3, name:'3-5级'},
                {value:1, name:'6-8级'},
                {value:4, name:'9-11级'},
                {value:8, name:'12-14级'},
                {value:1, name:'15-17级'},
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



		
		
		


		









