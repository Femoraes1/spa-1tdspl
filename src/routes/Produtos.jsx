import { Link } from "react-router-dom";
import { ListaProdutos } from "../components/ListaProdutos";
import classEstilos from "./Produtos.module.css";
import {AiFillEdit as Editar} from "react-icons/ai";

export default function Produtos() {

  return (
    <div>
        <h1>Produtos de INFORMÁTICA - FIPAPI</h1>
        <p>Os Melhores Produtos do Mercado</p>
        
        <table className={classEstilos.estiloTabela}>
            <thead>
                <tr>
                    <th className={classEstilos.tableHeaders}>ID</th>
                    <th className={classEstilos.tableHeaders}>NOME</th>
                    <th className={classEstilos.tableHeaders}>DESCRIÇÃO</th>
                    <th className={classEstilos.tableHeaders}>PREÇO</th>
                    <th className={classEstilos.tableHeaders}>EDITAR</th>

                </tr>
            </thead>

            <tbody>
                {ListaProdutos.map((produto,indice)=>(

                      <tr key={indice} className={classEstilos.tableLine}>
                        <td className={classEstilos.tableData}>{produto.id}</td>
                        <td className={classEstilos.tableData}>{produto.nome}</td>
                        <td className={classEstilos.tableData}>{produto.desc}</td>
                        <td className={classEstilos.tableData}>{produto.preco}</td>
                        <td className={classEstilos.tableData}>
                            <Link to={`/editar/produtos/${produto.id}`}><Editar/></Link>
                        </td>
                      </tr>

                ))}
            </tbody>

            <tfoot>
                <tr>
                    <td colSpan={3}>PRODUTOS</td>
                </tr>
            </tfoot>
        </table>
        


    </div>
  )
}
