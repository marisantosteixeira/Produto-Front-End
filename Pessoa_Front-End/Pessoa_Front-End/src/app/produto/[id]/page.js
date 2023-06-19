'use client'


import { useRouter } from "next/navigation";
import './produto.css'


export default async function Produto({ params }) {
    const router = useRouter();
    const id = { id: parseInt(params.id) }


    const idJson = JSON.stringify(id);


    const req = await fetch("http://localhost:3003/produto", {
        method: "POST",
        cache: "no-cache",
        headers: { 'content-type': 'application/json' },
        body: idJson
    })
    const produto = await req.json();




    const remover = () => {
        console.log(idJson)
        try {
            fetch("http://localhost:3003/produtos", {
                method: "DELETE",
                headers: { 'content-type': 'application/json' },
                body: idJson
            })
            router.push("/");
        } catch (error) {
            alert("Ocorreu um erro" + error)
        }
    }
    return (

        <main className="main">
        <div className="div">
            <p className="p">{produto.titulo}</p>
            <p className="p">{produto.data_cadastro}</p>
            <p className="p">R${produto.preco}</p>
            <p className="p">{produto.descricao}</p>
            <img scr={produto.imagem}/>
            <button onClick={e => e.preventDefault(remover())} className="botao">REMOVER</button>


        </div>
        </main>


    )
}
