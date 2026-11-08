const form = document.getElementById("greetingForm");

const result = document.getElementById("greetingResult");

const senderInput = document.getElementById("senderName");
const recipientInput = document.getElementById("recipientName");

const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");
const shareButton = document.getElementById("shareButton");
const regenerateButton = document.getElementById("regenerateButton");

const greetingTitle = document.getElementById("greetingTitle");
const greetingWish = document.getElementById("greetingWish");
const greetingBlessing = document.getElementById("greetingBlessing");
const greetingClosing = document.getElementById("greetingClosing");
const signature = document.querySelector(".signature");

let currentGreeting = null;


/* Generate Greeting */

async function generateGreeting() {

    const sender = senderInput.value.trim();
    const recipient = recipientInput.value.trim();

    if (!sender || !recipient) {
        return;
    }

    generateButton.disabled = true;
    generateButton.textContent = "Generating... ✨";

    result.hidden = false;

    greetingTitle.textContent = "Creating something special...";
    greetingWish.textContent = "";
    greetingBlessing.textContent = "";
    greetingClosing.textContent = "";
    signature.textContent = "";

    try {

        const response = await fetch("/api/generate", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                sender: sender,
                recipient: recipient
            })

        });

        const data = await response.json();

        if (!response.ok) {
            throw new Error(data.error || "Unable to generate greeting.");
        }

        currentGreeting = data.message;

        greetingTitle.textContent = currentGreeting.greeting;
        greetingWish.textContent = currentGreeting.wish;
        greetingBlessing.textContent = currentGreeting.blessing;
        greetingClosing.textContent = currentGreeting.closing;
        signature.textContent = currentGreeting.signature;

        copyButton.textContent = "Copy Greeting";

    } catch (error) {

        greetingTitle.textContent = "Oops!";
        greetingWish.textContent = error.message;

        currentGreeting = null;

    } finally {

        generateButton.disabled = false;
        generateButton.textContent = "✨ Generate My Wish";

    }

}


/* Form Submission */

form.addEventListener("submit", async (event) => {

    event.preventDefault();

    await generateGreeting();

});


/* Regenerate Greeting */

regenerateButton.addEventListener("click", async () => {

    await generateGreeting();

});


/* Build Plain Text Greeting */

function getGreetingText() {

    if (!currentGreeting) {
        return "";
    }

    return [
        "🪔 शुभ दीपावली 🪔",
        "",
        currentGreeting.greeting,
        "",
        currentGreeting.wish,
        "",
        currentGreeting.blessing,
        "",
        currentGreeting.closing,
        "",
        currentGreeting.signature,
        "",
        "Happy Deepawali! ✨"
    ].join("\n");

}


/* Copy Greeting */

copyButton.addEventListener("click", async () => {

    const text = getGreetingText();

    if (!text) {
        return;
    }

    try {

        await navigator.clipboard.writeText(text);

        copyButton.textContent = "Copied! ✓";

    } catch (error) {

        copyButton.textContent = "Copy unavailable";

    }

});


/* Share Greeting */

shareButton.addEventListener("click", async () => {

    const text = getGreetingText();

    if (!text) {
        return;
    }

    if (navigator.share) {

        try {

            await navigator.share({
                title: "Happy Deepawali!",
                text: text
            });

        } catch (error) {

            if (error.name !== "AbortError") {
                console.error("Sharing failed:", error);
            }

        }

    } else {

        try {

            await navigator.clipboard.writeText(text);

            shareButton.textContent = "Copied! Share it ✨";

        } catch (error) {

            shareButton.textContent = "Sharing unavailable";

        }

    }

});
