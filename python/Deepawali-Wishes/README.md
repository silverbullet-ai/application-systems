# Deepawali Wishes

![Python](https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white)
![Flask](https://img.shields.io/badge/Flask-000000?style=for-the-badge&logo=flask&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![Vercel](https://img.shields.io/badge/Deployment-Vercel-black?style=for-the-badge&logo=vercel&logoColor=white)

A Python-based personalized Deepawali greeting application that allows users to create and share festive wishes with their loved ones. Enter the sender's and recipient's names, generate a personalized greeting card, and share it through WhatsApp using a unique, shareable link.

**Live Demo:** [Create Your Deepawali Wish](https://deepawali-wishes-two.vercel.app/)

---

## Overview

Deepawali Wishes is a web-based greeting application designed to make sharing festive wishes more personal and convenient.

Users can enter their names and generate personalized Deepawali greetings containing customized messages and blessings. Each generated greeting can be shared through WhatsApp using a URL that preserves the greeting details.

Recipients can open the shared link to view their personalized greeting card and create their own wishes.

Built using Python, Flask, HTML, CSS, and JavaScript, the application combines dynamic message generation with an interactive festive interface.

## Features

- **Personalized Greeting Generation:** Create customized Deepawali greetings using sender and recipient names.
- **Dynamic Message Generation:** Generate personalized festive messages and blessings.
- **Interactive Greeting Card:** Display generated greetings through a dedicated greeting card interface.
- **WhatsApp Integration:** Share personalized greetings directly through WhatsApp.
- **Shareable Greeting Links:** Generate unique URLs containing the greeting information, allowing recipients to view their personalized cards without a database.
- **Copy Greeting:** Copy the complete greeting text to share through other platforms.
- **Regenerate Wishes:** Generate another personalized greeting using the same form.
- **Recipient View:** Display shared greetings without showing the original creation form.
- **Create Your Own Wish:** Allow recipients to return to the greeting form and create their own personalized wishes.
- **Input Validation:** Validate sender and recipient names, including required fields and maximum character limits.
- **Festive Animations:** Include dedicated CSS animations and JavaScript effects to enhance the greeting experience.

## Greeting Features

| Feature                | Description                                                           |
| ---------------------- | --------------------------------------------------------------------- |
| Personalized Greetings | Generates greetings using sender and recipient names.                 |
| Dynamic Messages       | Displays customized wishes, blessings, and closing messages.          |
| Shareable Links        | Preserves greeting information in URL query parameters.               |
| WhatsApp Sharing       | Creates a formatted WhatsApp message with the greeting link.          |
| Copy Greeting          | Copies the complete greeting as plain text.                           |
| Recipient Experience   | Allows recipients to view their greeting and create their own wishes. |

*Note: WhatsApp displays the actual URL in shared messages because its standard text-sharing interface does not support hidden hyperlinks.*

## Tech Stack

- **Language:** Python
- **Web Framework:** Flask
- **Frontend:** HTML5, CSS3
- **Client-Side Functionality:** JavaScript
- **Styling and Animations:** CSS3, JavaScript
- **API Communication:** Fetch API, JSON
- **URL Handling:** JavaScript URL and URLSearchParams APIs
- **Deployment:** Vercel

## Project Structure

```text
Deepawali-Wishes/
│
├── static/
│   ├── css/
│   │   ├── animations.css
│   │   └── style.css
│   │
│   └── js/
│       ├── effects.js
│       └── main.js
│
├── templates/
│   └── index.html
│
├── app.py
├── message_generator.py
├── requirements.txt
├── .gitignore
└── README.md
```

| File / Directory              | Description                                                        |
| ----------------------------- | ------------------------------------------------------------------ |
| `app.py`                    | Flask application, routing, and greeting generation API.           |
| `message_generator.py`      | Generates personalized Deepawali greeting messages.                |
| `templates/index.html`      | Main HTML template for the application.                            |
| `static/css/style.css`      | Main application styles and layout.                                |
| `static/css/animations.css` | Festive animations and visual effects.                             |
| `static/js/main.js`         | Greeting generation, form handling, copying, and WhatsApp sharing. |
| `static/js/effects.js`      | Client-side visual effects.                                        |
| `requirements.txt`          | Project dependencies.                                              |
| `.gitignore`                | Files and directories excluded from Git.                           |

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/silverbullet-ai/application-systems.git
```

### 2. Navigate to the Project Directory

```bash
cd application-systems/python/Deepawali-Wishes
```

### 3. Create a Virtual Environment

```bash
python -m venv venv
```

Activate the environment:

**Windows:**

```bash
venv\Scripts\activate
```

**Linux / macOS:**

```bash
source venv/bin/activate
```

### 4. Install Dependencies

```bash
python -m pip install --upgrade pip
pip install -r requirements.txt
```

### 5. Run the Application

```bash
python app.py
```

Open the application in your browser:

```text
http://127.0.0.1:5000/
```

## Application Workflow

1. Open Deepawali Wishes in your browser.
2. Enter the sender's name.
3. Enter the recipient's name.
4. Generate a personalized Deepawali greeting.
5. Review the generated greeting card.
6. Copy the greeting or share it through WhatsApp.
7. The recipient opens the shared link to view their personalized greeting.
8. The recipient can select **Create Your Own Wish** to generate another greeting.

## API Endpoints

| Endpoint          | Method | Description                                                                       |
| ----------------- | ------ | --------------------------------------------------------------------------------- |
| `/`             | GET    | Displays the greeting application homepage.                                       |
| `/api/generate` | POST   | Generates a personalized greeting using the submitted sender and recipient names. |

The greeting generation endpoint accepts JSON input:

```json
{
    "sender": "Aahish",
    "recipient": "Krishna"
}
```

The API validates the submitted names and returns the generated greeting as a JSON response.

## Sharing Mechanism

Deepawali Wishes uses URL query parameters to preserve personalized greeting information.

When a user shares a greeting, the application creates a URL containing:

- Sender name
- Recipient name
- Greeting title
- Personalized wish
- Blessing
- Closing message

When the recipient opens the URL, JavaScript retrieves the parameters, validates the content, and restores the original greeting card.

This approach allows personalized greetings to be shared without requiring a database or server-side storage for individual greeting records.

## Deployment

Deepawali Wishes is deployed on **Vercel**.

The deployment uses:

- Python runtime.
- Flask application framework.
- Dependencies managed through `requirements.txt`.
- HTML templates served through Flask.
- Static CSS and JavaScript assets.
- Vercel production deployment.

**Production URL:** [https://deepawali-wishes-two.vercel.app/](https://deepawali-wishes-two.vercel.app/)

## Future Improvements

- Shorter personalized greeting URLs.
- Additional festive greeting templates.
- More customization options for greeting messages.
- Additional animation and visual effects.
- More sharing options across communication platforms.
- Enhanced greeting card personalization.

## Project Status

**Status:** Deployed and operational.

The application has been deployed to Vercel and its primary features have been tested successfully in the production environment.

## Author

**Aahish Aayan** 

AI & Machine Learning Graduate | Aspiring AI Engineer  

GitHub: [Silver Bullet](https://github.com/silverbullet-ai)
