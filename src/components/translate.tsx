import React, { useState } from "react";

type AssigmentTranslation = { [key: string]: string };

const TranslationsList: AssigmentTranslation = {
    "colada": "lavagem (comida)",
    "plachan": "passar ferro",
    "empiezan": "começam",
    "sencillas": "simples",
    "retendrá": "irá reter",
    "muletillas": "é uma palavra ou frase que é repetida muito pelo hábito",
    "pelea": "lutar",
    "Infografía": "Infográfico: é um conteúdo explicativo que une informações verbais e visuais",
    "patalla táctil": "tela sensivel ao toque",
    "lentilla": "tela lente",
    "gafas": "óculos",
    "inalámbrico": "sem fio",
    "ojalá": "tomara que...",
    "salgas": "sair",
    "abuelo": "vovô",
    "suenan": "tocam (instrumento)",
    "oídas": "boato",
    "olvidan": "eles esquecem",
    "aislamiento": "isolamento",
    "desarrolloo": "em desenvolvimento",
    "sencilla": "simples",
    "empezar": "Começar",
    "leídos": "ler",
    "pelo": "cabelo",
    "anduviésimos": "vamos andar",
    "botellas": "garrafas",
    "llamaba": "chamado",
    "la ceja": "sobrancelha",
    "la barbilla": "o queixo",
    "el cuello": "o pescoço",
    "la mejilla": "bochecha",
    "el talón": "calcanhar",
    "la espalda": "as costas",
    "el muslo": "a coxa",
    "la rodilla": "joelho",
    "la coronilla": "parte da cabeça onde fica o “redemoinho”",
    "vergüenza": "vergonha",
    "entonces": "então",
    "diré": "direi",
    "mira": "olha",
    "hija": "filha",
    "agregó": "adicionado",
    "asesina": "assassino",
    "sacarle": "tirar",
    "señala": "indica (algo)",
    "sencillo": "simples",
    "prensa": "imprensa (revista)",
    "embarazo": "gravidez",
    "ventas": "vendas",
    "magacín": "revista",
    "juguetería": "loja de brinquedo",
    "ragañadientes": "com relutância",
    "repelerlas": "repeli-los",
    "sillín": "banco de bicicleta",
    "pollo": "frango",
    "tirita": "bandagem",
    "ahorrando": "salvando",
    "alquilar": "para alugar",
    "pantalones": "calças",
    "calcetines": "meias",
    "pashimina": "lenço para o pescoço",
    "diseñadores": "desenhistas",
    "malísimas": "muito ruim",
    "alabadas": "elogiado",
    "semillas": "sementes",
    "hubiese": "teria",
    "enseñaba": "ensinou",
    "lográbamos": "conseguimos",
    "palabrota": "palavrão",
    "mala palabra": "palavrão",
    "garaboto": "rabisco",
    "perrito": "cachorro",
    "niñez": "infância",
    "basándote": "com base em...",
    "bañador": "roupa de banho (sunga, maiô etc)",
    "malla": "malha ou rede",
    "canilla": "toque",
    "apellidos": "sobrenome",
    "oreja": "orelha",
    "película": "filme",
    "villancicos": "canções de natal",
    "rociadas": "polvilhadas",
    "pestiños": "pequenos pastéis fritos",
    "sandía": "melancia",
    "descargar": "baixar algo em algum dispositivo eletronico",
    "acostarse": "ir dormir",
    "empiezar": "começar",
    "pronominales": "pronomes",
    "ordenador": "computador",
    "destartalados": "detonado, desmantelado, surrado",
    "aíslan": "isolar",
    "cepillas": "pincéis",
    "afeitas": "barbear-se",
    "maquillas": "maquiar-se",
    "arreglarte": "arrumar-se",
    "perilla": "bigode",
    "sombrero": "chapéu",
    "ponerse": "colocar",
    "población": "população",
    "chatarra": "sucata",
    "sana": "saudável",
    "Hogares": "casas",
    "pereja": "casal",
    "salgo": "vou embora",
    "pongo": "coloquei",
    "vengo": "eu venho",
    "alquiler": "aluguel",
    "coche": "carro",
    "albañil": "pedreiro",
    "reseñables": "extraordinário",
    "iban": "estavam indo",
    "tierna": "macio",
    "pormenores": "detalhes",
    "lunes": "segunda-feira",
    "quitarse": "descolar",
    "concierto": "show",
    "estorbar": "impedir",
    "olla": "panela",
    "resbalar": "escorregar",
    "olvidarse": "esquecer",
    "castillo": "castelo",
    "guantes": "luvas",
    "huir": "fugir",
    "campesina": "camponês",
    "paraguas": "guarda-chuva",
    "anillo": "anel",
    "jinete": "cavaleiro",
    "conduje": "dirigiu",
    "empezado": "começado",
    "sembrar": "semear",
    "casi": "quase",
    "ahorrar": "economizar",
    "meseta": "platô",
    "morcilla": "chouriço",
    "jamón": "presunto",
    "guindilla": "pimenta",
    "hojaldre": "massa folhada",
    "vainilla": "baunilha",
    "cuya": "de quem",
    "regalo": "presente",
    "calabacín": "abobrinha",
    "zanahoria": "cenoura",
    "gamba": "camarão",
    "pavo": "peru",
    "llena": "cheio",
    "toma": "levando",
    "lejía": "água sanitária",
    "solamente": "somente",
    "manglar": "manguezal",
    "basura": "lixo",
    "vertedero": "aterro",
    "iluvia": "chuva",
    "desarrollo": "em desenvolvimento",
    "labor": "trabalho",
    "ocio": "lazer",
    "depuradora": "estação de tratamento",
    "contenedor": "recipiente",
    "riada": "corrente",
    "huracán": "furacão",
    "conserje": "porteiro",
    "tormárselo": "pegue",
    "tuvo": "ele tinha",
    "pasillo": "corredor",
    "cerrillas": "palitos de fósforo",
    "guay": "frio",
    "trocito": "pouco",
    "butacas": "poltronas",
    "Rojo": "vermelho",
    "espinita": "espinho",
    "ilave": "chave inglesa",
    "gorra": "boné",
    "concepto": "conceito",
    "campera": "jaqueta",
    "sucia": "sujo",
    "acogedora": "aconchegante",
    "postre": "sobremesa",
    "senderismo": "caminhada",
    "galletas": "biscoitos"
};

const Translate = () => {
    const [word, setWord] = useState("");
    const [translation, setTranslation] = useState("");

    const handleTranslate = () => {
        const lowerCaseWord = word.toLowerCase();
        const lowerCaseKeys = Object.keys(TranslationsList).map(key => key.toLowerCase());

        if (lowerCaseKeys.includes(lowerCaseWord)) {
            setTranslation(TranslationsList[lowerCaseWord].toLowerCase());
        } else {
            setTranslation("Palavra não encontrada");
        }
    };

    return (
        <>
            <h1 className="text-center text-2xl mt-3">Projeto FAPEMAT: Espanhol "Sem Moagem"</h1>
            <div className="flex justify-center mt-6">
                <div className="flex w-full max-w-md">
                    <input
                        type="text"
                        value={word}
                        onChange={(e) => setWord(e.target.value)}
                        className="block w-full px-5 py-2 bg-white border border-purple-200 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
                        placeholder="Insira uma palavra"
                    />
                    <button onClick={handleTranslate} className="ml-2 px-4 text-white bg-green-600 rounded-md">Traduzir</button>
                </div>
            </div>
            <p className="text-center text-5xl mt-6">{translation.charAt(0).toUpperCase() + translation.slice(1)}</p>
        </>
    );
}

export default Translate