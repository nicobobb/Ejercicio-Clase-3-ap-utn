import "./App.css";
import { ProductDetail } from "./components/ProductDetail/ProductDetail";

function App() {
    return (
        <>
            <ProductDetail
                name="Confortable 2,20×1,10mts"
                description="Excelente calidad, al mejor precio de del mercado. Estructura en madera saligna con cinchas elasticas y resortes, placa supersoft 27kgs en asiento marca Piero."
                imgSrc="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                stock="10"
                price="450"
                sku="123456789"
            />
        </>
    );
}

export default App;
