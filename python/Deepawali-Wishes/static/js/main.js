const form = document.getElementById("greetingForm");
const result = document.getElementById("greetingResult");

const senderInput = document.getElementById("senderName");
const recipientInput = document.getElementById("recipientName");

const generateButton = document.getElementById("generateButton");
const copyButton = document.getElementById("copyButton");
const shareButton = document.getElementById("shareButton");
const regenerateButton = document.getElementById("regenerateButton");

const createOwnWishButton =
    document.getElementById("createOwnWishButton");

const cardActions = document.getElementById("cardActions");

const greetingTitle = document.getElementById("greetingTitle");
const greetingWish = document.getElementById("greetingWish");
const greetingBlessing = document.getElementById("greetingBlessing");
const greetingClosing = document.getElementById("greetingClosing");
const signature = document.querySelector(".signature");

let currentGreeting = null;


/* Display Greeting */

function displayGreeting(message) {

    greetingTitle.textContent = message.greeting;
    greetingWish.textContent = message.wish;
    greetingBlessing.textContent = message.blessing;
    greetingClosing.textContent = message.closing;
    signature.textContent = message.signature;

    result.hidden = false;

}


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

    currentGreeting = null;

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
            throw new Error(
                data.error || "Unable to generate greeting."
            );
        }

        currentGreeting = data.message;

        displayGreeting(currentGreeting);

        // Show sender actions.

        cardActions.hidden = false;
        createOwnWishButton.hidden = true;

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


/* Generate Another Wish */

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


/* Generate Shareable Link */

function createShareableLink() {

    const sender = senderInput.value.trim();
    const recipient = recipientInput.value.trim();

    const params = new URLSearchParams({

        sender: sender,
        recipient: recipient,

        greeting: currentGreeting.greeting,
        wish: currentGreeting.wish,
        blessing: currentGreeting.blessing,
        closing: currentGreeting.closing

    });

    return `${window.location.origin}${window.location.pathname}?${params.toString()}`;

}


/* Share Greeting on WhatsApp */

shareButton.addEventListener("click", async () => {

    if (!currentGreeting) return;

    const sender = senderInput.value.trim();
    const recipient = recipientInput.value.trim();
    const shareURL = createShareableLink();

    const whatsappMessage = [
        `Hey ${recipient}! 😊🪔`,
        "",
        `${sender} has created a personalised Deepawali greeting for you!`,
        "",
        "Open your greeting card:",
        "",
        shareURL,
        "",
        "Happy Deepawali! ✨"
    ].join("\n");

    const whatsappURL =
        `https://api.whatsapp.com/send?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappURL, "_blank");

});



/* Load Shared Greeting */

function loadSharedGreeting() {

    const params = new URLSearchParams(window.location.search);

    const sender = params.get("sender");
    const recipient = params.get("recipient");

    const greeting = params.get("greeting");
    const wish = params.get("wish");
    const blessing = params.get("blessing");
    const closing = params.get("closing");

    // Check for shared greeting parameters.

    if (
        !sender ||
        !recipient ||
        !greeting ||
        !wish ||
        !blessing ||
        !closing
    ) {
        return;
    }

    // Validate shared content.

    if (
        sender.length > 50 ||
        recipient.length > 50 ||
        greeting.length > 100 ||
        wish.length > 500 ||
        blessing.length > 500 ||
        closing.length > 200
    ) {
        return;
    }

    // Hide the greeting creation form.

    form.hidden = true;

    // Restore the original greeting.

    currentGreeting = {

        greeting: greeting,
        wish: wish,
        blessing: blessing,
        closing: closing,
        signature: `— By ${sender}`

    };

    // Display the greeting card.

    displayGreeting(currentGreeting);

    // Hide sender-only buttons.

    cardActions.hidden = true;

    // Show the create-your-own-wish button.

    createOwnWishButton.hidden = false;

    // Update browser title.

    document.title =
        `A Deepawali Wish for ${recipient} | By ${sender}`;

}


/* Create Your Own Wish */

createOwnWishButton.addEventListener("click", () => {

    // Clear the previous greeting.

    currentGreeting = null;

    result.hidden = true;

    // Restore the creation form.

    form.hidden = false;

    // Hide recipient-only action.

    createOwnWishButton.hidden = true;

    // Restore sender actions for the next greeting.

    cardActions.hidden = false;

    // Clear previous names.

    senderInput.value = "";
    recipientInput.value = "";

    // Reset browser URL to the homepage.

    window.history.replaceState(
        {},
        document.title,
        window.location.pathname
    );

    // Restore original page title.

    document.title = "Deepawali Wishes | By Aahish";

    // Bring the form into view.

    form.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

});


/* Initialise Shared Greeting */

loadSharedGreeting();
