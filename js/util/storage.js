// Store data in local storage

const SHOPPINGCARTS_STORAGE_KEYS = 'SHOPPINGCARTS';
const TOTALMONEY_STORAGE_KEYS = 'TOTALMONEY';
const USERS_STORAGE_KEYS = 'USERS';

export default {
    getCarts() {
        return JSON.parse(localStorage.getItem(SHOPPINGCARTS_STORAGE_KEYS)) || [];
    },

    setCarts(shoppingCarts) {
        localStorage.setItem(SHOPPINGCARTS_STORAGE_KEYS, JSON.stringify(shoppingCarts));
    },

    getTotalMoney() {
        return JSON.parse(localStorage.getItem(TOTALMONEY_STORAGE_KEYS)) || { 
            discountPrice: 0, 
            initPrice: 0, 
            payment: 0,
            discountPriceTag: '0',
            priceTag: '0' 
        };
    },

    setTotalMoney(totalMoney) {
        localStorage.setItem(TOTALMONEY_STORAGE_KEYS, JSON.stringify(totalMoney));
    },

    getUsers() {
        return JSON.parse(localStorage.getItem(USERS_STORAGE_KEYS)) || [];
    },

    setUsers(users) {
        localStorage.setItem(USERS_STORAGE_KEYS, JSON.stringify(users));
    },
}
        
export const iphones = [
    {
        name: 'Iphone 13 Pro Max',
        price: 31490000,
        priceTags: {
            initPrice: '35.490.000',
            actualPrice: '31.490.000'
        },
        details: {
            Chip: 'Apple A15 Bionic',
            RAM: '6 GB',
            'Dung lượng': '1 TB',
            // 'RAM/Dung lượng': '6 GB / 1 TB',
            'Camera sau': '12 MP',
            'Camera trước': '12 MP',
            Pin: '4323 mAh',
            'Màn hình': '6.7", Super Retina XDR'
        },
        img: 'https://drive.google.com/uc?export=view&id=1Kpu3hYiWlt--lAQi_1UEMs0aMudIMfDC'
    }, 

    {
        name: 'Iphone 14 Pro Max',
        price: 29490000,
        priceTags: {
            initPrice: '34.490.000',
            actualPrice: '29.490.000'
        },
        details: {
            Chip: 'Apple A16 Bionic',
            RAM: '6 GB',
            'Dung luong': '512 GB',
            // 'RAM/Dung lượng': '6 GB / 512 GB',
            'Camera sau': '48 MP',
            'Camera truoc': '12 MP',
            Pin: '4323 mAh',
            'Man hinh': '6.7", Super Retina Display 120HZ'
        },
        img: 'https://drive.google.com/uc?export=view&id=1q_8Y8QmumO4Z2dOG-J_2MVQ4bvJ_UFmR'
    }, 

    {
        name: 'Iphone 14 Pro',
        price: 27190000,
        priceTags: {
            initPrice: '30.990.000',
            actualPrice: '27.190.000'
        },
        details: {
            Chip: 'Apple A16 Bionic',
            RAM: '6 GB',
            'Dung luong': '512 GB',
            // 'RAM/Dung lượng': '6 GB / 512 GB',
            'Camera sau': '48 MP',
            'Camera truoc': '12 MP',
            Pin: '3200 mAh',
            'Man hinh': '6.1", Super Retina XDR'
        },
        img: 'https://drive.google.com/uc?export=view&id=1B9Krl0sUur7_li3zGNbj-aZnIlS_HcCX'
    }, 

    {
        name: 'Iphone 13 Pro',
        price: 25990000, 
        priceTags: {
            initPrice: '28.990.000',
            actualPrice: '25.990.000'
        },
        details: {
            Chip: 'Apple A15 Bionic',
            RAM: '6 GB',
            'Dung luong': '512 GB',
            // 'RAM/Dung lượng': '6 GB / 512 GB',
            'Camera sau': '12 MP',
            'Camera truoc': '12 MP',
            Pin: '3095mAh',
            'Man hinh': '6.1", Super Retina XDR'
        },
        img: 'https://drive.google.com/uc?export=view&id=18ULKJC63u-SMzxMrliTGuh2XeQqRIayh'
    }, 

    {
        name: 'Iphone 14 Plus',
        price: 24990000,
        priceTags: {
            initPrice: '27.990.000',
            actualPrice: '24.990.000'
        },
        details: {
            Chip: 'Apple A15 Bionic',
            RAM: '6 GB',
            'Dung luong': '128 GB',
            // 'RAM/Dung lượng': '6 GB / 128 GB',
            'Camera sau': '12 MP',
            'Camera truoc': '12 MP',
            Pin: '4325mAh',
            'Man hinh': '6.7", Super Retina XDR'
        },
        img: 'https://drive.google.com/uc?export=view&id=14i4PwvCGx_X3QJHiOeiwKCyH0jJYU0EW'
    }, 

    {
        name: 'Iphone 14',
        price: 22490000,
        priceTags: {
            initPrice: '24.490.000',
            actualPrice: '22.490.000'
        },
        details: {
            Chip: 'Apple A15 Bionic',
            RAM: '6 GB',
            'Dung luong': '128 GB',
            // 'RAM/Dung lượng': '6 GB / 128 GB',
            'Camera sau': '12 MP',
            'Camera truoc': '12 MP',
            Pin: '3279mAh',
            'Man hinh': '6.7", Super Retina XDR'
        },
        img: 'https://drive.google.com/uc?export=view&id=18Omxh_5HulHDEqUPFYuVTet-7rhZDdRD'
    }, 

    {
        name: 'Iphone 13',
        price: 20490000,
        priceTags: {
            initPrice: '24.490.000',
            actualPrice: '20.490.000'
        },
        details: {
            Chip: 'Apple A15 Bionic',
            RAM: '4 GB',
            'Dung luong': '128 GB',
            // 'RAM/Dung lượng': '4 GB / 128 GB',
            'Camera sau': '12 MP',
            'Camera truoc': '12 MP',
            Pin: '3240mAh',
            'Man hinh': '6.1", Super Retina XDR'
        },
        img: 'https://drive.google.com/uc?export=view&id=1qaDC0uCSD0v6XZ3pn6n-6duiXq5Pd_Wf'
    }, 

    {
        name: 'Iphone 13 mini 128 GB',
        price: 17990000,
        priceTags: {
            initPrice: '21.490.000',
            actualPrice: '17.990.000'
        },
        details: {
            Chip: 'Apple A15 Bionic',
            RAM: '4 GB',
            'Dung luong': '128 GB',
            // 'RAM/Dung lượng': '4 GB / 128 GB',
            'Camera sau': '12 MP',
            'Camera truoc': '12 MP',
            Pin: '2438mAh',
            'Man hinh': '5.4", Super Retina XDR'
        },
        img: 'https://drive.google.com/uc?export=view&id=1GcnZqvBjGRRNzshKUN6nQixAPQ5n_O1O'
    }, 

    {
        name: 'Iphone 12',
        price: 14490000,
        priceTags: {
            initPrice: '16.990.000',
            actualPrice: '14.490.000'
        },
        details: {
            Chip: 'Apple A14 Bionic',
            RAM: '4 GB',
            'Dung luong': '64 GB',
            // 'RAM/Dung lượng': '4 GB / 128 GB',
            'Camera sau': '12 MP',
            'Camera truoc': '12 MP',
            Pin: '2815mAh',
            'Man hinh': '6.1", Super Retina XDR'
        },
        img: 'https://drive.google.com/uc?export=view&id=1H8JkUn0iJdRRqr62qULKcNCWYXKIXNkz'
    }, 

    {
        name: 'Iphone 11',
        price: 12490000,
        priceTags: {
            initPrice: '14.990.000',
            actualPrice: '12.490.000'
        },
        details: {
            Chip: 'Apple A13 Bionic',
            RAM: '4 GB',
            'Dung luong': '64 GB',
            // 'RAM/Dung lượng': '4 GB / 64 GB',
            'Camera sau': '12 MP',
            'Camera truoc': '12 MP',
            Pin: '3110mAh',
            'Man hinh': '6.1", Liquid Retina'
        },
        img: 'https://drive.google.com/uc?export=view&id=1rhQymg4UnH7cUqsvAmHaC5KNacv-M9g0'
    }, 
]

