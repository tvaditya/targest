import React, {useState} from "react";
import  { Button } from "@/shadcn/components/ui/button";
import { Input } from "@/shadcn/components/ui/input";
import Logo from "@/components/Logo";
import { Link } from "react-router-dom";
import {useSignup} from "@/hooks/useSignup";
import {ReloadIcon} from "@radix-ui/react-icons";
export default function Signup() {
const [fullName, setFullName] = useState("");
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");
const { error, isPending, signup } = useSignup();

const handleSubmit = (e) => {
    e.preventDefault();
    signup(email, password, fullName);
}

    return (
        <div className={"flex gap-20 h-screen w-full  px-40 py-20"}>
            <div className={"w-1/2 bg-muted rounded-xl p-12"}>
                <Logo />
                <h2 className={"mt-24 text-3xl leading-[50px] font-medium"}>
                    Lorem ipsum bla bla bla bla bla
                </h2>
                <p className={"mt-10 text-muted-foreground"}>
                    bla bla bka bla sasjididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud
                    exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
                    reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non pr
                    Lorem inspum ajasjajsjasja
                </p>
                <div className={"bg-foreground text-background p-8 rounded-xl mt-16 leading-8"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore asdhjahsd asdhahdjlh adhadhahd </div>
            </div>
            <div className={"flex flex-col justify-center w-1/2 px-20"}>
                <div>
                    <h1 className={"text-3xl font-medium"}>
                        Cadastre-se agora!
                    </h1>
                    <p className={"mt-4 text-muted-foreground font-normal text-lg"}>
                        Crie sua conta agora mesmo
                    </p>
                    <form className={"mt-10"} onSubmit={handleSubmit}>
                        <p className={"text-muted-foregorund mb-2.5"}>Nome Completo</p>
                        <Input
                            type={"text"}
                            autoComplete={"name"}
                            value={fullName}
                            onChange={(e) => setFullName(e.target.value)}
                            />
                        <p className={"mt-5 text-muted-foregorund mb-2.5"}>Email</p>
                        <Input
                            type={"email"}
                            autoComplete={"email"}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                        <p className={"mt-5 text-muted-foregorund mb-2.5"}>Senha</p>
                        <Input
                            type={"password"}
                            autoComplete={"new-password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                               />
                        <Button
                            disabled={isPending}
                            size={"xl"} className={"mt-10 text-lg w-full"}>
                            {isPending &&
                                (<ReloadIcon className={"w-5 h-5 mr-2 animate-spin"}/>
                                )}
                            {isPending ? "Criando a conta..." : "Criar minha conta"}
                        </Button>
                    </form>
                    <div className={"mt-12 flex justify-center gap-2 text-lg"}>
                        <p>Já tem um conta?</p>
                        <Link to="/login" className={"text-primary"}>Entre!</Link>
                    </div>
                </div>

            </div>

        </div>
    )
}
