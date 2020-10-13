# coding:utf-8
import requests
import json
import pandas as pd 
import numpy as np
import time

count = 1
app = "city,citycode,date,week,weather,temphigh,templow,humidity,pressure,windspeed,winddirect,windpower,quality\n"



def getJsonAndData(url):
    res = requests.get(url)
    myJson = json.loads(res.text)
    dic_data = myJson["result"]
    data = dic_data["result"]//这个函数下面根据数据集结构改
    air = data["aqi"] 
    quality = air['quality'] 
    weather = data["daily"]
    weather = weather[0]
    weather = weather["day"]
    weather = weather['weather']
    print(weather)
    #print(quality)
    res = data['city'] + "," + data['citycode'] + "," + data['date'] + "," + data['week'] + "," + weather + "," + data['temphigh'] + "," + data['templow'] + "," + data['humidity'] + "," + data['pressure'] + "," + data['windspeed'] + "," + data['winddirect'] + "," + data['windpower'] + "," + quality + "\n"
    #print(res)
    return res




def getAll(app):
    f1 = open("area.txt","r",encoding='UTF-8')
    f2 = open("data.txt","w",encoding='UTF-8')
    f2.write(app)
    try:
        while True:
            area = f1.readline()
            if area =='':
                break
            else:
                #print(area)
                url = 'https://way.jd.com/jisuapi/weather?city=' + area[:-1] + '&cityid=&citycode=&appkey=20c931613e09417b1dbd4217d1011dc4'//改成你要爬的url
                res = getJsonAndData(url)
                print(res)
                f2.write(res)
    except:
        f1.close()
        f2.close()
    return 


getAll(app)







