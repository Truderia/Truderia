// MenuView - Cardapio
const trudel = [
    {
        flavour: "TRADICIONAL",
        span: "",
        description: "Nossa deliciosa massa assada, polvilhada no açúcar e canela, receita exclusiva com origem no Leste Europeu. Um sabor único!",
        image: "./assets/Menu/Trudels/Tradicional.webp",
        price: 10,
        miniPrice: 7
    },
    {
        flavour: "BRIGADEIRO",
        span: "",
        description: "Brigadeiro de produção artesanal, feito com leite condensado Moça e Cacau 50%. Aquele sabor de infância!",
        image: "./assets/Menu/Trudels/Brigadeiro.webp",
        price: 12,
        miniPrice: 8.5
    },
    {
        flavour: "DOCE DE LEITE",
        span: "",
        description: "O verdadeiro doce de leite, puro e muito cremoso. Uma loucura para os amantes de doce!",
        image: "./assets/Menu/Trudels/DoceDeLeite.webp",
        price: 12,
        miniPrice: 8.5
    },
    {
        flavour: "CHOCOLATE MEIO AMARGO",
        span: "",
        description: "Sabor intenso do autêntico chocolate, rico em cacau. Perfeito para aqueles que preferem algo menos doce.",
        image: "./assets/Menu/Trudels/ChocolateMeioAmargo.webp",
        price: 12,
        miniPrice: 8.5
    },
    {
        flavour: "CHOCOLATE BRANCO",
        span: "",
        description: "Chocolate com sabor equilibrado, cremoso ao extremo e altamente viciante.",
        image: "./assets/Menu/Trudels/ChocolateBranco.webp",
        price: 13,
        miniPrice: 9
    },
    {
        flavour: "CREME DE NINHO",
        span: "",
        description: "Cremosidade e doçura na medida certa, feito com o leite em pó mais famoso do Brasil, LEITE NINHO. Recheio com gostinho de quero mais!",
        image: "./assets/Menu/Trudels/CremeNinho.webp",
        price: 14,
        miniPrice: 10
    },
    {
        flavour: "NUTELLA",
        span: "",
        description: "O verdadeiro creme de avelã, o mais pedido e queridinho dos nossos clientes.",
        image: "./assets/Menu/Trudels/Nutella.webp",
        price: 15,
        miniPrice: 11
    },
    {
        flavour: "KIT KAT CREMOSO",
        span: "",
        description: "Um recheio que mistura a cremosidade do chocolate e o crocante do biscoito wafer.",
        image: "./assets/Menu/Trudels/Kitkat.webp",
        price: 15,
        miniPrice: 11
    },
    {
        flavour: "OVOMALTINE",
        span: "",
        description: "Surpreendente combinação de Ovomaltine, Avelã e Cacau. Pura crocância, simplesmente irresistível!",
        image: "./assets/Menu/Trudels/Ovomaltine.webp",
        price: 15,
        miniPrice: 11
    },
    {
        flavour: "LAKAOREO",
        span: "",
        description: 'A junção do chocolate branco mais famoso do Brasil e o biscoito que toda família adora. Muita gostosura em apenas um recheio.',
        image: "./assets/Menu/Trudels/Lakaoreo.webp",
        price: 15,
        miniPrice: 11
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
        price: 4,
        miniPrice: 2

    },
    {
        flavour: "GRANULADO",
        span: "",
        description: "",
        image: "./assets/Menu/Adicionais/granulado2.webp",
        price: 1,
        miniPrice: 0.5
    },
    // {
    //     flavour: "CONFETE",
    //     span: "",
    //     description: "",
    //     image: "./assets/Menu/Adicionais/confete.jpg",
    //     price: 2,
    //     miniPrice: 1
    // },
    {
        flavour: "COCO RALADO",
        span: "",
        description: "",
        image: "./assets/Menu/Adicionais/cocoRalado.jpg",
        price: 2,
        miniPrice: 1
    },
    {
        flavour: "OVOMALTINE CROCANTE",
        span: "",
        description: "",
        image: "./assets/Menu/Adicionais/ovomaltine.jpg",
        price: 2,
        miniPrice: 1
    },
    {
        flavour: "LEITE EM PÓ NINHO",
        span: "",
        description: "",
        image: "./assets/Menu/Adicionais/leiteNinho.webp",
        price: 2,
        miniPrice: 1
    },
    // {
    //     flavour: "NEGRESCO MOIDO",
    //     span: "",
    //     description: "",
    //     image: "./assets/Menu/Adicionais/Negresco.webp",
    //     price: 2,
    //     miniPrice: 1
    // },
    {
        flavour: "AMENDOIM",
        span: "",
        description: "",
        image: "./assets/Menu/Adicionais/amendoim.jpg",
        price: 2,
        miniPrice: 1
    },
    {
        flavour: "SONHO DE VALSA PICADO",
        span: "",
        description: "",
        image: "./assets/Menu/Adicionais/sonhoDeValsa.jpg",
        price: 2
    },
    {
        flavour: "NOZES",
        span: "",
        description: "",
        image: "./assets/Menu/Adicionais/nozes.jpg",
        price: 3,
        miniPrice: 1.5
    },
    {
        flavour: "KIT KAT PICADO",
        span: "",
        description: "",
        image: "./assets/Menu/Adicionais/kitKat2.jpg",
        price: 3,
        miniPrice: 1.5
    },
    {
        flavour: "RECHEIO EXTRA",
        span: "",
        description: "",
        image: "./assets/Menu/Adicionais/dobroRecheio.jpg",
        price: 4,
        miniPrice: 3
    },

]
const savoryTrudel = [
    {
        flavour: "TRADICIONAL",
        span: "",
        description: "Nossa deliciosa massa romena assada, na versão salgada, com uma casca crocante de queijo parmesão e um mix de ervas. Uma experiência única de sabor!",
        image: "./assets/Menu/Savory/Tradicional.webp",
        price: 9
    },
    {
        flavour: "FRANGO",
        span: "",
        description: "Frango desfiado com especiarias. Recheio cremoso, simplesmente delicioso!",
        image: "./assets/Menu/Savory/Frango.webp",
        price: 13
    },
    {
        flavour: "FRANGO COM CATUPIRY",
        span: "",
        description: "Nosso delicioso recheio de frango com Catupiry original. Combinação mais que perfeita!",
        image: "./assets/Menu/Savory/FrangoCatupiry.webp",
        price: 14
    },
    {
        flavour: "FRANGO COM CHEDDAR",
        span: "",
        description: "Nosso delicioso recheio de frango com Cheddar cremoso. Essa combinação é sucesso garantido!",
        image: "./assets/Menu/Savory/FrangoCheddar.webp",
        price: 14
    },
    // {
    //     flavour: "ALHO PORÓ",
    //     span: "",
    //     description: "Recheio de requeijão cremoso sabor Alho Poró. Suave, sofisticado e surpreendente.",
    //     image: "./assets/Menu/Savory/AlhoPoro.webp",
    //     price: 15
    // },
    // {
    //     flavour: "4 QUEIJOS",
    //     span: "",
    //     description: "Recheio de requeijão cremoso sabor 4 Queijos. A junção do sabor do Catupiry, parmesão, gorgonzola e provolone. Perfeito para aqueles que adoram queijos!",
    //     image: "./assets/Menu/Savory/QuatroQueijos.webp",
    //     price: 15
    // }
]
const savoryAdditional = [
    {
        flavour: "ALHO FRITO",
        span: "",
        description: "",
        image: "./assets/Menu/AdicionaisSalgados/AlhoFrito.webp",
        price: 1
    },
    {
        flavour: "MILHO",
        span: "",
        description: "",
        image: "./assets/Menu/AdicionaisSalgados/Milho.webp",
        price: 1
    },
    {
        flavour: "BATATA PALHA",
        span: "",
        description: "",
        image: "./assets/Menu/AdicionaisSalgados/BatataPalha.webp",
        price: 1.5
    },
    {
        flavour: "PARMESÃO RALADO",
        span: "",
        description: "",
        image: "./assets/Menu/AdicionaisSalgados/ParmesaoRalado.webp",
        price: 2
    }
]
const iceCream = [
    {
        flavour: "CREME",
        span: "",
        description: "O clássico sorvete de creme que combina com tudo.",
        image: "./assets/Menu/Sorvetes/Creme.webp",
        price: 5
    },
    {
        flavour: "NINHO TRUFADO",
        span: "",
        description: "O nosso sabor mais pedido, a dupla perfeita, leite Ninho e chocolate.",
        image: "./assets/Menu/Sorvetes/NinhoTrufado.webp",
        price: 5
    },
    {
        flavour: "IOGURTE COM FRUTAS VERMELHAS",
        span: "",
        description: "A leveza do iogurte com um mix das frutas amora, framboesa, cereja e morango.",
        image: "./assets/Menu/Sorvetes/IogurteFrutasVermelhas.webp",
        price: 5
    },
    {
        flavour: "CAFÉ MOCHA",
        span: "",
        description: "O sorvete ideal para quem adora café com um toque especial de chocolate.",
        image: "./assets/Menu/Sorvetes/CafeMocha.webp",
        price: 5
    },
    {
        flavour: "BEM CASADO",
        span: "",
        description: "A união que deu certo, sorvete com pedaços de biscoito e doce de leite.",
        image: "./assets/Menu/Sorvetes/BemCasado.webp",
        price: 5
    },
    {
        flavour: "SENSAÇÃO",
        span: "",
        description: "A deliciosa combinação do sorvete de morango com pedaços de chocolate.",
        image: "./assets/Menu/Sorvetes/Sensacao.webp",
        price: 5
    }
]
const trudelRings = [
    {
        flavour: "RINGS FIVE",
        span: "(5 unidades)",
        description: `Nossa deliciosa massa romena em formato de anéis, perfeitos para compartilhar e para aquele lanchinho rápido! <br><br>
        *Acrescente seu recheio preferido para acompanhar seus rings.`,
        image: "./assets/Menu/Rings/Rings5.webp",
        price: 7,
    },
    {
        flavour: "RINGS TEN",
        span: "(10 unidades)",
        description: `Nossa deliciosa massa romena em formato de anéis, perfeitos para compartilhar e para aquele lanchinho rápido! <br><br>
        *Acrescente seu recheio preferido para acompanhar seus rings.`,
        image: "./assets/Menu/Rings/Rings10.webp",
        price: 10,
    },
]

