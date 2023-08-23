

const namaz = new Map();

namaz.set('en', {
    AttentionText:`Dear friends! For believers, it is considered a Farz to read the prayer on time! `,
    InfoText:`Prayer time in the Central Mosque of Dushanbe, Today:`,
    Fajr: {
        Name: 'Fajr',
        Info: '2 rakat Sunnat\n' +
            '2 rakat Fard\n'
    },
    Dhuhr:{
        Name: 'Dhuhr',
        Info: '4 rakat Sunnat\n' +
            '4 rakat Fard' +
            '2 rakat Sunnat'
    },
    Asr: {
        Name: 'Asr',
        Info: '4 rakat Fard'
    },
    Maghrib: {
        Name: 'Maghrib',
        Info: '3 rakat Fard\n' +
            '2 rakat Sunnat'
    },
    Isha:{
        Name: 'Isha',
        Info: '4 rakat Fard\n' +
            '2 rakat Sunnat\n' +
            '3 rakat Wajib'
    },
});

namaz.set('ru',
    {
        AttentionText:`Дорогие Друзья! Для верующих считается Фарзом читать намаз вовремя! `,
        InfoText:`Время намазов в Центральной мечети города Душанбе, Сегодня: `,
        Fajr: {
            Name: 'Фаджр',
            Info: '2 ракат сунна\n' +
                '2 ракат фард (фарз)\n'
        },
        Dhuhr:{
            Name: 'Зухр',
            Info: '4 ракат сунна\n' +
                '4 ракат фард\n' +
                '2 ракат сунна'
        },
        Asr: {
            Name: 'Аср',
            Info: '4 ракат фард'
        },
        Maghrib: {
            Name: 'Магриб',
            Info: '3 ракат фард (фарз)\n' +
                '2 ракат сунна'
        },
        Isha:{
            Name: 'Иша',
            Info: '4 ракат фард (фарз)\n' +
                '2 ракат сунна\n' +
                '3 ракат витр'
        },
    });

namaz.set('tj',
    {
        AttentionText:`Дӯстони азиз! Хондани намоз барои мӯъминон дар вақташ Фарз аст! `,
        InfoText:`Вақтҳои намоз дар масҷиди Марказии шаҳри Душанбе, Имрӯз: `,
        Fajr: {
            Name: 'Бомдод',
            Info: '2 ракъат суннат\n' +
                '2 ракъат фарз'
        },
        Dhuhr:{
            Name: 'Пешин',
            Info: '4 ракъат суннат\n' +
                '4 ракъат фарз\n' +
                '2 ракъат суннат'
        },
        Asr: {
            Name: 'Аср',
            Info: '4 ракъат фарз'
        },
        Maghrib: {
            Name: 'Шом',
            Info: '3 ракъат фарз\n' +
                '2 ракъат суннат'
        },
        Isha:{
            Name: 'Хуфтан',
            Info: '4 ракъат фарз\n' +
                '2 ракъат суннат\n' +
                '3 ракъат Витри Воҷиб'
        },
    });

export default namaz;
