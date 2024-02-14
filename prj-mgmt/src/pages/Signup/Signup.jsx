import React from "react";
import  { Button } from "@/shadcn/components/ui/button";
import { Input } from "@/shadcn/components/ui/input";
import Logo from "../../assets/logo.svg";
export default function Signup() {
    return (
        <div className={"flex gap-20 h-screen w-full  px-40 py-20"}>
            <div className={"w-1/2 bg-muted rounded-xl p-12"}>
                <img src={Logo} alt={"Logo"} className={"w-12 h-12"}/>
                <h2 className={"mt-24 text-3xl font-semibold"}>Lorem ipsum bla bla bla bla bla</h2>
                <p>bla bla bka bla sasj Lorem inspum ajasjajsjasja</p>
                <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                    ut labore</div>
            </div>
            <div className={"flex felx-col justify-center w-1/2 px-20"}>
                <div>
                    <h1 className={"text-3xl font-semibold"}>
                        Cadastre-se agora!
                    </h1>
                    <p className={"mt-4 text-muted-foreground font-normal text-lg"}>
                        Crie sua conta agora mesmo
                    </p>
                    <form className={"mt-10"}>
                        <p className={"text-muted-foregorund mb-2.5"}>Nome Completo</p>
                        <Input/>
                        <p className={"mt-5 text-muted-foregorund mb-2.5"}>Email</p>
                        <Input/>
                        <p className={"mt-5 text-muted-foregorund mb-2.5"}>Senha</p>
                        <Input/>
                        <p className={"mt-5 text-muted-foregorund mb-2.5"}>Confirme sua senha</p>
                        <Input/>
                        <Button size={"xl"} className={"mt-10 text-lg w-full"}>Entrar na conta</Button>
                    </form>
                </div>

            </div>

        </div>
    )
}
