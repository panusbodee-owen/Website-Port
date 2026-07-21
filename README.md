# Panusbodee Portfolio

เว็บไซต์พอร์ตโฟลิโอส่วนตัวของ `Panusbodee Pisutsuwimon` พัฒนาด้วย `React + TypeScript + Vite + Tailwind CSS`

## เริ่มใช้งานในเครื่อง

```bash
npm install
npm run dev
```

เปิดที่:

```bash
http://localhost:5173/
```

## คำสั่งที่ใช้บ่อย

```bash
npm run dev
npm run build
npm run check
npm run lint
npm run test
```

## โครงสร้างสำคัญ

- `src/data/portfolio.ts` ข้อมูลโปรไฟล์ ลิงก์ และผลงานทั้งหมด
- `src/pages/Home.tsx` หน้าแรก
- `src/pages/WorkDetailPage.tsx` หน้ารายละเอียดผลงาน
- `.github/workflows/deploy.yml` workflow สำหรับ deploy ไป GitHub Pages

## วิธีเอาขึ้น GitHub Pages

### 1. สร้าง GitHub repository
สร้าง repo ใหม่บน GitHub เช่น:

```bash
panusbodee-portfolio
```

### 2. เปิดใช้งาน git ในโปรเจกต์นี้
รันคำสั่งต่อไปนี้ในโฟลเดอร์โปรเจกต์:

```bash
git init
git add .
git commit -m "Initial portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git
git push -u origin main
```

### 3. เปิด GitHub Pages
ใน GitHub repo:

- ไปที่ `Settings`
- ไปที่ `Pages`
- ที่ `Source` ให้เลือก `GitHub Actions`

จากนั้นทุกครั้งที่ push ไปที่ branch `main` ระบบจะ build และ deploy เว็บให้อัตโนมัติ

## URL เว็บไซต์หลัง deploy

โดยทั่วไปจะได้ลิงก์ประมาณนี้:

```bash
https://YOUR_USERNAME.github.io/YOUR_REPO/
```

## หมายเหตุ

- โปรเจกต์นี้ใช้ `HashRouter` เพื่อให้ route ภายในทำงานบน GitHub Pages ได้โดยไม่พัง
- ถ้าคุณเปลี่ยนข้อมูลพอร์ต ให้แก้ที่ `src/data/portfolio.ts`
- ถ้าต้องการใช้โดเมนส่วนตัวภายหลัง สามารถเพิ่ม `CNAME` ได้
