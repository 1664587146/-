package com.yichunxueyuan.manager;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;


import com.yichunxueyuan.entity.Map;

public class Map_Manager {
	
public List queryAllMaps(){
		
		List lists = null;
		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;


		try {
			Class.forName("com.mysql.jdbc.Driver");
		
			conn = DriverManager.getConnection("jdbc:mysql://192.168.120.143:3306/bigdatadb","root","123456");
			
			
			stmt = conn.createStatement();
			
			rs = stmt.executeQuery("select * from  temphigh");
			
			lists = new ArrayList();
			while(rs.next()){
				
				Map gmv = new Map();
				
				gmv.setName(rs.getString("cityname"));
				
				gmv.setValue(rs.getInt("temphigh"));
				
				lists.add(gmv);
				
				//System.out.println(rs.getString("username"));
				
			}
			
			
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			
			try {
				rs.close();
			
				stmt.close();
				conn.close();
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		
		
		
		

		

		return lists;	
	}

}
