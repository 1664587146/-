package com.yichunxueyuan.entity;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

public class Demo {

	public static void main(String[] args) {

		Connection conn = null;
		Statement stmt = null;
		ResultSet rs = null;

		try {
			Class.forName("com.mysql.jdbc.Driver");
		
			conn = DriverManager.getConnection("jdbc:mysql://192.168.52.110:3306/yichunxueyuan","root","123456");
			
			
			stmt = conn.createStatement();
			
			 rs = stmt.executeQuery("select * from  t_province_sales order by psales  desc limit 5");
			
			while(rs.next()){
				
				System.out.println(rs.getString("pname"));
				System.out.println(rs.getString("psales"));
			}
			
			
			
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}finally{
			
			try {
				rs.close();
			
				stmt.close();
				conn.close();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}

	}

}
