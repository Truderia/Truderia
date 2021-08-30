// Cardapio
const trudel = [
    {
        flavour: "TRADICIONAL",
        span: "",
        description: "Deliciosa massa do leste europeu com açúcar e canela.",
        image: "./assets/Menu/Trudels/Tradicional.webp",
        price: 10
    },
    {
        flavour: "BRIGADEIRO",
        span: "",
        description: "Recheado com brigadeiro de lamber os dedos!",
        image: "./assets/Menu/Trudels/Brigadeiro.webp",
        price: 12
    },
    {
        flavour: "DOCE DE LEITE",
        span: "",
        description: "Recheado com um doce de leite divino!",
        image: "./assets/Menu/Trudels/DoceDeLeite.webp",
        price: 12
    },
    {
        flavour: "CHOCOLATE MEIO AMARGO",
        span: "",
        description: "Recheado com o melhor meio amargo!",
        image: "./assets/Menu/Trudels/ChocolateMeioAmargo.webp",
        price: 12
    },
    {
        flavour: "CHOCOLATE BRANCO",
        span: "",
        description: "Recheado com chocolate branco de dar água na boca!",
        image: "./assets/Menu/Trudels/ChocolateBranco.webp",
        price: 13
    },
    {
        flavour: "NUTELLA",
        span: "",
        description: "Recheado com o creme de avelã queridinho do Brasil.",
        image: "./assets/Menu/Trudels/Nutella.webp",
        price: 14
    },
    {
        flavour: "KIT KAT CREMOSO",
        span: "",
        description: "Recheado com um creme de KIT KAT que dispensa comentários.",
        image: "./assets/Menu/Trudels/Kitkat.webp",
        price: 14
    },
    {
        flavour: "OVOMALTINE",
        span: "",
        description: "Recheado com um creme de OVOMALTINE crocante e irresistivel!",
        image: "./assets/Menu/Trudels/Ovomaltine.webp",
        price: 15
    },
    {
        flavour: "LAKAOREO",
        span: "*NOVO SABOR*",
        description: 'O delicioso Laka com crocantes de Oreo que derretem na boca. Indescritível…',
        image: "./assets/Menu/Trudels/Lakaoreo.webp",
        price: 15
    },
    {
        flavour: "KIT MINI TRUDEL",
        span: "6 mini Trudels nos sabores :",
        description: 'Doce de Leite, Nutella, Brigadeiro,  Chocolate Branco,  Ovomaltine  e Kit Kat',
        image: "./assets/Menu/Trudels/KitMiniTrudel.webp",
        price: 45
    }
]

const additional = [
    {
        flavour: "MORANGO",
        span: "",
        description: "",
        image: "./assets/Menu/Adicionais/morango.jpg",
        price: 4
    },
    {
        flavour: "GRANULADO",
        span: "",
        description: "",
        image: "./assets/Menu/Adicionais/granulado2.webp",
        price: 1
    },
    {
        flavour: "COCO RALADO",
        span: "",
        description: "",
        image: "./assets/Menu/Adicionais/cocoRalado.jpg",
        price: 2
    },
    {
        flavour: "OVOMALTINE CROCANTE",
        span: "",
        description: "",
        image: "./assets/Menu/Adicionais/ovomaltine.jpg",
        price: 2
    },
    {
        flavour: "NEGRESCO MOIDO",
        span: "",
        description: "",
        image: "./assets/Menu/Adicionais/Negresco.webp",
        price: 2
    },
    {
        flavour: "AMENDOIM",
        span: "",
        description: "",
        image: "./assets/Menu/Adicionais/amendoim.jpg",
        price: 2
    },
    {
        flavour: "NOZES",
        span: "",
        description: "",
        image: "./assets/Menu/Adicionais/nozes.jpg",
        price: 3
    },
    {
        flavour: "KIT KAT PICADO",
        span: "",
        description: "",
        image: "./assets/Menu/Adicionais/kitKat2.jpg",
        price: 3
    },
    {
        flavour: "SONHO DE VALSA PICADO",
        span: "",
        description: "",
        image: "./assets/Menu/Adicionais/sonhoDeValsa.jpg",
        price: 3
    },
    {
        flavour: "DOBRO DE RECHEIO",
        span: "",
        description: "",
        image: "./assets/Menu/Adicionais/dobroRecheio.jpg",
        price: 4
    },

]

const iceCream = [
    {
        flavour: "CREME",
        span: "",
        description: "",
        image: "./assets/Menu/Sorvetes/Creme.webp",
        price: 4
    },
    {
        flavour: "NINHO TRUFADO",
        span: "",
        description: "",
        image: "./assets/Menu/Sorvetes/NinhoTrufado.webp",
        price: 4
    },
    {
        flavour: "IOGURTE COM FRUTAS VERMELHAS",
        span: "",
        description: "",
        image: "./assets/Menu/Sorvetes/IogurteFrutasVermelhas.webp",
        price: 4
    },
    {
        flavour: "CAFÉ MOCHA",
        span: "(Café com chocolate)",
        description: "",
        image: "./assets/Menu/Sorvetes/CafeMocha.webp",
        price: 4
    },
    {
        flavour: "BEM CASADO",
        span: "(Pão de ló com doce de leite)",
        description: "",
        image: "./assets/Menu/Sorvetes/BemCasado.webp",
        price: 4
    },
    {
        flavour: "SENSAÇÃO ",
        span: "(Morango com pedaços de chocolate)",
        description: "",
        image: "./assets/Menu/Sorvetes/Sensacao.webp",
        price: 4
    }
]

const menu = [
    {
        name: "TRUDELS",
        category: "trudel",
        itens: trudel
    },
    {
        name: "SORVETES",
        category: "icecream",
        itens: iceCream
    },
    {
        name: "ADICIONAIS",
        category: "adittional",
        itens: additional
    }
]

 