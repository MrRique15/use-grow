const dataProducts = [
    {
        id: 1,
        title: 'Whey Protein - MarcaA',
        description: 'Whey Protein - MarcaA, para aqueles que procuram resultado!',
        price: 'R$ 98,00',
        image: require('./produtos/productIcon.jpg'),
        storeUrl: 'https://www.gsuplementos.com.br/medium-whey-protein-1kg-growth-supplements-p986001',
    },
    {
        id: 2,
        title: 'Glutamina - MarcaA',
        description: 'Glutamina - MarcaA, a melhor...',
        price: 'R$ 120,00',
        image: require('./produtos/productIcon.jpg'),
        storeUrl: 'https://www.gsuplementos.com.br/l-glutamina-250g-growth-supplements-p985843',
    },
    {
        id: 3,
        title: 'Colágeno - MarcaA',
        description: 'Colágeno Hidrolisado - MarcaA, o mais indicado para seus ossos',
        price: 'R$ 63,00',
        image: require('./produtos/productIcon.jpg'),
        storeUrl: 'https://www.gsuplementos.com.br/colageno-hidrolisado-150g-growth-supplements-p987952',
    },
    {
        id: 4,
        title: 'Triptofano - MarcaA',
        description: 'Triptofano - MarcaA, para quem busca saúde mental!',
        price: 'R$ 41,90',
        image: require('./produtos/productIcon.jpg'),
        storeUrl: 'https://www.gsuplementos.com.br/triptofano-120-caps-growth-supplements-p987937',
    },
    {
        id: 5,
        title: 'Brain Focus - MarcaB',
        description: 'Brain Focus - MarcaB, indicado para foco nos estudos.',
        price: 'R$ 60,20',
        image: require('./produtos/productIcon.jpg'),
        storeUrl: 'https://www.puravida.com.br/brain-focus-70310',
    },
    {
        id: 6,
        title: 'Whey Protein - MarcaB',
        description: 'Whey Protein - MarcaB, para aqueles que procuram resultado!',
        price: 'R$ 87,70',
        image: require('./produtos/productIcon.jpg'),
        storeUrl: 'https://www.puravida.com.br/whey-protein-grassfed-70213',
    },
    {
        id: 7,
        title: 'Glutamina - MarcaC',
        description: 'Glutamina - MarcaC, a melhor...',
        price: 'R$ 12,00',
        image: require('./produtos/productIcon.jpg'),
        storeUrl: 'https://www.nutrify.com.br/glutamine-nutrify/p'
    },
    {
        id: 8,
        title: 'Colágeno - MarcaD',
        description: 'Colágeno Hidrolisado - MarcaD, o mais indicado para seus ossos, ajuda na construção de fibras musculares e ainda mantém todo seu sistema imunológico em dia, assim como outros no mercado que proporcionam a mesma fórmula inovadora e exclusiva',
        price: 'R$ 76,00',
        image: require('./produtos/productIcon.jpg'),
        storeUrl: 'https://www.fortlifebrasil.com.br/colageno-skin-abacaxi-com-hortela-015',
    },
    {
        id: 9,
        title: 'Triptofano - MarcaE',
        description: 'Triptofano - MarcaE, para quem busca saúde mental!',
        price: 'R$ 85,40',
        promoCode: 'TRIPTO10',
        image: require('./produtos/productIcon.jpg'),
        storeUrl: 'https://www.puravida.com.br/brain-focus-70310',
    },
    {
        id: 10,
        title: 'Brain Focus - MarcaF',
        description: 'Brain Focus - MarcaF, indicado para foco nos estudos.',
        price: 'R$ 42,70',
        promoCode: 'BRAIN10',
        image: require('./produtos/productIcon.jpg'),
        storeUrl: 'https://www.puravida.com.br/brain-focus-70310',
    },
];

const userProfileData = {
    "name": "Usuário Teste",
    "age": 20,
    "weight": 75.8,
    "height": 1.80,
    "goal": "Emagrecer",
    "finishedExercices": 235,
    "daysCount": 43,
    "subscription": "Premium",
    "tasks": [
        [
            {
                id: 1,
                title: 'Flexao',
                description: '3x10',
                done: true
            },
            {
                id: 2,
                title: 'Supino',
                description: '3x12',
                done: false
            },
            {
                id: 3,
                title: 'Escada',
                description: '3x15',
                done: false
            },
        ],
        [
            {
                id: 1,
                title: 'Supino',
                description: '3x10',
                done: false
            },
            {
                id: 2,
                title: 'Corda',
                description: '3x12',
                done: false
            },
            {
                id: 3,
                title: 'Esteira',
                description: '3x15',
                done: false
            },
        ],
        [],
        [],
        [],
        [
            {
                id: 1,
                title: 'Abdominal',
                description: '3x10',
                done: false
            },
            {
                id: 2,
                title: 'Corda',
                description: '3x12',
                done: false
            },
            {
                id: 3,
                title: 'Esteira',
                description: '3x15',
                done: false
            },
        ],
        [],
    ],
    'eatings': [
        {
            'name': 'Café da manhã',
            'foods': [
                {
                    'name': 'Pão',
                    'amount': '100g'
                },
                {
                    'name': 'Requeijão',
                    'amount': '150g'
                },
                {
                    'name': 'Bolacha',
                    'amount': '100g'
                }
            ]
        },
        {
            'name': 'Almoço',
            'foods': [
                {
                    'name': 'Carne',
                    'amount': '100g'
                },
                {
                    'name': 'Batata Doce',
                    'amount': '150g'
                },
                {
                    'name': 'Whey',
                    'amount': '100g'
                },
                {
                    'name': 'Arroz',
                    'amount': '100g'
                },
                {
                    'name': 'Alface',
                    'amount': '150g'
                },
                {
                    'name': 'Frango',
                    'amount': '150g'
                },
                {
                    'name': 'Arroz',
                    'amount': '100g'
                },
                {
                    'name': 'Alface',
                    'amount': '150g'
                },
                {
                    'name': 'Frango',
                    'amount': '150g'
                },
                {
                    'name': 'Arroz',
                    'amount': '100g'
                }
            ]
        },
        {
            'name': 'Jantar',
            'foods': [
                {
                    'name': 'Arroz',
                    'amount': '100g'
                },
                {
                    'name': 'Alface',
                    'amount': '150g'
                },
                {
                    'name': 'Frango',
                    'amount': '150g'
                }
            ]
        },
    ]
}

export { dataProducts, userProfileData }