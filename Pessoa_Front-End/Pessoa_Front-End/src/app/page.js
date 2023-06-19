"use client"
import Link from 'next/link';
import styles from './page.module.css'

export default async function Home() {

  const req = await fetch("http://localhost:3003/produtos", {
    cache: "no-cache"
  });
  const produtos = await req.json();

  return (
    <div className='body'>
      
      <main className={styles.mainp}>
        <br></br> 
        <Link href="/cadastro" className={styles.voltarp} > CADASTRAR </Link>
        <br></br>
        {produtos.map(produto => (
          <div className={styles.produtos} key={produto.codigo}>
            <p className={styles.pproduto}>{produto.titulo}</p>
            <p className={styles.pproduto}>{produto.data_cadastro}</p>
            <p className={styles.pproduto}>{produto.preco}</p>
            <p className={styles.pproduto}>{produto.descricao}</p>
            <img className={styles.imgs} src={produto.imagem}/>
    
            <Link href={`/produto/${produto.codigo}`}>ver mais</Link>
          
          </div>
            
        ))} 
      </main>
    </div>
  )
}
