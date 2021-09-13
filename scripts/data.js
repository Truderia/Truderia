// Cardapio
const trudel = [
    {
        flavour: "TRADICIONAL",
        span: "",
        description: "Nossa deliciosa massa assada, polvilhada no açúcar e canela, receita exclusiva com origem no Leste Europeu. Um sabor único!",
        image: "./assets/Menu/Trudels/Tradicional.webp",
        price: 10
    },
    {
        flavour: "BRIGADEIRO",
        span: "",
        description: "Brigadeiro de produção artesanal, feito com leite condensado Moça e Cacau 50%. Aquele sabor de infância!",
        image: "./assets/Menu/Trudels/Brigadeiro.webp",
        price: 12
    },
    {
        flavour: "DOCE DE LEITE",
        span: "",
        description: "O verdadeiro doce de leite, puro e muito cremoso. Uma loucura para os amantes de doce!",
        image: "./assets/Menu/Trudels/DoceDeLeite.webp",
        price: 12
    },
    {
        flavour: "CHOCOLATE MEIO AMARGO",
        span: "",
        description: "Sabor intenso do autêntico chocolate, rico em cacau. Perfeito para aqueles que preferem algo menos doce.",
        image: "./assets/Menu/Trudels/ChocolateMeioAmargo.webp",
        price: 12
    },
    {
        flavour: "CHOCOLATE BRANCO",
        span: "",
        description: "Chocolate com sabor equilibrado, cremoso ao extremo e altamente viciante.",
        image: "./assets/Menu/Trudels/ChocolateBranco.webp",
        price: 13
    },
    {
        flavour: "NUTELLA",
        span: "",
        description: "O verdadeiro creme de avelã, o mais pedido e queridinho dos nossos clientes.",
        image: "./assets/Menu/Trudels/Nutella.webp",
        price: 14
    },
    {
        flavour: "KIT KAT CREMOSO",
        span: "",
        description: "Um recheio que mistura a cremosidade do chocolate e o crocante do biscoito wafer.",
        image: "./assets/Menu/Trudels/Kitkat.webp",
        price: 14
    },
    {
        flavour: "OVOMALTINE",
        span: "",
        description: "Surpreendente combinação de Ovomaltine, Avelã e Cacau. Pura crocância, simplesmente irresistível!",
        image: "./assets/Menu/Trudels/Ovomaltine.webp",
        price: 15
    },
    {
        flavour: "LAKAOREO",
        span: "",
        description: 'A junção do chocolate branco mais famoso do Brasil e o biscoito que toda família adora. Muita gostosura em apenas um recheio.',
        image: "./assets/Menu/Trudels/Lakaoreo.webp",
        price: 15
    },
    {
        flavour: "KIT MINI TRUDEL",
        span: "",
        description: 'Ideal para dividir ou presentear, nossos deliciosos Trudels em versão mini. São 6 unidades nos sabores: Doce de Leite, Nutella, Brigadeiro com granulado, Chocolate Branco com coco, Ovomaltine e Kit Kat.',
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
        description: "O clássico sorvete de creme que combina com tudo.",
        image: "./assets/Menu/Sorvetes/Creme.webp",
        price: 4
    },
    {
        flavour: "NINHO TRUFADO",
        span: "",
        description: "O nosso sabor mais pedido, a dupla perfeita, leite Ninho e chocolate.",
        image: "./assets/Menu/Sorvetes/NinhoTrufado.webp",
        price: 4
    },
    {
        flavour: "IOGURTE COM FRUTAS VERMELHAS",
        span: "",
        description: "A leveza do iogurte com um mix das frutas amora, framboesa, cereja e morango.",
        image: "./assets/Menu/Sorvetes/IogurteFrutasVermelhas.webp",
        price: 4
    },
    {
        flavour: "CAFÉ MOCHA",
        span: "",
        description: "O sorvete ideal para quem adora café com um toque especial de chocolate.",
        image: "./assets/Menu/Sorvetes/CafeMocha.webp",
        price: 4
    },
    {
        flavour: "BEM CASADO",
        span: "",
        description: "A união que deu certo, sorvete com pedaços de biscoito e doce de leite.",
        image: "./assets/Menu/Sorvetes/BemCasado.webp",
        price: 4
    },
    {
        flavour: "SENSAÇÃO ",
        span: "",
        description: "A deliciosa combinação do sorvete de morango com pedaços de chocolate.",
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

 