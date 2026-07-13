"""
QR Code Generator
------------------
Generates a QR code image from text or a URL.

Install dependency first:
    pip install qrcode[pil]
"""

import qrcode 


def generate_qr_code(data: str, filename: str = "qrcode.png",
                      fill_color: str = "black", back_color: str = "white",
                      box_size: int = 10, border: int = 4) -> str:
    qr = qrcode.QRCode(
        version=1,  
        error_correction=qrcode.constants.ERROR_CORRECT_L,
        box_size=box_size,
        border=border,
    )
    qr.add_data(data)
    qr.make(fit=True)

    img = qr.make_image(fill_color=fill_color, back_color=back_color)
    img.save(filename)
    return filename


if __name__ == "__main__":
    
    text = input("Enter text or URL to encode: ").strip() or "https://github.com/silverbullet-ai"
    output_file = input("Output filename (default: qrcode.png): ").strip() or "qrcode.png"

    saved_path = generate_qr_code(text, output_file)
    print(f"QR code saved to: {saved_path}")