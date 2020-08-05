package com.yichunxueyuan.manager;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

import com.yichunxueyuan.entity.GMV;
import com.yichunxueyuan.entity.ProvinceSales;

public class SalesManager {

	public List queryAllGMVs(){
		
		List lists = null;
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;
		lists = new ArrayList();
		try {
			/*Class.forName("com.mysql.jdbc.Driver");
		
			conn = DriverManager.getConnection("jdbc:mysql://192.168.52.110:3306/tclmall","root","123456");
			
			
			stmt = conn.createStatement();
			
			 rs = stmt.executeQuery("select * from  ads_gmv_sum_day");
			
			
			while(rs.next()){*/
				
				GMV gmv = new GMV();
				
				//gmv.setDt(rs.getString("dt"));
				
				gmv.setDt("beijing");
				gmv.setGmvAmount("9899");
				
				GMV gmv1 = new GMV();
				gmv1.setDt("shanghai");
				gmv1.setGmvAmount("2345");
				
				GMV gmv2 = new GMV();
				gmv2.setDt("guangzhou");
				gmv2.setGmvAmount("7788");
				
				GMV gmv3 = new GMV();
				gmv3.setDt("nanjing");
				gmv3.setGmvAmount("5674");
//				
//				GMV gmv1 = new GMV();
//				gmv1.setDt("�Ͼ�");
//				gmv1.setGmvAmount("1203");
				
				
				//gmv.setGmvAmount(rs.getString("gmv_amount"));
				
				lists.add(gmv);
				lists.add(gmv1);
				lists.add(gmv2);
				lists.add(gmv3);
				
			//}
			
			
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			/*
			try {
				rs.close();
			
				stmt.close();
				conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			*/
		}
		
		return lists;
		
	}
}