export const samsungs = [
    {
        name: 'Samsung Galaxy Z-Fold 4 5G',
        price: 40990000,
        priceTags: {
            initPrice: '52.490.000',
            actualPrice: '40.990.000'
        },
        details: {
            Chip: 'Snapdragon 8+ Gen 1',
            RAM: '12 GB',
            'Dung lượng': '256 GB',
            // 'RAM/Dung lượng': '12 GB / 256 GB',
            'Camera sau': '50 MP',
            'Camera trước': '10 MP',
            Pin: '4400 mAh',
            'Màn hình': '7.6" & 6.2", Quad HD+ (2K+)'
        },
        img: 'https://drive.google.com/uc?export=view&id=1vlxTN8pOKDMhVZd9WZZROE6ot1cIV7mt'
    }, 

    {
        name: 'Samsung Galaxy S23 Ultra 5G',
        price: 31990000,
        priceTags: {
            initPrice: '39.490.000',
            actualPrice: '31.990.000'
        },
        details: {
            Chip: 'Snapdragon 8 Gen 2 8 Cores',
            RAM: '6 GB',
            'Dung lượng': '256 GB',
            'Camera sau': '200 MP',
            'Camera trước': '12 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.8", Quad HD+ (2K+)'
        },
        img: 'https://drive.google.com/uc?export=view&id=1C6sUsgxIskAI9K6Oic4ONbQelosoVG_K' 
    }, 

    {
        name: 'Samsung Galaxy S22 Ultra 5G',
        price: 29990000, 
        priceTags: {
            initPrice: '32.490.000',
            actualPrice: '29.990.000'
        },
        details: {
            Chip: 'Snapdragon 8+ Gen 1',
            RAM: '8 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '108 MP',
            'Camera trước': '40 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.8", Quad HD+ (2K+)'
        },
        img: 'https://drive.google.com/uc?export=view&id=1i5vPzl9P8aZRo8n3wF65OXF_VX9SioxP'
    }, 

    {
        name: 'Samsung Galaxy S23+ 5G',
        price: 26990000,
        priceTags: {
            initPrice: '32.990.000',
            actualPrice: '26.990.000'
        },
        details: {
            Chip: 'Snapdragon 8 Gen 2 8 Cores',
            RAM: '8 GB',
            'Dung lượng': '256 GB',
            'Camera sau': '50 MP',
            'Camera trước': '12 MP',
            Pin: '4700 mAh',
            'Màn hình': '6.6", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=10iaQ7QsHP1QHteAxom5ghQefTgE7E2sU'
    }, 

    {
        name: 'Samsung Galaxy Z-Flip 4 5G',
        price: 23990000,
        priceTags: {
            initPrice: '50.190.000',
            actualPrice: '23.990.000'
        },
        details: {
            Chip: 'Snapdragon 8+ Gen 1',
            RAM: '6 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '12 MP',
            'Camera trước': '10 MP',
            Pin: '3700 mAh',
            'Màn hình': '6.7" & 1.9", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=15JqgiMA_9xd0KqgwxjI4mHgr4GBumVRh' 
    }, 

    {
        name: 'Samsung Galaxy S22+ 5G',
        price: 23490000,
        priceTags: {
            initPrice: '28.490.000',
            actualPrice: '23.490.000'
        },
        details: {
            Chip: 'Snapdragon 8 Gen 1',
            RAM: '8 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '50 MP',
            'Camera trước': '10 MP',
            Pin: '4500 mAh',
            'Màn hình': '6.6", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1JpGprqZTPS7rDGjxnFb3p9-0fJo24YMC'
    }, 

    {
        name: 'Samsung A73 5G Awesome Edition',
        price: 12690000,
        priceTags: {
            initPrice: '18.990.000',
            actualPrice: '12.690.000'
        },
        details: {
            Chip: 'Snapdragon 778G 5G',
            RAM: '8 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '108 MP',
            'Camera trước': '32 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.7", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1FIjnqst_7BvofjIKkOt_8n4pgO4zBQmW'
    }, 

    {
        name: 'Samsung Galaxy S20 FE',
        price: 12490000,
        priceTags: {
            initPrice: '18.990.000',
            actualPrice: '12.490.000'
        },
        details: {
            Chip: 'Snapdragon 865',
            RAM: '8 GB',
            'Dung lượng': '256 GB',
            'Camera sau': '12 MP',
            'Camera trước': '32 MP',
            Pin: '4500 mAh',
            'Màn hình': '6.5", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1zkNT2vamsJtzoOsE9-In4_qRF2ghPZ3p'
    }, 

    {
        name: 'Samsung Galaxy M53',
        price: 10490000, 
        priceTags: {
            initPrice: '15.990.000',
            actualPrice: '10.490.000'
        },
        details: {
            Chip: 'Mediatek Dimensity 900 5G',
            RAM: '8 GB',
            'Dung lượng': '256 GB',
            'Camera sau': '108 MP',
            'Camera trước': '32 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.7", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1us2HusFwFdRh2Q5owV-JTBdoWhAnWzwo' 
    }, 

    {
        name: 'Samsung Galaxy A23',
        price: 5990000, 
        priceTags: {
            initPrice: '8.490.000',
            actualPrice: '5.990.000'
        },
        details: {
            Chip: 'Snapdragon 680',
            RAM: '4 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '50 MP',
            'Camera trước': '8 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.6", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1JwwAGsRGtD_QrldmUWpXaM7FMI2110zf' 
    }, 
]

export const googlePixels = [
    {
        name: 'Google Pixel 7 Pro',
        price: 22990000,
        priceTags: {
            initPrice: '28.190.000',
            actualPrice: '22.990.000'
        },
        details: {
            Chip: 'Google Tensor (5nm)',
            RAM: '6 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '12,2 MP',
            'Camera trước': '8 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.7", OLED'
        },
        img: 'https://drive.google.com/uc?export=view&id=13DfeHqVZXfS05h2Bd5BiXaf8iRYf4DS1'
    }, 

    {
        name: 'Google Pixel 6',
        price: 19990000,
        priceTags: {
            initPrice: '22.990.000',
            actualPrice: '19.990.000'
        },
        details: {
            Chip: 'Google Tensor',
            RAM: '8 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '50 MP',
            'Camera trước': '12 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.4", Amoled'
        },
        img: 'https://drive.google.com/uc?export=view&id=1aYa87O64erRWrBR-C3WwzxZEwnbXLpjS'
    }, 

    {
        name: 'Google Pixel 6a',
        price: 17990000,
        priceTags: {
            initPrice: '22.490.000',
            actualPrice: '17.990.000'
        },
        details: {
            Chip: 'Google Tensor (5nm)',
            RAM: '6 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '12,2 MP',
            'Camera trước': '12 MP',
            Pin: '4410 mAh',
            'Màn hình': '6.1", OLED'
        },
        img: 'https://drive.google.com/uc?export=view&id=1G8TTBVdbP-Y9RJRWU7bTzsbMKiyIlW4w'
    }, 

    {
        name: 'Google Pixel 7',
        price: 16990000,
        priceTags: {
            initPrice: '18.490.000',
            actualPrice: '16.990.000'
        },
        details: {
            Chip: 'Google Tensor G2 (5 nm)',
            RAM: '8 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '50 MP, 12 MP',
            'Camera trước': '12 MP',
            Pin: '4355 mAh',
            'Màn hình': '6.3", Amoled'
        },
        img: 'https://drive.google.com/uc?export=view&id=1_q5LA_5wiqgkMpDY65SzodrGLK5z7agq'
    }, 

    {
        name: 'Google Pixel 5a',
        price: 5990000, 
        priceTags: {
            initPrice: '8.490.000',
            actualPrice: '5.990.000'
        },
        details: {
            Chip: 'Qualcomm SM7250 Snapdragon 765G 5G (7 nm)',
            RAM: '6 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '50 MP',
            'Camera trước': '8 MP',
            Pin: '4230 mAh',
            'Màn hình': '6.6", OLED'
        },
        img: 'https://drive.google.com/uc?export=view&id=1EGGAJWRWkWOLv1Gss2c0Nbs7RhRWwAuw'
    }, 

    {
        name: 'Google Pixel 4 XL',
        price: 5090000, 
        priceTags: {
            initPrice: '5.490.000',
            actualPrice: '5.090.000'
        },
        details: {
            Chip: 'Qualcomm SDM855 Snapdragon 855 (7 nm)',
            RAM: '6 GB',
            'Dung lượng': '64 GB',
            'Camera sau': '12.2 MP, 16 MP',
            'Camera trước': '8 MP',
            Pin: '3700 mAh',
            'Màn hình': '6.3", 1440 x 3040 pixels'
        },
        img: 'https://drive.google.com/uc?export=view&id=1_q5LA_5wiqgkMpDY65SzodrGLK5z7agq'
    }, 

    {
        name: 'Google Pixel 4',
        price: 4090000, 
        priceTags: {
            initPrice: '4.490.000',
            actualPrice: '4.090.000'
        },
        details: {
            Chip: 'Qualcomm SDM855 Snapdragon 855 (7 nm)',
            RAM: '6 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '12.2 MP, 16 MP',
            'Camera trước': '8 MP & Phụ TOF 3D',
            Pin: '2800 mAh',
            'Màn hình': '5.7", P-OLED, Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1QA8aVTvA-3GsFehZm9rkmnY6Nom6tCKv'
    }, 

    {
        name: 'Google Pixel 3 XL',
        price: 3090000, 
        priceTags: {
            initPrice: '3.890.000',
            actualPrice: '3.090.000'
        },
        details: {
            Chip: 'Qualcomm MSM8998 Snapdragon 845 (10 nm)',
            RAM: '4 GB',
            'Dung lượng': '64 GB',
            'Camera sau': '12.3 MP',
            'Camera trước': '8 MP',
            Pin: '3520 mAh',
            'Màn hình': '6.0", P-OLED, Quad HD'
        },
        img: 'https://drive.google.com/uc?export=view&id=1PcMvrP8_xJ_SQyRDEnavWAF8iJsnM_oW'
    }, 

    {
        name: 'Google Pixel 3a',
        price: 2790000, 
        priceTags: {
            initPrice: '3.000.000',
            actualPrice: '2.790.000'
        },
        details: {
            Chip: 'Qualcomm SDM670 Snapdragon 670 (10 nm)',
            RAM: '4 GB',
            'Dung lượng': '64 GB',
            'Camera sau': '12.3 MP',
            'Camera trước': '8 MP',
            Pin: '3000 mAh',
            'Màn hình': '5.6", P-OLED'
        },
        img: 'https://drive.google.com/uc?export=view&id=1EW8qTfKgcPyMXkb3T1Rj-XBZGTSShURs'
    }, 
]

export const oppos = [
    {
        name: 'Oppo Find X5 Pro 5G',
        price: 24990000,
        priceTags: {
            initPrice: '32.990.000',
            actualPrice: '24.990.000'
        },
        details: {
            Chip: 'MediaTek Dimensity 8100 Max 8 nhân',
            RAM: '12 GB',
            'Dung lượng': '256 GB',
            'Camera sau': 'Chính 50 MP & Phụ 50 MP, 13 MP',
            'Camera trước': '32 MP',
            Pin: '5000 mAh, 80 W',
            'Màn hình': 'AMOLED 6.7" Quad HD+ (2K+)'
        },
        img: 'https://drive.google.com/uc?export=view&id=1y0kZKdu6iHQqB85xiCbUqElC084g9wAl'
    }, 

    {
        name: 'Oppo Reno 8 Series',
        price: 17990000,
        priceTags: {
            initPrice: '18.990.000',
            actualPrice: '17.990.000'
        },
        details: {
            Chip: 'MediaTek Dimensity 8100 Max 8 nhân',
            RAM: '12 GB',
            'Dung lượng': '256 GB',
            'Camera sau': '50 MP',
            'Camera trước': '32 MP',
            Pin: '4500 mAh',
            'Màn hình': '6.7", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1mjv3O-5NDJeI12v6oGUaBWytYol5yLiA'
    }, 

    {
        name: 'Oppo Reno 8T 5G',
        price: 10990000,
        priceTags: {
            initPrice: '19.490.000',
            actualPrice: '10.990.000'
        },
        details: {
            Chip: 'Snapdragon 8 Gen 2 8 Cores',
            RAM: '8 GB',
            'Dung lượng': '256 GB',
            'Camera sau': '108 MP',
            'Camera trước': '32 MP',
            Pin: '4800 mAh',
            'Màn hình': '6.7", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1jKZ3DHQqaD0DIXgT2CLfJLNTEz2JNXIs'
    }, 

    {
        name: 'Oppo Reno 6 Series',
        price: 7290000,
        priceTags: {
            initPrice: '8.990.000',
            actualPrice: '7.290.000'
        },
        details: {
            Chip: 'Mediatek Dimensity 900 5G',
            RAM: '8 GB',
            'Dung lượng': '256 GB',
            'Camera sau': '108 MP',
            'Camera trước': '32 MP',
            Pin: '4300 mAh',
            'Màn hình': '6.43", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1Pl4_TPBtyeViCiy4hNSNeyqcAMMXPYq6'
    }, 

    {
        name: 'Oppo Reno 7 Series',
        price: 7990000,
        priceTags: {
            initPrice: '7.990.000',
            actualPrice: '8.990.000'
        },
        details: {
            Chip: 'Snapdragon 695 5G 8 nhân',
            RAM: '8 GB',
            'Dung lượng': '128 GB',
            'Camera sau': 'Chính 64 MP & Phụ 2 MP, 2 MP',
            'Camera trước': '8 MP, f/2.0',
            Pin: '4500 mAh',
            'Màn hình': '6.43" - Tần số quét 60 Hz, AMOLED, FullHD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1QoHIfzqI6nV3eF1kHayZPmMXNkT4mFJR'
    }, 

    {
        name: 'Oppo A96',
        price: 6490000,
        priceTags: {
            initPrice: '6.990.000',
            actualPrice: '6.490.000'
        },
        details: {
            Chip: 'Snapdragon 680',
            RAM: '8 GB',
            'Dung lượng': '128 GB',
            'Camera sau': 'camera góc rộng: 50 MP, f/1.8, PDAF, camera chân dung: 2 MP, f/2.4',
            'Camera trước': '8 MP, f/2.0',
            Pin: '5000 mAh',
            'Màn hình': '6.56", IPS LCD, Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1a3POKhLehecq75KDq6uxvZmTjrCx3_Cz'
    }, 

    {
        name: 'Oppo A77s',
        price: 6290000,
        priceTags: {
            initPrice: '8.490.000',
            actualPrice: '6.290.000'
        },
        details: {
            Chip: 'Snapdragon 680',
            RAM: '8 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '50 MP',
            'Camera trước': '32 MP',
            Pin: '4500 mAh',
            'Màn hình': '6.56", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1PhpCME6G90_-0EneVSh0WAzdsV9iNorn'
    }, 

    {
        name: 'Oppo A76',
        price: 5990000,
        priceTags: {
            initPrice: '5.990.000',
            actualPrice: '5.990.000'
        },
        details: {
            Chip: 'Snapdragon 680',
            RAM: '6 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '13 MP',
            'Camera trước': '8 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.56", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1khi8Tyew2MPdywyAb_IhyYM-sbxnzYOa'
    }, 

    {
        name: 'Oppo A95',
        price: 5490000,
        priceTags: {
            initPrice: '8.990.000',
            actualPrice: '5.490.000'
        },
        details: {
            Chip: 'Snapdragon 662',
            RAM: '8 GB',
            'Dung lượng': '128 GB',
            'Camera sau': '48 MP',
            'Camera trước': '16 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.43", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1aUKjetFrpeg219ipX9kEDx1gEedsgG6d'
    }, 

    {
        name: 'Oppo A17',
        price: 3490000, 
        priceTags: {
            initPrice: '3.990.000',
            actualPrice: '3.490.000'
        },
        details: {
            Chip: 'MediaTek Helio G35',
            RAM: '4 GB',
            'Dung lượng': '64 GB',
            'Camera sau': '50 MP',
            'Camera trước': '5 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.56", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1iSk_gVZWN9Lsy1dlh2Dj7qdYa-C_Rvoi'
    }, 

    {
        name: 'Oppo A16',
        price: 2790000,
        priceTags: {
            initPrice: '3.990.000',
            actualPrice: '2.790.000'
        },
        details: {
            Chip: 'MediaTek Helio G35',
            RAM: '3 GB',
            'Dung lượng': '32 GB',
            'Camera sau': '13 MP',
            'Camera trước': '8 MP',
            Pin: '5000 mAh',
            'Màn hình': '6.52", Full HD+'
        },
        img: 'https://drive.google.com/uc?export=view&id=1x-jH7_61TqC9_mqeUbRO3lrOatp4TsOL'
    }, 
]

export const sacduphong = [
    {
        name: 'Xmobile PowerBox P69D',
        price: 800000,
        priceTags: {
            initPrice: '1.000.000',
            actualPrice: '800.000'
        },
        details: {
            'Hiệu suất sạc': '65%',
            'Dung lượng pin': '20.000 mAh',
            'Thời gian sạc đầy pin': '6 - 7 giờ (dùng Adapter 9V - 2A) 13 - 14 giờ (dùng Adapter 5V - 2A)',
            'Nguồn vào': 'Type C: 5V - 3A, 9V - 2A Micro USB: 5V - 2A, 9V - 2A',
            'Nguồn ra': 'USB QC: 5V - 2.4A, 9V - 2A, 12V - 1.5A Type-C PD: 5V - 3A, 9V - 2A, 12V - 1.5A',
            'Lõi pin': 'Polymer',
            'Kích thước': 'Dài 15.6 cm - Rộng 7.7 cm - Dày 2.1 cm',
            'Trọng lượng': '430 g',
        },
        img: 'http://drive.google.com/uc?export=view&id=1EwA5tKYX1LVHDpq1S46tmls8KH0ANQQj',
    }, 

    {
        name: 'OPPO PBT02',
        price: 685000,
        priceTags: {
            initPrice: '980.000',
            actualPrice: '685.000'
        },
        details: {
            'Hiệu suất sạc': '60%',
            'Dung lượng pin': '10.000 mAh',
            'Thời gian sạc đầy pin': '10 - 11 giờ (dùng Adapter 1A) 5 - 6 giờ (dùng Adapter 2A)',
            'Nguồn vào': 'Type C: 5V - 3A, 9V - 2A',
            'Nguồn ra': 'USB QC: 5V - 2.4A, 9V - 2A, 12V - 1.5A Type-C PD: 5V - 3A, 9V - 2A, 12V - 1.5A',
            'Lõi pin': 'Polymer',
            'Kích thước': 'Dài 15 cm - Rộng 7.2 cm - Dày 1.5 cm',
            'Trọng lượng': '225 g',
        },
        img: 'http://drive.google.com/uc?export=view&id=1KvRLDljgdWU_uPoK9pUY7nezDhdz7aN0',
    }, 

    {
        name: 'Xmobile PowerBox P72D',
        price: 600000,
        priceTags: {
            initPrice: '900.000',
            actualPrice: '600.000'
        },
        details: {
            'Hiệu suất sạc': '65%',
            'Dung lượng pin': '15.000 mAh',
            'Thời gian sạc đầy pin': '10 - 11 giờ (dùng Adapter 1A)',
            'Nguồn vào': 'Type C: 5V - 3A, 9V - 2A Micro USB: 5V - 2A, 9V - 2A',
            'Nguồn ra': 'Type-C PD: 5V - 3A, 9V - 2A, 12V - 1.5A USB QC 3.0: 5V - 2.4A, 9V - 2A, 12V - 1.5A',
            'Lõi pin': 'Polymer',
            'Kích thước': 'Dài 13.8 cm - Rộng 7.2 cm - Dày 2 cm',
            'Trọng lượng': '330 g',
        },
        img: 'http://drive.google.com/uc?export=view&id=1oE7TwKOWNl3Xvs2s4eO-GJdVa-eebubs',
    }, 

    {
        name: 'Anker PowerCore Select A1223',
        price: 410000,
        priceTags: {
            initPrice: '600.000',
            actualPrice: '410.000'
        },
        details: {
            'Hiệu suất sạc': '65%',
            'Dung lượng pin': '10.000 mAh',
            'Thời gian sạc đầy pin': '10 - 11 giờ (dùng Adapter 1A) 5 - 6 giờ (dùng Adapter 2A)',
            'Nguồn vào': 'Micro USB: 5V - 2A',
            'Nguồn ra': 'USB: 5V - 2.4A',
            'Lõi pin': 'Li-Ion',
            'Kích thước': 'Dài 10 cm - Rộng 6.3 cm - Dày 2.5 cm',
            'Trọng lượng': '190 g',
        },
        img: 'http://drive.google.com/uc?export=view&id=1e6sUu8MlG-eKMP4-Pkr4tGTUuMEdNh25',
    }, 

    {
        name: 'Energizer Chiến Binh II UE10046',
        price: 320000,
        priceTags: {
            initPrice: '500.000',
            actualPrice: '320.000'
        },
        details: {
            'Hiệu suất sạc': '66%',
            'Dung lượng pin': '10.000 mAh',
            'Thời gian sạc đầy pin': '10 - 11 giờ (dùng Adapter 1A) 5 - 6 giờ (dùng Adapter 2A)',
            'Nguồn vào': 'Micro USB: 5V - 2A',
            'Nguồn ra': 'USB: 5V - 2.1A',
            'Lõi pin': 'Polymer',
            'Kích thước': 'Dài 13.7 cm - Ngang 6.7 cm - Dày 1.5 cm',
            'Trọng lượng': '203 g',
        },
        img: 'http://drive.google.com/uc?export=view&id=1GwclbqsOdki4hl90MKGF-CNmdan0TVji',
    }, 

    {
        name: 'AVA+ PJ JP192',
        price: 250000,
        priceTags: {
            initPrice: '500.000',
            actualPrice: '250.000'
        },
        details: {
            'Hiệu suất sạc': '64%',
            'Dung lượng pin': '10.000 mAh',
            'Thời gian sạc đầy pin': '10 - 11 giờ (dùng Adapter 1A) 5 - 6 giờ (dùng Adapter 2A)',
            'Nguồn vào': 'Micro USB: 5V - 2A',
            'Nguồn ra': 'USB: 5V - 2.4A',
            'Lõi pin': 'Polymer',
            'Kích thước': 'Dài 8.7 cm - Ngang 6 cm - Cao 2 cm',
            'Trọng lượng': '182 g',
        },
        img: 'http://drive.google.com/uc?export=view&id=1uyfYMXz6KLQYyHfBcSnR4xadIhUCekkE',
    }, 

    {
        name: 'AVA+ LJ JP199',
        price: 175000,
        priceTags: {
            initPrice: '350.000',
            actualPrice: '175.000'
        },
        details: {
            'Hiệu suất sạc': '64%',
            'Dung lượng pin': '7.500 mAh',
            'Thời gian sạc đầy pin': '3 - 4 giờ (dùng Adapter 2A) 7 - 8 giờ (dùng Adapter 1A)',
            'Nguồn vào': 'Micro USB: 5V - 2A',
            'Nguồn ra': 'USB: 5V - 2A',
            'Lõi pin': 'Li-Ion',
            'Kích thước': 'Dài 8.7 cm - Ngang 5.8 cm - Dày 2 cm',
            'Trọng lượng': '172 g',
        },
        img: 'http://drive.google.com/uc?export=view&id=1E0HR4q3nwRD_u4k1Vid54ly9iFeFXqZS',
    }, 

    {
        name: 'Samsung A73AVA+ DS005-PP',
        price: 175000,
        priceTags: {
            initPrice: '350.000',
            actualPrice: '175.000'
        },
        details: {
            'Hiệu suất sạc': '64%',
            'Dung lượng pin': '7.500 mAh',
            'Thời gian sạc đầy pin': '3 - 4 giờ (dùng Adapter 2A) 7 - 8 giờ (dùng Adapter 1A)',
            'Nguồn vào': 'Micro USB: 5V - 2A',
            'Nguồn ra': 'USB: 5V - 2A',
            'Lõi pin': 'Li-Ion',
            'Kích thước': 'Dày 2 cm - Rộng 7 cm - Dài 8 cm',
            'Trọng lượng': '170 g',
        },
        img: 'http://drive.google.com/uc?export=view&id=10PphXFKxKfN4cYLvpZ9TSL9eNOp2Zukx',
    }, 

    {
        name: 'Hydrus PA CK01',
        price: 175000,
        priceTags: {
            initPrice: '350.000',
            actualPrice: '175.000'
        },
        details: {
            'Hiệu suất sạc': '64%',
            'Dung lượng pin': '10.000 mAh',
            'Thời gian sạc đầy pin': '10 - 11 giờ (dùng Adapter 1A) 5 - 6 giờ (dùng Adapter 2A)',
            'Nguồn vào': 'Micro USB: 5V - 2A',
            'Nguồn ra': 'USB: 5V - 2.1A',
            'Lõi pin': 'Polymer',
            'Kích thước': 'Dày 1.5 cm - Rộng 7.5 cm - Dài 14.5 cm',
            'Trọng lượng': '233 g',
        },
        img: 'http://drive.google.com/uc?export=view&id=1VutB6prpz4T2kIShQGw3Kii1O3ePh0Ow',
    }, 
]

export const saccap = [
    {
        name: 'Sạc OPPO VC56JAUH',
        price: 540000,
        priceTags: {
            initPrice: '790.000',
            actualPrice: '540.000'
        },
        details: {
            'Chức năng': 'Sạc',
            'Jack kết nối': 'USB',
            'Đầu vào': '100-240V~50/60Hz, 1.2A', 
            'Đầu ra': 'USB: 5V - 2A USB: 5V - 6A',
            'Công suất tối đa': '30 W',
            'Kích thước': 'Dài 6.8 cm - Ngang 5.2 cm - Cao 3 cm',
        },
        img: 'http://drive.google.com/uc?export=view&id=1Sl_NHew98bVEORlwFxZ2qY3AvrIXHNhR',
    }, 

    {
        name: 'Sạc Belkin WCA003',
        price: 280000,
        priceTags: {
            initPrice: '280.000',
            actualPrice: '470.000'
        },
        details: {
            'Chức năng': 'Sạc',
            'Jack kết nối': 'Type-C',
            'Đầu vào': '100-240V~50/60Hz, 0.5A', 
            'Đầu ra': 'Type C: 5V - 3A, 9V - 2.22A',
            'Công suất tối đa': '20 W',
            'Kích thước': 'Dài 5.5 cm - Ngang 4 cm - Cao 3.8 cm',
        },
        img: 'http://drive.google.com/uc?export=view&id=1o0kERmGcI2gGnTaKgVJwWZ2QBXwMIguH',
    }, 
    
    {
        name: 'Sạc Hydrus UL160',
        price: 250000,
        priceTags: {
            initPrice: '250.000',
            actualPrice: '300.000'
        },
        details: {
            'Chức năng': 'Sạc',
            'Jack kết nối': 'Type-C',
            'Đầu vào': '180-240V~50/60Hz, 0.6A', 
            'Đầu ra': 'Type C: 5V - 3A, 9V - 2.22A, 12V - 1.67A (Max 20W)',
            'Công suất tối đa': '20 W',
            'Kích thước': 'Dài 3.1 cm - Ngang 3.1 cm - Cao 4.8 cm',
        },
        img: 'http://drive.google.com/uc?export=view&id=1kucw2gf4LaIwIDOzfmEyU0jDqm9MI94o',
    }, 

    {
        name: 'Cáp Lightning MFI 1m Mophie',
        price: 200000,
        priceTags: {
            initPrice: '300.000',
            actualPrice: '200.000'
        },
        details: {
            'Chức năng': 'Truyền dữ liệu Sạc',
            'Jack kết nối': 'iPhone (Lightning)',
            'Đầu vào': 'USB Type-A', 
            'Đầu ra': 'Lightning: 5V - 2.4A',
            'Công suất tối đa': '12 W',
            'Độ dài dây': '1 m',
        },
        img: 'http://drive.google.com/uc?export=view&id=13IwN_xQcbt3TxXInowwToiNbcDYM5Swy',
    }, 

    {
        name: 'Cáp Lightning MFI 1m Mbest DS286-WB',
        price: 175000,
        priceTags: {
            initPrice: '250.000',
            actualPrice: '175.000'
        },
        details: {
            'Chức năng': 'Truyền dữ liệu Sạc',
            'Jack kết nối': 'iPhone (Lightning)',
            'Đầu vào': 'USB Type-A', 
            'Đầu ra': 'Lightning: 5V - 2.4A',
            'Công suất tối đa': '12 W',
            'Độ dài dây': '1 m',
        },
        img: 'http://drive.google.com/uc?export=view&id=1bNdDfZ04WrrOh-E9OdAAQmug_03TNE8y',
    }, 

    {
        name: 'Cáp Lightning 2m eValu LTL-04X',
        price: 150000,
        priceTags: {
            initPrice: '190.000',
            actualPrice: '150.000'
        },
        details: {
            'Chức năng': 'Truyền dữ liệu Sạc',
            'Jack kết nối': 'iPhone (Lightning)',
            'Đầu vào': 'USB Type-A', 
            'Đầu ra': 'Lightning: 5V - 2.4A',
            'Công suất tối đa': '12 W',
            'Độ dài dây': '1 m',
        },
        img: 'http://drive.google.com/uc?export=view&id=1Zc8YZ10XyWtRNPs0vYs1FyYgb7_-SMSy',
    }, 

    {
        name: 'Cáp Lightning 2m AVA+ LJET-L21',
        price: 135000,
        priceTags: {
            initPrice: '170.000',
            actualPrice: '135.000'
        },
        details: {
            'Chức năng': 'Truyền dữ liệu Sạc',
            'Jack kết nối': 'iPhone (Lightning)',
            'Đầu vào': 'USB Type-A', 
            'Đầu ra': 'Lightning: 5V - 2.4A',
            'Công suất tối đa': '12 W',
            'Độ dài dây': '2 m',
        },
        img: 'http://drive.google.com/uc?export=view&id=1zlhknZOTmOgAnTFyjTiaJbd0qFndTt0t',
    }, 
    
    {
        name: 'Sạc AVA+ DS016-BG',
        price: 95000,
        priceTags: {
            initPrice: '120.000',
            actualPrice: '95.000'
        },
        details: {
            'Chức năng': 'Sạc',
            'Jack kết nối': 'USB',
            'Đầu vào': '100-240V~50/60Hz, 0.2A', 
            'Đầu ra': 'USB: 5V - 1A',
            'Công suất tối đa': '5 W',
            'Kích thước': 'Dài 5.5 cm - Ngang 3 cm - Cao 2 cm',
        },
        img: 'http://drive.google.com/uc?export=view&id=1rwNnb5zveqK2YbU1GEs183fOHRKLa5Ta',
    }, 

    {
        name: 'Cáp Lightning AVA+ CN034',
        price: 70000,
        priceTags: {
            initPrice: '80.000',
            actualPrice: '70.000'
        },
        details: {
            'Chức năng': ' Truyền dữ liệu Sạc',
            'Đầu vào': 'USB Type-A', 
            'Đầu ra': 'Lightning: 5V - 2.4A',
            'Công suất tối đa': '12 W',
            'Độ dài dây': '0.2 m',
        },
        img: 'http://drive.google.com/uc?export=view&id=1FvAx7cgrf212GBwrobplcf_sL_oO6gJv',
    }, 
]

export const oplungdienthoai = [
    {
        name: 'Ốp lưng Galaxy S23Ultra Silicon',
        price: 600000,
        priceTags: {
            initPrice: '790.000',
            actualPrice: '600.000'
        },
        details: {
            'detail 1': 'Ốp lưng được thiết kế hướng đến sự tối giản, sử dụng gam màu nổi bật đem đến sự trẻ trung.',
            'detail 2': 'Kích thước vừa vặn, các đường cắt chuẩn xác, ốp lưng chuyên dụng cho chiếc Samsung Galaxy S23 Ultra.',
            'detail 3': 'Mặt trong của ốp mềm mại, giúp điện thoại tránh bị trầy xước khi tháo lắp.',
            'detail 4': 'Lưu ý: Thanh toán trước khi mở seal.',
        },
        img: 'http://drive.google.com/uc?export=view&id=1WHdu2Ae07y9LH_m3oCj_rvhWbOsMuzFt',
    }, 

    {
        name: 'Ốp lưng MagSafe Kính viền dẻo GRA-SIMPLE JM',
        price: 240000,
        priceTags: {
            initPrice: '300.000',
            actualPrice: '240.000'
        },
        details: {
            'detail 1': 'Kích thước phù hợp với dòng điện thoại iPhone 14 Pro.',
            'detail 2': 'Tích hợp sạc không dây MagSafe thông minh, tiện lợi.',
            'detail 3': 'Thiết kế tối giản với mặt kính viền dẻo, bảo vệ tốt cho điện thoại.',
            'detail 4': 'Ốp lưng chống va đập tốt, tháo lắp dễ dàng.',
        },
        img: 'http://drive.google.com/uc?export=view&id=1_BPw5OpeAh9HheRcS8sW4ew2J8xYOVeB',
    }, 

    {
        name: 'Ốp lưng Galaxy S23 Nhựa dẻo ARAREE FLEXIELD',
        price: 190000,
        priceTags: {
            initPrice: '300.000',
            actualPrice: '290.000'
        },
        details: {
            'detail 1': 'Thiết kế trong suốt cùng chống bám bẩn tốt, giữ sự mới mẻ dài lâu.',
            'detail 2': 'Đường cắt chỉn chu, ốp lưng được chế tác chuyên dụng cho chiếc Galaxy S23 Ultra.',
            'detail 3': 'Lắp vào vừa vặn, tháo ra dễ dàng nhờ được làm từ chất liệu nhựa dẻo dai.',
            'detail 4': 'Chống sốc tốt, ốp ôm trọn điện thoại giúp bảo vệ từng góc cạnh của thiết bị.',
        },
        img: 'http://drive.google.com/uc?export=view&id=1nQVVShqvPww6YzV8UghecuMoMWPbVQx3',
    }, 

    {
        name: 'Ốp lưng Galaxy A04s Silicone',
        price: 180000,
        priceTags: {
            initPrice: '200.000',
            actualPrice: '180.000'
        },
        details: {
            'detail 1': 'Thiết kế tối giản, ốp lưng mỏng nhẹ, không ảnh hưởng nhiều tới độ dày điện thoại khi đeo ốp.',
            'detail 2': 'Chất liệu Silicone bền bỉ cho độ đàn hồi cao, khả năng chống sốc, chống trầy tốt.',
            'detail 3': 'Màu sắc trang nhã, họa tiết dễ thương.',
            'detail 4': 'Sản phẩm chuyên dụng cho chiếc Galaxy A04s.',
        },
        img: 'http://drive.google.com/uc?export=view&id=13EFpNll7V7H2iCdw-hMqf0pFg78D0l6j',
    }, 
    
    {
        name: 'Ốp lưng iPhone XSMax viền dẻo PU',
        price: 36000,
        priceTags: {
            initPrice: '45.000',
            actualPrice: '36.000'
        },
        details: {
            'detail 1': 'Kiểu dáng thời trang và đẹp mắt.',
            'detail 2': 'Thiết kế vừa vặn và ôm sát thân máy.',
            'detail 3': 'Dễ dàng tháo/lắp ốp vào máy.',
        },
        img: 'http://drive.google.com/uc?export=view&id=1A8CXB7PQe0_vjiUtiSAhEM3FImUa_QJ8',
    }, 

    {
        name: 'Ốp lưng iPhone12 ProMax Nhựa dẻo IMD MEEKER',
        price: 20000,
        priceTags: {
            initPrice: '50.000',
            actualPrice: '20.000'
        },
        details: {
            'detail 1': 'Kiểu dáng thời trang và đẹp mắt.',
            'detail 2': 'Thiết kế vừa vặn và ôm sát thân máy.',
            'detail 3': 'Dễ dàng tháo/lắp ốp vào máy.',
        },
        img: 'http://drive.google.com/uc?export=view&id=1mN-JcJKsePDd4hTWSQqXorMSwmWyuSR5',
    }, 

    {
        name: 'Ốp lưng OPPO A15 Nhựa dẻo CROSSPY JM',
        price: 17900,
        priceTags: {
            initPrice: '25.000',
            actualPrice: '17.900'
        },
        details: {
            'detail 1': 'Kiểu dáng thời trang và đẹp mắt.',
            'detail 2': 'Thiết kế vừa vặn và ôm sát thân máy.',
            'detail 3': 'Dễ dàng tháo/lắp ốp vào máy.',
        },
        img: 'http://drive.google.com/uc?export=view&id=1O43zSRPLu7qGXbTTZKhd1jY2VVkwP1MQ',
    }, 

    {
        name: 'Ốp lưng OPPO A54 Nhựa dẻo Banks II JM',
        price: 10000,
        priceTags: {
            initPrice: '20.000',
            actualPrice: '10.000'
        },
        details: {
            'detail 1': 'Thiết kế sang chảnh với kiểu dáng gọn đẹp, màu xanh tươi sáng.',
            'detail 2': 'Có khung viền bao bọc giữ cho cụm camera hoạt động tốt, giảm xước.',
            'detail 3': 'Tương thích OPPO A54, sử dụng an toàn, dễ dàng như không có ốp lưng.',
            'detail 4': 'Hạn chế phai màu theo thời gian, cầm nắm và tháo lắp nhẹ nhàng với chất liệu nhựa dẻo.'
        },
        img: 'http://drive.google.com/uc?export=view&id=11Ez3kt8M3XxFygTy3uiwh-kCnKPw7SvX',
    }, 
]