const stuffingPots = {
    name: "POTES DE RECHEIO",
    category: "stuffingPots",
    items: [
        {
            flavour: "BRIGADEIRO",
            span: "",
            description: "",
            image: "./assets/Menu/Potes/poteBrigadeiro.webp",
            price: 4,
        },
        {
            flavour: "DOCE DE LEITE",
            span: "",
            description: "",
            image: "./assets/Menu/Potes/PoteDoceDeLeite.webp",
            price: 4,
        },
        {
            flavour: "CREME DE NINHO",
            span: "",
            description: "",
            image: "./assets/Menu/Potes/poteCremeNinho.webp",
            price: 5,
        },
        {
            flavour: "KITKAT CREMOSO",
            span: "",
            description: "",
            image: "./assets/Menu/Potes/poteKitkat.webp",
            price: 5,
        },
        {
            flavour: "NUTELLA",
            span: "",
            description: "",
            image: "./assets/Menu/Potes/poteNutella.webp",
            price: 5,
        },
        {
            flavour: "OVOMALTINE",
            span: "",
            description: "",
            image: "./assets/Menu/Potes/poteOvomaltine.webp",
            price: 5,
        },
        {
            flavour: "LAKAOREO",
            span: "",
            description: "",
            image: "./assets/Menu/Potes/PoteLakaOreo.webp",
            price: 5,
        },
    ]
}

