async function getPredictedLabel(processed_t) {
  try {
    const response = await fetch("http://localhost:8000/predict", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        landmarks: processed_t  
      })
    });
    if (!response.ok) {
      throw new Error("Prediction request failed");
    }
    const result = await response.json();
    console.log("Predicted label:", result.label);
    return result.label;
  } catch (error) {
    console.error("Error calling prediction API:", error);
    return null; // fallback to no movement
  }
}

// TODO: Call your model's api here
// and return the predicted label
// Possible labels: "up", "down", "left", "right", null
// null means stop & wait for the next gesture
// For now, we will return a random label
// const labels = ["up", "down", "left", "right"];
//const randomIndex = Math.floor(Math.random() * labels.length);
//const randomLabel = labels[randomIndex];
//console.log("Predicted label:", randomLabel);
//return randomLabel;