import React from "react";
import '../sass/crypto.scss'

const Cryptos = ({
    nombre,
    precio,
    simbolo,
    marketcap,
    precioCambiar,
    volumen,
}) => {

    // Hacemos el cambio de la moneda a dolares
    const transformDolar = (number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD',
        }).format(number);
    }

    return (
        <div className="crypto_container">
            <div className="crypto_row">
                <div className="crypto">
                    <h1>{nombre}</h1>
                    <p className="crypto_symbol">{simbolo}</p>
                </div>
                <div className="crypto_data">
                    <p className="crypto_price">${precio}</p>
                    <p className="crypto_volume">{transformDolar(volumen)}</p>

                    {precioCambiar < 0 ? (
                        <p className="crypto_percent rojo">{precioCambiar}%</p>
                    ) : (
                        <p className="crypto_percent verde">{precioCambiar}%</p>
                    )}
                    <p className="crypto_marketCap">
                        Mkt Cap: {transformDolar(marketcap)}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cryptos;
