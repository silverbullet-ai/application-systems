from flask import Flask, render_template, request, jsonify
from message_generator import generate_wish

app = Flask(__name__)


@app.route("/")
def home():
    return render_template("index.html")


@app.route("/api/generate", methods=["POST"])
def generate_message():

    data = request.get_json(silent=True) or {}

    sender = data.get("sender", "").strip()
    recipient = data.get("recipient", "").strip()

    if not isinstance(sender, str) or not isinstance(recipient, str):
        return jsonify({
            "success": False,
            "error": "Invalid name format."
        }), 400

    if not sender or not recipient:
        return jsonify({
            "success": False,
            "error": "Please enter both names."
        }), 400

    if len(sender) > 50 or len(recipient) > 50:
        return jsonify({
            "success": False,
            "error": "Names must be 50 characters or fewer."
        }), 400

    message = generate_wish(sender, recipient)

    return jsonify({
        "success": True,
        "sender": sender,
        "recipient": recipient,
        "message": message
    })


if __name__ == "__main__":
    app.run(debug=True)
