

const namaz = new Map();

namaz.set('en', {
    AttentionText:`Dear friends! For believers, it is considered a Farz to read the prayer on time! `,
    InfoText:`Prayer time in the Central Mosque of Dushanbe, Today:`,
    Fajr: 'Fajr',
    Dhuhr: 'Dhuhr',
    Asr: 'Asr',
    Maghrib: 'Maghrib',
    Isha: 'Isha'
});

namaz.set('ru',
    {
        AttentionText:`Дорогие Друзья! Для верующих считается Фарзом читать намаз вовремя! `,
        InfoText:`Время намазов в Центральной мечети города Душанбе, Сегодня: `,
        Fajr: 'Фаджр',
        Dhuhr: 'Зухр',
        Asr: 'Аср',
        Maghrib: 'Магриб',
        Isha: 'Иша'
    });

namaz.set('tj',
    {
        AttentionText:`Дӯстони азиз! Хондани намоз барои мӯъминон дар вақташ Фарз аст! `,
        InfoText:`Вақтҳои намоз дар масҷиди Марказии шаҳри Душанбе, Имрӯз: `,
        Fajr: 'Бомдод',
        Dhuhr: 'Пешин',
        Asr: 'Аср',
        Maghrib: 'Шом',
        Isha: 'Хуфтан'
    });

export default namaz;
