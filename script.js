document.addEventListener("DOMContentLoaded", function() {
    // Grab the start button and set the event listener
    const startButton = document.getElementById("start-button");
    if (startButton) {
        startButton.addEventListener("click", startGame);
    } else {
        console.error("Start button not found");
    }

    function startGame() {
        console.log("Game Starting...");

        // Hide title screen and show game container
        document.getElementById("title-screen").style.display = "none";
        document.getElementById("game-container").style.display = "block";
        document.getElementById("loading-screen").style.display = "block";

        // Simulate a delay for the loading screen
        setTimeout(() => {
            document.getElementById("loading-screen").style.display = "none";  // Hide loading screen
            showStory("start"); // Show the first story step
        }, 2000); // 2 seconds delay to simulate loading
    }

    // Story data with choices
    const storyData = { 
        start: { 
            text: "You find yourself in a dark room. What do you do?",
            choices: [
                { 
                    text: "Look around",
                    next: "lookAround",
                    addItem: null
                },
                { 
                    text: "Scream",
                    next: "scream",
                    addItem: null
                }
            ]
        },
        lookAround: {
            text: "You see a flashlight on the ground. Will you pick it up?",
            choices: [
                {
                    text: "Pick it up",
                    next: "pickUpFlashlight",
                    addItem: "flashlight"
                },
                {
                    text: "Leave it",
                    next: "leaveFlashlight",
                    addItem: null
                }
            ]
        },
        pickUpFlashlight: { 
            text: "You pick up the flashlight. Now what?",
            choices: [
                {
                    text: "Turn it on",
                    next: "turnOnFlashlight",
                    addItem: null
                },
                {
                    text: "Leave it off",
                    next: "leaveFlashlightOff",
                    addItem: null
                }
            ]
        },
        turnOnFlashlight: {
            text: "You turn on the flashlight and see a door. Do you want to open it?",
            choices: [
                {
                    text: "Yes",
                    next: "openDoor",
                    addItem: null
                },
                {
                    text: "No",
                    next: "leaveDoor",
                    addItem: null
                }
            ]
        },
        openDoor: {
            text: "You open the door and see a staircase. Do you want to go up or down?",
            choices: [
                {
                    text: "up",
                    next: "goUp",
                    addItem: null
                },
                {
                    text: "down",
                    next: "goDown",
                    addItem: null
                }
            ]
        },
        goUp: {
            text: "You go up the stairs and see a window. Do you want to jump out?",
            choices: [
                {
                    text: "yes",
                    next: "jumpOut",
                    addItem: null
                },
                {
                    text: "no, I'll Keep looking inside",
                    next: "stayInside",
                    addItem: null
                }
            ]
        },
        jumpOut: {
            text: "You jump and fall to your death. The end!",
            choices: [
                {
                    text: "Start Over",
                    next: "start",
                    addItem: null
                }
            ]
        },
        stayInside: {
            text: "You keep looking inside and find a key. Do you want to pick it up?",
            choices: [
                {
                    text: "yes",
                    next: "pickUpKey",
                    addItem: "key"
                },
                {
                    text: "no",
                    next: "leaveKey",
                    addItem: null
                }
            ]
        },
        pickUpKey: {
            text: "You pick up the key. Now what will you do?",
            choices: [
                {
                    text: "Go back downstairs",
                    next: "goDown",
                    addItem: null
                },
                {
                    text: "Give up",
                    next: "giveUp",
                    addItem: null
                }
            ]
        },
        goDown: {
            text: "You go down the stairs to see tunnels. Do you to go through the right or the left one?",
            choices: [
                {
                    text: "right",
                    next: "goRight",
                    addItem: null
                },
                {
                    text: "left",
                    next: "goLeft",
                    addItem: null
                }
            ]
        },
        goRight: {
            text: "You go right and find a dead end. On the wall there is some graffiti. Do you inspect it?",
            choices: [
                {
                    text: "yes",
                    next: "inspectGraffiti",
                    addItem: null
                },
                {
                    text: "no",
                    next: "goDown",
                    addItem: null
                }
            ]
        },
        inspectGraffiti: {
            text: "The graffiti says 'HELLO WELCOME TO TUNNEL 845!'. Do you want to turn back?",
            choices: [
                {
                    text: "yes",
                    next: "turnAround",
                    addItem: null
                },
                {
                    text: "no",
                    next: "stayHere",
                    addItem: null
                }
            ]
        },
        turnAround: {
            text: "You go back and arrive at the two tunnels. Do you want to go through the right or left one?",
            choices: [
                {
                    text: "right",
                    next: "goRight",
                    addItem: null
                },
                {
                    text: "left",
                    next: "goLeft",
                    addItem: null
                }
            ]
        },
        goLeft: {
            text: "You go left and find a door at the end of the tunnel. Do you want to open it?",
            choices: [
                {
                    text: "yes",
                    next: "openNewdoor",
                    addItem: null
                },
                {
                    text: "no",
                    next: "goDown",
                    addItem: null
                }
            ]
        },
        leaveFlashlight: {
            text: "You leave the flashlight. You can't see in the dark. You stumble and fall out a window. You die from the fall. The end!",
            choices: [
                {
                    text: "Start Over",
                    next: "start",
                    addItem: null
                }
            ]
        },
        stayHere: {
            text: "You stayed in till you eventually died. The end!",
            choices: [
                {
                    text: "Start Over",
                    next: "start",
                    addItem: null
                }
            ]
        },
        leaveKey: {
            text: "You leave the key and now have nothing to do but decide to go back upstairs. You eventually die of boredom. The end!",
            choices: [
                {
                    text: "Start Over",
                    next: "start",
                    addItem: null
                }
            ]
        },
        leaveFlashlightOff: {
            text: "You leave the flashlight off. You can't see anything and fall down the stairs and die. The end!",
            choices: [
                {
                    text: "Start Over",
                    next: "start",
                    addItem: null
                }
            ]
        },
        leaveDoor: {
            text: "You leave the door and eventually die of starvation. The end!",
            choices: [
                {
                    text: "Start Over",
                    next: "start",
                    addItem: null
                }
            ]
        },
        scream: {
            text: "You scream and no one hears you. You eventually lose your voice. Do you want to give up or look around?",
            choices: [
                {
                    text: "Start Over",
                    next: "start",
                    addItem: null
                },
                {
                    text: "Give up",
                    next: "giveUp",
                    addItem: null
                }
            ]
        },
        openNewdoor: { 
            text: "You open the door and see a light. You walk towards it and see the exit. You made it out alive! Do you want to start over or look for what the key goes to?",
            choices: [
                {
                    text: "Give up",
                    next: "giveUp",
                    addItem: null
                },
                {
                    text: "Look for what the key goes to",
                    next: "lookForKeyUse",
                    addItem: null
                }
            ]
        },
        lookForKeyUse: {
            text: "You look around to see if you can find what the key goes to. You stumble upon a shed. You inspect it and see a lock. Do you want to try the key?",
            choices: [
                {
                    text: "yes",
                    next: "tryKey",
                    addItem: null
                },
                {
                    text: "no",
                    next: "keepLooking",
                    addItem: null
                }
            ]
        },
        tryKey: {
            text: "You try the key and it doesn't work. :( Do you want to keep looking or start over?",
            choices: [
                {
                    text: "Give up",
                    next: "giveUp",
                    addItem: null
                },
                {
                    text: "Keep looking",
                    next: "keepLooking",
                    addItem: null
                }
            ]
        },
        keepLooking: {
            text: "You keep looking and find a chest. You try the key and it works! You open it to find another key. Do you want to give up or keep going back to the shed?",
            choices: [
                {
                    text: "Give up",
                    next: "giveUp",
                    addItem: null
                },
                {
                    text: "Go back to the shed",
                    next: "goBackToShed",
                    addItem: null
                }
            ]
        },
        goBackToShed: {         
            text: "You go back to the shed and see the lock again. Do you want to open it?",
            choices: [
                {
                    text: "yes",
                    next: "openLock",
                    addItem: null
                },
                {
                    text: "no",
                    next: "giveUp",
                    addItem: null
                }
            ]
        },
        openLock: {
            text: "You open the lock. You found the treasure! The end!",
            choices: [
                {
                    text: "Start Over",
                    next: "start",
                    addItem: null
                }
            ]
        },
        giveUp: {   
            text: "You give up and die of starvation. The end!",
            choices: [
                {
                    text: "Start Over",
                    next: "start",
                    addItem: null
                }
            ]
        }
    };

    // Inventory
    let inventory = [];

    // Display story and choices
    function showStory(step) {
        const story = storyData[step];
        if (!story) return;

        document.getElementById("story").textContent = story.text;
        const choicesContainer = document.getElementById("choices-container");
        choicesContainer.innerHTML = ""; // Clear previous choices

        // Create buttons for each choice
        story.choices.forEach(choice => {
            const button = document.createElement("button");
            button.textContent = choice.text;
            button.onclick = () => makeChoice(choice);
            choicesContainer.appendChild(button);
        });

        // Update inventory display
        document.getElementById("items").textContent = inventory.join(", ") || "Nothing yet";
    }

    // Handle making a choice
    function makeChoice(choice) {
        if (choice.addItem && !inventory.includes(choice.addItem)) {
            inventory.push(choice.addItem); // Add item to inventory if applicable
        }
        showStory(choice.next);
    }
});