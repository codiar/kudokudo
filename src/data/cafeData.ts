import blue_mojitoImage from '../assets/images/blue-mojito.jpg';
import browniesImage from '../assets/images/brownies.jpg';
import chocolate_strawberry_waffleImage from '../assets/images/chocolate-strawberry-waffle.jpg';
import cookiesImage from '../assets/images/cookies.jpg';
import crepe_kinderImage from '../assets/images/crepe-kinder.jpg';
import crepe_nutellaImage from '../assets/images/crepe-nutella.jpg';
import fruit_pancakeImage from '../assets/images/fruit-pancake.jpg';
import iced_coffeeImage from '../assets/images/iced-coffee.jpg';
import karak_teaImage from '../assets/images/karak-tea.jpg';
import lotus_waffleImage from '../assets/images/lotus-waffle.jpg';
import mango_smoothieImage from '../assets/images/mango-smoothie.jpg';
import milk_cakeImage from '../assets/images/milk-cake.jpg';
import orange_juiceImage from '../assets/images/orange-juice.jpg';
import oreo_milkshakeImage from '../assets/images/oreo-milkshake.jpg';
import spanish_latteImage from '../assets/images/spanish-latte.jpg';
import strawberry_mojitoImage from '../assets/images/strawberry-mojito.jpg';
import turkish_coffeeImage from '../assets/images/turkish-coffee.jpg';

export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  image: string;
  isPopular?: boolean;
  options?: {
    name: string;
    choices: { label: string; priceDelta: number }[];
  }[];
  addOns?: {
    id: string;
    label: string;
    price: number;
  }[];
}

export interface BusinessInfo {
  name: string;
  tagline: string;
  description: string;
  primaryPhone: string;
  address: string;
  googleMapsUrl: string;
  workingHours: string;
  instagram: string;
  orderingNote: string;
}

export const BUSINESS_INFO: BusinessInfo = {
  name: "كودو كودو كافيه",
  tagline: "مكانك للمزاج",
  description: "قهوة مختصة • مشروبات باردة • وافل وكريب وكيك طازج • مكانك الراقي للمزاج والأوقات الجميلة.",
  primaryPhone: "07782451903",
  address: "كربلاء - حي الحسين - مقابل القاعة المغلقة - بناية كودو كودو - الطابق الأرضي",
  googleMapsUrl: "https://maps.app.goo.gl/ySzrK481q9wbSPuo6?g_st=ic",
  workingHours: "12:00 ظهرًا إلى 12:00 مساءً",
  instagram: "kudokudo.cafe",
  orderingNote: "الطلب متاح عبر الهاتف أو حفظ الفاتورة كصورة وعرضها على الكاشير مباشرة."
};

export const CATEGORIES = [
  { id: "all", name: "الكل" },
  { id: "cold-drinks", name: "المشروبات الباردة" },
  { id: "hot-drinks", name: "المشروبات الساخنة" },
  { id: "waffles", name: "الوافل" },
  { id: "crepes", name: "الكريب" },
  { id: "pancakes", name: "البان كيك" },
  { id: "cakes-sweets", name: "الكيك والحلويات" },
  { id: "mojitos", name: "الموهيتو" },
  { id: "smoothies", name: "السموذي" },
  { id: "tea", name: "الشاي" },
  { id: "juices", name: "العصائر" },
];

