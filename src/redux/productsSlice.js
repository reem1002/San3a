import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    allProducts: [
        {
            id: 1,
            image: "/imgs/place.png",
            name: "شمعة عطرية بالفانيليا",
            seller: "عطور نور",
            price: 60,
            rating: 4.6,
            section: "الديكور",
            craft: "شموع",
            discount: 20,
            shipping: "مدفوع",
            shippingCost: 50,
            label: "حصري",
            description: "شمعة يدوية الصنع برائحة الفانيليا تضيف أجواء دافئة ومريحة في أي مكان بالمنزل.",
            status: "جاهز للشحن",
            stock: 12,
            notes: "يُنصح بعدم ترك الشمعة مشتعلة بدون مراقبة وبعيدًا عن متناول الأطفال.",
        },
        {
            id: 2,
            image: "/imgs/place.png",
            name: "سوار كروشيه يدوي",
            seller: "هاند كرافتس",
            price: 45,
            rating: 4.4,
            section: "الإكسسوارات",
            craft: "كروشيه",
            discount: 0,
            shipping: "مدفوع",
            shippingCost: 30,
            label: "",
            description: "سوار أنيق مصنوع يدويًا بخيوط الكروشيه عالية الجودة، يناسب جميع الأعمار.",
            status: "جاهز للشحن",
            stock: 25,
            notes: "قد يختلف لون الخيط قليلاً حسب إعدادات الشاشة.",
        },
        {
            id: 3,
            image: "/imgs/place.png",
            name: "صابون زيت الزيتون الطبيعي",
            seller: "عناية طبيعية",
            price: 30,
            rating: 4.2,
            section: "العناية",
            craft: "صابون طبيعي",
            discount: 15,
            shipping: "مدفوع",
            shippingCost: 25,
            label: "كمية محدودة",
            description: "صابون طبيعي 100٪ غني بزيت الزيتون لتغذية البشرة ومنحها ملمسًا ناعمًا وصحيًا.",
            status: "متاح",
            stock: 10,
            notes: "يُحفظ في مكان بارد وجاف بعيدًا عن أشعة الشمس المباشرة.",
        },
        {
            id: 4,
            image: "/imgs/place.png",
            name: "ميدالية مفاتيح مطرزة",
            seller: "خيوط وألوان",
            price: 25,
            rating: 4.1,
            section: "الهدايا",
            craft: "تطريز",
            discount: 0,
            shipping: "مدفوع",
            shippingCost: 20,
            label: "",
            description: "ميدالية مفاتيح أنيقة مطرزة بخيوط قطنية ملونة تضيف لمسة شخصية على أغراضك.",
            status: "جاهز للشحن",
            stock: 30,
            notes: "متاحة بعدة ألوان، يُرجى تحديد اللون المطلوب عند الطلب.",
        },
        {
            id: 5,
            image: "/imgs/place.png",
            name: "دفتر ملاحظات يدوي",
            seller: "صُنع بحب",
            price: 70,
            rating: 4.8,
            section: "القرطاسية",
            craft: "خشب",
            discount: 0,
            shipping: "مجاني",
            shippingCost: 0,
            label: "جديد",
            description: "دفتر أنيق مصنوع يدويًا بغلاف خشبي منقوش ومناسب لتدوين الملاحظات اليومية.",
            status: "جاهز للشحن",
            stock: 15,
            notes: "المنتج متاح بنقوش مختلفة حسب المخزون.",
        },
        {
            id: 6,
            image: "/imgs/place.png",
            name: "قلادة حجر طبيعي",
            seller: "إبداع حجري",
            price: 55,
            rating: 4.5,
            section: "الإكسسوارات",
            craft: "حجارة",
            discount: 10,
            shipping: "مدفوع",
            shippingCost: 35,
            label: "",
            description: "قلادة مميزة بحجر طبيعي مختار بعناية، تضيف لمسة فريدة لإطلالتك.",
            status: "جاهز للشحن",
            stock: 18,
            notes: "كل قطعة فريدة من نوعها لاختلاف أشكال الأحجار الطبيعية.",
        },
        {
            id: 7,
            image: "/imgs/place.png",
            name: "فازة سيراميك مطلية يدويًا",
            seller: "لمسة فنية",
            price: 90,
            rating: 4.7,
            section: "الديكور",
            craft: "سيراميك",
            discount: 15,
            shipping: "مدفوع",
            shippingCost: 40,
            label: "حصري",
            description: "فازة سيراميك أنيقة مطلية يدويًا بألوان هادئة تضيف لمسة فنية لمنزلك.",
            status: "جاهز للشحن",
            stock: 7,
            notes: "قد توجد فروق بسيطة بين كل قطعة نظرًا لطبيعة العمل اليدوي.",
        },
        {
            id: 8,
            image: "/imgs/place.png",
            name: "لوحة جدارية بخيوط الصوف",
            seller: "فن الخيوط",
            price: 110,
            rating: 4.9,
            section: "الديكور",
            craft: "فن الخيوط",
            discount: 0,
            shipping: "مجاني",
            shippingCost: 0,
            label: "كمية محدودة",
            description: "لوحة فنية مصنوعة بخيوط الصوف بألوان دافئة لتزيين الجدران بطريقة عصرية.",
            status: "جاهز للشحن",
            stock: 5,
            notes: "المنتج يُصنع حسب الطلب خلال 3 أيام من تاريخ الشراء.",
        },
        {
            id: 9,
            image: "/imgs/place.png",
            name: "حقيبة كروشيه صيفية",
            seller: "كروشيه ستايل",
            price: 80,
            rating: 4.5,
            section: "الإكسسوارات",
            craft: "كروشيه",
            discount: 0,
            shipping: "مدفوع",
            shippingCost: 45,
            label: "حصري",
            description: "حقيبة كروشيه أنيقة ومريحة مثالية للرحلات والنزهات الصيفية.",
            status: "متاح",
            stock: 10,
            notes: "يُنصح بعدم غسل الحقيبة في الغسالة للحفاظ على الخيوط.",
        },
        {
            id: 10,
            image: "/imgs/place.png",
            name: "صابون اللافندر الفاخر",
            seller: "بيور ناتشرال",
            price: 35,
            rating: 4.3,
            section: "العناية",
            craft: "صابون طبيعي",
            discount: 10,
            shipping: "مدفوع",
            shippingCost: 20,
            label: "",
            description: "صابون طبيعي برائحة اللافندر المنعشة يساعد على الاسترخاء والعناية بالبشرة.",
            status: "جاهز للشحن",
            stock: 14,
            notes: "خالٍ من المواد الكيميائية الضارة والمواد الحافظة.",
        },
        {
            id: 11,
            image: "/imgs/place.png",
            name: "دفتر رسم بغلاف خشبي",
            seller: "صُنع بحب",
            price: 85,
            rating: 4.6,
            section: "القرطاسية",
            craft: "خشب",
            discount: 5,
            shipping: "مجاني",
            shippingCost: 0,
            label: "",
            description: "دفتر رسم مصنوع يدويًا بغلاف خشبي طبيعي مناسب للفنانين والهواة.",
            status: "جاهز للشحن",
            stock: 9,
            notes: "الخامات طبيعية 100٪ لذلك قد يختلف نمط الخشب من قطعة لأخرى.",
        },
        {
            id: 12,
            image: "/imgs/place.png",
            name: "إطار صور مزخرف بالخيوط",
            seller: "فن الخيوط",
            price: 65,
            rating: 4.4,
            section: "الديكور",
            craft: "فن الخيوط",
            discount: 10,
            shipping: "مدفوع",
            shippingCost: 35,
            label: "حصري",
            description: "إطار صور فني مصنوع بخيوط ملونة بشكل زخرفي جذاب.",
            status: "جاهز للشحن",
            stock: 6,
            notes: "المنتج يُصنع يدويًا بالكامل لذلك كل قطعة تختلف قليلًا عن الأخرى.",
        },
        {
            id: 13,
            image: "/imgs/place.png",
            name: "شمعة الورد الجوري",
            seller: "عطور نور",
            price: 55,
            rating: 4.7,
            section: "الديكور",
            craft: "شموع",
            discount: 0,
            shipping: "مجاني",
            shippingCost: 0,
            label: "كمية محدودة",
            description: "شمعة برائحة الورد الجوري الفاخرة تمنحك أجواء من الهدوء والرومانسية.",
            status: "متاح",
            stock: 8,
            notes: "الشمعة تُصنع من شمع الصويا الطبيعي غير الضار بالبيئة.",
        },
        {
            id: 14,
            image: "/imgs/place.png",
            name: "قلادة من خرز ملون",
            seller: "هاند كرافتس",
            price: 40,
            rating: 4.3,
            section: "الإكسسوارات",
            craft: "خرز",
            discount: 0,
            shipping: "مدفوع",
            shippingCost: 30,
            label: "",
            description: "قلادة أنيقة مصنوعة يدويًا من الخرز الملون بتصميم بسيط يناسب الإطلالات اليومية.",
            status: "جاهز للشحن",
            stock: 16,
            notes: "المنتج يأتي في علبة قماش للحفاظ عليه من الخدوش.",
        },
        {
            id: 15,
            image: "/imgs/place.png",
            name: "علبة مناديل خشبية محفورة",
            seller: "إبداع خشبي",
            price: 75,
            rating: 4.8,
            section: "الديكور",
            craft: "خشب",
            discount: 10,
            shipping: "مدفوع",
            shippingCost: 40,
            label: "حصري",
            description: "علبة مناديل مصنوعة يدويًا من الخشب الطبيعي المحفور بدقة عالية.",
            status: "جاهز للشحن",
            stock: 11,
            notes: "يمكن تخصيص النقش حسب الطلب.",
        },
        {
            id: 16,
            image: "/imgs/place.png",
            name: "لوحة مطرزة بالأسماء",
            seller: "خيوط وألوان",
            price: 95,
            rating: 4.9,
            section: "الهدايا",
            craft: "تطريز",
            discount: 0,
            shipping: "مدفوع",
            shippingCost: 35,
            label: "كمية محدودة",
            description: "لوحة فنية مطرزة بالأسماء تصلح كهدية مميزة للمناسبات الخاصة.",
            status: "جاهز للشحن",
            stock: 4,
            notes: "مدة تنفيذ الطلب 3 أيام من تاريخ التأكيد.",
        },
        {
            id: 17,
            image: "/imgs/place.png",
            name: "شمعدان من الفخار",
            seller: "لمسة فنية",
            price: 120,
            rating: 4.7,
            section: "الديكور",
            craft: "فخار",
            discount: 15,
            shipping: "مجاني",
            shippingCost: 0,
            label: "",
            description: "شمعدان أنيق مصنوع يدويًا من الفخار ومزين بنقوش عربية كلاسيكية.",
            status: "جاهز للشحن",
            stock: 5,
            notes: "منتج قابل للكسر، يُرجى التعامل معه بحذر.",
        },
        {
            id: 18,
            image: "/imgs/place.png",
            name: "سلة من الخوص الطبيعي",
            seller: "لمسات شرقية",
            price: 65,
            rating: 4.5,
            section: "الديكور",
            craft: "خوص",
            discount: 0,
            shipping: "مدفوع",
            shippingCost: 25,
            label: "",
            description: "سلة مصنوعة يدويًا من الخوص الطبيعي مناسبة للتخزين أو الزينة.",
            status: "جاهز للشحن",
            stock: 20,
            notes: "يُنصح بتنظيفها بقطعة قماش جافة فقط للحفاظ على شكلها.",
        },
    ]

    ,

    filteredProducts: [],
    filters: {
        craftType: "كل الحرف",
        section: "كل الأقسام",
        minPrice: "",
        maxPrice: "",
        hasFreeShipping: false,
        hasDiscount: false,
        searchTerm: "",
    },
    sortType: "",
};

