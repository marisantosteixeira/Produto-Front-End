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
        {produtos.map(produto => {

          let date= new Date (produto.data_cadastro);
          let dataCorreta = date.getDate() + '/' + (date.getMonth()+1) + '/' + date.getFullYear();
          return (
          
          <div className={styles.produtos} key={produto.codigo}>
            <div>
            <a className={styles.pproduto}> {produto.titulo}</a>
            <br></br>
            <a className={styles.pproduto}>{dataCorreta}</a>
            <br></br>
            <a className={styles.pproduto}> Preço: R$ {produto.preco}</a>
            <br></br>
            <a className={styles.pproduto}>Descrição: {produto.descricao}</a>
            <br></br>
            <img className={styles.imgs} src={produto.imagem}/>
    
            <Link href={`/produto/${produto.codigo}`} className={styles.verm} >Ver mais</Link></div>
          
          </div>)
            
        })} 
      </main>
    </div>
  )
}
