const reqField = "Обязательно для заполнения"

export const loginValidation = {
    required: reqField,
    maxLength: {
        value: 22,
        message: "СОси жопу"
    },
    validate: (value: string) => {
        if (value.match(/[а-яА-Я]/)) {
            return "Логин не может содержать русские буквы"
        }
        return true;
    }
}
export const passwordValidation = {
    required: reqField,
    validate: (value: string) => {
        if (value.length < 6) {
            return "Пароль должен быть длиннее 6 символов"
        }
        return true;
    }
}