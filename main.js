document.getElementById('registrationForm').addEventListener('submit', function(event) {
            event.preventDefault();

            let isValid = true;
            const errorMessages = {
                fullName: "Full Name is required.",
                username: "Username is required.",
                email: "Please enter a valid email address.",
                phoneNumber: "Phone Number is required.",
                password: "Password is required.",
                confirmPassword: "Passwords do not match.",
                gender: "Please select a gender."
            };

            // Clear previous error messages
            document.querySelectorAll('.error').forEach(el => el.textContent = '');

            // Get form values
            const fullName = document.getElementById('fullName').value.trim();
            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const phoneNumber = document.getElementById('phoneNumber').value.trim();
            const password = document.getElementById('password').value.trim();
            const confirmPassword = document.getElementById('confirmPassword').value.trim();
            const gender = document.querySelector('input[name="gender"]:checked');

            // Validation
            if (fullName === '') {
                document.getElementById('errorFullName').textContent = errorMessages.fullName;
                isValid = false;
            }
            if (username === '') {
                document.getElementById('errorUsername').textContent = errorMessages.username;
                isValid = false;
            }
            if (!/\S+@\S+\.\S+/.test(email)) {
                document.getElementById('errorEmail').textContent = errorMessages.email;
                isValid = false;
            }
            if (phoneNumber === '') {
                document.getElementById('errorPhoneNumber').textContent = errorMessages.phoneNumber;
                isValid = false;
            }
            if (password === '') {
                document.getElementById('errorPassword').textContent = errorMessages.password;
                isValid = false;
            }
            if (password !== confirmPassword) {
                document.getElementById('errorConfirmPassword').textContent = errorMessages.confirmPassword;
                isValid = false;
            }
            if (!gender) {
                document.getElementById('errorGender').textContent = errorMessages.gender;
                isValid = false;
            }

            // If all fields are valid, submit the form
            if (isValid) {
                alert('Form submitted successfully!');
                // Uncomment the line below if you want to actually submit the form
                // this.submit();
            }
        });