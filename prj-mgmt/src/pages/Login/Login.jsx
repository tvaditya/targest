import React from "react";
import  { Button } from "@/shadcn/components/ui/button";
import { Input } from "@/shadcn/components/ui/input";
import Logo from "../../assets/logo.svg";
import {Link} from "react-router-dom";
export default function Login() {
    return (
        <div className={"flex gap-20 h-screen w-full  px-40 py-20"}>
            <div className={"w-1/2 bg-muted rounded-xl p-12"}>
                <div className={"flex items-center gap-3"}>
                    <img src={Logo} alt={"Logo"} className={"w-12 h-12"}/>
                    <h2 className={"text-2xl tracking-widest font-medium mb-0.5"}>
                        get<span className={"text-primary"}>It</span>Done!
                    </h2>
                </div>
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
                        Acesse a sua conta!
                    </h1>
                    <p className={"mt-4 text-muted-foreground font-normal text-lg"}>
                        Inform seus dados de acesso.
                    </p>
                    <form className={"mt-10"}>

                        <p className={"mt-5 text-muted-foregorund mb-2.5"}>Email</p>
                        <Input type={"email"}/>
                        <p className={"mt-5 text-muted-foregorund mb-2.5"}>Senha</p>
                        <Input type={"password"}/>
                        <Button size={"xl"} className={"mt-10 text-lg w-full"}>Entrar na conta</Button>
                    </form>
                    <div className={"mt-12 flex justify-center gap-2 text-lg"}>
                        <p>Não tem um conta?</p>
                        <Link to="/signup" className={"text-primary"}>Cadastre-se agora!</Link>
                    </div>
                </div>

            </div>

        </div>
    )
}
