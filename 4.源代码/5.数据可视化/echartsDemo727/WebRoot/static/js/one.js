test1()
//test2()
function test1(){ 
	
	
	
        var myChart = echarts.init(document.getElementById('main'));

        var option;
        
        
    	$.ajax({
    		type : "POST",
    		async : true, 
    		url : "http://127.0.0.1:8080/echartsDemo/history",
    		dataType : "JSON",
    		success : function(data) {
    			//$("#today").html(data.test1 + "W");
    			//$("#today").html("<table width='200' border='1'> <tr>   <td>&nbsp;</td>   <td>t</td>    <td>&nbsp;</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>"+data.test1+" W</td>    <td>&nbsp;</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>x</td>    <td>&nbsp;</td>  </tr></table>");
    
    			
    			   
    	        option = {
    	            title: {
    	                text: 'Echarts 测试'
    	            },
    	            tooltip: {},
    	            legend: {
    	                data:['测试3']
    	            },
    	            xAxis: {
    	                data: [data.test1,"2019-02","2016-03","2016-04","2016-05","2016-06","2016-07","2016-08","2016-09"]
    	            },
    	            yAxis: {
    	            	 	            
    	            },
    	            series: [{
    	                name: '测试6',
    	                type: 'bar',//line
    	                data: [98, 64, 103, 97, 116, 137,137,163,85]
    	            }]
    	        };
    	        
    	       

    	        // 使锟矫革拷指锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷锟斤拷示图锟�
    	        myChart.setOption(option);
    	        
    		
    		}

    	});
        
    
}

test2()
function test2(){
	
	$.ajax({
		type : "POST",
		async : true, 
		url : "http://127.0.0.1:8080/echartsDemo/history",
		dataType : "JSON",
		success : function(data) {
			//$("#today").html(data.test1 + "W");
			$("#today").html("<table width='200' border='1'> <tr>   <td>&nbsp;</td>   <td>t</td>    <td>&nbsp;</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>"+data.test1+" W</td>    <td>&nbsp;</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>x</td>    <td>&nbsp;</td>  </tr></table>");
		}

	});
}
    