import { useState } from 'react';
import Input from '../input/input';
import styles from './form.module.scss';
import { validateName, validateEmail } from '../../helpers/helpers';

const FIRST_NAME = 'firstName';
const LAST_NAME = 'lastName';
const EMAIL = 'email';

const defaultForm = {
    [FIRST_NAME]: {
        hasChanged: false,
        value: '',
    },
    [LAST_NAME]: {
        hasChanged: false,
        value: '',
    },
    [EMAIL]: {
        hasChanged: false,
        value: '',
    },
};

const Form = () => {
    const [form, setForm] = useState(defaultForm);

    const handleChange = (field, value) => {
        setForm({ ...form, [field]: { hasChanged: true, value } });
    };

    return (
        <form className={styles.form}>
            <Input
                label="First Name"
                handleChange={(value) => handleChange(FIRST_NAME, value)}
                hasError={
                    form[FIRST_NAME].hasChanged &&
                    !validateName(form[FIRST_NAME].value)
                }
            />
            <Input
                label="Last Name"
                handleChange={(value) => handleChange(LAST_NAME, value)}
                hasError={
                    form[LAST_NAME].hasChanged &&
                    !validateName(form[LAST_NAME].value)
                }
            />
            <Input
                label="Email"
                handleChange={(value) => handleChange(EMAIL, value)}
                hasError={
                    form[EMAIL].hasChanged && !validateEmail(form[EMAIL].value)
                }
            />
            <button
                className={styles.button}
                type="submit"
                disabled={
                    !validateName(form[FIRST_NAME].value) ||
                    !validateName(form[LAST_NAME].value) ||
                    !validateEmail(form[EMAIL].value)
                }
            >
                Submit
            </button>
        </form>
    );
};

export default Form;
