import { Product } from '../types/product';

const ARCHIVE_PATH = '/images/archive';
const CONCEPT_PATH = '/images/concept';
const MACRO_PATH = '/images/macro';
const PRODUCT_PATH = '/images/product';
const SWATCH_PATH = '/images/swatch';

export const productsData: Product[] = [
  {
    id: '1',
    title: 'Gentle Hand & Body Wash',
    volume: '300 ml',
    slug: 'body-wash',
    images: {
      archiveImage: `${ARCHIVE_PATH}/archive_1.webp`,
      conceptMainImage: `${CONCEPT_PATH}/concept_1.webp`,
      swatchImage: `${SWATCH_PATH}/swatch_1.webp`,
      productMainImage: `${PRODUCT_PATH}/product_1.webp`,
      macroImages: {
        macro1: `${MACRO_PATH}/macro_1_1.webp`,
        macro2: `${MACRO_PATH}/macro_1_2.webp`,
        macro3: `${MACRO_PATH}/macro_1_3.webp`,
      },
    },
    conceptText: {
      concept1:
        'A sacred journey to oneself. The ritual begins as the gel touches water, transforming into a delicate foam. Bubbles pop like goosebumps on damp skin, while the spicy-sweet notes of amber, cedarwood, and roasted coffee awaken memories of your true purpose.',
      concept2:
        'The rebirth washes over you with warm streams of water, cleansing the body of restless, cluttered thoughts. In their place, it leaves the serenity of cashmere wood, everlasting flower, and peach honey — rich and lingering, like time itself.',
    },
    infoText: {
      howToUse:
        'Lather a small amount of gel in your palms and gently massage onto damp skin. To fully experience the fragrance, leave the rich lather on your body for a few seconds, then rinse thoroughly with warm water.',
      ingredients:
        'Aqua, Cocamidopropyl Betaine, Coco-Glucoside, Lauryl Glucoside, Glyceryl Oleate, Sodium Lauroyl Methyl Isethionate, Sodium Methyl Oleoyl Taurate, Capryloyl/Caproyl Methyl Glucamide, Lauroyl/Myristoyl Methyl Glucamide, Sodium Coco Sulfate, Cocamide DEA, Ethylhexylglycerin, Benzyl Alcohol, Glycerin, Aloe Barbadensis Leaf Extract, Sodium Chloride, Hydroxyethyl Urea, Allantoin, Panthenol, Hydroxypropyl Guar, Parfum, PEG-40 Hydrogenated Castor Oil, Citric Acid, Tocopheryl Acetate, Disodium EDTA, Linalool.',
      shelfLife: '36 months',
    },
    desktopPos: { x: 100, y: 150, width: 299 },
    scale: 0.53,
  },
  {
    id: '2',
    title: 'Body Moisturizer',
    volume: '300 ml',
    slug: 'body-moisturizer-full-size',
    images: {
      archiveImage: `${ARCHIVE_PATH}/archive_2.webp`,
      conceptMainImage: `${CONCEPT_PATH}/concept_2.webp`,
      swatchImage: `${SWATCH_PATH}/swatch_2.webp`,
      productMainImage: `${PRODUCT_PATH}/product_2.webp`,
      macroImages: {
        macro1: `${MACRO_PATH}/macro_2_1.webp`,
        macro2: `${MACRO_PATH}/macro_2_2.webp`,
        macro3: `${MACRO_PATH}/macro_2_3.webp`,
      },
    },
    conceptText: {
      concept1:
        'KATARSIS Body Cream is a sacred ritual of personal liberation and deep body care. Upon touching the skin, the cream unfolds with top notes of roasted coffee and nutmeg, igniting a profound awakening of both body and soul. ',
      concept2: `At the fragrance's heart lies a soft peach, enveloping your skin in pure tenderness. Fear fades away. As the base notes of cashmere wood and amber emerge, you feel a release down to your very core. The ritual is complete.`,
    },
    infoText: {
      howToUse:
        'Warm the cream in your palms and apply onto the skin using slow, gentle strokes. Let yourself dissolve into the sweet, spicy fragrance while the cream absorbs completely, filling your body with the scent of release.',
      ingredients:
        'Aqua, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Olea Europaea (Olive) Fruit Oil, Glycerin, Cetearyl Alcohol, Caprylic/Capric Triglyceride, Glyceryl Stearate, Butyrospermum Parkii (Shea Butter) Oil, Cetyl Palmitate, Isopropyl Myristate, Ethylhexyl Palmitate, Lecithin, Biotin, Folic Acid, Cyanocobalamin, Niacinamide, Pantothenic Аcid, Pyridoxine, Riboflavin, Thiamine, Yeast Polypeptides, Hydrolyzed Elastin, Desamido Collagen, Paullinia Cupana Seed Extract, Daucus Carota Sativa Root Extract, Tocopheryl Acetate, Xanthan Gum, Benzyl Alcohol, Benzoic Acid, Dehydroacetic Acid, Beta-Karotene, Parfum',
      shelfLife: '24 months',
    },
    desktopPos: { x: 520, y: -380, width: 320 },
    scale: 0.57,
  },
  {
    id: '3',
    title: 'Diffuser Set',
    volume: '100 ml',
    slug: 'diffuser-set',
    images: {
      archiveImage: `${ARCHIVE_PATH}/archive_3.webp`,
      conceptMainImage: `${CONCEPT_PATH}/concept_3.webp`,
      swatchImage: `${SWATCH_PATH}/swatch_3.webp`,
      productMainImage: `${PRODUCT_PATH}/product_3.webp`,
      macroImages: {
        macro1: `${MACRO_PATH}/macro_3_1.webp`,
        macro2: `${MACRO_PATH}/macro_3_2.webp`,
        macro3: `${MACRO_PATH}/macro_3_3.webp`,
      },
    },
    conceptText: {
      concept1:
        'The soul is like a glass vessel. At first, filled only with the ephemeral and the weightless, it seems empty—an unsteady spinning top, unable to complete even half a turn. Yet, with every inner awakening, it fills with emotions, sacred knowledge, and the aromas of lived revelations.',
      concept2:
        'Here, the sweetness of peach and honey blends with the rustle of cedar, the sharp warmth of clove and pepper, and the enduring strength of immortelle, amber, and roasted coffee. The fragile, spinning vessel finds its balance and begins its dance. A turn. Zen. Katharsis.',
    },
    infoText: {
      howToUse:
        'Open the refill bottle and pour the liquid into the glass vessel. Insert the reeds into the bottle and flip them after a few hours. Adjust the fragrance intensity by changing the number of reeds used. To maintain a steady aroma, flip the reeds once every 3 days.',
      ingredients:
        'MMB (3-methoxy-3-methyl-1-butanol), Isopropylidene glycerol, Parfum.',
      shelfLife: '36 months',
    },
    desktopPos: { x: 1269, y: -380, width: 296 },
    scale: 0.53,
  },
  {
    id: '4',
    title: 'Eau de parfum',
    volume: '15 ml',
    slug: 'parfum-small',
    images: {
      archiveImage: `${ARCHIVE_PATH}/archive_4.webp`,
      conceptMainImage: `${CONCEPT_PATH}/concept_4.webp`,
      swatchImage: `${SWATCH_PATH}/swatch_4.webp`,
      productMainImage: `${PRODUCT_PATH}/product_4.webp`,
      macroImages: {
        macro1: `${MACRO_PATH}/macro_4_1.webp`,
        macro2: `${MACRO_PATH}/macro_4_2.webp`,
        macro3: `${MACRO_PATH}/macro_4_3.webp`,
      },
    },
    conceptText: {
      concept1:
        'A single touch of the KATARSIS fragrance is a journey into the deepest corners of the soul. Nutmeg and roasted coffee stir thoughts of true significance. Immortelle and honey bring a sense of ultimate self-alignment to this mystical experience. Amber and labdanum envelop you, calling for a sacred encounter with the intangible—with that which remains undiscovered within us.',
      notes: {
        top: 'Nutmeg, Roasted Coffee, Clove, Pink Pepper',
        heart: 'Immortelle, Honey, Peach  ',
        base: 'Cedarwood, Cashmere Wood, Labdanum, Amber  ',
      },
    },
    infoText: {
      howToUse:
        'Spray the fragrance onto your skin or clothing from a distance of about 50 cm. Alternatively, mist the perfume into the air in front of you and gently step into the scent cloud',
      ingredients:
        'Alcohol Denat, Fragrance, Aqua (Water), Linalool, Cinnamyl Alcohol, Eugenol, Limonene, Isoeugenol',
      shelfLife: '5 years',
    },
    desktopPos: { x: -198, y: 324, width: 380 },
    scale: 0.68,
  },
  {
    id: '5',
    title: 'Body Moisturizer',
    volume: '100 ml',
    slug: 'body-moisturizer-small',
    images: {
      archiveImage: `${ARCHIVE_PATH}/archive_5.webp`,
      conceptMainImage: `${CONCEPT_PATH}/concept_5.webp`,
      swatchImage: `${SWATCH_PATH}/swatch_5.webp`,
      productMainImage: `${PRODUCT_PATH}/product_5.webp`,
      macroImages: {
        macro1: `${MACRO_PATH}/macro_5_1.webp`,
        macro2: `${MACRO_PATH}/macro_5_2.webp`,
        macro3: `${MACRO_PATH}/macro_5_3.webp`,
      },
    },
    conceptText: {
      concept1:
        'The last sip of coffee, infused with clove, pink pepper, and nutmeg — the secret recipe for a drink you take right before making a monumental choice. The coffee has grown a bit cold; as you weigh your options, time stretches thinner and moves slower.',
      concept2:
        'They say that lingering time smells of immortelle, peach, and honey. These very notes are captured within the scent of KATARSIS cream. Along with them live the rich aromas of cedarwood, labdanum, amber, and cashmere wood.',
    },
    infoText: {
      howToUse:
        'Warm the cream between your hands and glide it onto your skin with slow, massaging motions. Apply with a gentle touch. As you dissolve into the sweet and spicy aromas, allow the cream to absorb fully, infusing your body with the scent of ultimate liberation.',
      ingredients:
        'Aqua, Cetearyl Alcohol, Glyceryl Stearate, Olea Europaea (Olive) Fruit Oil, Prunus Amygdalus Dulcis (Sweet Almond) Oil, Butyrospermum Parkii (Shea Butter) Oil, Ceteareth-20, Ceteareth-12, Cetyl Palmitate, Glycerin, Laminaria Digitata Extract, Isopropyl Myristate, Ethylhexylglycerin, Benzyl Alcohol, Isoamyl Laurate, Caprylyl Methicone, Squalane, Theobroma Cacao Seed Butter, Panthenol, Carbomer, Tocopheryl Acetate, Parfum, Triethanolamine, Linalool.',
      shelfLife: '36 months',
    },
    desktopPos: { x: 400, y: 324, width: 560 },
    scale: 1,
  },
  {
    id: '6',
    title: 'Egg Candle Set',
    volume: '6 pcs',
    slug: 'candle-set',
    images: {
      archiveImage: `${ARCHIVE_PATH}/archive_6.webp`,
      conceptMainImage: `${CONCEPT_PATH}/concept_6.webp`,
      swatchImage: `${SWATCH_PATH}/swatch_6.webp`,
      productMainImage: `${PRODUCT_PATH}/product_6.webp`,
      macroImages: {
        macro1: `${MACRO_PATH}/macro_6_1.webp`,
        macro2: `${MACRO_PATH}/macro_6_2.webp`,
        macro3: `${MACRO_PATH}/macro_6_3.webp`,
      },
    },
    conceptText: {
      concept1: `The egg is a symbol of life, fragile resilience, and effortless harmony in any interior or setting. So why shouldn't it become a candle?`,
      concept2:
        'The deep, spicy-sweet KATARSIS fragrance warms your space with notes of nutmeg, roasted coffee, and clove. It gently prepares you for sweet dreams with the tenderness of honeyed peach, while whispers of amber smoke ward off the shadows and guard your peace. Six candles are packed in a paper egg tray and look almost like real ones.',
    },
    infoText: {
      howToUse:
        'Place candles on a candle holder or a heat-resistant dish before lighting. Ensure the candle stands perfectly straight. Do not place burning candles directly on a tabletop or any other flammable surface. Keep at least 10 cm of distance between two burning candles. If a long wick carbon buildup (mushrooming) forms while burning, extinguish the candle and trim the wick to 0.5 cm before relighting.',
      ingredients: 'Paraffin Wax, Parfum (Fragrance), Cotton Wick.',
      shelfLife: 'Unlimited',
    },
    desktopPos: { x: 1178, y: 324, width: 478 },
    scale: 0.85,
  },
  {
    id: '7',
    title: 'Hair Perfume',
    volume: '50 ml',
    slug: 'hair-perfume',
    images: {
      archiveImage: `${ARCHIVE_PATH}/archive_7.webp`,
      conceptMainImage: `${CONCEPT_PATH}/concept_7.webp`,
      swatchImage: `${SWATCH_PATH}/swatch_7.webp`,
      productMainImage: `${PRODUCT_PATH}/product_7.webp`,
      macroImages: {
        macro1: `${MACRO_PATH}/macro_7_1.webp`,
        macro2: `${MACRO_PATH}/macro_7_2.webp`,
        macro3: `${MACRO_PATH}/macro_7_3.webp`,
      },
    },
    conceptText: {
      concept1:
        'The sheerest mist, infused with the scent of labdanum, amber, and nutmeg, blurs the line between dream and reality, resetting both senses and thoughts.',
      concept2:
        'A deep dive into the soul washes over you like a warm wave of revelation, comforting you with notes of roasted coffee, pink pepper, and clove. Honey and peach envelop your thoughts, gently brushing against your hair. A personal catharsis, yet to be fully embraced.',
    },
    infoText: {
      howToUse:
        'The Perfumed Hair Veil gently envelops your hair in a cloud of fragrance, maintaining its rich intensity over time while preserving the hair’s natural movement with a weightless, touchable finish.',
      ingredients:
        'Aqua, Propylene Glycol, Parfum, PPG-26-Buteth-26, PEG-40 Hydrogenated Castor Oil, Phenoxyethanol, Ethylhexylglycerin, Tetrasodium Glutamate Diacetate, Benzyl Benzoate, Eugenol, Limonene, Linalool.',
      shelfLife: '24 months',
    },
    desktopPos: { x: -143, y: 841, width: 269 },
    scale: 0.48,
  },
  {
    id: '8',
    title: 'Fabric softener',
    volume: '1000 ml',
    slug: 'fabric-softener',
    images: {
      archiveImage: `${ARCHIVE_PATH}/archive_8.webp`,
      conceptMainImage: `${CONCEPT_PATH}/concept_8.webp`,
      swatchImage: `${SWATCH_PATH}/swatch_8.webp`,
      productMainImage: `${PRODUCT_PATH}/product_8.webp`,
      macroImages: {
        macro1: `${MACRO_PATH}/macro_8_1.webp`,
        macro2: `${MACRO_PATH}/macro_8_2.webp`,
        macro3: `${MACRO_PATH}/macro_8_3.webp`,
      },
    },
    conceptText: {
      concept1:
        'Tired from a day of sacred thoughts and worldly anxieties, the princess on the pea sinks into the cool softness of feather beds.',
      concept2:
        'Her eyelids close, and in the unreality of the creeping drowsiness, she sees dragons drinking roasted coffee with nutmeg, pepper, and clove, honey rivers with peach banks, amulets of immortelle protecting against charms, and mighty cedars grown to the very storm clouds. Sleep, princess, the fragrance left on the pillow will vigilantly guard your sleep.',
    },
    infoText: {
      howToUse:
        'Use as a perfumed fabric conditioner for machine washing. Add 30–50 ml of the product to the designated washing machine dispenser. Shake well before use. Suitable for daily laundry. Not recommended for delicate fabrics.',
      ingredients:
        'Aqua, 5–15% Cationic Surfactants, <5% Non-ionic Surfactants, Complexing Agents, Preservative, Parfum (Fragrance).',
      shelfLife: '36 months',
    },
    desktopPos: { x: 529, y: 841, width: 320 },
    scale: 0.57,
  },
  {
    id: '9',
    title: 'Eau de Parfum',
    volume: '50 ml',
    slug: 'parfum-full-size',
    images: {
      archiveImage: `${ARCHIVE_PATH}/archive_9.webp`,
      conceptMainImage: `${CONCEPT_PATH}/concept_9.webp`,
      swatchImage: `${SWATCH_PATH}/swatch_9.webp`,
      productMainImage: `${PRODUCT_PATH}/product_9.webp`,
      macroImages: {
        macro1: `${MACRO_PATH}/macro_9_1.webp`,
        macro2: `${MACRO_PATH}/macro_9_2.webp`,
        macro3: `${MACRO_PATH}/macro_9_3.webp`,
      },
    },
    conceptText: {
      concept1:
        'A single touch of the KATARSIS fragrance is a journey into the deepest corners of the soul. Nutmeg and roasted coffee stir thoughts of true significance. Immortelle and honey bring a sense of ultimate self-alignment to this mystical experience. Amber and labdanum envelop you, calling for a sacred encounter with the intangible—with that which remains undiscovered within us.',
      notes: {
        top: 'Nutmeg, Roasted Coffee, Clove, Pink Pepper',
        heart: 'Immortelle, Honey, Peach',
        base: 'Cedarwood, Cashmere Wood, Labdanum, Amber',
      },
    },
    infoText: {
      howToUse:
        'Spray the fragrance onto your skin or clothing from a distance of about 50 cm. Alternatively, mist the perfume into the air in front of you and gently step into the scent cloud',
      ingredients:
        'Alcohol Denat, Fragrance, Aqua (Water), Linalool, Cinnamyl Alcohol, Eugenol, Limonene, Isoeugenol',
      shelfLife: '5 years',
    },
    desktopPos: { x: 1206, y: 841, width: 423 },
    scale: 0.76,
  },
];
