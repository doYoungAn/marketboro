FROM    node:13.12.0-alpine3.11
LABEL   doyoung jispoop@gmail.com

WORKDIR /usr/src
EXPOSE  3000

COPY    backend/ backend/
RUN     cd backend && npm install && npm run build && cd ..

COPY    frontend/ frontend/
RUN     cd frontend && npm install && npm rebuild node-sass && npm run build && cd ..

WORKDIR /usr/src/backend
CMD     npm run start
