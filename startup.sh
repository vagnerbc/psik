#!/bin/bash

while !</dev/tcp/postgres/5432; do sleep 1; done;
npx sequelize db:migrate
npm run dev