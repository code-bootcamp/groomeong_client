FROM node:14 AS build

# 1. 소스코드 복사하기
COPY . /myfolder/
WORKDIR /myfolder/

# 2. 패키지 먼저 설치하기
COPY ./package.json /myfolder/
COPY ./yarn.lock /myfolder/
RUN yarn install 

RUN yarn build

FROM node:14

WORKDIR /myfolder/

# 3. 실행 파일 복사하기 
COPY --from=build /myfolder/.next /myfolder/.next

# 4. 도커 안에서 프로그램 실행
CMD yarn start
