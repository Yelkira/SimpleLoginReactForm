import Typography from '@mui/material/Typography/Typography';
import React from 'react';
import "./authForm.css"
import TextField from "@mui/material/TextField/TextField";
import Button from '@mui/material/Button/Button';
import {Controller, useForm, SubmitHandler, useFormState} from "react-hook-form"
import {loginValidation, passwordValidation} from "./validation";


interface ISignForm{
    login:string
    password: string
}

export const AuthForm = () => {
    const {handleSubmit, control} = useForm<ISignForm>()
    const {errors} = useFormState({
        control
    })
    console.log(errors)
    const onSubmit:SubmitHandler<ISignForm> = (data) => {
        console.log(data)
    }

    return (
        <div className="auth-form">
            <Typography variant="h4" component="div">
                Войдите
            </Typography>
            <Typography variant="subtitle1" component="div" gutterBottom={true} className="auth-form__subtitle1">
                Чтобы получить доступ
            </Typography>
            <form className="auth-form__form" onSubmit={handleSubmit(onSubmit)}>
                <Controller control={control}
                            name="login"
                            rules={loginValidation}
                            render={({field}) => (
                    <TextField
                        label="Логин"
                        size="small"
                        margin="normal"
                        className="auth-form__input"
                        fullWidth={true}
                        onChange={(e) => field.onChange(e)}
                        value={field.value || ""}
                        error={!!errors.login?.message}
                        helperText={errors.login?.message}
                    />
                )}/>
                <Controller control={control}
                            name="password"
                            rules={passwordValidation}
                            render={({field}) => (
                    <TextField
                        label="Пароль"
                        type="password"
                        size="small"
                        margin="normal"
                        className="auth-form__input"
                        fullWidth={true}
                        onChange={(e) => field.onChange(e)}
                        value={field.value || ""}
                        error={!!errors.password?.message}
                        helperText={errors.password?.message}
                    />
                )}/>
                <Button
                    variant={"contained"}
                    fullWidth={true}
                    disableElevation={true}
                    sx={{
                        marginTop: 2
                    }}
                    type="submit"
                >
                    Войти
                </Button>
            </form>
        </div>
    );
};
