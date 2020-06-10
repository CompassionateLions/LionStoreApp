export const validationMixins = {
    methods: {

        validateEmail(email, errorArray) {
            const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

            if (!emailRegex.test(email)) {
                errorArray.push("Please enter a valid email");
            }
        },

        validatePassword(password, errorArray) {

            if(password.length < 8) errorArray.push("Password must be at least 8 characters long");

            if(!(/[A-Z]+/.test(password))) errorArray.push("Password must contain at least 1 upper case letter");

            if(!(/[a-z]+/.test(password))) errorArray.push("Password must contain at least 1 lower case letter");

            if(!(/[0-9]+/.test(password))) errorArray.push("Password must contain at least 1 number");
        }

    }
}