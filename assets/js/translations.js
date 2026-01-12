// ============ DOM FALCONE LANGUAGE SYSTEM ============
// Supports Russian (ru) and German (de)

const translations = {
    ru: {
        // ============ NAVIGATION ============
        nav: {
            about: "О доме",
            history: "История",
            enemies: "Противники",
            news: "Новости",
            login: "Войти",
            profile: "Профиль",
            messages: "Сообщения",
            notifications: "Уведомления",
            markAllRead: "Прочитать все",
            noNotifications: "Нет уведомлений"
        },

        // ============ FOOTER ============
        footer: {
            copyright: "© Dom Falcone 2026. Все права защищены. Прям реально защищены.",
            faq: "FAQ",
            privacy: "Политика конфиденциальности",
            agreement: "Пользовательское соглашение",
            imprint: "Сведения о владельце сайта",
            developers: "Разработчики",
            hymn: "Герб и Гимн"
        },

        // ============ LOADER ============
        loader: {
            text: "Ждать. Идет загрузка.",
            hymnLabel: "Гимн Дома Фальконе"
        },

        // ============ CONTACT BUTTON ============
        contact: {
            floatingBtn: "Связаться с Домом"
        },

        // ============ HOMEPAGE ============
        homepage: {
            title: "Официальная страница Дома Фальконе",
            timerHeader: "До заседания Дома Фальконе осталось:",
            timerDays: "days",
            timerHours: "hours",
            timerMinutes: "minutes",
            timerSeconds: "seconds",
            timerMessage: "Заседание Дома Фальконе началось.",
            learnMore: "Узнать больше",
            contactUs: "Связаться",
            calendarTooltip: "Добавить в Google Календарь",
            consentTitle: "Добро пожаловать в Дом Фальконе",
            consentText: "Я согласен(а) с",
            consentLink: "Пользовательским соглашением",
            consentAccept: "Согласен",
            consentDecline: "Нет",
            consentNote: "Продолжая использование сайта, вы подтверждаете согласие на сбор технических данных."
        },

        // ============ ABOUT PAGE ============
        about: {
            pageTitle: "О Доме Фальконе",
            pageSubtitle: "Серые кардиналы города Оснабрюк",
            whoTitle: "Кто такие Дом Фальконе?",
            whoText1: "Дом Фальконе — это не просто братство, это легенда, родившаяся в пламени священной битвы против Джим Бима в ночь с четвёртого на пятое октября 2025-го года.",
            whoText2: "С тех пор Дом Фальконе превратился в организацию с чёткой иерархией, священными традициями и неписаными законами чести.",
            whoText3: "Члены дома Фальконе — бесстрашные воины, еженедельно сражающиеся против всего спиртосодержащего. Наш девиз: «Una Fides, Unus Dominus» — Одна вера, Один Дон.",
            valueRespect: "Уважение",
            valueRespectText: "Уважение — основа всех наших действий. Вся иерархическая вертикаль Дома Фальконе строится на любви, вере и уважению к Дону.",
            valueCourage: "Смелость",
            valueCourageText: "Все наши бойцы так или иначе проявили себя в непрекращающихся боях. Священный долг каждого — быть готовым в любую секунду отразить удар противника.",
            valueLoyalty: "Верность",
            valueLoyaltyText: "Дом Фальконе не терпит предательства. Тот, кто присягнул Дону Фальконе на верность, обязан являться по первому признаку приближающегося боя.",
            membershipTitle: "Членство в доме",
            membershipText1: "Примкнуть к Дому Фальконе способны лишь избранные. Мы ищем людей с непоколебимой волей, острым умом и безграничной верностью идеалам нашего братства.",
            membershipText2: "Каждый, кто удостоился чести называться членом Дома Фальконе, получает не только поддержку и уважение братьев по оружию, но и уникальную возможность стать частью истории.",
            membershipText3: "Три священных элемента сопровождают каждое собрание: пиво — для утоления жажды воинов, кальян — для глубоких размышлений о судьбах мира, и картошка из аэрогриля — для восстановления сил после тяжёлых боёв.",
            membersTitle: "Члены Дома",
            clickBio: "Нажмите для просмотра биографии"
        },

        // ============ ENEMIES PAGE ============
        enemies: {
            pageTitle: "Наши Противники",
            pageSubtitle: "Враги, с которыми мы сражаемся каждую неделю",
            mainBoss: "Главный Босс",
            battleLost: "Бой проигран (Поражение)",
            battleWon: "Бой выигран",
            jimBeam15: {
                title: "Jim Beam (1.5L)",
                desc: "Jim Beam — американский бренд бурбона, производимый в Клермонте, штат Кентукки. Эта 1.5-литровая бутылка — наш самый грозный соперник. Её бесконечный запас \"белого лейбла\" сломил немало храбрых воинов. Вкус ванили и карамели скрывает коварную силу, способную отправить в нокаут даже самых стойких членов Дома."
            },
            chivas: {
                title: "Chivas Regal 12 YO",
                desc: "\"Чивчик\" - герцог мира виски. В этот раз не только его 12-летний вкус, но и его цена пытались стать нам преградой. Скоординированный удар дома Фальконе нанёс этому породистому шотландцу сокрушительное поражение."
            },
            captainMorgan: {
                title: "Captain Morgan Spiced Gold",
                desc: "Названный в честь валлийского капера сэра Генри Моргана, этот пряный ром с Карибских островов славится своим мягким вкусом. Но не дайте пирату обмануть вас - он коварен. Однако, благодаря слаженной работе команды, мы смогли взять его на абордаж."
            },
            jagermeister: {
                title: "Jägermeister",
                desc: "Легендарный немецкий ликёр с 56 травами и пряностями. Олень на этикетке символизирует охоту — но в этот раз охотником стал Дом Фальконе. Сладко-горький вкус поражения для Егермейстера!"
            },
            jimBeamClassic: {
                title: "Jim Beam Bourbon",
                desc: "Классический Kentucky Straight Bourbon с более чем 200-летней историей. Коварный младший брат нашего главного врага. Ванильные и карамельные ноты этого американца усыпили нашу бдительность. Семья Бим знает своё дело — этот бой мы проиграли с честью."
            },
            jimBeamCherry: {
                title: "Jim Beam Black Cherry",
                desc: "Коварный младший брат нашего главного врага. Смесь бурбона и ликера из черной вишни. Сладкий, но опасный. Мы ожидали подвоха от семьи Бимов, поэтому нанесли превентивный удар и уничтожили его до последней капли."
            },
            havanaClub: {
                title: "Havana Club Especial",
                desc: "Легендарный кубинский ром, выдержанный в дубовых бочках. Его золотистый цвет и аромат сахарного тростника пытались сбить нас с пути. Битва была жаркой, как ночь в Гаване, но Дом Фальконе вышел победителем."
            },
            threeSixty: {
                title: "Three Sixty Vodka",
                desc: "Немецкая водка с алмазной фильтрацией в характерной бутылке с шипами. Её ледяная чистота и 360-градусный обзор не помогли — Дом Фальконе нанёс удар с неожиданного 361-го градуса. Полная капитуляция!"
            },
            captnJack: {
                title: "Capt'n Jack Rum",
                desc: "Этот настоящий заморский ром из далёких островов захватил наш корабль врасплох. 40% крепости и карибский дух оказались слишком серьёзным соперником. Наша команда недооценила морские баталии с этим пиратом. Капитан Джек победил в этот раз!"
            },
            pottRum: {
                title: "Pott Rum",
                desc: "\"Der Gute Pott\". Немецкая классика с высоким градусом. Этот ром суров, как северное море. Он пытался сломить наш дух своей прямолинейностью, но мы оказались крепче."
            }
        },

        // ============ FAQ PAGE ============
        faq: {
            title: "FAQ",
            subtitle: "Часто задаваемые вопросы",
            q1: "Почему Дом Фальконе?",
            a1: "Потому что.",
            q2: "Как стать членом Дома Фальконе?",
            a2: "В Дом не приходят — в Дом призывают. Если Дон посчитает тебя достойным, ты получишь приглашение. А пока — доказывай свою преданность.",
            q3: "Кто такой Дон Фальконе?",
            a3: "Дон Фальконе — легендарный основатель и бессменный глава Семьи. Его мудрость безгранична, его власть абсолютна, а его любовь к пиву — легендарна.",
            q4: "Что можно делать на нашем сайте?",
            a4: "На нашем сайте вы можете создавать аккаунты, общаться с другими членами Дома Фальконе через личные сообщения, получать уведомления о важных событиях и новостях, а также накапливать очки за активность.",
            q5: "Это вообще серьёзный проект?",
            a5: "Абсолютно, не смотря на его, как казалось бы, шуточную подачу. Наша команда ежедневно работает над проектом и вкладывает в него душу.",
            q6: "Почему на сайте так много пива?",
            a6: "Пиво — это не просто напиток, это священный эликсир Дома Фальконе. Традиции Семьи были заложены на основе уважения к этому благородному продукту.",
            q7: "Зачем сайту нужен гимн?",
            a7: "Каждая уважающая себя Семья имеет гимн. Гимн Дома Фальконе — это не просто музыка, это манифест, который объединяет всех членов Семьи."
        },

        // ============ HISTORY PAGE ============
        history: {
            pageTitle: "История Дома Фальконе",
            pageSubtitle: "Легенда о создании Дома Фальконе",
            originTitle: "Зарождение дома Фальконе",
            originText: "Дом Фальконе зародился в священную ночь с четвёртого на пятое октября 2025-го года, когда бесстрашные воины впервые встали на защиту своих идеалов.",
            joinTitle: "Хочешь вступить в Дом Фальконе?",
            joinText: "Присоединяйся к нашему боевому братству и докажи свою стойкость!",
            joinBtn: "Связаться с Доном"
        }
    },

    de: {
        // ============ NAVIGATION ============
        nav: {
            about: "Über das Haus",
            history: "Geschichte",
            enemies: "Feinde",
            news: "Neuigkeiten",
            login: "Anmelden",
            profile: "Profil",
            messages: "Nachrichten",
            notifications: "Benachrichtigungen",
            markAllRead: "Alle lesen",
            noNotifications: "Keine Benachrichtigungen"
        },

        // ============ FOOTER ============
        footer: {
            copyright: "© Dom Falcone 2026. Alle Rechte vorbehalten. Wirklich alle.",
            faq: "FAQ",
            privacy: "Datenschutz",
            agreement: "Nutzungsbedingungen",
            imprint: "Impressum",
            developers: "Entwickler",
            hymn: "Wappen & Hymne"
        },

        // ============ LOADER ============
        loader: {
            text: "Warten. Wird geladen.",
            hymnLabel: "Hymne des Hauses Falcone"
        },

        // ============ CONTACT BUTTON ============
        contact: {
            floatingBtn: "Das Haus kontaktieren"
        },

        // ============ HOMEPAGE ============
        homepage: {
            title: "Offizielle Seite des Hauses Falcone",
            timerHeader: "Bis zur nächsten Versammlung des Hauses Falcone:",
            timerDays: "Tage",
            timerHours: "Stunden",
            timerMinutes: "Minuten",
            timerSeconds: "Sekunden",
            timerMessage: "Die Versammlung des Hauses Falcone hat begonnen.",
            learnMore: "Mehr erfahren",
            contactUs: "Kontakt",
            calendarTooltip: "Zu Google Kalender hinzufügen",
            consentTitle: "Willkommen im Haus Falcone",
            consentText: "Ich stimme den",
            consentLink: "Nutzungsbedingungen zu",
            consentAccept: "Einverstanden",
            consentDecline: "Nein",
            consentNote: "Mit der Nutzung der Website stimmen Sie der Erhebung technischer Daten zu."
        },

        // ============ ABOUT PAGE ============
        about: {
            pageTitle: "Über das Haus Falcone",
            pageSubtitle: "Die grauen Eminenzen der Stadt Osnabrück",
            whoTitle: "Wer ist das Haus Falcone?",
            whoText1: "Das Haus Falcone ist nicht nur eine Bruderschaft, es ist eine Legende, geboren im Feuer der heiligen Schlacht gegen Jim Beam in der Nacht vom vierten auf den fünften Oktober 2025.",
            whoText2: "Seitdem hat sich das Haus Falcone zu einer Organisation mit klarer Hierarchie, heiligen Traditionen und ungeschriebenen Ehrengesetzen entwickelt.",
            whoText3: "Die Mitglieder des Hauses Falcone sind furchtlose Krieger, die wöchentlich gegen alles Alkoholhaltige kämpfen. Unser Motto: «Una Fides, Unus Dominus» — Ein Glaube, Ein Don.",
            valueRespect: "Respekt",
            valueRespectText: "Respekt ist die Grundlage all unserer Handlungen. Die gesamte Hierarchie des Hauses Falcone basiert auf Liebe, Glaube und Respekt gegenüber dem Don.",
            valueCourage: "Mut",
            valueCourageText: "Alle unsere Kämpfer haben sich in den nie endenden Schlachten bewiesen. Die heilige Pflicht eines jeden ist es, jederzeit bereit zu sein, den Angriff des Feindes abzuwehren.",
            valueLoyalty: "Treue",
            valueLoyaltyText: "Das Haus Falcone duldet keinen Verrat. Wer dem Don Falcone die Treue geschworen hat, muss beim ersten Anzeichen einer bevorstehenden Schlacht erscheinen.",
            membershipTitle: "Mitgliedschaft im Haus",
            membershipText1: "Nur Auserwählte können sich dem Haus Falcone anschließen. Wir suchen Menschen mit unerschütterlichem Willen, scharfem Verstand und grenzenloser Treue zu unseren Idealen.",
            membershipText2: "Jeder, der die Ehre erhält, Mitglied des Hauses Falcone genannt zu werden, erhält nicht nur die Unterstützung und den Respekt seiner Waffenbrüder, sondern auch die einzigartige Möglichkeit, Teil der Geschichte zu werden.",
            membershipText3: "Drei heilige Elemente begleiten jede Versammlung: Bier — um den Durst der Krieger zu stillen, Shisha — für tiefe Gedanken über das Schicksal der Welt, und Kartoffeln aus der Heißluftfritteuse — zur Wiederherstellung der Kräfte nach harten Kämpfen.",
            membersTitle: "Mitglieder des Hauses",
            clickBio: "Klicken für Biografie"
        },

        // ============ ENEMIES PAGE ============
        enemies: {
            pageTitle: "Unsere Feinde",
            pageSubtitle: "Gegner, gegen die wir jede Woche kämpfen",
            mainBoss: "Hauptboss",
            battleLost: "Schlacht verloren (Niederlage)",
            battleWon: "Schlacht gewonnen",
            jimBeam15: {
                title: "Jim Beam (1,5L)",
                desc: "Jim Beam — eine amerikanische Bourbon-Marke aus Clermont, Kentucky. Diese 1,5-Liter-Flasche ist unser gefährlichster Gegner. Ihr scheinbar endloser Vorrat an 'White Label' hat schon so manchen tapferen Krieger in die Knie gezwungen. Der Geschmack von Vanille und Karamell verbirgt eine tückische Kraft, die selbst die standhaftesten Mitglieder des Hauses k.o. schlagen kann."
            },
            chivas: {
                title: "Chivas Regal 12 YO",
                desc: "Der 'Chivchen' - Herzog der Whisky-Welt. Diesmal versuchten nicht nur sein 12-jähriger Geschmack, sondern auch sein Preis uns aufzuhalten. Der koordinierte Angriff des Hauses Falcone brachte diesem edlen Schotten eine vernichtende Niederlage bei."
            },
            captainMorgan: {
                title: "Captain Morgan Spiced Gold",
                desc: "Benannt nach dem walisischen Freibeuter Sir Henry Morgan, ist dieser würzige Rum aus der Karibik für seinen milden Geschmack bekannt. Aber lasst euch vom Piraten nicht täuschen - er ist hinterhältig. Dank koordinierter Teamarbeit konnten wir ihn jedoch entern."
            },
            jagermeister: {
                title: "Jägermeister",
                desc: "Der legendäre deutsche Likör mit 56 Kräutern und Gewürzen. Der Hirsch auf dem Etikett steht für die Jagd — aber diesmal wurde das Haus Falcone zum Jäger! Ein bitter-süßer Geschmack der Niederlage für den Jägermeister!"
            },
            jimBeamClassic: {
                title: "Jim Beam Bourbon",
                desc: "Klassischer Kentucky Straight Bourbon mit über 200 Jahren Geschichte. Der heimtückische kleine Bruder unseres Hauptfeindes. Die Vanille- und Karamellnoten dieses Amerikaners haben unsere Wachsamkeit eingeschläfert. Die Familie Beam versteht ihr Handwerk — diese Schlacht haben wir ehrenhaft verloren."
            },
            jimBeamCherry: {
                title: "Jim Beam Black Cherry",
                desc: "Der heimtückische kleine Bruder unseres Hauptfeindes. Eine Mischung aus Bourbon und Schwarzkirschlikör. Süß, aber gefährlich. Wir erwarteten Hinterlist von der Beam-Familie, also führten wir einen Präventivschlag durch und vernichteten ihn bis zum letzten Tropfen."
            },
            havanaClub: {
                title: "Havana Club Especial",
                desc: "Legendärer kubanischer Rum, gereift in Eichenfässern. Seine goldene Farbe und der Duft von Zuckerrohr versuchten uns vom Weg abzubringen. Die Schlacht war heiß wie eine Nacht in Havanna, aber das Haus Falcone ging als Sieger hervor."
            },
            threeSixty: {
                title: "Three Sixty Vodka",
                desc: "Deutscher Wodka mit Diamantfiltration in der charakteristischen Flasche mit Noppen. Seine eisige Reinheit und der 360-Grad-Überblick halfen nicht — das Haus Falcone schlug aus dem unerwarteten 361. Grad zu. Totale Kapitulation!"
            },
            captnJack: {
                title: "Capt'n Jack Rum",
                desc: "Dieser echte überseeische Rum von fernen Inseln überfiel unser Schiff. 40% Alkohol und karibischer Geist erwiesen sich als zu starker Gegner. Unsere Crew unterschätzte die Seeschlachten mit diesem Piraten. Captain Jack siegte diesmal!"
            },
            pottRum: {
                title: "Pott Rum",
                desc: "Der Gute Pott. Deutsche Klassik mit hohem Alkoholgehalt. Dieser Rum ist rau wie die Nordsee. Er versuchte unseren Geist mit seiner Direktheit zu brechen, aber wir erwiesen uns als stärker."
            }
        },

        // ============ FAQ PAGE ============
        faq: {
            title: "FAQ",
            subtitle: "Häufig gestellte Fragen",
            q1: "Warum Haus Falcone?",
            a1: "Darum.",
            q2: "Wie wird man Mitglied des Hauses Falcone?",
            a2: "Man kommt nicht ins Haus — man wird ins Haus berufen. Wenn der Don dich für würdig hält, erhältst du eine Einladung. Bis dahin — beweise deine Ergebenheit.",
            q3: "Wer ist Don Falcone?",
            a3: "Don Falcone ist der legendäre Gründer und unermüdliche Anführer der Familie. Seine Weisheit ist grenzenlos, seine Macht absolut, und seine Liebe zum Bier — legendär.",
            q4: "Was kann man auf unserer Website tun?",
            a4: "Auf unserer Website können Sie Konten erstellen, mit anderen Mitgliedern des Hauses Falcone über Direktnachrichten kommunizieren, Benachrichtigungen über wichtige Ereignisse und Neuigkeiten erhalten und Punkte für Aktivität sammeln.",
            q5: "Ist das überhaupt ein ernstes Projekt?",
            a5: "Absolut, trotz seiner scheinbar humorvollen Präsentation. Unser Team arbeitet täglich am Projekt und steckt sein Herzblut hinein.",
            q6: "Warum gibt es auf der Website so viel Bier?",
            a6: "Bier ist nicht nur ein Getränk, es ist das heilige Elixier des Hauses Falcone. Die Traditionen der Familie wurden auf der Grundlage des Respekts für dieses edle Produkt gegründet.",
            q7: "Warum braucht die Website eine Hymne?",
            a7: "Jede selbstachtende Familie hat eine Hymne. Die Hymne des Hauses Falcone ist nicht nur Musik, es ist ein Manifest, das alle Familienmitglieder vereint."
        },

        // ============ HISTORY PAGE ============
        history: {
            pageTitle: "Geschichte des Hauses Falcone",
            pageSubtitle: "Die Legende von der Gründung des Hauses Falcone",
            originTitle: "Die Entstehung des Hauses Falcone",
            originText: "Das Haus Falcone entstand in der heiligen Nacht vom vierten auf den fünften Oktober 2025, als die furchtlosen Krieger zum ersten Mal ihre Ideale verteidigten.",
            joinTitle: "Willst du dem Haus Falcone beitreten?",
            joinText: "Schließe dich unserer Kampfbruderschaft an und beweise deine Standhaftigkeit!",
            joinBtn: "Den Don kontaktieren"
        }
    }
};

