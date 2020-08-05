test1()
//test2()
function test1(){ 
	
	
        var myChart = echarts.init(document.getElementById('main'));

        var option;
        
        
    	$.ajax({
    		type : "POST",
    		async : true, 
    		url : "http://127.0.0.1:8081/echartsDemo/history",
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
    	                data: [data.ps1.provinceName,data.ps2.provinceName,data.ps3.provinceName,data.ps4.provinceName,data.ps5.provinceName]
    	            },
    	            yAxis: {
    	            	 	            
    	            },
    	            series: [{
    	                name: '测试6',
    	                type: 'pie',//line
    	                data: [data.ps1.amount, data.ps2.amount, data.ps3.amount, data.ps4.amount, data.ps5.amount]
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
		url : "http://127.0.0.1:8081/echartsDemo/history",
		dataType : "JSON",
		success : function(data) {
			//$("#today").html(data.test1 + "W");
			$("#today").html("<table width='200' border='1'> <tr>   <td>&nbsp;</td>   <td>t</td>    <td>&nbsp;</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>"+data.lists+" W</td>    <td>&nbsp;</td>  </tr>  <tr>    <td>&nbsp;</td>    <td>x</td>    <td>&nbsp;</td>  </tr></table>");
		}

	});
}
    