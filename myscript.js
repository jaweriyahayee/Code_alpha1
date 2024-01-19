function calculateAge() {
    // Get the date of birth value from the input field
    const dobInput = document.getElementById("dob").value;

    // Check if the input is not empty
    if (dobInput)
     {
        // Create a Date object from the input value
        const dob = new Date(dobInput);

        // Get the current date
        const currentDate = new Date();

        // Calculate the age by subtracting the birth year from the current year
        const age = currentDate.getFullYear() - dob.getFullYear();

        // Display the result
        document.getElementById("result").innerText = `Your age is: ${age} years`;
    } 
    else
     
    {
        // Display an error message if the input is empty
        document.getElementById("result").innerText = "Please enter your date of birth!";
    }
}

