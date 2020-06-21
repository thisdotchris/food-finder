FROM nginx:1.19.0-alpine
COPY ./ng-project-ii /usr/share/nginx/html
EXPOSE 80
# docker run --name food-finder-app -v /www/food-finder/ng-project-ii:/usr/share/nginx/html -p 4200:80 -d food-finder-app