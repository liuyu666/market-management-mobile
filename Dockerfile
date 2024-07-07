# 使用官方Nginx镜像作为基础镜像  
FROM nginx:latest  

# 将本地dist目录内容复制到Nginx的网页根目录  
COPY ./dist /usr/share/nginx/html  

# 暴露80端口  
EXPOSE 80

# 运行nginx  
CMD ["nginx", "-g", "daemon off;"]


# docker build -t  market-management-mobile .
# docker run -d -p 9331:80 market-management-mobile
# docker ps