const productsSlice = createSlice({
    name: "products",
    initialState,
    reducers: {
        setFilters: (state, action) => {
            state.filters = { ...state.filters, ...action.payload };
        },

        setSortType: (state, action) => {
            state.sortType = action.payload;
        },

        setSearchTerm: (state, action) => {
            state.filters.searchTerm = action.payload;
        },

        resetFilters: (state) => {
            state.filters = initialState.filters;
        },

        applyFilters: (state) => {
            const {
                craftType,
                section,
                minPrice,
                maxPrice,
                hasFreeShipping,
                hasDiscount,
                searchTerm,
            } = state.filters;

            let result = [...state.allProducts];

            // 🔍 البحث
            if (searchTerm) {
                const term = searchTerm.toLowerCase();
                result = result.filter(
                    (p) =>
                        p.name.toLowerCase().includes(term) ||
                        p.seller.toLowerCase().includes(term)
                );
            }

            // 🎨 الفلترة حسب الحرفة
            if (craftType !== "كل الحرف") {
                result = result.filter((p) => p.craft === craftType);
            }

            // 🏷️ الفلترة حسب القسم
            if (section !== "كل الأقسام") {
                result = result.filter((p) => p.section === section);
            }

            // 💰 الفلترة بالسعر
            if (minPrice) result = result.filter((p) => p.price >= Number(minPrice));
            if (maxPrice) result = result.filter((p) => p.price <= Number(maxPrice));

            // 🚚 الفلاتر الخاصة (شحن مجاني + خصم)
            if (hasFreeShipping && hasDiscount) {
                result = result.filter(
                    (p) => p.shipping === "مجاني" || p.discount > 0
                );
            } else if (hasFreeShipping) {
                result = result.filter((p) => p.shipping === "مجاني");
            } else if (hasDiscount) {
                result = result.filter((p) => p.discount > 0);
            }

            // 📦 الترتيب حسب النوع
            if (state.sortType === "low-to-high") {
                result.sort((a, b) => a.price - b.price);
            } else if (state.sortType === "high-to-low") {
                result.sort((a, b) => b.price - a.price);
            } else if (state.sortType === "newest") {
                result.reverse();
            }

            state.filteredProducts = result;
        },
    },
});

export const {
    setFilters,
    setSortType,
    resetFilters,
    applyFilters,
    setSearchTerm,
} = productsSlice.actions;

export default productsSlice.reducer;
