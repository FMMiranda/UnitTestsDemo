const MIN_NAME_LENGTH = 3;

/**
 * Checks if a letter is uppercase.
 *
 * @param {string} letter     The letter to be checked.
 * @return {boolean}
 */
const isUpperCase = (letter) => {
    return letter === letter.toUpperCase();
};

/**
 * Checks if a name is valid.
 *
 * @param {string} name     The name to be checked.
 * @return {boolean}
 */
export const validateName = (name) => {
    return name.length >= MIN_NAME_LENGTH && isUpperCase(name[0]);
};

/**
 * Checks if an email is valid.
 *
 * @param {string} email     The email to be checked.
 * @return {boolean}
 */
export const validateEmail = (email) => {
    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};
