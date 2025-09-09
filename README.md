# Overlay Killer Chrome Extension

This Chrome extension removes annoying overlays and restores scrollbars on websites that try to force you to accept their policies before you can view their content.

## How to Use

1.  **Download or Clone the Repository:**

    You can either download the code as a ZIP file and extract it, or clone the repository using Git:

    ```bash
    git clone https://github.com/your-username/overlay-killer-chrome-extension.git
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