const drinks = [
    {
        flavour: "ÁGUA SEM GÁS",
        span: "500ml",
        description: "Água natural.",
        image: "./assets/Menu/Bebidas/Agua.jpg",
        price: 2
    },
    {
        flavour: "ÁGUA COM GÁS",
        span: "510ml",
        description: "Água gaseificada",
        image: "./assets/Menu/Bebidas/AguaComGas.jpg",
        price: 3
    },
    // {
    //     flavour: "SODA ITALIANA CRANBERRY",
    //     span: "500ml",
    //     description: "Frescor e um toque doce suave definem essa bebida! Feita com água com gás e xarope de frutas importado e gelo.",
    //     image: "./assets/Menu/Bebidas/Cranberry.webp",
    //     price: 12
    // },
    // {
    //     flavour: "SODA ITALIANA MAÇÃ VERDE",
    //     span: "500ml",
    //     description: "Sabor excepcional, o preferido daqueles que tem o paladar mais doce.  Feita com água com gás e xarope de frutas importado e gelo.",
    //     image: "./assets/Menu/Bebidas/MacaVerde.webp",
    //     price: 12
    // },
    // {
    //     flavour: "SODA ITALIANA LIMÃO SICILIANO",
    //     span: "500ml",
    //     description: "Refrescante e cítrico, uma verdadeira limonada premium. Feita com água com gás e xarope de frutas importado e gelo.",
    //     image: "./assets/Menu/Bebidas/LimaoSiciliano.webp",
    //     price: 12
    // },
    {
        flavour: "COCA-COLA",
        span: "350ml",
        description: "Refrigerante Coca-Cola Lata",
        image: "./assets/Menu/Bebidas/cocacola.webp",
        price: 4
    },
    {
        flavour: "GUARANÁ",
        span: "350ml",
        description: "Refrigerante Guaraná Antartica Lata",
        image: "./assets/Menu/Bebidas/guarana.webp",
        price: 4
    },

]

