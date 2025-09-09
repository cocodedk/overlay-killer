# Overlay Killer Firefox Add-on

This Firefox add-on removes annoying overlays and restores scrollbars on websites that try to force you to accept their policies before you can view their content.

## How to Use

1.  **Download or Clone the Repository:**

    You can either download the code as a ZIP file and extract it, or clone the repository using Git:

    ```bash
    git clone https://github.com/cocodedk/overlay-killer-chrome-extension.git
    ```

2.  **Load the Add-on in Firefox:**

    *   Open Mozilla Firefox.
    *   Navigate to `about:debugging`.
    *   Click on "This Firefox" in the sidebar.
    *   Click the "Load Temporary Add-on..." button.
    *   Select the `manifest.json` file from the `firefox` directory.

3.  **Using the Add-on:**

    *   When you encounter a website with an overlay, click on the Overlay Killer add-on icon in your Firefox toolbar.
    *   Click the "Kill Overlay" button in the popup.
    *   The overlay should disappear, and the page's scrollbar should be restored.

## How it Works

The add-on works by injecting a content script into the active tab. This script finds the element with the highest z-index (which is usually the overlay) and sets its `display` property to `none`. It also restores the `overflow` property of the `body` and `html` elements to `auto`, which brings back the scrollbar.

## Files

*   `manifest.json`: The main configuration file for the add-on.
*   `popup.html`: The user interface for the add-on's popup.
*   `popup.css`: Styles for the popup.
*   `popup.js`: The logic for the popup, which executes the content script.
*   `content.js`: The script that removes overlays and restores scrollbars.
*   `images/`: Contains the add-on's icons.
