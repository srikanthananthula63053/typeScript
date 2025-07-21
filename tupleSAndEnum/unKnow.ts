function handleUserFeedback(feedback: unknown) {
    if (typeof feedback === 'string') {
        console.log("User says:", feedback.toUpperCase());
    } else if (typeof feedback === 'number') {
        console.log("User gave a rating:", feedback.toFixed(1));
    } else {
        console.log("Unsupported feedback type");
    }
}

// Simulated user input
handleUserFeedback("great service!");     // User says: GREAT SERVICE!
handleUserFeedback(4.5);                  // User gave a rating: 4.5
handleUserFeedback({ text: "awesome" });  // Unsupported feedback type