export const PRODUCTS: Product[] = [
  {
    id: "cold-spanish-latte",
    name: "سبانيش لاتيه مثلج",
    category: "cold-drinks",
    price: 4500,
    description: "إسبريسو غني ممزوج بالحليب البارد والحليب المكثف المحلى يقدم مع الثلج لنكهة متوازنة ومنعشة.",
    image: spanish_latteImage,
    isPopular: true,
    options: [
      {
        name: "نوع الحليب",
        choices: [
          { label: "حليب كامل الدسم", priceDelta: 0 },
          { label: "حليب خالي الدسم", priceDelta: 0 },
          { label: "حليب شوفان", priceDelta: 500 }
        ]
      }
    ],
    addOns: [
      { id: "extra-shot", label: "شوت إسبريسو إضافي", price: 1000 },
      { id: "caramel-drizzle", label: "صوص كراميل إضافي", price: 500 }
    ]
  },
  {
    id: "cold-oreo-shake",
    name: "ميلك شيك أوريو",
    category: "cold-drinks",
    price: 4500,
    description: "ميلك شيك كريمي غني بقطع بسكويت أوريو المقرمش وصوص الشوكولاتة الفاخر يعلوه فتات الأوريو.",
    image: oreo_milkshakeImage,
    isPopular: true,
    addOns: [
      { id: "extra-oreo", label: "بسكويت أوريو إضافي", price: 500 },
      { id: "whipped-cream", label: "كريمة مخفوقة إضافية", price: 500 }
    ]
  },
  {
    id: "cold-v60",
    name: "V60 كولد برو",
    category: "cold-drinks",
    price: 5500,
    description: "قهوة مقطرة يدويًا بحبوب مختصة فاخرة مستخلصة بالبرودة بنكهات إيحائية واضحة ونقية.",
    image: iced_coffeeImage,
    isPopular: true
  },
  {
    id: "cold-pistachio-coffee",
    name: "قهوة بالفستق مثلجة",
    category: "cold-drinks",
    price: 5000,
    description: "مزيج منعش من القهوة المختصة مع زبدة الفستق الحلبي الطبيعي والحليب البارد.",
    image: spanish_latteImage
  },
  {
    id: "cold-classic-latte",
    name: "لاتيه كلاسيك مثلج",
    category: "cold-drinks",
    price: 4000,
    description: "شوت إسبريسو كودو كودو مع الحليب البارد ومكعبات الثلج بطعم نقي ومريح للمزاج.",
    image: iced_coffeeImage
  },
  {
    id: "cold-caramel-latte",
    name: "لاتيه كراميل مثلج",
    category: "cold-drinks",
    price: 4500,
    description: "إسبريسو بارد مع الحليب وصوص الكراميل الذهبي الناعم.",
    image: iced_coffeeImage
  },
  {
    id: "cold-hazelnut-latte",
    name: "لاتيه بندق مثلج",
    category: "cold-drinks",
    price: 4500,
    description: "لاتيه مثلج بنكهة البندق المحمص الفاخرة والغنية.",
    image: spanish_latteImage
  },
  {
    id: "cold-dark-mocha",
    name: "موكا داكنة مثلجة",
    category: "cold-drinks",
    price: 5000,
    description: "شوكولاتة داكنة غنية مع الإسبريسو والحليب البارد لمحبّي النكهة القوية المركزة.",
    image: oreo_milkshakeImage
  },
  {
    id: "cold-kinder-coffee",
    name: "قهوة بالكيندر مثلجة",
    category: "cold-drinks",
    price: 4500,
    description: "مشروب قهوة مبتكر مع شوكولاتة كيندر الذائبة لمذاق حلو ومميز.",
    image: spanish_latteImage
  },
  {
    id: "cold-iced-chocolate",
    name: "شوكولاتة مثلجة",
    category: "cold-drinks",
    price: 3000,
    description: "شوكولاتة بلجيكية مثلجة بحليب طازج ناعم وممتع للصغار والكبار.",
    image: oreo_milkshakeImage
  },
  {
    id: "hot-spanish-latte",
    name: "سبانيش لاتيه ساخن",
    category: "hot-drinks",
    price: 4500,
    description: "قهوة ساخنة ناعمة وغنية بالحليب المبخر والحليب المكثف المحلى بطريقة كودو كودو الخاصة.",
    image: spanish_latteImage,
    isPopular: true
  },
  {
    id: "hot-flat-white",
    name: "فلات وايت",
    category: "hot-drinks",
    price: 3500,
    description: "دبل ريستريتو إسبريسو مع طبقة ميكروفوم حريرية ناعمة لنكهة قهوة واضحة ومتناغمة.",
    image: spanish_latteImage
  },
  {
    id: "hot-classic-latte",
    name: "لاتيه كلاسيك",
    category: "hot-drinks",
    price: 4500,
    description: "إسبريسو طازج مع حليب مبخر ورسمة لاتيه آرت أنيقة تليق بمزاجك.",
    image: spanish_latteImage
  },
  {
    id: "hot-turkish-coffee",
    name: "قهوة تركية",
    category: "hot-drinks",
    price: 2500,
    description: "قهوة تركية أصيلة مطبوخة بروقان برغوة ذهبية وفنجان تقليدي.",
    image: turkish_coffeeImage,
    isPopular: true
  },
  {
    id: "hot-ottoman-coffee",
    name: "قهوة عثمانية",
    category: "hot-drinks",
    price: 2500,
    description: "قهوة عثمانية معتقة بنكهات توابل خفيفة ولمسة عطرية مميزة.",
    image: turkish_coffeeImage
  },
  {
    id: "hot-chocolate",
    name: "هوت جوكلت",
    category: "hot-drinks",
    price: 3000,
    description: "شوكولاتة دافئة كريمية غنية تعيد لك الدفء والراحة.",
    image: spanish_latteImage
  },
  {
    id: "waffle-choco-straw",
    name: "وافل الشوكولاتة والفراولة",
    category: "waffles",
    price: 4500,
    description: "قطعة وافل هشة ولذيذة، مغطاة بصوص الشوكولاتة الغني وقطع الفراولة الحمراء الطازجة. لا تُقاوم.",
    image: chocolate_strawberry_waffleImage,
    isPopular: true,
    addOns: [
      { id: "extra-strawberry", label: "فراولة طازجة إضافية", price: 1000 },
      { id: "extra-ice-cream", label: "كرة آيس كريم فانيلا", price: 1000 },
      { id: "extra-sauce", label: "صوص شوكولاتة إضافي", price: 500 }
    ]
  },
  {
    id: "waffle-lotus",
    name: "وافل لوتس",
    category: "waffles",
    price: 5500,
    description: "وافل ذهبي مقرمش مغطى بزبدة لوتس بيسكوف الأصلية وبسكويت اللوتس المطحون.",
    image: lotus_waffleImage,
    isPopular: true
  },
  {
    id: "waffle-kinder",
    name: "وافل كيندر",
    category: "waffles",
    price: 5500,
    description: "وافل طازج بصوص الكيندر الأبيض والحليبي مع قطع شوكولاتة كيندر.",
    image: chocolate_strawberry_waffleImage
  },
  {
    id: "waffle-oreo",
    name: "وافل أوريو",
    category: "waffles",
    price: 5500,
    description: "وافل مغطى بصوص الشوكولاتة وقطع وبودرة بسكويت الأوريو اللذيذة.",
    image: chocolate_strawberry_waffleImage
  },
  {
    id: "waffle-pistachio",
    name: "وافل فستق",
    category: "waffles",
    price: 5500,
    description: "وافل محمص بصلصة الفستق الحلبي الغنية ورشة فستق مطحون.",
    image: lotus_waffleImage
  },
  {
    id: "crepe-kinder",
    name: "كريب كندر",
    category: "crepes",
    price: 5500,
    description: "رقائق كريب فرنسية رقيقة محشوة ومغطاة بصوص الكيندر وقطع شوكولاتة كيندر بوينو.",
    image: crepe_kinderImage,
    isPopular: true
  },
  {
    id: "crepe-lotus",
    name: "كريب لوتس",
    category: "crepes",
    price: 5500,
    description: "كريب ناعم مغطى بزبدة لوتس بيسكوف وبسكويت مقرمش مع لمسة كراميلية خفيفة.",
    image: lotus_waffleImage
  },
  {
    id: "crepe-nutella",
    name: "كريب نوتيلا",
    category: "crepes",
    price: 5000,
    description: "الكريب الكلاسيكي المحبوب مع شوكولاتة نوتيلا البندقية الأصلية الغنية وموز طازج.",
    image: crepe_nutellaImage,
    isPopular: true
  },
  {
    id: "crepe-fawakeh",
    name: "كريب فواكه",
    category: "crepes",
    price: 5500,
    description: "كريب محشو ومزين بشرائح الموز والفراولة والكيوي الطازجة وصوص بلجيكي فاخر.",
    image: crepe_kinderImage
  },
  {
    id: "pancake-fruits",
    name: "بان كيك فواكه",
    category: "pancakes",
    price: 5500,
    description: "طبقات من البان كيك الإسفنجي الهش تقدم مع شرائح الفراولة والتوت والموز مع صوص الشوكولاتة.",
    image: fruit_pancakeImage,
    isPopular: true
  },
  {
    id: "pancake-kinder",
    name: "بان كيك كيندر",
    category: "pancakes",
    price: 5500,
    description: "قطع بان كيك طرية محشوة بصوص الكيندر اللذيذ ومغطاة بالشوكولاتة.",
    image: fruit_pancakeImage
  },
  {
    id: "pancake-lotus",
    name: "بان كيك لوتس",
    category: "pancakes",
    price: 5500,
    description: "بان كيك طازج مسكوب عليه صوص اللوتس الدافئ ورشة بسكويت.",
    image: lotus_waffleImage
  },
  {
    id: "cake-milk",
    name: "كيكة حليب",
    category: "cakes-sweets",
    price: 4000,
    description: "كيكة الحليب التريس ليتشيز الخفيفة والمشبعة بالحليب الطازج والكريمة المخملية الرائعة.",
    image: milk_cakeImage,
    isPopular: true
  },
  {
    id: "cake-brownies",
    name: "براونيز شوكولاتة",
    category: "cakes-sweets",
    price: 5000,
    description: "مربعات براونيز شوكولاتة فادجية دافئة مع صوص شوكولاتة بلجيكية غنية.",
    image: browniesImage,
    isPopular: true
  },
  {
    id: "cake-cookies",
    name: "قطعة كوكيز طازجة",
    category: "cakes-sweets",
    price: 1000,
    description: "كوكي طازجة ومقرمشة ومحشوة بحبيبات الشوكولاتة الذائبة، مخبوزة يوميًا.",
    image: cookiesImage,
    isPopular: true
  },
  {
    id: "cake-rice-pudding",
    name: "أرز بلبن",
    category: "cakes-sweets",
    price: 3000,
    description: "حلوى الأرز بالحليب التقليدية بطعم قشطي غني ومكسرات محمصة.",
    image: milk_cakeImage
  },
  {
    id: "mojito-strawberry",
    name: "موهيتو فراوله",
    category: "mojitos",
    price: 4000,
    description: "انتعاش الفراولة الطبيعية مع الصودا والنعناع وقطع الليمون والثلج المنعش.",
    image: strawberry_mojitoImage,
    isPopular: true
  },
  {
    id: "mojito-blue",
    name: "موهيتو بلو",
    category: "mojitos",
    price: 4000,
    description: "موهيتو بنكهة التوت الأزرق المنعشة ولون سماوي بديع يعيد الحيوية.",
    image: blue_mojitoImage,
    isPopular: true
  },
  {
    id: "mojito-lemon-mint",
    name: "موهيتو ليمون ونعناع",
    category: "mojitos",
    price: 4000,
    description: "الانتعاش الكلاسيكي من عصير الليمون الطازج وأوراق النعناع الخضراء.",
    image: blue_mojitoImage
  },
  {
    id: "mojito-pomegranate",
    name: "موهيتو رمان",
    category: "mojitos",
    price: 4000,
    description: "حبيبات ونكهة الرمان المركز مع الصودا والثلج المجروش.",
    image: strawberry_mojitoImage
  },
  {
    id: "smoothie-mango",
    name: "سموذي مانجو",
    category: "smoothies",
    price: 4500,
    description: "سموذي كثيف ومخملي مصنوع من المانجو الطبيعي الفاخر والثلج المجروش.",
    image: mango_smoothieImage,
    isPopular: true
  },
  {
    id: "smoothie-strawberry",
    name: "سموذي فراوله",
    category: "smoothies",
    price: 4500,
    description: "سموذي الفراولة البارد بنكهة فاكهية طبيعية 100%.",
    image: strawberry_mojitoImage
  },
  {
    id: "smoothie-peach",
    name: "سموذي خوخ",
    category: "smoothies",
    price: 4500,
    description: "سموذي الخوخ الحلو والمميز مع قوام كريمي بارد.",
    image: mango_smoothieImage
  },
  {
    id: "tea-karak",
    name: "شاي كرك",
    category: "tea",
    price: 2500,
    description: "شاي الكرك الهندي المطبوخ بالحليب المكثف والزعفران والبهارات الدافئة.",
    image: karak_teaImage,
    isPopular: true
  },
  {
    id: "tea-iraqi",
    name: "شاي عراقي مهيّل",
    category: "tea",
    price: 500,
    description: "شاي سيلاني مخدر على الأصول برائحة الهيل في استكانة كودو كودو.",
    image: karak_teaImage
  },
  {
    id: "juice-orange",
    name: "عصير برتقال طبيعي",
    category: "juices",
    price: 3500,
    description: "برتقال طازج معصور مباشرة عند الطلب بدون إضافة سكر.",
    image: orange_juiceImage,
    isPopular: true
  },
  {
    id: "juice-banana-milk",
    name: "عصير موز بالحليب",
    category: "juices",
    price: 3500,
    description: "عصير الموز الطبيعي المخفوق مع الحليب الطازج والعسل.",
    image: oreo_milkshakeImage
  }
];
