import random

def generate_wish(sender, recipient):

    wishes = [
        f"May every diya illuminate your path, {recipient}, and every moment bring happiness, success and prosperity.",

        f"May this Deepawali fill your life, {recipient}, with beautiful memories, endless opportunities and countless reasons to smile.",

        f"May the light of this festival guide you towards your dreams, {recipient}, and bring peace and happiness into your life.",

        f"May your home sparkle with happiness and your heart shine with hope, {recipient}. Have a wonderful Deepawali!",

        f"May every light you see remind you of the wonderful possibilities waiting ahead, {recipient}.",

        f"May your days be filled with laughter, your dreams find wings, and your life shine with positivity, {recipient}."
    ]

    blessings = [
        "May Shri Krishna bless you and your family with peace, good health and prosperity.",

        "May every new beginning bring you closer to your dreams and aspirations.",

        "May your life be filled with love, laughter, positivity and endless blessings.",

        "May happiness find its way into your home and peace always reside in your heart."
    ]

    closings = [
        "Keep shining and spreading happiness!",

        "Wishing you a bright and beautiful year ahead!",

        "May your inner light shine brighter every day!",

        "Have a wonderful and prosperous Deepawali!"
    ]

    return {
        "greeting": f"Dear {recipient},",
        "wish": random.choice(wishes),
        "blessing": random.choice(blessings),
        "closing": random.choice(closings),
        "signature": f"— By {sender}"
    }


if __name__ == "__main__":

    sender = input("Enter your name: ").strip()
    recipient = input("Enter recipient's name: ").strip()

    if sender and recipient:

        message = generate_wish(sender, recipient)

        print("\n🪔 HAPPY DEEPAWALI 🪔\n")

        for value in message.values():
            print(value)
            print()

    else:
        print("Please enter both names.")
