import React, {useEffect, useLayoutEffect, useState} from "react";
import { useCollection} from "@/hooks/useCollection.js";
// import Loading from "@/components/Loading.jsx";
import MembersSkeleton from "@/components/MembersSkeleton..jsx";

export default function MembersBar() {
    const { documents: users } = useCollection("users");
    const [usersLength, setUsersLength] = useState(0);

    const openChat = (userId) => {

    }

    useEffect(() => {
        if (users) {
            localStorage.setItem("usersLength", users.length);
        }
    }, [users]);

    useLayoutEffect(() => {
        setUsersLength(Number(localStorage.getItem("usersLength")));
    }, []);
    // Não precisa do useeffect nem do usestate, da para usar  a variavel do localstorage direto no return
    // o state não faz sentido por não ter que ser atualizado

    // if (!users) return <Loading/>;
//Pode ser usado o optional chaining para evitar erros de undefined no user invés de if acima
    // nesse caso acrescenta-se ? após users do mapping no return
    // Vamos usar um skeleton para simular o carregamento dos usuários
    return (
        <aside className={"h-screen w-[200px] bg-accent border border-border p-5"}>
            <h2 className={"font-medium text-lg mb-5"}>Membros</h2>
            {users ? (users.map((user) => (
                <div key={user.id}
                     className={"flex gap-2 items-center text-sm py-2.5"}
                     role={"button"}
                     onClick={() => openChat(user.id)}
                >
                    <div className={`${user.online ? "bg-green-500": "bg-red-500"} h-3 w-3 rounded-full`} />
                    <p className={"font-medium"}>
                        {user.name}
                    </p>
                </div>
            ))) : [...Array(usersLength)].map((_, index) => <MembersSkeleton key={index}/>)
            }
        </aside>
    )
}

