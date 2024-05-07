## วิธีติดตั้งโปรเจค

ใช้คำสั่ง git clone เพื่อติดตั้งโปรเจค หรือติดตั้งผ่าน [Github Desktop](https://desktop.github.com)

```bash
# รันคำสั่งนี้แค่ครั้งแรก ของการติดตั้งโปรแกรม
git clone https://github.com/STP5940/Nuxt-Elysia-Prisma-Bun.git
```

ติดตั้ง Javascript Runtime [Bun](https://bun.sh/docs/installation)

## ติดตั้ง package ที่จำเป็นในโปรเจค และตั้งค่า config

```bash
# รันคำสั่งนี้แค่ครั้งแรก ของการติดตั้งโปรแกรม
$ bun install
```

```bash
# รันคำสั่งนี้แค่ครั้งแรก ของการติดตั้งโปรแกรม
$ copy .env.example .env
$ copy ./apps/frontend/.env.example ./apps/frontend/.env
$ copy ./apps/backend/.env.example ./apps/backend/.env
```

## ตัวอย่างการตั้งค่าไฟล์ .env (frontend: ./apps/frontend)

```bash
# This will override the value of apiSecret
NUXT_API_SECRET=api_secret_token
PORT=3001
```

## ตัวอย่างการตั้งค่าไฟล์ .env (backend: ./apps/backend)

```bash
ELYSIA_API_URL=http://localhost
PORT=3000
NODE_ENV=development # or production

SECRET_KEY=your_default_secret_key_here
```

## ตัวอย่างการตั้งค่าไฟล์ .env (prisma)

```bash
DB_HOST=localhost
DB_PORT=
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=

DATABASE_URL=sqlserver://${DB_HOST}:${DB_PORT};database=${DB_DATABASE};user=${DB_USERNAME};password=${DB_PASSWORD};trustServerCertificate=true
```

## ติดตั้ง Prisma CLI

```bash
# รันคำสั่งนี้แค่ครั้งแรก ของการติดตั้งโปรแกรม
$ npm install prisma -g
```

## สร้าง structure ฐานข้อมูล และใส่ข้อมูลตัวอย่าง

```bash
# รันคำสั่งนี้แค่ครั้งแรก ของการติดตั้งโปรแกรม
$ npx prisma migrate dev --name init
```

```bash
# รันคำสั่งนี้แค่ครั้งแรก ของการติดตั้งโปรแกรม
$ npx prisma generate
```

```bash
# รันคำสั่งนี้แค่ครั้งแรก ของการติดตั้งโปรแกรม
$ bun run seed
```

## ตัวอย่างการใช้งาน Prisma เพิ่มเติม (Note)

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
# frontend: ./apps/frontend/
$ pm2 start ecosystem.config.cjs --env production
```

- แสดงโหมดการตรวจสอบแบบเรียลไทม์

```bash
$ pm2 monit
```