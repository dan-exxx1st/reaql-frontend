export function EmailValidate(email: string) {
    let error = '';

    if (email.length < 6) {
        error = 'Email is too short.';
    } else {
        const regExp = new RegExp(
            '/^((([0-9A-Za-z]{1}[-0-9A-z.]{1,}[0-9A-Za-z]{1})|([0-9А-Яа-я]{1}[-0-9А-я.]{1,}[0-9А-Яа-я]{1}))@([-A-Za-z]{1,}.){1,2}[-A-Za-z]{2,})$/',
            email
        );
        if (!regExp) error = 'Email is not valid.';
    }

    return error;
}

export function PasswordValidate(password: string) {
    let error = '';

    if (password.length < 4) {
        error = 'Password must be at least 4 characters';
    }

    return error;
}
