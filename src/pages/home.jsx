import CardProduct from "../Components/Fragments/CardProduct";


const produck = [
    {
        author: 'Jenna Ortega',
        position: 'Senior Accountant',
        work: 'Gojek',
        rating: '3.5 (86)',
        price: 'Rp 300k'
    }
]


function Home() {
    return (
        <>
            <CardProduct>
                <CardProduct.Header 
                img="./images/produk1.png"/>
                <CardProduct.Body 
                title='Big 4 Auditor Financial Analyst' 
                author='Jenna Ortega' 
                position='Senior Accountant' 
                work='Gojek'
                imgprofile="./images/avatar1.png"> 
                Mulai transformasi dengan instruktur profesional, harga yang terjangkau, dan kurikulum terbaik
                </CardProduct.Body>
                <CardProduct.Footer rating='3.5 (86)' price='Rp 300k'/>
            </CardProduct>
        </>
    )
}

export default Home