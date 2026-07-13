import axios from "axios"
import { useState, useEffect } from "react"
const apiUrl = import.meta.env.VITE_API_URL;
function TransactionList() {
    let [transactions, setTransactions] = useState([])
    useEffect(() => {
        axios({
            url: apiUrl + '/admin/transactions',
            method: 'get'
        }).then((result) => {
            setTransactions(result.data.data)
        }).catch((err) => {
            alert(err)
        })
    }, [])
    return (
        <>
            <table className="table">
                <thead>
                    <tr>
                        <th>Transaction Id</th>
                        <th>Email</th>
                        <th>Mobile No</th>
                        <th>Amount Paid</th>
                        <th>Products</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        transactions.map((transaction) =>
                            <tr>
                                <td>{transaction.transactionId}</td>
                                <td>{transaction.email}</td>
                                <td>{transaction.mobNo}</td>
                                <td>{transaction.totalPrice}</td>
                                <td>{
                                    transaction.products.map((product) =>
                                        product.bookTitle + ","
                                    )
                                }
                                </td>
                                <td>{transaction.status}</td>
                            </tr>
                        )
                    }
                </tbody>

            </table>
        </>

    )
}
export default TransactionList