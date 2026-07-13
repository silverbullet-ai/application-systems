# QR Code Generator

![Python](https://img.shields.io/badge/Python-3.x-blue)
![Project](https://img.shields.io/badge/Type-CLI%20Application-success)
![Library](https://img.shields.io/badge/Library-qrcode-orange)
![License](https://img.shields.io/badge/License-MIT-green)

A simple command-line application that generates QR code images from any text or URL using Python.

This project demonstrates how to create QR codes programmatically with customizable colors, border size, and image output.

---

# Features

- Generate QR codes from text or URLs
- Save QR codes as PNG images
- Customizable output filename
- Adjustable QR code size and border
- Custom foreground and background colors
- Clean and reusable function-based implementation

---

# Project Structure

```text
QR-Code-Generator/
│
├── app.py
├── README.md
└── requirements.txt
```

# Installation

Clone the repository:

```bash
git clone https://github.com/silverbullet-ai/python-journey.git
```

Navigate to the project directory:

```bash
cd QR-Code-Generator
```

Install the required dependency:

```bash
pip install qrcode[pil]

or

pip install -r requirements.txt
```

---

# Usage

Run the application:

```bash
python app.py
```

Example:

```
Enter text or URL to encode:
https://github.com/silverbullet-ai

Output filename (default: qrcode.png):
github.png
```

Output:

```
QR code saved to: github.png
```

---

# How It Works

1. Accepts text or a URL from the user.
2. Creates a QRCode object.
3. Encodes the provided data.
4. Generates the QR code image.
5. Saves the image as a PNG file.

---

# Function Overview

```python
generate_qr_code(
    data,
    filename="qrcode.png",
    fill_color="black",
    back_color="white",
    box_size=10,
    border=4
)
```

### Parameters

| Parameter | Description |
|-----------|-------------|
| `data` | Text or URL to encode |
| `filename` | Output image filename |
| `fill_color` | QR code color |
| `back_color` | Background color |
| `box_size` | Size of each QR code box |
| `border` | Border thickness |

Returns the filename of the generated QR code image.

---

# Example

Input:

```
https://github.com/silverbullet-ai
```

Output:

```
qrcode.png
```

Scanning the QR code opens the GitHub profile.

---

# Future Improvements

- GUI version using Tkinter or PyQt
- Batch QR code generation
- Logo embedding inside QR codes
- Support for SVG output
- Wi-Fi QR code generator
- Contact (vCard) QR codes
- Email and SMS QR codes
- QR code customization with gradients

---

# Concepts Practiced

- Functions
- User Input
- Third-party Libraries
- File Handling
- Python Packages
- Modular Programming
- Image Generation

---

# Author

**Aahish Aayan**

GitHub: **silverbullet-ai**

---

> *"Simple utilities are often the best way to learn real-world programming."*