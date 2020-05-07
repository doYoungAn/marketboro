# marketboro
마켓보로에서 서비스 하는 식봄 클론 코딩

## github/workflow

깃허브 액션을 이용한 자동 배포  
1. backend에서 필요한 .env 파일을 시크릿을 가져와 만듭니다.
2. 도커허브에 로그인 합니다.
3. 도커이미지를 빌드합니다.
4. 빌드된 도커 이미지를 푸시합니다.
5. 배포할 ec2에 접근하여 `docker-compose down`을 실행합니다.
6. 기존에 있던 도커 이미지를 제거합니다.
7. 다시 docker-compose를 백그라운드로 실행합니다.

## backend

### .env
```
MONGODB_USER=
MONGODB_PASSWORD=
MONGODB_URL=
MONGODB_PROT=
```
서버 실행하지 전에 필수로 생성해야합니다.

### 스크립트
- `npm run dev` nodemon을 사용하여 개발서버를 띄웁니다.
- `npm run build` .ts파일을 .js파일로 빌드합니다.
- `npm run start` 빌드한 .js파일을 실행합니다.

## frontend

### 스크립트
- `npm run dev` webpack-dev-server을 사용하여 개발하기 위해 서버를 띄웁니다.
- `npm run build` webpack을 사용하여 실제 html,css,js로 빌드합니다.

## setting-db

### .env
```
MONGODB_USER=
MONGODB_PASSWORD=
MONGODB_URL=
MONGODB_PROT=
```
해당 파일을 생성하고 `npm run insert`를 실행하면  
data/*json을 읽어 디비에 저장합니다.