const menuView = [
    {
        name: "TRUDELS",
        category: "trudel",
        items: trudel
    },
    {
        name: "TRUDELS SALGADOS",
        category: "savoryTrudel",
        items: savoryTrudel
    },
    {
        name: "TRUDEL RINGS",
        category: "rings",
        items: trudelRings
    },
    {
        name: "SORVETES",
        category: "icecream",
        items: iceCream
    },
    {
        name: "ADICIONAIS",
        category: "additional",
        items: additional
    },

    {
        name: "ADICIONAIS SALGADOS",
        category: "savoryAdditional",
        items: savoryAdditional
    },
    {
        name: "BEBIDAS",
        category: "drinks",
        items: drinks
    },
    {
        name: "TRUDEL FINGERS <br> <small>(EVENTOS/FESTAS/PRESENTE)</small>",
        category: "fingers",
        items: [
            {
                flavour: "TRUDEL BOX",
                span: "",
                description: 'Linda caixa de presente com 9 unidades dos nossos deliciosos Trudel Fingers. Personalize como desejar, escolha os sabores e adicionais.<br><br> <small>* Apenas encomendas.<br>(2 dias de antecedência)</small>',
                image: "./assets/Menu/Fingers/trudelBox.webp",
                price: 50
            },
            {
                flavour: "EVENTOS / FESTAS",
                span: "",
                description: 'Nossos irresistíveis trudels, no tamanho ideal (35 gramas) para surpreender seus convidados e deixar sua mesa de doces simplesmente maravilhosa em seu evento.<br><br> <small>* Apenas encomendas.<br>(1 semana de antecedência)</small>',
                image: "./assets/Menu/Fingers/fingers.webp",
                price: '**Sob Consulta'
            },
        ]
    },
]

// Full-Menu data 

const miniTrudel =
{
    name: "MINI-TRUDELS",
    category: "miniTrudel",
    items: trudel.filter(item => item.miniPrice).map(filtered => {
        return {
            flavour: filtered.flavour,
            price: filtered.miniPrice,
            description: filtered.description,
            image: filtered.image.replace('Trudels', 'MiniTrudels')
        }
    })
}

