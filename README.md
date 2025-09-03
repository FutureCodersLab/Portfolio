## 📌 Catching Up with Missed Classes (Using Patches)

If you miss a class, you can apply a patch to make your code up to date.  

---

### ✅ Step 1. Save your progress
Make sure your own changes are pushed to GitHub:

```bash
git add .
git commit -m "my work so far"
git push
```

### 📥 Step 2. Download the patch file

1. Go to https://github.com/ThinkingTechDev/Portfolio/tree/patches
2. Click on the patch file you need (for example: if you missed the 2nd class then click on `class-2.patch`)
3. Click the **Download raw file** button (top right) 
4. Save the file into your project folder

> ⚠️ **Important:** Do **not** copy-paste the patch contents. Always use **Download raw file**.

### 🛠 Step 3. Apply the patch

In your terminal, inside the project folder, run:

```bash
git apply class-2.patch
```
Replace class-2.patch with the name of the file you downloaded

### 🚀 Step 4. Push the updated code

In your terminal, inside the project folder, run:

```bash
git add .
git commit -m "applied class 2 patch"
git push
```
Now you’re ready for the next class 🚀
