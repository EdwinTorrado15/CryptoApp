import { useState, useEffect } from "react";
import { instance } from "../api/api";
import Cryptos from "../components/Cryptos";
import Navbar from "../components/Navbar";
import "../sass/inicio.scss";

const Inicio = () => {
    // Hacemos unos estados en los cuales vamos a guardar la informacion que nos llega de la API
    const [crypto, setCrypto] = useState([]);
    const [search, setSearch] = useState("");

    // Usamos el useEffect para que se ejecute una vez que se renderice el componente
    useEffect(() => {
        getCrypto();
    }, []);

    // Funcion para obtener la informacion de la API
    const getCrypto = async () => {
        try {
            const response = await instance.get("tickers/?start=100&limit=100");
            setCrypto(response.data.data);
        } catch (err) {
            console.log(err);
        }
    };

    // Funcion para captura cada valor que escribamos por teclado
    const handleSearch = (e) => {
        setSearch(e.target.value);
    };

    // Funcion para filtrar la informacion que nos llega de la API
    const filteredCrypto = () => {
        return crypto.filter((crypto) =>
            crypto.name.toLowerCase().includes(search.toLowerCase())
        );
    };

    return (
        <>
            <Navbar />
            <div className="inicio">
                <div className="search">
                    <h1 className="title">Buscar Cryptomoneda</h1>
                    <form>
                        <input
                            type="text"
                            className="search_input"
                            onChange={handleSearch}
                            placeholder="Buscar"
                        />
                    </form>
                </div>
                {filteredCrypto().length === 0 ? (
                    <h3 className="not_found">No se encontraron resultados</h3>
                ) : (
                    filteredCrypto().map((crypto) => (
                        // Le pasamos las props a nuestro componente
                        <Cryptos
                            key={crypto.id}
                            nombre={crypto.name}
                            precio={crypto.price_usd}
                            simbolo={crypto.symbol}
                            marketcap={crypto.market_cap_usd}
                            precioCambiar={crypto.percent_change_24h}
                            volumen={crypto.volume24}
                        />
                    ))
                )}
            </div>
        </>
    );
};

export default Inicio;