const miniAdd =
{
    name: "MINI-ADICIONAL",
    category: "miniAdditional",
    items: additional.filter(item => item.miniPrice).map(filtered => {
        return {
            flavour: filtered.flavour,
            price: filtered.miniPrice,
            description: filtered.description,
            image: filtered.image
        }
    })
}

const promotion = {
    name: "COMBO DA QUINTA",
    category: "promotion",
    items: [
        {
            value: "COMBINAÇÃO DA QUINTA",
            flavour: "TAMANHO NORMAL",
            description: "Delicioso Trudel de Doce de Leite com adicional de Granulado e sorvete de Iogurte com Frutas Vermelhas por um preço especial!",
            image: "./assets/Menu/Promotion/thursdayCombination.webp",
            price: 14.00,
        },
        {
            value: "MINI-COMBINAÇÃO DA QUINTA",
            flavour: "TAMANHO MINI",
            description: "Delicioso Trudel de Doce de Leite com adicional de Granulado e sorvete de Iogurte com Frutas Vermelhas por um preço especial!",
            image: "./assets/Menu/Promotion/thursdayCombination.webp",
            price: 11.00,
        },

    ]
}

const combo = {
    name: "COMBO DA SEMANA",
    category: "combo",
    items: [
        {
            value: "COMBO DA SEMANA",
            flavour: "Combo",
            description: "Trudel de Frango com adicional de Parmesão Ralado + Mini Trudel de Brigadeiro + Refrigerante!",
            image: "./assets/Menu/Promotion/weekCombination.webp",
            price: 21.50,
        },
    ]
}

const christmasTrudel = {
    name: "ESPECIAL DE NATAL",
    category: "christmasTrudel",
    items: [
        {
            flavour: "TRUDELTTONE",
            description: "Nossa deliciosa e exclusiva massa romena, com um recheio muito especial de Natal: brigadeiro branco sabor panetone e frutas cristalizadas!",
            image: "./assets/Menu/Christmas/Trudeltone.webp",
            price: 16,
            miniPrice: 12
        },
        {
            flavour: "TRUDELTTONE GOTAS",
            description: "Nosso recheio especial de Natal na versão com chocolate: brigadeiro branco sabor chocotone com gotas de chocolate!",
            image: "./assets/Menu/Christmas/TrudeltoneGotas.webp",
            price: 16,
            miniPrice: 12
        },
    ]
}

const miniChristmas =
{
    name: "MINI-ESPECIAL DE NATAL",
    category: "miniChristmasTrudel",
    items: christmasTrudel.items.filter(item => item.miniPrice).map(filtered => {
        return {
            flavour: filtered.flavour,
            price: filtered.miniPrice,
            description: filtered.description,
            image: filtered.image
        }
    })
}


const today = new Date()
if (today.getDay() === 4) {
    menuView.unshift(promotion)
} else {
    menuView.unshift(combo)
}



// menuView.unshift(christmasTrudel)

const entregas = {
    name: "ENTREGAS",
    category: "delivery",
    items: [
        {
            value: '4 REAIS',
            item: 'TAXA DE ENTREGA',
            price: 4
        },
        {
            value: '5 REAIS',
            item: 'TAXA DE ENTREGA',
            price: 5
        },
        {
            value: '6 REAIS',
            item: 'TAXA DE ENTREGA',
            price: 6
        },
        {
            value: '7 REAIS',
            item: 'TAXA DE ENTREGA',
            price: 7
        },
        {
            value: '8 REAIS',
            item: 'TAXA DE ENTREGA',
            price: 8
        },
        {
            value: 'GRÁTIS',
            item: 'CORTESIA',
            price: 0
        }
    ]
}

const menu = [
    ...menuView,
    miniTrudel,
    miniChristmas,
    miniAdd,
    stuffingPots,
    promotion,
    entregas
]

const payments = ['DINHEIRO', 'DÉBITO', 'CRÉDITO', 'PIX']

