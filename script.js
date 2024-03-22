
    document.addEventListener("DOMContentLoaded", function () {
        const burgerMenu = document.querySelector(".burger-menu");
        const closeButton = document.querySelector(".close-button");
        const mobileNav = document.querySelector(".mobile-nav");

        burgerMenu.addEventListener("click", function () {
            mobileNav.classList.add("show");
            // Add event listener to close the menu when clicking outside of it
            document.addEventListener("click", closeMobileNav);
        });

        closeButton.addEventListener("click", function () {
            mobileNav.classList.remove("show");
            document.removeEventListener("click", closeMobileNav);
        });

        function closeMobileNav(event) {
            // Check if the click is outside the mobile navigation
            if (!mobileNav.contains(event.target) && event.target !== burgerMenu) {
                mobileNav.classList.remove("show");
                document.removeEventListener("click", closeMobileNav);
            }
        }
    });

    /*auto scroll*/
    document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll('.socials ul li a');

    navLinks.forEach(link => {
    link.addEventListener('click', scrollToSection);
    });

    function scrollToSection(e) {
    e.preventDefault();

    const targetId = e.target.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    }
    }
    });

    document.addEventListener("DOMContentLoaded", function () {
    const yearLinks = document.querySelectorAll('.art ul li a');
    const galleryItems = document.querySelectorAll('.art .gallery img');

    // Initially hide 2023 images
    galleryItems.forEach(item => {
    const itemYear = item.getAttribute('data-year');
    if (itemYear === '2023') {
        item.style.opacity = '0';
    }
    });

    yearLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const selectedYear = link.getAttribute('data-year');

        // Fade out all gallery items
        galleryItems.forEach(item => {
            item.style.opacity = '0';
        });

        // Delay to allow fade-out effect
        setTimeout(() => {
            // Hide all gallery items
            galleryItems.forEach(item => {
                item.style.display = 'none';
            });

            // Show gallery items for the selected year with fade-in effect
            galleryItems.forEach(item => {
                const itemYear = item.getAttribute('data-year');
                if (itemYear === selectedYear) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                    }, 50); // Delay to allow fade-in effect
                }
            });
        }, 500); // Set timeout to match the transition duration
    });

    });

    });



    document.addEventListener("DOMContentLoaded", function () {
    // ... (existing code)

    const galleryItems = document.querySelectorAll('.art .gallery img');
    const overlay = document.getElementById('overlay');
    const previewContainer = document.getElementById('preview-container');
    const previewImage = document.getElementById('preview-image');
    const closeButton = document.getElementById('close-button');

    galleryItems.forEach(item => {
    item.addEventListener('click', function () {
    const imageUrl = this.src;
    previewImage.src = imageUrl;
    overlay.classList.add('show');
    });
    });

    closeButton.addEventListener('click', function () {
    overlay.classList.remove('show');
    });
    });

    document.addEventListener("DOMContentLoaded", function () {
    const galleryItems = document.querySelectorAll('.art .gallery img');
    const previewModal = document.getElementById('imagePreviewModal');
    const previewImage = document.getElementById('previewImage');
    const closePreviewButton = document.getElementById('closePreview');
    let titleElement; // Declare titleElement variable outside the function

    galleryItems.forEach(item => {
    item.addEventListener('click', function () {
    // Set the preview image source
    const imgSrc = item.src;
    previewImage.src = imgSrc;

    // Display the preview modal
    previewModal.style.display = 'flex';

    // Get and display the title
    const title = this.getAttribute('data-title');
    displayTitle(title);
    });
    });

    // Close the preview modal when the close button is clicked
    closePreviewButton.addEventListener('click', function () {
    previewModal.style.display = 'none';
    removeTitle();
    });

    function displayTitle(title) {
    // Check if titleElement already exists, if yes, remove it
    if (titleElement) {
    removeTitle();
    }

    // Create a div element for the title
    titleElement = document.createElement('div');
    titleElement.textContent = title;
    titleElement.classList.add('image-title');

    // Append the title element to the preview modal
    previewModal.appendChild(titleElement);
    }

    function removeTitle() {
    if (titleElement && titleElement.parentNode) {
    // Remove the title element from the preview modal
    titleElement.parentNode.removeChild(titleElement);
    titleElement = null; // Reset titleElement
    }
    }
    });

    //Translates
    function toggleLanguage(language) {
    // Get all list items
    var listItems = document.querySelectorAll('.language-buttons li');

    // Loop through each list item
    listItems.forEach(function(item) {
    // Remove the 'active' class from all list items
    item.classList.remove('active');
    });

    // Add the 'active' class to the clicked list item
    event.target.classList.add('active');

    // Show/hide content based on selected language
    if (language === 'english') {
    document.getElementById('englishContent').style.display = 'block';
    document.getElementById('japaneseContent').style.display = 'none';
    } else if (language === 'japanese') {
    document.getElementById('englishContent').style.display = 'none';
    document.getElementById('japaneseContent').style.display = 'block';
    }
    }



    // Initialize Email.js with your user ID-------------------------------------------------------------------------------------------------
    // Your JavaScript code here
    const contactForm = document.querySelector("#contact-form");
    const submitBtn = document.querySelector(".submit-btn");
    const nameInput = document.querySelector("#contact_user_name");
    const emailInput = document.querySelector("#contact_user_email");
    const messageInput = document.querySelector("#contact_message"); // Corrected ID

    const publicKey = "6ly6FDQeMwVzoppHB"; // Replace with your public key
    const serviceID = "service_e6uw3s7"; // Updated service ID
    const templateID = "template_ka8xj5t"; // Replace with your template ID

    emailjs.init(publicKey);

    contactForm.addEventListener("submit", e => {
    e.preventDefault();

    submitBtn.innerText = "Sending...";

    const inputFields = {
    name: nameInput.value,
    email: emailInput.value,
    message: messageInput.value
    };

    emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
    submitBtn.innerText = "Message Sent Successfully";
    nameInput.value = "";
    emailInput.value = "";
    messageInput.value = "";
    })
    .catch((error) => {
    console.error("Error sending message:", error);
    submitBtn.innerText = "Something went wrong";
    });
    });


    //Lazy loading 
    document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.art .gallery img');

    const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const image = entry.target;
            const imageUrl = image.getAttribute('src');
            image.setAttribute('src', imageUrl);
            observer.unobserve(image);
        }
    });
    });

    images.forEach(image => {
    observer.observe(image);
    });
    });

    //form for services

    function toggleForm(formId) {
        // Hide both forms initially
        hideForm('commissionFormContainer');
        hideForm('collaborationFormContainer');
        hideForm('PatreonFormContainer');

        // Show the clicked form
        showForm(formId);
    }

    function showForm(formId) {
        const formContainer = document.getElementById(formId);
        formContainer.style.display = 'block';
    }

    function hideForm(formId) {
        const formContainer = document.getElementById(formId);
        formContainer.style.display = 'none';
    }
    function hideForm(formId) {
        const formContainer = document.getElementById(formId);
        formContainer.style.display = 'none';
    }



    ///form for about 
    function showForm(formId) {
    // Hide all forms
    var forms = document.querySelectorAll('.form');
    forms.forEach(function(form) {
    form.style.display = 'none';
    });

    // Show the selected form
    var selectedForm = document.getElementById(formId);
    selectedForm.style.display = 'block';
    }

    function closeForm(formId) {
    // Hide the specified form
    var form = document.getElementById(formId);
    form.style.display = 'none';
    }

    //interactive icon sound
    const soundElement = document.getElementById("hoverSound");
    const imageElement = document.getElementById("interactiveIcon");

    imageElement.addEventListener("mouseenter", function() {
    soundElement.play();

    imageElement.addEventListener("mouseout", function() {
    soundElement.pause();
    });
    });
    //notice text
    window.addEventListener("DOMContentLoaded", function() {
    const notice = document.querySelector(".notice");
    notice.classList.add("show");

    // Add event listener to detect when the transition ends
    notice.addEventListener("transitionend", function(event) {
    if (event.propertyName === "opacity" && !notice.classList.contains("show")) {
    notice.classList.add("hidden"); // Add hidden class after fading out
    }
    });

    setTimeout(function() {
    notice.classList.remove("show");
    }, 5000); // Change the delay to 5 seconds (5000 milliseconds)
    });






    //for contact form and support chat alternate


    function closeOverlay() {
        var contactForm = document.getElementById('contact-form');
        var supportChat = document.getElementById('support-chat');
        var overlay = document.getElementById('overlay');
        
        // Hide both form and chat
        contactForm.style.display = 'none';
        supportChat.style.display = 'none';
        overlay.style.display = 'none';
    }

    //keyboard Enter
    // Get the input field
    var inputField = document.getElementById("userInput");

    // Execute a function when the user releases a key on the keyboard
    inputField.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13) {
        // Cancel the default action, if needed
        event.preventDefault();
        // Trigger the send message function
        sendMessage();
    }
    });

    // Function to send the message
    function sendMessage() {
    // Your code to send the message here
    // For example, you might send an AJAX request or update the chat interface directly
    }





    //chatbot-------------------------------------------------------------------------------------------------------------------------------//
    //chatbot-------------------------------------------------------------------------------------------------------------------------------//
    //chatbot-------------------------------------------------------------------------------------------------------------------------------//
    //chatbot-------------------------------------------------------------------------------------------------------------------------------//
    //chatbot-------------------------------------------------------------------------------------------------------------------------------//







    var firstTime = true;

    // Function to open chat popup

    var firstTime = true;
    var typingIndicatorAdded = false; // Variable to track if typing indicator has been added

    // Function to open chat popup
    function openChat() {
    var chatPopup = document.getElementById("chatPopup");
    if (chatPopup.style.display === "block") {
        return; // If chat box is already open, do nothing
    }
    chatPopup.style.display = "block";
    if (firstTime) {
        addBotTypingIndicator(); // Start bot typing animation
        setTimeout(function() {
            removeBotTypingIndicator(); // Remove bot typing animation after a brief delay
            addMessageWithTyping("Park", "Hello! How can I help you?", false);
            removeBotTypingIndicator();
            addBotTypingIndicator();
            setTimeout(function() {
                removeBotTypingIndicator();
                addMessageWithTyping("Park", "Here are some suggestions:", false);
                addBotTypingIndicator();
                setTimeout(function() {
                    removeBotTypingIndicator();
                    addSuggestions();
                    addBotTypingIndicator();
                    setTimeout(function() {
                        removeBotTypingIndicator();
                        addMessageWithTyping("Park", "My response will be limited but I'll try my best to give response.<br><br> Please note that my responses may also be inconsistent due to this limitation", false);
                        firstTime = false;
                    }, 1000); // Typing delay for the last message
                }, 1000); // Typing delay for suggestions
            }, 1000); // Typing delay for second message
        }, 1000); // Typing delay for first message
    }
    }


    // Function to add message to the chat area with typing effect
    function addMessageWithTyping(sender, message, isUser) {
    // Only add typing indicator if it hasn't been added before
    if (!typingIndicatorAdded) {
        addBotTypingIndicator(); // Add typing indicator
        typingIndicatorAdded = true; // Set flag to indicate that typing indicator has been added
    }
    setTimeout(function() {
        removeBotTypingIndicator(); // Remove typing indicator after a brief delay
        addMessageWithProfile(sender, message, isUser); // Add the actual message
    }, 1000); // Adjust the delay as needed for typing effect
    }




    // Function to close chat popup
    function closeChat() {
        document.getElementById("chatPopup").style.display = "none";
    }

    // Function to send message
    function sendMessage() {
        var userInput = document.getElementById("userInput").value;
        if (userInput.trim() === "") return; // Don't send empty messages
        addMessage("You", userInput, true); // Add user message to the chat
        document.getElementById("userInput").value = ""; // Clear input field
        addBotTypingIndicator(); // Start bot typing animation
        setTimeout(function() {
            removeBotTypingIndicator(); // Remove bot typing animation after a brief delay
            handleUserInput(userInput); // Call the function to handle user input
        }, 3000); // Adjust the delay as needed
    }

    function handleUserInput(input) {
    // Define a list of basic words and questions
    const basicWords = [
    "parkchanq",
    "christian amondina information",
    "hello", 
    "hi", 
    "who are you", 
    "what you offer",
    "what can you do", 
    "who made this website?", 
    "who made ?", 
    "about the website", 
    "about the author about this website",
    "can tell me who made this website",
    "about the website and who created and create the website and your website or his websites",
    "who created who coded who code codes program html css javascript",
    "commission you how to commission him",
    "what are the information you can give me or can you give me information and details",
    "how i can buy in the shop i want stickers and prints but how shop section ",

    ];


    const prohibitedWords = [
    "fuck",
    "fuck you", 
    "fuckyou", 
    "fucks", 
    "bitch", 
    "bitches", 
    "shit", 
    "shits", 
    "dick", 
    "cock", 
    "dickhead", 
    "penis", 
    "suck", 
    "vagina", 
    "private part", 
    "lick", 
    "fuckoff",
    "asshole",
    "bastard",
    "cunt",
    "whore",
    "motherfucker",
    "son of a bitch",
    "ass",
    "pussy",
    "fag",
    "gay",
    "nigger",
    "retard",
    "slut",
    "fuckwit",
    "wanker",
    "twat",
    "prick",
    "douchebag",
    "jerk",
    "idiot"
    ];
    const laughwords = [
    "HAHAHA",
    "HAHAAHAHAAAAH",
    "HEHEHE",
    "HEEEHEEHE",
    "JEJEJEJ",
    "JUJUJUJU",
    "JAJAJAJA",



    ];
    const author=[
        "PARKCHANQ",
        "CHRISTIAN AMONDINA",
        
    ];
    const greetings = [
    "Hello",
    "Good afternoon",
    "Good evening",


    ];

    const hasgreetings = greetings.some(word=>{
    //Convert both user input and laughing word to lowercase for case-insensitive comparison
    const lowerInput = input.toLowerCase();
    const lowerWord = word.toLowerCase();
    // Check if the lowercase input includes the lowercase laughing word
    return lowerInput.includes(lowerWord);
    });


    const hasLaughWords = laughwords.some(word => {
    // Convert both user input and laughing word to lowercase for case-insensitive comparison
    const lowerInput = input.toLowerCase();
    const lowerWord = word.toLowerCase();
    // Check if the lowercase input includes the lowercase laughing word
    return lowerInput.includes(lowerWord);
    });

    const hasauthor = author.some(word => {
    // Convert both user input and laughing word to lowercase for case-insensitive comparison
    const lowerInput = input.toLowerCase();
    const lowerWord = word.toLowerCase();
    // Check if the lowercase input includes the lowercase laughing word
    return lowerInput.includes(lowerWord);
    });
    // Check if the user input contains any prohibited words
    const hasProhibitedWord = prohibitedWords.some(word => input.includes(word));



    if (hasProhibitedWord) {
    // Handle response for prohibited words
    addMessageWithProfile("Park", "I cannot provide information about that. My purpose is to provide helpful information. Please refrain from using inappropriate language.", false);
    } else if (hasLaughWords) {
    addMessageWithProfile("Park", "My program is only limited by giving specific information, i dont have an emotions to process that. ", false);
    } else if (hasauthor){
    addMessageWithProfile ("Park", "Parkchanq lies in creating captivating illustrations that include surreal artworks, character designs, engaging stories, scenes, and landscapes. An illustrator who creates compelling dark and surreal artworks that amplify human emotions and, experiences and offer art thought-provoking insights into societal and reality dynamics", false);
    } else if (hasgreetings){
    addMessageWithProfile ("Park", "Hello! How can I assist you", false);
    }

    else {
    // Handle other cases


    // Convert user input to lowercase for case-insensitive matching
    input = input.toLowerCase();

    // Convert each word in basicWords to lowercase before comparison
    const matchedKeyword = basicWords.find(word => {
    // Split the keyword into individual words and convert each to lowercase
    const keywordWords = word.toLowerCase().split(" ");
    // Count how many words in the keyword are present in the user input
    const matchedWordsCount = keywordWords.filter(keywordWord => input.includes(keywordWord)).length;
    // Check if at least two words in the keyword are present in the user input
    return matchedWordsCount >= 2;
    });


    if (matchedKeyword) {
    // Provide appropriate response based on the matched keyword
    switch (matchedKeyword) {

        case "hello bot and hello park":
        case "hi bot and hi park":
            addMessageWithProfile("Park", "Hello! How can I assist you?", false);
            break;
        case "who are you":
            addMessageWithProfile("Park", "I am Park, the chatbot version of Parkchanq. I'm here to help you!", false);
            break;
        case "what you offer":
        case "what are the information you can give me or can you give me information and details":
            addMessageWithProfile("Park", "I can provide information about the website and its author. Feel free to ask!", false);
            break;
        case "about the website":
        case "tell me who made this website":
        case "who made?":
        case "about the author or about this website":
        case "who made this website?":
        case "about the website and who created and create the website and website or his websites":
            addMessageWithProfile("Park", "This website was created by Christian Amondina Balasabas, also known as Parkchanq. It serves as a platform to showcase his artwork and provide information about his services. He fully created this website and aside from being a digital artist he is a website developer and a computer science student too", false);
            break;
    
    
        case "who created who coded who code codes program html css javascript ":
            addMessageWithProfile("Park", "I was created by Christian Amondina, also known as Parkchanq. Aside from being an artist, he is a website developer and a computer science student.", false);
            break;
    
        case "commission you how to commission him":
            addMessageWithProfile("Park","You can commission me by navigating my website, In the header: <br> 1.Click services <br> 2.Choose commission <br> 3. Check the Terms and Conditions and other details <br> 4. Fill up the form and click submit <br> parkchanq will now give you a transaction and communication through your provided personal gmail account.",false);
                break;
        case   "how i can buy in the shop i want stickers and prints but how shop section ":
            addMessageWithProfile ("Park", "Shop is the place where i showcase my services through selling prints and stickers and upcoming merches sooner ,but i'm currently developing this section at this moment, hang on!. ", false);
            break;
        
    default:
            addMessageWithProfile("Park","Sorry, I can't answer that, my information is limited or the question may be too sensitive.", false);
    }
    } else {
    // Handle complex or inappropriate inputs
    addMessageWithProfile("Park", "Sorry, I can't answer that, my information is limited or the question may be too sensitive. please check your input maybe there is a typo or misinterpretations.", false);
    }
    }
    }



    // Function to add message to the chat area
    function addMessage(sender, message, isUser) {
        var chatArea = document.getElementById("chatArea");
        var messageElement = document.createElement("p");
        messageElement.innerHTML = "<strong>" + sender + ":</strong> " + message;
        if (isUser) {
            messageElement.classList.add("user-message"); // Add class for user message
        } else {
            messageElement.classList.add("bot-message"); // Add class for bot message
        }
        chatArea.appendChild(messageElement);
        chatArea.scrollTop = chatArea.scrollHeight; // Auto-scroll to the bottom
    }

    // Function to add bot typing indicator
    function addBotTypingIndicator() {
        var chatArea = document.getElementById("chatArea");
        var typingIndicator = document.createElement("div");
        typingIndicator.id = "botTypingIndicator";
        typingIndicator.innerHTML = '<span class="dot"></span><span class="dot"></span><span class="dot"></span>';
        chatArea.appendChild(typingIndicator);
        chatArea.scrollTop = chatArea.scrollHeight; // Auto-scroll to the bottom
    }

    // Function to remove bot typing indicator
    function removeBotTypingIndicator() {
        var typingIndicator = document.getElementById("botTypingIndicator");
        if (typingIndicator) {
            typingIndicator.remove();
        }
    }

    // Function to add suggestions
    function addSuggestions() {
        var chatArea = document.getElementById("chatArea");
        var suggestions = [
            "Who is parkchanq",
            "How can I buy things in the shop",
            "Can you guide me how to commission",
            "What are the offered services",
            
        ];

        suggestions.forEach(function(suggestion, index) {
            var suggestionElement = document.createElement("div");
            suggestionElement.classList.add("suggestion");
            suggestionElement.textContent = (index + 1) + ". " + suggestion;
            suggestionElement.addEventListener("click", function() {
                handleUserChoice(suggestion);
            });

            // Apply border to suggestion container
            suggestionElement.style.border = "1px solid black";
            suggestionElement.style.padding = "10px";
            suggestionElement.style.borderRadius = "5px";
            suggestionElement.style.marginBottom = "-2px"; // Add spacing between suggestions

            chatArea.appendChild(suggestionElement);
        });

        chatArea.scrollTop = chatArea.scrollHeight; // Auto-scroll to the bottom
    }

    // Function to handle user choice
    function handleUserChoice(choice) {
        var botReply = "";
        addBotTypingIndicator(); // Start bot typing animation
        switch (choice) {
            case "Who is parkchanq":
                botReply = "Parkchanq is a surreal illustrator who creates...";
                break;
            case "How can I buy things in the shop":
                botReply = "The shop is currently under development. Our team will build and process the shop section soon.";
                break;
            case "Can you guide me how to commission":
                botReply = "When commissioning, users should first read the terms and conditions and check important details before proceeding to fill up the form. Users will receive a message indicating the response has been received, and Parkchanq will communicate with you through the provided email in your form.";
                break;
            case "What are the offered services":
                botReply = "Services are a way for users to support the artist and provide interaction. This includes:<br><br>" +
                    "- Commission: Users can commission the artist and support them.<br>"+
                    "- Collaboration: Provides interaction on both parties but still not available and under development.<br>" +
                    "- Patreon: Users can subscribe to Patreon for private sessions and tutorials. This section is still not available yet and still under development.";
                break;
            
                botReply = "I'm sorry, I didn't quite get that. Could you please rephrase?";
        }
        setTimeout(function() {
            removeBotTypingIndicator(); // Remove bot typing animation after a brief delay
            addMessageWithProfile("Park", botReply, false);
        }, 1000); // Adjust the delay as needed
    }

    // Function to add message to the chat area with profile image
    function addMessageWithProfile(sender, message, isUser) {
        var chatArea = document.getElementById("chatArea");
        var messageElement = document.createElement("div");
        messageElement.classList.add("message");

        if (!isUser) {
            var botContainer = document.createElement("div");
            botContainer.classList.add("bot-container");

            var botProfileImage = document.createElement("img");
            botProfileImage.src = "interactive icon.gif"; // Updated image source
            botProfileImage.classList.add("profile-image");
            botContainer.appendChild(botProfileImage);

            var botName = document.createElement("span");
            botName.textContent = sender;
            botName.classList.add("bot-name");
            botContainer.appendChild(botName);

            messageElement.appendChild(botContainer);
        }

        var messageText = document.createElement("p");
        messageText.innerHTML = message;
        messageElement.appendChild(messageText);

        chatArea.appendChild(messageElement);
        chatArea.scrollTop = chatArea.scrollHeight; // Auto-scroll to the bottom
    }



