export default function dataItens() {
    const data = [
        {
            id: 1,
            title: 'Whey Protein - Growth',
            description: 'Whey Protein - Growth, para aqueles que procuram resultado!',
            price: 'R$ 98,00',
            image: require('./produtos/wheyprotein.png'),
            storeUrl: 'https://www.gsuplementos.com.br/medium-whey-protein-1kg-growth-supplements-p986001',
        },
        {
            id: 2,
            title: 'Glutamina - Growth',
            description: 'Glutamina - Growth, a melhor...',
            price: 'R$ 120,00',
            image: require('./produtos/glutamina.png'),
            storeUrl: 'https://www.gsuplementos.com.br/l-glutamina-250g-growth-supplements-p985843',
        },
        {
            id: 3,
            title: 'Colágeno - Growth',
            description: 'Colágeno Hidrolisado - Growth, o mais indicado para seus ossos',
            price: 'R$ 63,00',
            image: require('./produtos/colageno.png'),
            storeUrl: 'https://www.gsuplementos.com.br/colageno-hidrolisado-150g-growth-supplements-p987952',
        },
        {
            id: 4,
            title: 'Triptofano - Growth',
            description: 'Triptofano - Growth, para quem busca saúde mental!',
            price: 'R$ 41,90',
            image: require('./produtos/triptofano.png'),
            storeUrl: 'https://www.gsuplementos.com.br/triptofano-120-caps-growth-supplements-p987937',
        },
        {
            id: 5,
            title: 'Brain Focus - Puravida',
            description: 'Brain Focus - Puravida, indicado para foco nos estudos.',
            price: 'R$ 60,20',
            image: require('./produtos/brainfocus.png'),
            storeUrl: 'https://www.puravida.com.br/brain-focus-70310',
        },
        {
            id: 6,
            title: 'Whey Protein - Puravida',
            description: 'Whey Protein - Puravida, para aqueles que procuram resultado!',
            price: 'R$ 87,70',
            image: require('./produtos/wheyprotein.png'),
            storeUrl: 'https://www.puravida.com.br/whey-protein-grassfed-70213',
        },
        {
            id: 7,
            title: 'Glutamina - ZecaElementos',
            description: 'Glutamina - ZecaElementos, a melhor...',
            price: 'R$ 12,00',
            image: require('./produtos/glutamina.png'),
            storeUrl: 'https://www.nutrify.com.br/glutamine-nutrify/p'
        },
        {
            id: 8,
            title: 'Colágeno - FortLife',
            description: 'Colágeno Hidrolisado - FortLife, o mais indicado para seus ossos, ajuda na construção de fibras musculares e ainda mantém todo seu sistema imunológico em dia, assim como outros no mercado que proporcionam a mesma fórmula inovadora e exclusiva',
            price: 'R$ 76,00',
            image: require('./produtos/colageno.png'),
            storeUrl: 'https://www.fortlifebrasil.com.br/colageno-skin-abacaxi-com-hortela-015',
        },
        {
            id: 9,
            title: 'Triptofano - ToastedBrain',
            description: 'Triptofano - ToastedBrain, para quem busca saúde mental!',
            price: 'R$ 85,40',
            promoCode: 'TRIPTO10',
            image: require('./produtos/triptofano.png'),
            storeUrl: 'https://www.puravida.com.br/brain-focus-70310',
        },
        {
            id: 10,
            title: 'Brain Focus - Brainly',
            description: 'Brain Focus - Brainly, indicado para foco nos estudos.',
            price: 'R$ 42,70',
            promoCode: 'BRAINF10',
            image: require('./produtos/brainfocus.png'),
            storeUrl: 'https://www.puravida.com.br/brain-focus-70310',
        },
    ];

    return data;
}