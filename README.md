## วิธีติดตั้งโปรเจค

ใช้คำสั่ง git clone เพื่อติดตั้งโปรเจค หรือติดตั้งผ่าน [Github Desktop](https://desktop.github.com)

```bash
# รันคำสั่งนี้แค่ครั้งแรก ของการติดตั้งโปรแกรม
git clone https://github.com/STP5940/Nuxt-Elysia-Prisma-Bun.git
```

## ติดตั้ง package ที่จำเป็นในโปรเจค และตั้งค่า config

```bash
# รันคำสั่งนี้แค่ครั้งแรก ของการติดตั้งโปรแกรม
$ npm install
```

```bash
# รันคำสั่งนี้แค่ครั้งแรก ของการติดตั้งโปรแกรม
$ copy ./apps/frontend/.env.example ./apps/frontend/.env
```

## ตัวอย่างการตั้งค่าไฟล์ .env (frontend)

```bash
# This will override the value of apiSecret
NUXT_API_SECRET=api_secret_token
PORT=3001
```

## ติดตั้ง Prisma CLI

```bash
# รันคำสั่งนี้แค่ครั้งแรก ของการติดตั้งโปรแกรม
$ npm install prisma -g
```

## สร้าง structure ฐานข้อมูล และใส่ข้อมูลตัวอย่าง

```bash
# รันคำสั่งนี้แค่ครั้งแรก ของการติดตั้งโปรแกรม
$ npx prisma migrate dev --name init --schema=./apps/backend/prisma/schema.prisma
```

```bash
# Table: T_Users
# รันคำสั่งนี้แค่ครั้งแรก ของการติดตั้งโปรแกรม
$ node ./apps/backend/prisma/seed.ts
```

```bash
# เรียกใช้ Prisma Studio เพื่อใช้แก้ไขข้อมูลในฐานข้อมูล
$ npx prisma studio
```

```bash
# init คือชื่อของการ migrate ตัวอย่าง
$ npx prisma migrate dev --name create_userslogs_table
```

## เริ่มการทำงานโปรแกรม

```bash
$ npm run dev
```

## ติดตั้ง Extensions Visual Studio Code

- ติดตั้ง EJS Beautify
- Press Ctrl+Shift+P
- Format Document With...
- Configure Default Formatter...

### Deploy to production with pm2

- เริ่มแอปพลิเคชันด้วย PM2

```bash
# backend: ./apps/backend/
$ pm2 start ecosystem.config.js --env production
```

```bash
# frontend: ./apps/backend/
$ pm2 start ecosystem.config.cjs --env production
```

- แสดงโหมดการตรวจสอบแบบเรียลไทม์ของ PM2

```bash
$ pm2 monit
```