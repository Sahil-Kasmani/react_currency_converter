import { useState } from "react";
import "./Cur_con.css";

const Cur_con = () => {
    const countries = [
        "Countries",
        "AED",
        "AFN",
        "ALL",
        "AMD",
        "ANG",
        "AOA",
        "ARS",
        "AUD",
        "AWG",
        "AZN",
        "BAM",
        "BBD",
        "BDT",
        "BGN",
        "BHD",
        "BIF",
        "BMD",
        "BND",
        "BOB",
        "BRL",
        "BSD",
        "BTN",
        "BWP",
        "BYN",
        "BZD",
        "CAD",
        "CDF",
        "CHF",
        "CLP",
        "CNY",
        "COP",
        "CRC",
        "CUP",
        "CVE",
        "CZK",
        "DJF",
        "DKK",
        "DOP",
        "DZD",
        "EGP",
        "ERN",
        "ETB",
        "EUR",
        "FJD",
        "FKP",
        "FOK",
        "GBP",
        "GEL",
        "GGP",
        "GHS",
        "GIP",
        "GMD",
        "GNF",
        "GTQ",
        "GYD",
        "HKD",
        "HNL",
        "HRK",
        "HTG",
        "HUF",
        "IDR",
        "ILS",
        "IMP",
        "INR",
        "IQD",
        "IRR",
        "ISK",
        "JEP",
        "JMD",
        "JOD",
        "JPY",
        "KES",
        "KGS",
        "KHR",
        "KID",
        "KMF",
        "KRW",
        "KWD",
        "KYD",
        "KZT",
        "LAK",
        "LBP",
        "LKR",
        "LRD",
        "LSL",
        "LYD",
        "MAD",
        "MDL",
        "MGA",
        "MKD",
        "MMK",
        "MNT",
        "MOP",
        "MRU",
        "MUR",
        "MVR",
        "MWK",
        "MXN",
        "MYR",
        "MZN",
        "NAD",
        "NGN",
        "NIO",
        "NOK",
        "NPR",
        "NZD",
        "OMR",
        "PAB",
        "PEN",
        "PGK",
        "PHP",
        "PKR",
        "PLN",
        "PYG",
        "QAR",
        "RON",
        "RSD",
        "RUB",
        "RWF",
        "SAR",
        "SBD",
        "SCR",
        "SDG",
        "SEK",
        "SGD",
        "SHP",
        "SLE",
        "SOS",
        "SRD",
        "SSP",
        "STN",
        "SYP",
        "SZL",
        "THB",
        "TJS",
        "TMT",
        "TND",
        "TOP",
        "TRY",
        "TTD",
        "TVD",
        "TWD",
        "TZS",
        "UAH",
        "UGX",
        "USD",
        "UYU",
        "UZS",
        "VES",
        "VND",
        "VUV",
        "WST",
        "XAF",
        "XCD",
        "XDR",
        "XOF",
        "XPF",
        "YER",
        "ZAR",
        "ZMW",
    ];

    const detail = {
        result: "success",
        documentation: "https://www.exchangerate-api.com/docs",
        terms_of_use: "https://www.exchangerate-api.com/terms",
        time_last_update_unix: 1716768001,
        time_last_update_utc: "Mon, 27 May 2024 00:00:01 +0000",
        time_next_update_unix: 1716854401,
        time_next_update_utc: "Tue, 28 May 2024 00:00:01 +0000",
        base_code: "USD",
        target_code: "INR",
        conversion_rate: 83.1076,
        conversion_result: 249.3228,
    };

    const Api_key = "f4417f6dcef3c1fd2596bdc0";
    const [f_country, setF_country] = useState<string>("USD");
    const [s_country, setS_country] = useState<string>("INR");
    const [amount, setAmount] = useState<number | undefined>();
    const [showResult, setShowResult] = useState<boolean>(false);
    const [Conversion, setConversion] = useState<any>(null);

    const fetchData = async () => {
        try {
            const response = await fetch(
                `https://v6.exchangerate-api.com/v6/${Api_key}/pair/${f_country}/${s_country}/${amount}`
            );
            const data = await response.json();
            setConversion(data);
            setShowResult(true);
        } catch (error) {
            console.log("Error", error);
        }
    };

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        fetchData();
        console.log(f_country);
        console.log(s_country);
        console.log(amount);
    };

    return (
        <div className="cur_con">
            <form autoComplete="off" onSubmit={handleSubmit}>
                <fieldset>
                    <input
                        autoComplete="off"
                        type="number"
                        id="amount"
                        placeholder="Amount..."
                        value={amount !== undefined ? amount : ""}
                        onChange={(e) => {
                            setAmount(parseFloat(e.target.value));
                        }}
                        required
                    />
                    <select
                        name="f_country"
                        id="f_country"
                        onChange={(e) => {
                            setF_country(e.target.value);
                        }}
                        required
                    >
                        {countries.map((item) => (
                            <option key={item} disabled={item === "Countries"} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    <div>
                        <h2>To</h2>
                    </div>
                    <select
                        name="S_country"
                        id="S_country"
                        onChange={(e) => {
                            setS_country(e.target.value);
                        }}
                        required
                    >
                        {countries.map((item) => (
                            <option key={item} disabled={item === "Countries"} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                    <button>Convert</button>
                </fieldset>
            </form>

            {showResult && Conversion ? (
                <div className="result">
                    <p style={{ textAlign: "center", marginBottom: "1rem" }}>
                        Conversion Rate :- {Conversion.conversion_rate}
                    </p>
                    <div className="r1">
                        <p>
                            {amount} {Conversion.base_code} =
                        </p>
                        <h1>
                            {Conversion.conversion_result} {Conversion.target_code}
                        </h1>
                    </div>
                </div>
            ) : (
                ""
            )}
        </div>
    );
};

export default Cur_con;
