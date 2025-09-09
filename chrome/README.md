# Overlay Killer Chrome Extension

This Chrome extension removes annoying overlays and restores scrollbars on websites that try to force you to accept their policies before you can view their content.

## How to Use

1.  **Download or Clone the Repository:**

    You can either download the code as a ZIP file and extract it, or clone the repository using Git:

    ```bash
    git clone https://github.com/cocodedk/overlay-killer-chrome-extension.git
    ```

2.  **Load the Extension in Chrome:**

    *   Open Google Chrome.
    *   Navigate to `chrome://extensions`.
    *   Enable "Developer mode" by clicking the toggle switch at the top right of the page.
    *   Click the "Load unpacked" button.
    *   Select the directory where you downloaded or cloned the extension's files (the directory containing `manifest.json`).

3.  **Using the Extension:**

    *   When you encounter a website with an overlay, click on the Overlay Killer extension icon in your Chrome toolbar.
    *   Click the "Kill Overlay" button in the popup.
    *   The overlay should disappear, and the page's scrollbar should be restored.

## How it Works

The extension works by injecting a content script into the active tab. This script finds the element with the highest z-index (which is usually the overlay) and sets its `display` property to `none`. It also restores the `overflow` property of the `body` and `html` elements to `auto`, which brings back the scrollbar.

## Files

*   `manifest.json`: The main configuration file for the extension.
*   `popup.html`: The user interface for the extension's popup.
*   `popup.css`: Styles for the popup.
*   `popup.js`: The logic for the popup, which executes the content script.
*   `content.js`: The script that removes overlays and restores scrollbars.
*   `images/`: Contains the extension's icons.

---

# افزونه کروم Overlay Killer

این افزونه کروم، پوشش‌های آزاردهنده را حذف کرده و نوارهای اسکرول را در وب‌سایت‌هایی که شما را مجبور به پذیرش سیاست‌هایشان قبل از مشاهده محتوا می‌کنند، بازیابی می‌کند.

## نحوه استفاده

۱. **دانلود یا کلون کردن مخزن (Repository):**

می‌توانید کد را به صورت یک فایل ZIP دانلود و آن را استخراج کنید، یا با استفاده از Git مخزن را کلون کنید:

```bash
git clone https://github.com/cocodedk/overlay-killer-chrome-extension.git
```

۲. **بارگذاری افزونه در کروم:**

*   گوگل کروم را باز کنید.
*   به آدرس `chrome://extensions` بروید.
*   با کلیک بر روی کلید در گوشه بالا سمت راست صفحه، حالت "Developer mode" (حالت توسعه‌دهنده) را فعال کنید.
*   بر روی دکمه "Load unpacked" (بارگذاری بسته‌بندی نشده) کلیک کنید.
*   پوشه‌ای را که فایل‌های افزونه را در آن دانلود یا کلون کرده‌اید (پوشه‌ای که حاوی `manifest.json` است) انتخاب کنید.

۳. **استفاده از افزونه:**

*   هنگامی که با وب‌سایتی دارای پوشش (overlay) مواجه شدید، روی آیکون افزونه Overlay Killer در نوار ابزار کروم خود کلیک کنید.
*   در پنجره باز شده، روی دکمه "Kill Overlay" (حذف پوشش) کلیک کنید.
*   پوشش باید ناپدید شود و نوار اسکرول صفحه باید بازیابی شود.

## چگونه کار می‌کند

این افزونه با تزریق یک اسکریپت محتوا (content script) به تب فعال کار می‌کند. این اسکریپت عنصری را که دارای بالاترین `z-index` است (که معمولاً همان پوشش است) پیدا کرده و ویژگی `display` آن را به `none` تغییر می‌دهد. همچنین، ویژگی `overflow` عناصر `body` و `html` را به `auto` بازمی‌گرداند که باعث ظاهر شدن دوباره نوار اسکرول می‌شود.

## فایل‌ها

*   `manifest.json`: فایل اصلی پیکربندی برای افزونه.
*   `popup.html`: رابط کاربری برای پنجره بازشوی افزونه.
*   `popup.css`: استایل‌های مربوط به پنجره بازشو.
*   `popup.js`: منطق مربوط به پنجره بازشو که اسکریپت محتوا را اجرا می‌کند.
*   `content.js`: اسکریپتی که پوشش‌ها را حذف و نوارهای اسکرول را بازیابی می‌کند.
*   `images/`: شامل آیکون‌های افزونه است.