// ============ LANGUAGE MANAGER ============
const LanguageManager = {
    currentLang: 'ru',
    
    init() {
        // Check localStorage for saved preference
        const savedLang = localStorage.getItem('dom_falcone_lang');
        if (savedLang && (savedLang === 'ru' || savedLang === 'de')) {
            this.currentLang = savedLang;
        }
        
        // Apply translations on page load
        this.applyTranslations();
        
        // Setup language toggle if exists
        this.setupToggle();
    },
    
    setLanguage(lang) {
        if (lang !== 'ru' && lang !== 'de') return;
        
        this.currentLang = lang;
        localStorage.setItem('dom_falcone_lang', lang);
        this.applyTranslations();
        this.updateToggleUI();
    },
    
    toggle() {
        const newLang = this.currentLang === 'ru' ? 'de' : 'ru';
        this.setLanguage(newLang);
    },
    
    get(key) {
        const keys = key.split('.');
        let value = translations[this.currentLang];
        
        for (const k of keys) {
            if (value && value[k] !== undefined) {
                value = value[k];
            } else {
                // Fallback to Russian if key not found
                value = translations.ru;
                for (const k2 of keys) {
                    if (value && value[k2] !== undefined) {
                        value = value[k2];
                    }
                }
                break;
            }
        }
        
        return typeof value === 'string' ? value : key;
    },
    
    applyTranslations() {
        // Apply to all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.get(key);
            
            if (el.tagName === 'INPUT' && el.placeholder) {
                el.placeholder = translation;
            } else {
                el.textContent = translation;
            }
        });
        
        // Update html lang attribute
        document.documentElement.lang = this.currentLang;
    },
    
    setupToggle() {
        const toggleBtn = document.getElementById('lang-toggle');
        if (toggleBtn) {
            toggleBtn.addEventListener('click', () => this.toggle());
            this.updateToggleUI();
        }
    },
    
    updateToggleUI() {
        const toggleBtn = document.getElementById('lang-toggle');
        if (toggleBtn) {
            const ruFlag = toggleBtn.querySelector('.flag-ru');
            const deFlag = toggleBtn.querySelector('.flag-de');
            
            if (ruFlag && deFlag) {
                ruFlag.classList.toggle('active', this.currentLang === 'ru');
                deFlag.classList.toggle('active', this.currentLang === 'de');
            }
        }
    }
};

// Initialize on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    LanguageManager.init();
});

// Export for use in other scripts
window.LanguageManager = LanguageManager;
window.translations = translations;
