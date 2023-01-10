import { useEffect, useId, useState } from 'react';
import PropTypes from 'prop-types';
import styles from './input.module.scss';

const InputProps = {
    label: PropTypes.string,
    placeholder: PropTypes.string,
    handleChange: PropTypes.func.isRequired,
};

const defaultProps = {
    label: undefined,
    placeholder: 'Insert value...',
};

const Input = (props) => {
    const { label, placeholder, handleChange, hasError } = props;
    const id = useId();
    const [blur, setBlur] = useState(false);
    const [showError, setShowError] = useState(false);

    useEffect(() => {
        setShowError(hasError && blur);
    }, [hasError, blur, setShowError]);

    return (
        <div className={styles.container}>
            <label htmlFor={id} className={styles.label}>
                {label}
            </label>
            <input
                id={id}
                className={`${styles.input} ${showError && styles.input_error}`}
                placeholder={placeholder}
                onChange={(event) => handleChange(event.target.value)}
                onBlur={() => setBlur(true)}
                onFocus={() => setBlur(false)}
            ></input>
            {showError && (
                <label className={styles.error}>Error in {label}</label>
            )}
        </div>
    );
};

Input.propTypes = InputProps;
Input.defaultProps = defaultProps;

export default Input;
